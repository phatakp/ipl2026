class QualifierValue {
  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString() {
    return this.values.join(this.delimiter);
  }
  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  hasValue(v) {
    return typeof v !== "undefined" && v !== null && v !== "";
  }
  /**
   * @desc Adds a value for the this qualifier instance
   * @param {any} value
   * @return {this}
   */
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v) => this.hasValue(v));
    return this;
  }
  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
}
class UnsupportedError extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
}
function createUnsupportedError(message) {
  return new UnsupportedError(message);
}
function qualifierToJson() {
  return this._qualifierModel || { error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`) };
}
class QualifierModel {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson.apply(this);
  }
}
class Qualifier extends QualifierModel {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const { key, delimiter, qualifierValue } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
}
class FlagQualifier extends Qualifier {
  constructor(flagType, flagValue) {
    let qualifierValue;
    if (flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(":");
    } else {
      qualifierValue = flagType;
    }
    super("fl", qualifierValue);
    this.flagValue = flagValue;
  }
  toString() {
    return super.toString().replace(/\./g, "%2E");
  }
  getFlagValue() {
    return this.flagValue;
  }
}
function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach((flag) => {
    array.push(["fl", flag]);
  });
  return array.sort().map((v) => v[1]);
}
function actionToJson() {
  var _a, _b, _c;
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  const sourceTransformationError = (_c = (_b = (_a = this._actionModel) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.transformation) === null || _c === void 0 ? void 0 : _c.error;
  if (sourceTransformationError && sourceTransformationError instanceof Error) {
    return { error: sourceTransformationError };
  }
  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }
  return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
}
class ActionModel {
  constructor() {
    this._actionModel = {};
  }
  toJson() {
    return actionToJson.apply(this);
  }
}
class Action extends ActionModel {
  constructor() {
    super(...arguments);
    this.qualifiers = /* @__PURE__ */ new Map();
    this.flags = [];
    this.delimiter = ",";
    this.actionTag = "";
  }
  prepareQualifiers() {
  }
  /**
   * @description Returns the custom name tag that was given to this action
   * @return {string}
   */
  getActionTag() {
    return this.actionTag;
  }
  /**
   * @description Sets the custom name tag for this action
   * @return {this}
   */
  setActionTag(tag) {
    this.actionTag = tag;
    return this;
  }
  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join()).
   * @return {string}
   */
  toString() {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
  }
  /**
   * @description Adds the parameter to the action.
   * @param {SDK.Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier) {
    if (typeof qualifier === "string") {
      const [key, value] = qualifier.toLowerCase().split("_");
      if (key === "fl") {
        this.flags.push(new FlagQualifier(value));
      } else {
        this.qualifiers.set(key, new Qualifier(key, value));
      }
    } else {
      this.qualifiers.set(qualifier.key, qualifier);
    }
    return this;
  }
  /**
   * @description Adds a flag to the current action.
   * @param {Qualifiers.Flag} flag
   * @return {this}
   */
  addFlag(flag) {
    if (typeof flag === "string") {
      this.flags.push(new FlagQualifier(flag));
    } else {
      if (flag instanceof FlagQualifier) {
        this.flags.push(flag);
      }
    }
    return this;
  }
  addValueToQualifier(qualifierKey, qualifierValue) {
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);
    return this;
  }
}
function toFloatAsString(value) {
  const returnValue = value.toString();
  if (returnValue.match(/[A-Z]/gi)) {
    return returnValue;
  }
  if (returnValue.length > 1 && returnValue[0] === "0") {
    return returnValue;
  }
  const isNumberLike = !isNaN(parseFloat(returnValue)) && returnValue.indexOf(":") === -1;
  if (isNumberLike && returnValue.indexOf(".") === -1) {
    return `${returnValue}.0`;
  } else {
    return returnValue;
  }
}
class AspectRatioQualifierValue extends QualifierValue {
}
function ignoreInitialAspectRatio() {
  return new FlagQualifier("ignore_aspect_ratio");
}
function lossy() {
  return new FlagQualifier("lossy");
}
function preserveTransparency() {
  return new FlagQualifier("preserve_transparency");
}
function progressive(mode) {
  return new FlagQualifier("progressive", mode);
}
function regionRelative() {
  return new FlagQualifier("region_relative");
}
function relative() {
  return new FlagQualifier("relative");
}
function objectFlip(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}
const ACTION_TYPE_TO_CROP_MODE_MAP = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad",
  autoPad: "auto_pad"
};
const ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
const ACTION_TYPE_TO_EFFECT_MODE_MAP = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent",
  generativeRestore: "gen_restore",
  upscale: "upscale"
};
const ACTION_TYPE_TO_QUALITY_MODE_MAP = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
const ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
const CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
const COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
const CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
const DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);
class ResizeSimpleAction extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType, cropWidth, cropHeight) {
    super();
    this._actionModel = { dimensions: {} };
    this._actionModel.actionType = CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
    this.addQualifier(new Qualifier("c", cropType));
    cropWidth && this.width(cropWidth);
    cropHeight && this.height(cropHeight);
  }
  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x) {
    this._actionModel.dimensions.height = x;
    return this.addQualifier(new Qualifier("h", x));
  }
  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x) {
    this._actionModel.dimensions.width = x;
    return this.addQualifier(new Qualifier("w", x));
  }
  /**
   * @description Sets the aspect ratio of the asset.
   * For a list of supported types see {@link Qualifiers.AspectRatio|
    * AspectRatio values}
   * @param {AspectRatioType|number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   * @return {this}
   */
  aspectRatio(ratio) {
    if (ratio instanceof AspectRatioQualifierValue) {
      this._actionModel.dimensions.aspectRatio = `${ratio}`;
      return this.addQualifier(new Qualifier("ar", ratio));
    }
    if (typeof ratio === "number" || typeof ratio === "string") {
      this._actionModel.dimensions.aspectRatio = toFloatAsString(ratio);
      return this.addQualifier(new Qualifier("ar", toFloatAsString(ratio)));
    }
    if (ratio instanceof FlagQualifier) {
      this._actionModel.dimensions.aspectRatio = `${ratio.qualifierValue}`;
      return this.addFlag(ratio);
    }
  }
  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
   * @return {this}
   */
  relative() {
    this._actionModel.relative = true;
    return this.addFlag(relative());
  }
  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
   * @return {this}
   */
  regionRelative() {
    this._actionModel.regionRelative = true;
    return this.addFlag(regionRelative());
  }
  static fromJson(actionModel) {
    const { actionType, dimensions, relative: relative2, regionRelative: regionRelative2 } = actionModel;
    const { aspectRatio, width, height } = dimensions;
    const cropMode = ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
    const result = new this(cropMode, width, height);
    aspectRatio && result.aspectRatio(aspectRatio === "ignore_aspect_ratio" ? ignoreInitialAspectRatio() : aspectRatio);
    relative2 && result.relative();
    regionRelative2 && result.regionRelative();
    return result;
  }
}
class GravityQualifier extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value) {
    super("g", new QualifierValue(value));
  }
}
class AutoGravity extends GravityQualifier {
  constructor() {
    super("auto");
  }
  /**
   * @description Autofocuses on objects, allowing their priority within the algorithm to be configured.
   * @param {AutoFocus} AutoFocusObjects
   */
  autoFocus(...AutoFocusObjects) {
    this.addValue(AutoFocusObjects);
    return this;
  }
}
class FocusOnGravity extends GravityQualifier {
  constructor(FocusOnObjects) {
    super(FocusOnObjects);
  }
  /**
   * @description Specifies the gravity to use if none of the other gravity objects are found.
   * @param {Qualifiers.Gravity.AutoGravity} val
   */
  fallbackGravity(val) {
    this.addValue(val.qualifierValue);
    return this;
  }
}
class CompassGravity extends GravityQualifier {
  constructor(dir) {
    super(dir);
  }
}
function focusOn(...args) {
  const res = [...args];
  return new FocusOnGravity(res);
}
function autoGravity() {
  return new AutoGravity();
}
class FocusOnValue extends QualifierValue {
  constructor(name) {
    super();
    this.name = name;
  }
  toString() {
    return this.name;
  }
}
function ocr() {
  return new FocusOnValue("ocr_text");
}
function isIAutoGravityString(gravity) {
  return gravity && `${gravity}`.split(":")[0] === "auto";
}
function isCompassGravity(gravity) {
  const gravityValue = getGravityValue(gravity);
  return ["north", "center", "east", "west", "south", "north_west", "south_east", "south_west", "north_east"].includes(gravityValue);
}
function getGravityValue(gravity) {
  return `${gravity}`.replace("g_", "");
}
function createCompassGravityModel(gravity) {
  return {
    compass: getGravityValue(gravity),
    gravityType: "direction"
  };
}
function isOcrGravity(gravity) {
  return getGravityValue(gravity) === "ocr_text";
}
function createOcrGravityModel() {
  return {
    gravityType: "ocr"
  };
}
function isAutoGravity(gravity) {
  return `${gravity.qualifierValue}`.split(":")[0] === "auto";
}
function createIAutoFocusObject(gravity) {
  const gravityString = gravity.toString();
  const values = gravityString.split("_");
  const result = {
    object: values[0]
  };
  if (values.length > 1) {
    if (values[1] === "avoid") {
      result.avoid = true;
    } else {
      result.weight = +values[1];
    }
  }
  return result;
}
function createAutoGravityModel(gravity) {
  let values;
  const gravityQualifier = gravity === "auto" ? new AutoGravity() : gravity;
  if (`${gravity}`.startsWith("auto:")) {
    values = `${gravity}`.split(":").filter((v) => v !== "auto");
  } else {
    values = gravityQualifier.qualifierValue.values.filter((v) => v !== "auto");
  }
  const autoFocus = values.map(createIAutoFocusObject);
  return {
    gravityType: "auto",
    autoFocus
  };
}
function createFocusOnGravityModel(gravity) {
  const hasAutoGravity = `${gravity}`.split(":").includes("auto");
  const values = gravity.qualifierValue.values;
  const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;
  const result = {
    gravityType: "object",
    focusOnObjects: focusOnValues.map((v) => `${v}`)
  };
  if (hasAutoGravity) {
    const autoFocusObjects = values[values.length - 1].values.slice(1);
    const autoGravityInstance = autoGravity().autoFocus(...autoFocusObjects);
    result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
  }
  return result;
}
function createFocusOnGravity(gravity) {
  const values = gravity.split(":");
  const focusOnValues = values.map((g) => new FocusOnValue(g));
  return new FocusOnGravity(focusOnValues);
}
function createGravityModel(gravity) {
  if (isCompassGravity(gravity)) {
    return createCompassGravityModel(gravity);
  }
  if (isOcrGravity(gravity)) {
    return createOcrGravityModel();
  }
  if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
    return createAutoGravityModel(gravity);
  }
  return createFocusOnGravityModel(typeof gravity === "string" ? createFocusOnGravity(gravity) : gravity);
}
class AutoFocus extends QualifierValue {
  constructor(focusOn2, weight) {
    super();
    this._weight = weight;
    this.focusOn = focusOn2;
    this.shouldAvoid = false;
  }
  /**
   * @summary qualifier
   * @description Specifies the object to focus on automatically
   * Accepts an AutoFocusObject (which is just a wrapper for a FocusOn object, but with extra method: avoid, weight)
   * @param {Qualifiers.FocusOn} obj The object to focus on.
   * @param {number} weight
   */
  static focusOn(obj, weight) {
    const focusOn2 = obj instanceof FocusOnValue ? obj : new FocusOnValue(obj);
    return new AutoFocus(focusOn2, weight);
  }
  shouldAddWeight() {
    return typeof this._weight === "number" || typeof this._weight === "string" || this.shouldAvoid;
  }
  /**
   * @summary qualifier
   * @desc Get the name of the of the object
   */
  getName() {
    return this.focusOn.name;
  }
  /**
   * @summary qualifier
   * @desc Get the weight for the object
   */
  getWeight() {
    if (this.shouldAvoid) {
      return "avoid";
    } else {
      return this._weight;
    }
  }
  /**
   * @summary qualifier
   * @desc Return the string representation of this QualifierValue
   */
  toString() {
    if (this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }
  /**
   * @summary qualifier
   * @description Sets the importance level of the object within the automatic gravity algorithm
   * @param {numebr} w The focus weight for the object
   * @return {this}
   */
  weight(w) {
    this._weight = w;
    return this;
  }
  /**
   * @summary qualifier
   * @description Attempts to avoid the detected object in the image
   * @return {this}
   */
  avoid() {
    this.shouldAvoid = true;
    return this;
  }
}
class CompassQualifier extends QualifierValue {
  constructor(val) {
    super();
    this.val = val;
  }
  toString() {
    return this.val;
  }
}
function isCompassGravityModel(gravityModel) {
  return gravityModel.gravityType === "direction";
}
function isOcrGravityModel(gravityModel) {
  return gravityModel.gravityType === "ocr";
}
function isAutoGravityModel(gravityModel) {
  return gravityModel.gravityType === "auto";
}
function createAutoFocusFromModel(autoGravityObjectModel) {
  const { object, weight, avoid } = autoGravityObjectModel;
  const autoFocus = new AutoFocus(new FocusOnValue(object));
  (weight || weight === 0) && autoFocus.weight(weight);
  avoid && autoFocus.avoid();
  return autoFocus;
}
function createAutoGravityFromModel(gravityModel) {
  const autoFocusModel = gravityModel.autoFocus || [];
  const autoFocus = autoFocusModel.map(createAutoFocusFromModel);
  return autoGravity().autoFocus(...autoFocus);
}
function createFocusOnGravityFromModel(gravityModel) {
  const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new FocusOnValue(str));
  const result = focusOn(...focusOnObjects);
  if (gravityModel.fallbackGravity) {
    const autoGravity2 = createAutoGravityFromModel(gravityModel.fallbackGravity);
    result.fallbackGravity(autoGravity2);
  }
  return result;
}
function createGravityFromModel(gravityModel) {
  if (isCompassGravityModel(gravityModel)) {
    return new CompassGravity(new CompassQualifier(gravityModel.compass));
  }
  if (isOcrGravityModel(gravityModel)) {
    return focusOn(ocr());
  }
  if (isAutoGravityModel(gravityModel)) {
    return createAutoGravityFromModel(gravityModel);
  }
  return createFocusOnGravityFromModel(gravityModel);
}
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity) {
    this._actionModel.gravity = createGravityModel(gravity);
    const gravityQualifier = typeof gravity === "string" ? new Qualifier("g", gravity) : gravity;
    return this.addQualifier(gravityQualifier);
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    if (actionModel.gravity) {
      result.gravity(createGravityFromModel(actionModel.gravity));
    }
    return result;
  }
}
function prepareColor(color) {
  if (color) {
    return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
  } else {
    return color;
  }
}
class FormatQualifier extends QualifierValue {
  constructor(val) {
    super(val);
    this.val = val;
  }
  getValue() {
    return this.val;
  }
}
class ResizeFillAction extends ResizeAdvancedAction {
  /**
   * @description Absolute X position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} x The x position.
   */
  x(x) {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier("x", x));
  }
  /**
   * @description Absolute Y position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} y The y position.
   */
  y(y) {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier("y", y));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.x && result.x(actionModel.x);
    actionModel.y && result.y(actionModel.y);
    return result;
  }
}
function fill(width, height) {
  return new ResizeFillAction("fill", width, height);
}
class DeliveryAction extends Action {
  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey, deliveryType, modelProperty) {
    super();
    this._actionModel = {};
    let deliveryTypeValue;
    if (deliveryType instanceof FormatQualifier) {
      deliveryTypeValue = deliveryType.getValue();
    } else {
      deliveryTypeValue = deliveryType;
    }
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryTypeValue;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
}
class ProgressiveQualifier extends FlagQualifier {
  constructor(mode) {
    super("progressive", mode);
  }
}
class DeliveryFormatAction extends DeliveryAction {
  constructor(deliveryKey, deliveryType) {
    super(deliveryKey, deliveryType, "formatType");
  }
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy() {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }
  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode) {
    if (mode instanceof ProgressiveQualifier) {
      this._actionModel.progressive = { mode: mode.getFlagValue() };
      this.addFlag(mode);
    } else {
      this._actionModel.progressive = { mode };
      this.addFlag(progressive(mode));
    }
    return this;
  }
  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency() {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
  static fromJson(actionModel) {
    const { formatType, lossy: lossy2, progressive: progressive2, preserveTransparency: preserveTransparency2 } = actionModel;
    let result;
    if (formatType) {
      result = new this("f", formatType);
    } else {
      result = new this("f");
    }
    if (progressive2) {
      if (progressive2.mode) {
        result.progressive(progressive2.mode);
      } else {
        result.progressive();
      }
    }
    lossy2 && result.lossy();
    preserveTransparency2 && result.preserveTransparency();
    return result;
  }
}
class BackgroundColor extends Action {
  constructor(color) {
    super();
    this._actionModel = {};
    this.addQualifier(new Qualifier("b", new QualifierValue(prepareColor(color)).setDelimiter("_")));
    this._actionModel.color = color;
    this._actionModel.actionType = "backgroundColor";
  }
  static fromJson(actionModel) {
    const { color } = actionModel;
    const result = new this(color);
    return result;
  }
}
class RawAction {
  constructor(raw) {
    this.raw = raw;
  }
  toString() {
    return this.raw;
  }
  toJson() {
    return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
  }
}
function isErrorObject(obj) {
  const errorObj = obj;
  return "error" in errorObj && !!errorObj.error;
}
class Transformation {
  constructor() {
    this.actions = [];
  }
  /**
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    let actionToAdd;
    if (typeof action === "string") {
      if (action.indexOf("/") >= 0) {
        throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }
  /**
   * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
   * @param {string | SDK.Transformation} tx
   * @example
   * import {Transformation} from "@cloudinary/url-gen";
   *
   * const transformation = new Transformation();
   * transformation.addTransformation('w_100/w_200/w_300');
   * @return {this}
   */
  addTransformation(tx) {
    if (tx instanceof Transformation) {
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }
  /**
   * @return {string}
   */
  toString() {
    return this.actions.map((action) => {
      return action.toString();
    }).filter((a) => a).join("/");
  }
  /**
   * @description Delivers an animated GIF.
   * @param {AnimatedAction} animatedAction
   * @return {this}
   */
  animated(animatedAction) {
    return this.addAction(animatedAction);
  }
  /**
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction) {
    return this.addAction(borderAction);
  }
  /**
   * @description Adjusts the shape of the delivered image. </br>
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction) {
    return this.addAction(reshapeAction);
  }
  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction) {
    return this.addAction(resizeAction);
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction) {
    return this.addAction(roundCornersAction);
  }
  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction) {
    return this.addAction(overlayAction);
  }
  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction) {
    underlayAction.setLayerType("u");
    return this.addAction(underlayAction);
  }
  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    return this.addAction(variableAction);
  }
  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionalAction} conditionAction
   * @return {this}
   */
  conditional(conditionAction) {
    return this.addAction(conditionAction);
  }
  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction) {
    return this.addAction(effectAction);
  }
  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action) {
    return this.addAction(action);
  }
  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction) {
    return this.addAction(rotateAction);
  }
  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    return this.addAction(namedTransformation);
  }
  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    return this.addAction(deliveryAction);
  }
  /**
   * @description Sets the color of the background.
   * @param {Qualifiers.Color} color
   * @return {this}
   */
  backgroundColor(color) {
    return this.addAction(new BackgroundColor(color));
  }
  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   * @return {this}
   */
  psdTools(action) {
    return this.addAction(action);
  }
  /**
   * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
   * @param action
   * @return {this}
   */
  extract(action) {
    return this.addAction(action);
  }
  /**
   * @description Adds a flag as a separate action.
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    const action = new Action();
    let flagToAdd = flagQualifier;
    if (typeof flagQualifier === "string") {
      flagToAdd = new FlagQualifier(flagQualifier);
    }
    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }
  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction) {
    return this.addAction(customFunction);
  }
  /**
   * Transcodes the video (or audio) to another format.
   * @param {Action} action
   * @return {this}
   */
  transcode(action) {
    return this.addAction(action);
  }
  /**
   * Applies the specified video edit action.
   *
   * @param {videoEditType} action
   * @return {this}
   */
  videoEdit(action) {
    return this.addAction(action);
  }
  toJson() {
    const actions = [];
    for (const action of this.actions) {
      const json = action.toJson();
      if (isErrorObject(json)) {
        return json;
      }
      actions.push(json);
    }
    return { actions };
  }
}
class ImageTransformation extends Transformation {
}
class VideoTransformation extends Transformation {
}
export {
  DeliveryFormatAction as D,
  ImageTransformation as I,
  VideoTransformation as V,
  fill as f
};

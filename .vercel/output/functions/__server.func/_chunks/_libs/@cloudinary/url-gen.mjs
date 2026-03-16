import { D as DeliveryFormatAction, I as ImageTransformation, V as VideoTransformation } from "./transformation-builder-sdk.mjs";
function isObject(a) {
  if (typeof a !== "object" || a instanceof Array) {
    return false;
  } else {
    return true;
  }
}
class Config {
  filterOutNonSupportedKeys(userProvidedConfig, validKeys) {
    const obj = /* @__PURE__ */ Object.create({});
    if (isObject(userProvidedConfig)) {
      Object.keys(userProvidedConfig).forEach((key) => {
        if (validKeys.indexOf(key) >= 0) {
          obj[key] = userProvidedConfig[key];
        } else {
          console.warn("Warning - unsupported key provided to configuration: ", key);
        }
      });
      return obj;
    } else {
      return /* @__PURE__ */ Object.create({});
    }
  }
}
const ALLOWED_URL_CONFIG = [
  "cname",
  "secureDistribution",
  "privateCdn",
  "signUrl",
  "longUrlSignature",
  "shorten",
  "useRootPath",
  "secure",
  "forceVersion",
  "analytics",
  "queryParams"
];
class URLConfig extends Config {
  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {
      secure: true
    }, urlConfig);
  }
  extend(userURLConfig) {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }
  /**
   * @param {string} value Sets the cname
   */
  setCname(value) {
    this.cname = value;
    return this;
  }
  /**
   * @param {string} value Sets the secureDistribution
   */
  setSecureDistribution(value) {
    this.secureDistribution = value;
    return this;
  }
  /**
   * @param {boolean} value Sets whether to use a private CDN (Removes cloudName from URL)
   */
  setPrivateCdn(value) {
    this.privateCdn = value;
    return this;
  }
  /**
   * @param value Sets whether or not to sign the URL
   */
  setSignUrl(value) {
    this.signUrl = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a long signature
   */
  setLongUrlSignature(value) {
    this.longUrlSignature = value;
    return this;
  }
  /**
   * @param value Sets whether or not to shorten the URL
   */
  setShorten(value) {
    this.shorten = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a root path
   */
  setUseRootPath(value) {
    this.useRootPath = value;
    return this;
  }
  /**
   * @param value Sets whether or not to deliver the asset through https
   */
  setSecure(value) {
    this.secure = value;
    return this;
  }
  /**
   * @param value Sets whether to force a version in the URL
   */
  setForceVersion(value) {
    this.forceVersion = value;
    return this;
  }
  /**
   * @param params Sets additional params
   */
  setQueryParams(params) {
    this.queryParams = params;
    return this;
  }
}
function isUrl(publicID) {
  return publicID.match(/^https?:\//);
}
function isFileName(publicID) {
  return publicID.indexOf("/") < 0;
}
function publicIDContainsVersion(publicID) {
  return publicID.match(/^v[0-9]+/);
}
function getUrlPrefix(cloudName, urlConfig) {
  const secure = urlConfig.secure;
  const privateCDN = urlConfig.privateCdn;
  const cname = urlConfig.cname;
  const secureDistribution = urlConfig.secureDistribution;
  if (!secure && !cname) {
    return `http://res.cloudinary.com/${cloudName}`;
  }
  if (secure && !secureDistribution && privateCDN) {
    return `https://${cloudName}-res.cloudinary.com`;
  }
  if (secure && !secureDistribution) {
    return `https://res.cloudinary.com/${cloudName}`;
  }
  if (secure && secureDistribution && privateCDN) {
    return `https://${secureDistribution}`;
  }
  if (secure && secureDistribution) {
    return `https://${secureDistribution}/${cloudName}`;
  }
  if (!secure && cname) {
    return `http://${cname}/${cloudName}`;
  } else {
    return "ERROR";
  }
}
function handleAssetType(assetType) {
  if (!assetType) {
    return "image";
  }
  return assetType;
}
function handleDeliveryType(deliveryType) {
  if (!deliveryType) {
    return "upload";
  }
  return deliveryType;
}
function getUrlVersion(publicID, version, forceVersion) {
  const shouldForceVersion = forceVersion !== false;
  if (version) {
    return `v${version}`;
  }
  if (publicIDContainsVersion(publicID) || isUrl(publicID) || isFileName(publicID)) {
    return "";
  }
  return shouldForceVersion ? "v1" : "";
}
function stringPad(value, _targetLength, _padString) {
  let targetLength = _targetLength >> 0;
  let padString = String(_padString);
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}
function repeatStringNumTimes(string, _times) {
  let times = _times;
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64Map = {};
let num = 0;
chars.split("").forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, "0");
  base64Map[key] = char;
  num++;
});
function reverseVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").reverse().join(".");
}
function padVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").map((segment) => {
    const asNumber = +segment;
    if (isNaN(asNumber) || asNumber < 0) {
      throw "Invalid version number provided";
    }
    return stringPad(segment, 2, "0");
  }).join(".");
}
function encodeVersion(semVer) {
  let strResult = "";
  const parts = semVer.split(".").length;
  const paddedStringLength = parts * 6;
  const reversedSemver = reverseVersion(semVer);
  const paddedSemver = padVersion(reversedSemver);
  const num2 = parseInt(paddedSemver.split(".").join(""));
  let paddedBinary = num2.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, "0");
  if (paddedBinary.length % 6 !== 0) {
    throw "Version must be smaller than 43.21.26)";
  }
  paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
    strResult += base64Map[bitString];
  });
  return strResult;
}
function getAnalyticsOptions(options) {
  const analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    product: options.product,
    feature: "0",
    osType: options.osType,
    osVersion: options.osVersion
  };
  if (options.accessibility) {
    analyticsOptions.feature = "D";
  }
  if (options.lazyload) {
    analyticsOptions.feature = "C";
  }
  if (options.responsive) {
    analyticsOptions.feature = "A";
  }
  if (options.placeholder) {
    analyticsOptions.feature = "B";
  }
  if (options.feature) {
    analyticsOptions.feature = options.feature;
  }
  return analyticsOptions;
}
const packageVersion = "1.22.0";
function encodeOSVersion(semVer) {
  const [major, minor] = semVer.split(".");
  const binaryMajorVersion = parseInt(major).toString(2);
  const binaryMinorVersion = parseInt(minor).toString(2);
  const paddedMajor = binaryMajorVersion.padStart(6, "0");
  const paddedMinor = binaryMinorVersion.padStart(6, "0");
  return base64Map[paddedMajor] + base64Map[paddedMinor];
}
function getNodeVersion() {
  const failedVersion = "0.0.0";
  if (typeof window !== "undefined") {
    return failedVersion;
  } else {
    try {
      return process.versions.node || failedVersion;
    } catch (e) {
      return failedVersion;
    }
  }
}
function ensureShapeOfTrackedProperties(trackedAnalytics) {
  const defaults = {
    techVersion: getNodeVersion(),
    sdkCode: "T",
    sdkSemver: packageVersion.split("-")[0],
    product: "A",
    osType: "Z",
    osVersion: "0.0",
    responsive: false,
    placeholder: false,
    lazyload: false,
    accessibility: false
  };
  if (!trackedAnalytics) {
    return defaults;
  } else {
    return Object.assign(Object.assign({}, defaults), trackedAnalytics);
  }
}
function getSDKAnalyticsSignature(_trackedAnalytics) {
  const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
  const analyticsOptions = getAnalyticsOptions(trackedAnalytics);
  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);
    const encodedOSVersion = encodeOSVersion(analyticsOptions.osVersion);
    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const { product, osType } = analyticsOptions;
    const algoVersion = "D";
    return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${osType}${encodedOSVersion}${featureCode}`;
  } catch (e) {
    return "E";
  }
}
function removePatchFromSemver(semVerStr) {
  const parts = semVerStr.split(".");
  return `${parts[0]}.${parts[1]}`;
}
const SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
class CloudinaryFile {
  constructor(publicID, cloudConfig = {}, urlConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }
  /**
   * @description Sets the URL Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setURLConfig(urlConfig) {
    this.urlConfig = new URLConfig(urlConfig);
    return this;
  }
  /**
   * @description Sets the Cloud Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setCloudConfig(cloudConfig) {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }
  /**
   * @description Sets the public ID of the asset.
   * @param {string} publicID The public ID of the asset.
   * @return {this}
   */
  setPublicID(publicID) {
    this.publicID = publicID ? publicID.toString() : "";
    return this;
  }
  /**
   * @description Sets the delivery type of the asset.
   * @param {DELIVERY_TYPE | string} newType The type of the asset.
   * @return {this}
   */
  setDeliveryType(newType) {
    this.deliveryType = newType;
    return this;
  }
  /**
   * @description Sets the URL SEO suffix of the asset.
   * @param {string} newSuffix The SEO suffix.
   * @return {this}
   */
  setSuffix(newSuffix) {
    this.suffix = newSuffix;
    return this;
  }
  /**
   * @description Sets the signature of the asset.
   * @param {string} signature The signature.
   * @return {this}
   */
  setSignature(signature) {
    this.signature = signature;
    return this;
  }
  /**
   * @description Sets the version of the asset.
   * @param {string} newVersion The version of the asset.
   * @return {this}
   */
  setVersion(newVersion) {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }
  /**
   * @description Sets the asset type.
   * @param {string} newType The type of the asset.
   * @return {this}
   */
  setAssetType(newType) {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }
  sign() {
    return this;
  }
  /**
   * @description Serializes to URL string
   * @param overwriteOptions
   */
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }
  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation() {
    if (typeof this.cloudName === "undefined") {
      throw "You must supply a cloudName when initializing the asset";
    }
    const suffixContainsDot = this.suffix && this.suffix.indexOf(".") >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf("/") >= 0;
    if (suffixContainsDot || suffixContainsSlash) {
      throw "`suffix`` should not include . or /";
    }
  }
  /**
   * @description return an SEO friendly name for a combination of asset/delivery, some examples:
   * * image/upload -> images
   * * video/upload -> videos
   * If no match is found, return `{asset}/{delivery}`
   */
  getResourceType() {
    const assetType = handleAssetType(this.assetType);
    const deliveryType = handleDeliveryType(this.deliveryType);
    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${deliveryType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;
    if (useRootPath) {
      if (regularSEOType === "image/upload") {
        return "";
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }
    if (shorten && regularSEOType === "image/upload") {
      return "iu";
    }
    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(", ")}, Provided: ${regularSEOType} instead`);
      }
    }
    return regularSEOType;
  }
  getSignature() {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return "";
    }
  }
  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation, trackedAnalytics) {
    if (!this.publicID) {
      return "";
    }
    this.validateAssetForURLCreation();
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : "";
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);
    const publicID = this.publicID;
    if (typeof transformation === "string") {
      const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID.replace(/,/g, "%2C"), this.suffix].filter((a) => a).join("/");
      return url;
    } else {
      const safeURL = [
        encodeURI(prefix),
        this.getResourceType(),
        this.getSignature(),
        encodeURI(transformationString),
        version,
        encodeURI(publicID).replace(/,/g, "%2C"),
        this.suffix && encodeURI(this.suffix)
      ].filter((a) => a).join("/").replace(/\?/g, "%3F").replace(/=/g, "%3D");
      const shouldAddAnalytics = this.urlConfig.analytics !== false && !publicID.includes("?");
      let queryParamsString = "";
      if (typeof this.urlConfig.queryParams === "object") {
        try {
          const queryParams = new URLSearchParams(this.urlConfig.queryParams);
          if (shouldAddAnalytics) {
            queryParams.set("_a", getSDKAnalyticsSignature(trackedAnalytics));
          }
          queryParamsString = queryParams.toString();
        } catch (err) {
          console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string");
        }
      } else {
        queryParamsString = this.urlConfig.queryParams || "";
        if (shouldAddAnalytics) {
          queryParamsString += `${queryParamsString.length > 0 ? "&" : ""}_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
        }
      }
      if (queryParamsString) {
        return `${safeURL}?${queryParamsString}`;
      } else {
        return safeURL;
      }
    }
  }
}
class CloudinaryTransformable extends CloudinaryFile {
  constructor(publicID, cloudConfig, urlConfig, transformation) {
    super(publicID, cloudConfig, urlConfig);
    this.transformation = transformation;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Animated} animated
   * @return {this}
   */
  animated(animated) {
    this.transformation.animated(animated);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Border} border
   * @return {this}
   */
  border(border) {
    this.transformation.border(border);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Reshape} reshape
   * @return {this}
   */
  reshape(reshape) {
    this.transformation.reshape(reshape);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Resize} resize
   * @return {this}
   */
  resize(resize) {
    this.transformation.resize(resize);
    return this;
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
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.RoundCorners} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners) {
    this.transformation.roundCorners(roundCorners);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  overlay(overlayAction) {
    this.transformation.overlay(overlayAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Variable} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    this.transformation.addVariable(variableAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Condition} conditionalAction
   * @return {this}
   */
  conditional(conditionalAction) {
    this.transformation.conditional(conditionalAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Effect} effect
   * @return {this}
   */
  effect(effect) {
    this.transformation.effect(effect);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Adjust} action
   * @return {this}
   */
  adjust(action) {
    this.transformation.adjust(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Rotate} rotate
   * @return {this}
   */
  rotate(rotate) {
    this.transformation.rotate(rotate);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Delivery} deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    this.transformation.delivery(deliveryAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.color} color
   * @return {this}
   */
  backgroundColor(color) {
    this.transformation.backgroundColor(color);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.PSDTools} action
   * @return {this}
   */
  psdTools(action) {
    this.transformation.psdTools(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Extract} action
   * @return {this}
   */
  extract(action) {
    this.transformation.extract(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    this.transformation.addFlag(flagQualifier);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.CustomFunction} customFunction
   * @return {this}
   */
  customFunction(customFunction) {
    this.transformation.customFunction(customFunction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    this.transformation.addAction(action);
    return this;
  }
  /**
   * @description Extend your transformation with another transformation
   * @param { string | SDK.Transformation } tx
   */
  addTransformation(tx) {
    this.transformation.addTransformation(tx);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {string}
   */
  toString() {
    return this.transformation.toString();
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction) {
    this.transformation.underlay(underlayAction);
    return this;
  }
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(this.transformation, overwriteOptions === null || overwriteOptions === void 0 ? void 0 : overwriteOptions.trackedAnalytics);
  }
}
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }
}
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = "video";
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action) {
    this.transformation.transcode(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action) {
    this.transformation.videoEdit(action);
    return this;
  }
}
class Cloudinary {
  constructor(cloudinaryConfig) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }
  image(publicID) {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  video(publicID) {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  setConfig(cloudinaryConfig) {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }
  getConfig() {
    return this.cloudinaryConfig;
  }
  extendConfig() {
  }
}
export {
  Cloudinary as C
};

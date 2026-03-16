import { c as getAugmentedNamespace } from "../react.mjs";
var dist = { exports: {} };
const experimental_createTheme = (themeParams) => {
  return {
    ...themeParams,
    __type: "prebuilt_appearance"
  };
};
const createTheme = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  experimental_createTheme
});
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(createTheme);
const dark = experimental_createTheme({
  name: "dark",
  variables: {
    colorBackground: "#212126",
    colorNeutral: "white",
    colorPrimary: "#ffffff",
    colorPrimaryForeground: "black",
    colorForeground: "white",
    colorInputForeground: "white",
    colorInput: "#26262B"
  },
  elements: {
    providerIcon__apple: { filter: "invert(1)" },
    providerIcon__github: { filter: "invert(1)" },
    providerIcon__okx_wallet: { filter: "invert(1)" },
    providerIcon__vercel: { filter: "invert(1)" },
    activeDeviceIcon: {
      "--cl-chassis-bottom": "#d2d2d2",
      "--cl-chassis-back": "#e6e6e6",
      "--cl-chassis-screen": "#e6e6e6",
      "--cl-screen": "#111111"
    }
  }
});
const shadesOfPurple = experimental_createTheme({
  name: "shadesOfPurple",
  baseTheme: dark,
  variables: {
    colorBackground: "#3f3c77",
    colorPrimary: "#f8d80d",
    colorPrimaryForeground: "#38375f",
    colorInputForeground: "#a1fdfe",
    colorShimmer: "rgba(161,253,254,0.36)"
  }
});
const buttonStyle = {
  boxShadow: "3px 3px 0px #000",
  border: "2px solid #000",
  "&:focus": {
    boxShadow: "4px 4px 0px #000",
    border: "2px solid #000",
    transform: "scale(1.01)"
  },
  "&:active": {
    boxShadow: "2px 2px 0px #000",
    transform: "translate(1px)"
  }
};
const shadowStyle = {
  boxShadow: "3px 3px 0px #000",
  border: "2px solid #000"
};
const neobrutalism = experimental_createTheme({
  name: "neobrutalism",
  //@ts-expect-error not public api
  simpleStyles: true,
  variables: {
    colorPrimary: "#DF1B1B",
    colorShimmer: "rgba(255,255,255,0.64)",
    fontWeight: {
      normal: 500,
      medium: 600,
      bold: 700
    }
  },
  elements: {
    cardBox: {
      boxShadow: "7px 7px 0px #000",
      border: "3px solid #000"
    },
    card: {
      borderRadius: "0"
    },
    headerSubtitle: { color: "#212126" },
    alternativeMethodsBlockButton: buttonStyle,
    socialButtonsIconButton: {
      ...buttonStyle
    },
    selectButton: {
      ...buttonStyle,
      ...shadowStyle,
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        boxShadow: "4px 4px 0px #000",
        border: "2px solid #000",
        transform: "scale(1.01)"
      }
    },
    socialButtonsBlockButton: { ...buttonStyle, color: "#212126" },
    profileSectionPrimaryButton: buttonStyle,
    profileSectionItem: { color: "#212126" },
    avatarImageActionsUpload: buttonStyle,
    menuButton: shadowStyle,
    menuList: shadowStyle,
    formButtonPrimary: buttonStyle,
    navbarButton: buttonStyle,
    formFieldAction: {
      fontWeight: "700"
    },
    formFieldInput: {
      ...shadowStyle,
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        boxShadow: "4px 4px 0px #000",
        border: "2px solid #000",
        transform: "scale(1.01)"
      },
      "&:hover": {
        ...shadowStyle,
        transform: "scale(1.01)"
      }
    },
    table: shadowStyle,
    tableHead: {
      color: "#212126"
    },
    dividerLine: {
      background: "#000"
    },
    dividerText: {
      fontWeight: "700",
      color: "#212126"
    },
    footer: {
      background: "#fff",
      "& div": {
        color: "#212126"
      }
    },
    footerActionText: {
      color: "#212126"
    },
    footerActionLink: {
      fontWeight: "700",
      borderBottom: "3px solid",
      "&:focus": {
        boxShadow: "none"
      }
    },
    actionCard: {
      ...shadowStyle
    },
    badge: {
      border: "1px solid #000",
      background: "#fff",
      color: "#212126"
    }
  }
});
const shadcn = experimental_createTheme({
  name: "shadcn",
  cssLayerName: "components",
  variables: {
    colorBackground: "var(--card)",
    colorDanger: "var(--destructive)",
    colorForeground: "var(--card-foreground)",
    colorInput: "var(--input)",
    colorInputForeground: "var(--card-foreground)",
    colorModalBackdrop: "var(--color-black)",
    colorMuted: "var(--muted)",
    colorMutedForeground: "var(--muted-foreground)",
    colorNeutral: "var(--foreground)",
    colorPrimary: "var(--primary)",
    colorPrimaryForeground: "var(--primary-foreground)",
    colorRing: "var(--ring)",
    fontWeight: {
      normal: "var(--font-weight-normal)",
      medium: "var(--font-weight-medium)",
      semibold: "var(--font-weight-semibold)",
      bold: "var(--font-weight-semibold)"
    }
  },
  elements: {
    input: "bg-transparent dark:bg-input/30",
    cardBox: "shadow-sm border",
    popoverBox: "shadow-sm border",
    button: {
      '&[data-variant="solid"]::after': {
        display: "none"
      }
    },
    providerIcon__apple: "dark:invert",
    providerIcon__github: "dark:invert",
    providerIcon__okx_wallet: "dark:invert",
    providerIcon__vercel: "dark:invert"
  }
});
const experimental__simple = experimental_createTheme({
  name: "simple",
  //@ts-expect-error not public api
  simpleStyles: true
});
const themes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  dark,
  experimental__simple,
  neobrutalism,
  shadcn,
  shadesOfPurple
});
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(themes);
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist.exports;
  hasRequiredDist = 1;
  (function(module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    module.exports = __toCommonJS(index_exports);
    __reExport(index_exports, require$$0, module.exports);
    __reExport(index_exports, require$$1, module.exports);
  })(dist);
  return dist.exports;
}
var distExports = /* @__PURE__ */ requireDist();
export {
  distExports as d
};

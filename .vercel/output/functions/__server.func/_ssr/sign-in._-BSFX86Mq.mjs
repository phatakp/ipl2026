import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { c as SignIn } from "../_chunks/_libs/@clerk/clerk-react.mjs";
import { B as Background } from "./background-CaFJZ7b9.mjs";
import "../_chunks/_libs/@clerk/shared.mjs";
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./utils-B5VFS_qv.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Background, { type: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center gap-6 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shadow-xl shadow-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignIn, { forceRedirectUrl: "/dashboard", signUpUrl: "/sign-up" }) }) }) });
}
export {
  RouteComponent as component
};

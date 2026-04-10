import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { c as cn } from "./router-CN6K_lMl.mjs";
function Background({ className, children, type = "dot" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative flex h-full w-full items-center justify-center bg-background",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "absolute inset-0",
              "bg-size-[40px_40px]",
              type === "dot" ? "bg-[radial-gradient(#404040_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 w-full", children })
      ]
    }
  );
}
export {
  Background as B
};

import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./router-CJYt2Yz5.mjs";
function Background({ className, children, type = "dot" }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex h-full w-full items-center justify-center bg-background",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute inset-0",
              "bg-size-[40px_40px]",
              type === "dot" ? "bg-[radial-gradient(#404040_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-20 w-full", children })
      ]
    }
  );
}
export {
  Background as B
};

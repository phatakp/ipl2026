import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DnBsk99p.mjs";
import "./utils-B5VFS_qv.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_chunks/_libs/@radix-ui/react-accordion.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_chunks/_libs/@radix-ui/react-collapsible.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-[calc(100vw-1rem)] md:w-full py-8 px-4 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title", children: "Game Rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "multiple", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-1", className: "border-none py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-pretty py-4 font-normal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-inside list-disc space-y-4 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Every player will need to predict the overall IPL winner." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "An automatic stake of Rs.500/- will be applicable for the IPL Winner, to be settled after final match." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Each player also to receive 5 double plays",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-2 font-semibold", children: "(only for league phase)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Once a player registers, they need to complete the whole tournament and settle dues (if any)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "A caution deposit of Rs.500/ has to be made to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 underline underline-offset-2 font-semibold", children: "9130469142 (PhonePe / GPay)" }),
          "compulsorily before start of Match 1."
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};

import { jsxs, jsx } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CGXMxZ8o.mjs";
import "radix-ui";
import "./router-CJYt2Yz5.mjs";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "@clerk/clerk-react";
import "./schemas-CG-vrJKh.mjs";
import "zod/v4";
import "@unpic/react";
import "react";
import "./services-bLtPaa4d.mjs";
import "./server.mjs";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "zod";
import "@clerk/themes";
import "react-hot-toast";
import "./chevron-down.mjs";
function RouteComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 w-[calc(100vw-1rem)] md:w-full py-8 px-4 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("span", { className: "title", children: "Game Rules" }),
    /* @__PURE__ */ jsx(Accordion, { type: "multiple", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", className: "border-none py-4", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Registration" }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-pretty py-4 font-normal", children: /* @__PURE__ */ jsxs("ol", { className: "list-inside list-disc space-y-4 text-base", children: [
        /* @__PURE__ */ jsx("li", { children: "Every player will need to predict the overall IPL winner." }),
        /* @__PURE__ */ jsx("li", { children: "An automatic stake of Rs.500/- will be applicable for the IPL Winner, to be settled after final match." }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Each player also to receive 5 double plays",
          " ",
          /* @__PURE__ */ jsx("span", { className: "underline underline-offset-2 font-semibold", children: "(only for league phase)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Once a player registers, they need to complete the whole tournament and settle dues (if any)." }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("span", { children: [
          "A caution deposit of Rs.500/ has to be made to",
          " ",
          /* @__PURE__ */ jsx("span", { className: "mr-2 underline underline-offset-2 font-semibold", children: "9130469142 (PhonePe / GPay)" }),
          "compulsorily before start of Match 1."
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};

import { jsx } from "react/jsx-runtime";
import { SignUp } from "@clerk/clerk-react";
import { B as Background } from "./background-BAUhkftv.mjs";
import "./router-CJYt2Yz5.mjs";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
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
function RouteComponent() {
  return /* @__PURE__ */ jsx(Background, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center gap-6 min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "shadow-xl shadow-accent", children: /* @__PURE__ */ jsx(SignUp, { forceRedirectUrl: "/dashboard", signInUrl: "/sign-in" }) }) }) });
}
export {
  RouteComponent as component
};

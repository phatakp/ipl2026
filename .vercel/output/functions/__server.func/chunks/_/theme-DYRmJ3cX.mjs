import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.mjs";
import * as z from "zod";
import { c as createServerFn, g as getCookie, s as setCookie } from "./server.mjs";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const postThemeValidator = z.union([z.literal("light"), z.literal("dark")]);
const storageKey = "_preferred-theme";
const getThemeServerFn_createServerFn_handler = createServerRpc({
  id: "d00cdee145bfed0516ecf734c86ce9e5be4ed2c0858d4eb37ac33b7c19ca2514",
  name: "getThemeServerFn",
  filename: "src/lib/theme.ts"
}, (opts, signal) => getThemeServerFn.__executeServer(opts, signal));
const getThemeServerFn = createServerFn().handler(getThemeServerFn_createServerFn_handler, async () => getCookie(storageKey) || "dark");
const setThemeServerFn_createServerFn_handler = createServerRpc({
  id: "218549d3b403ba49a45208d3aabf08ce8ba92042dc51c0281e152f5eab9f4d6f",
  name: "setThemeServerFn",
  filename: "src/lib/theme.ts"
}, (opts, signal) => setThemeServerFn.__executeServer(opts, signal));
const setThemeServerFn = createServerFn({
  method: "POST"
}).inputValidator(postThemeValidator).handler(setThemeServerFn_createServerFn_handler, async ({
  data
}) => setCookie(storageKey, data));
export {
  getThemeServerFn_createServerFn_handler,
  setThemeServerFn_createServerFn_handler
};

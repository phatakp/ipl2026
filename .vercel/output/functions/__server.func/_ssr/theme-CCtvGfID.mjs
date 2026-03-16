import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn, g as getCookie, s as setCookie$1 } from "./index.mjs";
import { u as union, l as literal } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_chunks/_libs/react.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const postThemeValidator = union([literal("light"), literal("dark")]);
const storageKey = "_preferred-theme";
const getThemeServerFn_createServerFn_handler = createServerRpc({
  id: "d00cdee145bfed0516ecf734c86ce9e5be4ed2c0858d4eb37ac33b7c19ca2514",
  name: "getThemeServerFn",
  filename: "src/lib/theme.ts"
}, (opts) => getThemeServerFn.__executeServer(opts));
const getThemeServerFn = createServerFn().handler(getThemeServerFn_createServerFn_handler, async () => getCookie(storageKey) || "dark");
const setThemeServerFn_createServerFn_handler = createServerRpc({
  id: "218549d3b403ba49a45208d3aabf08ce8ba92042dc51c0281e152f5eab9f4d6f",
  name: "setThemeServerFn",
  filename: "src/lib/theme.ts"
}, (opts) => setThemeServerFn.__executeServer(opts));
const setThemeServerFn = createServerFn({
  method: "POST"
}).inputValidator(postThemeValidator).handler(setThemeServerFn_createServerFn_handler, async ({
  data
}) => setCookie$1(storageKey, data));
export {
  getThemeServerFn_createServerFn_handler,
  setThemeServerFn_createServerFn_handler
};

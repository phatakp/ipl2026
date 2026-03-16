import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { b as api } from "./axios-B_vivTEI.mjs";
import { M as MatchSchema } from "./schemas-CG-vrJKh.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/axios.mjs";
import "../_chunks/_libs/form-data.mjs";
import "../_chunks/_libs/react.mjs";
import "../_libs/combined-stream.mjs";
import "util";
import "stream";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "crypto";
import "../_chunks/_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "http2";
import "../_chunks/_libs/follow-redirects.mjs";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_chunks/_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "zlib";
import "events";
import "../_chunks/_libs/@clerk/backend.mjs";
import "../_chunks/_libs/@clerk/shared.mjs";
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
import "node:crypto";
import "./index-BWfzcMNy.mjs";
import "../_libs/zod.mjs";
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
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "async_hooks";
import "../_libs/isbot.mjs";
const getTeams_createServerFn_handler = createServerRpc({
  id: "f2bd1576844e4c5e8346f1726e3555959eaa58c3eea563f74a459484d2b293ea",
  name: "getTeams",
  filename: "src/data/teams/services.ts"
}, (opts) => getTeams.__executeServer(opts));
const getTeams = createServerFn({
  method: "GET"
}).handler(getTeams_createServerFn_handler, async () => {
  const res = await api.get("/teams");
  return res.data;
});
const getTeamForm_createServerFn_handler = createServerRpc({
  id: "09f14719dd7dafd0f2b4d8b5132e89427440fc2e17993400914c1e35a7d7e79b",
  name: "getTeamForm",
  filename: "src/data/teams/services.ts"
}, (opts) => getTeamForm.__executeServer(opts));
const getTeamForm = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  homeTeam: true
})).handler(getTeamForm_createServerFn_handler, async ({
  data
}) => {
  const res = await api.get(`/teams/form/${data.homeTeam}`);
  return res.data;
});
export {
  getTeamForm_createServerFn_handler,
  getTeams_createServerFn_handler
};

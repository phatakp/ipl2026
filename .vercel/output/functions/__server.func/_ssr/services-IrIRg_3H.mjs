import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { z } from "../_libs/zod.mjs";
import { b as api, h as handleAPIError } from "./axios-D7Cw_l5Y.mjs";
import { M as MatchSchema, T as TEAMNAMES } from "./schemas-CG-vrJKh.mjs";
import { s as sleep } from "./utils-B5VFS_qv.mjs";
import { g as getIsAuthenticated } from "./services-D737QxMl.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
const getFixtures_createServerFn_handler = createServerRpc({
  id: "413f8fb4fa90e7183eb37f37b22258b821a4675ea9d9b766c6244b7742d0f03b",
  name: "getFixtures",
  filename: "src/data/matches/services.ts"
}, (opts) => getFixtures.__executeServer(opts));
const getFixtures = createServerFn({
  method: "GET"
}).handler(getFixtures_createServerFn_handler, async () => {
  const res = await api.get("/matches/fixtures");
  await sleep(2e3);
  return res.data;
});
const getResults_createServerFn_handler = createServerRpc({
  id: "4c02a5c46d1f611d3c1545a029ed54687dcb14932ba03c2fd45d896c375d6137",
  name: "getResults",
  filename: "src/data/matches/services.ts"
}, (opts) => getResults.__executeServer(opts));
const getResults = createServerFn({
  method: "GET"
}).handler(getResults_createServerFn_handler, async () => {
  const res = await api.get("/matches/results");
  await sleep(2e3);
  return res.data;
});
const getMatchByNum_createServerFn_handler = createServerRpc({
  id: "7b2afe96068e52fd8e9d65f10b5c05943c11d618be9d63a9d5c98187a22714fd",
  name: "getMatchByNum",
  filename: "src/data/matches/services.ts"
}, (opts) => getMatchByNum.__executeServer(opts));
const getMatchByNum = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(getMatchByNum_createServerFn_handler, async ({
  data
}) => {
  const res = await api.get(`/matches/${data.number}`);
  return res.data;
});
const getFixturesByTeam_createServerFn_handler = createServerRpc({
  id: "88805ca389e04a8a31005a2dec201bebf2a0fd5c9f4f14d1f2128d32ab351fda",
  name: "getFixturesByTeam",
  filename: "src/data/matches/services.ts"
}, (opts) => getFixturesByTeam.__executeServer(opts));
const getFixturesByTeam = createServerFn({
  method: "GET"
}).inputValidator(z.object({
  team: z.enum(TEAMNAMES)
})).handler(getFixturesByTeam_createServerFn_handler, async ({
  data
}) => {
  const res = await api.get(`/matches/fixtures/${data.team}`);
  return res.data;
});
const getResultsByTeam_createServerFn_handler = createServerRpc({
  id: "f9cf0ba224eda642e586e8a89d0a4ccd9a8486f46ea9d586eb0dad7cbf5d06e2",
  name: "getResultsByTeam",
  filename: "src/data/matches/services.ts"
}, (opts) => getResultsByTeam.__executeServer(opts));
const getResultsByTeam = createServerFn({
  method: "GET"
}).inputValidator(z.object({
  team: z.enum(TEAMNAMES)
})).handler(getResultsByTeam_createServerFn_handler, async ({
  data
}) => {
  const res = await api.get(`/matches/results/${data.team}`);
  return res.data;
});
const getWinnerAmtForMatch_createServerFn_handler = createServerRpc({
  id: "5b3a6db5c367063a788926bad4289689941ad20138638aa10f5f3724c9b114ec",
  name: "getWinnerAmtForMatch",
  filename: "src/data/matches/services.ts"
}, (opts) => getWinnerAmtForMatch.__executeServer(opts));
const getWinnerAmtForMatch = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(getWinnerAmtForMatch_createServerFn_handler, async ({
  data
}) => {
  const res = await api.get(`/matches/predict-winner/${data.number}`);
  return res.data;
});
const addMatch_createServerFn_handler = createServerRpc({
  id: "b430ac7c2b287953741e1dda978d197a68375baf7f61dca58ebd7756777dee92",
  name: "addMatch",
  filename: "src/data/matches/services.ts"
}, (opts) => addMatch.__executeServer(opts));
const addMatch = createServerFn({
  method: "POST"
}).inputValidator(MatchSchema).handler(addMatch_createServerFn_handler, async ({
  data
}) => {
  try {
    const res = await api.post(`/matches`, JSON.stringify(data));
    return res.data;
  } catch (error) {
    handleAPIError(error);
  }
});
const updateMatch_createServerFn_handler = createServerRpc({
  id: "3741bc9d2ce32308789f29612157a4f26713022cfb38db1419c7d0cba5ae377b",
  name: "updateMatch",
  filename: "src/data/matches/services.ts"
}, (opts) => updateMatch.__executeServer(opts));
const updateMatch = createServerFn().inputValidator(MatchSchema).handler(updateMatch_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      isAuthenticated
    } = await getIsAuthenticated();
    if (!isAuthenticated) throw new Error("User is not authenticated");
    const res = await api.put(`/matches`, JSON.stringify(data));
    return res.data;
  } catch (error) {
    handleAPIError(error);
  }
});
const addDefaultBetsForMatch_createServerFn_handler = createServerRpc({
  id: "bcf41cb81bdc91a28f3c810f0dba2203a0551d845009395a3ec70cabe5ed949f",
  name: "addDefaultBetsForMatch",
  filename: "src/data/matches/services.ts"
}, (opts) => addDefaultBetsForMatch.__executeServer(opts));
const addDefaultBetsForMatch = createServerFn().inputValidator(MatchSchema.pick({
  number: true
})).handler(addDefaultBetsForMatch_createServerFn_handler, async ({
  data
}) => {
  try {
    await api.put(`/matches/default/${data.number}`);
    return "success";
  } catch (error) {
    handleAPIError(error);
  }
});
const reverseBetsForMatch_createServerFn_handler = createServerRpc({
  id: "d96734dae5d51ebd6bd9232fd5a9bf979a1eb55f4e952429e630fd1abb95bcbe",
  name: "reverseBetsForMatch",
  filename: "src/data/matches/services.ts"
}, (opts) => reverseBetsForMatch.__executeServer(opts));
const reverseBetsForMatch = createServerFn().inputValidator(MatchSchema.pick({
  number: true
})).handler(reverseBetsForMatch_createServerFn_handler, async ({
  data
}) => {
  try {
    await api.put(`/matches/reverse/${data.number}`);
    return "success";
  } catch (error) {
    handleAPIError(error);
  }
});
export {
  addDefaultBetsForMatch_createServerFn_handler,
  addMatch_createServerFn_handler,
  getFixturesByTeam_createServerFn_handler,
  getFixtures_createServerFn_handler,
  getMatchByNum_createServerFn_handler,
  getResultsByTeam_createServerFn_handler,
  getResults_createServerFn_handler,
  getWinnerAmtForMatch_createServerFn_handler,
  reverseBetsForMatch_createServerFn_handler,
  updateMatch_createServerFn_handler
};

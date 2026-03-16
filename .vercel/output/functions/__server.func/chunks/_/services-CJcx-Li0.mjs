import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.mjs";
import z4 from "zod/v4";
import { b as api, h as handleAPIError } from "./axios-B16PgvZF.mjs";
import { M as MatchSchema, T as TEAMNAMES } from "./schemas-CG-vrJKh.mjs";
import { g as getIsAuthenticated } from "./services-bLtPaa4d.mjs";
import { c as createServerFn } from "./server.mjs";
import "axios";
import "@clerk/backend/internal";
import "./index-BWfzcMNy.mjs";
import "@clerk/shared/error";
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
const getFixtures_createServerFn_handler = createServerRpc({
  id: "413f8fb4fa90e7183eb37f37b22258b821a4675ea9d9b766c6244b7742d0f03b",
  name: "getFixtures",
  filename: "src/data/matches/services.ts"
}, (opts, signal) => getFixtures.__executeServer(opts, signal));
const getFixtures = createServerFn({
  method: "GET"
}).handler(getFixtures_createServerFn_handler, async () => {
  const res = await api.get("/matches/fixtures");
  return res.data;
});
const getResults_createServerFn_handler = createServerRpc({
  id: "4c02a5c46d1f611d3c1545a029ed54687dcb14932ba03c2fd45d896c375d6137",
  name: "getResults",
  filename: "src/data/matches/services.ts"
}, (opts, signal) => getResults.__executeServer(opts, signal));
const getResults = createServerFn({
  method: "GET"
}).handler(getResults_createServerFn_handler, async () => {
  const res = await api.get("/matches/results");
  return res.data;
});
const getMatchByNum_createServerFn_handler = createServerRpc({
  id: "7b2afe96068e52fd8e9d65f10b5c05943c11d618be9d63a9d5c98187a22714fd",
  name: "getMatchByNum",
  filename: "src/data/matches/services.ts"
}, (opts, signal) => getMatchByNum.__executeServer(opts, signal));
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
}, (opts, signal) => getFixturesByTeam.__executeServer(opts, signal));
const getFixturesByTeam = createServerFn({
  method: "GET"
}).inputValidator(z4.object({
  team: z4.enum(TEAMNAMES)
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
}, (opts, signal) => getResultsByTeam.__executeServer(opts, signal));
const getResultsByTeam = createServerFn({
  method: "GET"
}).inputValidator(z4.object({
  team: z4.enum(TEAMNAMES)
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
}, (opts, signal) => getWinnerAmtForMatch.__executeServer(opts, signal));
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
}, (opts, signal) => addMatch.__executeServer(opts, signal));
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
}, (opts, signal) => updateMatch.__executeServer(opts, signal));
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
}, (opts, signal) => addDefaultBetsForMatch.__executeServer(opts, signal));
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
}, (opts, signal) => reverseBetsForMatch.__executeServer(opts, signal));
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

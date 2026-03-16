import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.mjs";
import { b as api } from "./axios-B16PgvZF.mjs";
import { M as MatchSchema } from "./schemas-CG-vrJKh.mjs";
import { c as createServerFn } from "./server.mjs";
import "axios";
import "@clerk/backend/internal";
import "./index-BWfzcMNy.mjs";
import "@clerk/shared/error";
import "zod/v4";
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
const getTeams_createServerFn_handler = createServerRpc({
  id: "f2bd1576844e4c5e8346f1726e3555959eaa58c3eea563f74a459484d2b293ea",
  name: "getTeams",
  filename: "src/data/teams/services.ts"
}, (opts, signal) => getTeams.__executeServer(opts, signal));
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
}, (opts, signal) => getTeamForm.__executeServer(opts, signal));
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

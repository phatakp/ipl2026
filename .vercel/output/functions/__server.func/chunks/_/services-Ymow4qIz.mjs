import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.mjs";
import z__default from "zod";
import { b as api, h as handleAPIError } from "./axios-B16PgvZF.mjs";
import { a as PredictionSchemaWithValidation, b as PredictionSchema, M as MatchSchema, P as ProfileSchema } from "./schemas-CG-vrJKh.mjs";
import { g as getIsAuthenticated } from "./services-bLtPaa4d.mjs";
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
const getMatchPredictions_createServerFn_handler = createServerRpc({
  id: "f0288465a7086452a3cc5b3c7937287da63c714bbcc2d77605a6eb59c9f0c37b",
  name: "getMatchPredictions",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => getMatchPredictions.__executeServer(opts, signal));
const getMatchPredictions = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(getMatchPredictions_createServerFn_handler, async ({
  data
}) => {
  const {
    isAuthenticated
  } = await getIsAuthenticated();
  if (!isAuthenticated) return [];
  const res = await api.get(`/predictions/match/${data.number}`);
  return res.data;
});
const getUserPredictions_createServerFn_handler = createServerRpc({
  id: "ba8f08c4b7983f7d5efaa07606251091f8061b73cab1f8a00edec267b8f8d9a3",
  name: "getUserPredictions",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => getUserPredictions.__executeServer(opts, signal));
const getUserPredictions = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(getUserPredictions_createServerFn_handler, async ({
  data
}) => {
  const {
    isAuthenticated
  } = await getIsAuthenticated();
  if (!isAuthenticated) return [];
  const res = await api.get(`/predictions/user/${data.clerkId}`);
  return res.data;
});
const getUserPredictionForMatch_createServerFn_handler = createServerRpc({
  id: "1dca0e0baffd7b0101a108cdccd9300644c171d16f54461a9f535bfccac3a838",
  name: "getUserPredictionForMatch",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => getUserPredictionForMatch.__executeServer(opts, signal));
const getUserPredictionForMatch = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(getUserPredictionForMatch_createServerFn_handler, async ({
  data
}) => {
  const {
    isAuthenticated
  } = await getIsAuthenticated();
  if (!isAuthenticated) return null;
  const res = await api.get(`/predictions/curr-user/match/${data.number}`);
  return res.data;
});
const addPrediction_createServerFn_handler = createServerRpc({
  id: "d5f845ce8413ef39fbc2a27441c7e367f265b8b412508dafff8a558169e53308",
  name: "addPrediction",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => addPrediction.__executeServer(opts, signal));
const addPrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchemaWithValidation).handler(addPrediction_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      isAuthenticated
    } = await getIsAuthenticated();
    if (!isAuthenticated) throw new Error("Not Authenticated");
    const res = await api.post(`/predictions`, JSON.stringify(data));
    return res.data;
  } catch (error) {
    handleAPIError(error);
  }
});
const updatePrediction_createServerFn_handler = createServerRpc({
  id: "59fb969987f554a477b79925edc0b2f891912870229b09df4b3a714339bc9b2a",
  name: "updatePrediction",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => updatePrediction.__executeServer(opts, signal));
const updatePrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchemaWithValidation).handler(updatePrediction_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      isAuthenticated
    } = await getIsAuthenticated();
    if (!isAuthenticated) throw new Error("Not Authenticated");
    const {
      id,
      ...values
    } = data;
    if (!id) throw new Error("Prediction ID is required");
    const res = await api.put(`/predictions/${id}`, JSON.stringify(values));
    return res.data;
  } catch (error) {
    handleAPIError(error);
  }
});
const doublePrediction_createServerFn_handler = createServerRpc({
  id: "b2fd87a3100fff43e85ee1858e01b9e4a3581ce46a6c227e866525b6b5ac66b8",
  name: "doublePrediction",
  filename: "src/data/predictions/services.ts"
}, (opts, signal) => doublePrediction.__executeServer(opts, signal));
const doublePrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchema.pick({
  id: true
}).extend({
  doubleAmt: z__default.number()
})).handler(doublePrediction_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      isAuthenticated
    } = await getIsAuthenticated();
    if (!isAuthenticated) throw new Error("Not Authenticated");
    const {
      id
    } = data;
    if (!id) throw new Error("Prediction ID is required");
    await api.put(`/predictions/double/${id}`, JSON.stringify({
      doubleAmt: data.doubleAmt
    }));
    return "success";
  } catch (error) {
    handleAPIError(error);
  }
});
export {
  addPrediction_createServerFn_handler,
  doublePrediction_createServerFn_handler,
  getMatchPredictions_createServerFn_handler,
  getUserPredictionForMatch_createServerFn_handler,
  getUserPredictions_createServerFn_handler,
  updatePrediction_createServerFn_handler
};

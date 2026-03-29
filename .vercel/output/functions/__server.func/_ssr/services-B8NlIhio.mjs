import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { z } from "../_libs/zod.mjs";
import { b as api, h as handleAPIError } from "./axios-D7Cw_l5Y.mjs";
import { a as PredictionSchemaWithValidation, b as PredictionSchema, M as MatchSchema, P as ProfileSchema } from "./schemas-pJJa3z0V.mjs";
import { g as getIsAuthenticated } from "./services-DjdOH3KL.mjs";
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
const getMatchPredictions_createServerFn_handler = createServerRpc({
  id: "f0288465a7086452a3cc5b3c7937287da63c714bbcc2d77605a6eb59c9f0c37b",
  name: "getMatchPredictions",
  filename: "src/data/predictions/services.ts"
}, (opts) => getMatchPredictions.__executeServer(opts));
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
}, (opts) => getUserPredictions.__executeServer(opts));
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
}, (opts) => getUserPredictionForMatch.__executeServer(opts));
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
}, (opts) => addPrediction.__executeServer(opts));
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
}, (opts) => updatePrediction.__executeServer(opts));
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
}, (opts) => doublePrediction.__executeServer(opts));
const doublePrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchema.pick({
  id: true
}).extend({
  doubleAmt: z.number()
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

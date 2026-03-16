import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.mjs";
import { a as auth, b as api, h as handleAPIError } from "./axios-B16PgvZF.mjs";
import { P as ProfileSchema, A as ADMINROLE } from "./schemas-CG-vrJKh.mjs";
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
const getIsAuthenticated_createServerFn_handler = createServerRpc({
  id: "c49cf7be3d4d22abc557254a15b02fc9976ad337445821d9005cea5828e06447",
  name: "getIsAuthenticated",
  filename: "src/data/users/services.ts"
}, (opts, signal) => getIsAuthenticated.__executeServer(opts, signal));
const getIsAuthenticated = createServerFn({
  method: "GET"
}).handler(getIsAuthenticated_createServerFn_handler, async () => {
  try {
    const {
      isAuthenticated,
      userId
    } = await auth();
    return {
      isAuthenticated,
      userId
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      userId: null
    };
  }
});
const getAllUsersFromDB_createServerFn_handler = createServerRpc({
  id: "bf9f68cc3f0968159fd2f3c7c5c5185442ded9df58820661b26d320cf7ea5c4f",
  name: "getAllUsersFromDB",
  filename: "src/data/users/services.ts"
}, (opts, signal) => getAllUsersFromDB.__executeServer(opts, signal));
const getAllUsersFromDB = createServerFn({
  method: "GET"
}).handler(getAllUsersFromDB_createServerFn_handler, async () => {
  const {
    isAuthenticated
  } = await auth();
  if (!isAuthenticated) return [];
  const res = await api.get(`/users`);
  return res.data;
});
const getCurrUserFromDB_createServerFn_handler = createServerRpc({
  id: "ad44a5199b7a96bc5814a39450f24e1e1176961a490dc28b70c412213e18ae0b",
  name: "getCurrUserFromDB",
  filename: "src/data/users/services.ts"
}, (opts, signal) => getCurrUserFromDB.__executeServer(opts, signal));
const getCurrUserFromDB = createServerFn({
  method: "GET"
}).handler(getCurrUserFromDB_createServerFn_handler, async () => {
  const {
    isAuthenticated
  } = await auth();
  if (!isAuthenticated) return null;
  const res = await api.get(`/users/me`);
  return res.data;
});
const getUserByIdFromDB_createServerFn_handler = createServerRpc({
  id: "921afd49a22a8b4badc70e6e5de9a7049f90b42081dc93e1989b7005b66288f9",
  name: "getUserByIdFromDB",
  filename: "src/data/users/services.ts"
}, (opts, signal) => getUserByIdFromDB.__executeServer(opts, signal));
const getUserByIdFromDB = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(getUserByIdFromDB_createServerFn_handler, async ({
  data
}) => {
  const {
    isAuthenticated
  } = await auth();
  if (!isAuthenticated) return null;
  if (!data.clerkId.startsWith("user_")) return null;
  const res = await api.get(`/users/${data.clerkId}`);
  return res.data;
});
const getUserFormById_createServerFn_handler = createServerRpc({
  id: "da1f3cd09ae2f7b78d3b4136f94789eeb3f5728f1f08ef213fd3515fef437705",
  name: "getUserFormById",
  filename: "src/data/users/services.ts"
}, (opts, signal) => getUserFormById.__executeServer(opts, signal));
const getUserFormById = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(getUserFormById_createServerFn_handler, async ({
  data
}) => {
  const {
    isAuthenticated
  } = await auth();
  if (!isAuthenticated) return [];
  if (!data.clerkId.startsWith("user_")) return [];
  const res = await api.get(`/users/form/${data.clerkId}`);
  return res.data;
});
const upsertProfile_createServerFn_handler = createServerRpc({
  id: "9680c0ae31fff5a0df006f08fbe1f1a69c473424a668f07ebe90dcaef197f290",
  name: "upsertProfile",
  filename: "src/data/users/services.ts"
}, (opts, signal) => upsertProfile.__executeServer(opts, signal));
const upsertProfile = createServerFn({
  method: "POST"
}).inputValidator(ProfileSchema).handler(upsertProfile_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      update,
      ...profileData
    } = data;
    const res = await api.post(`/users`, JSON.stringify(profileData));
    return res.data;
  } catch (error) {
    handleAPIError(error);
  }
});
const activateProfile_createServerFn_handler = createServerRpc({
  id: "482a6e781ea7c881cb91b969a203494363a1060517013d2937a6355bfe4efbea",
  name: "activateProfile",
  filename: "src/data/users/services.ts"
}, (opts, signal) => activateProfile.__executeServer(opts, signal));
const activateProfile = createServerFn({
  method: "POST"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(activateProfile_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      sessionClaims
    } = await auth();
    if (sessionClaims?.metadata?.role !== ADMINROLE) throw new Error("Only admin is allowed");
    await api.put(`/users/activate/${data.clerkId}`);
    return "success";
  } catch (error) {
    handleAPIError(error);
  }
});
export {
  activateProfile_createServerFn_handler,
  getAllUsersFromDB_createServerFn_handler,
  getCurrUserFromDB_createServerFn_handler,
  getIsAuthenticated_createServerFn_handler,
  getUserByIdFromDB_createServerFn_handler,
  getUserFormById_createServerFn_handler,
  upsertProfile_createServerFn_handler
};

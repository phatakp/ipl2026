import { c as createServerFn, T as TSS_SERVER_FUNCTION, a as getServerFnById } from "./index.mjs";
import { P as ProfileSchema } from "./schemas-CG-vrJKh.mjs";
var createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getIsAuthenticated = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c49cf7be3d4d22abc557254a15b02fc9976ad337445821d9005cea5828e06447"));
const getAllUsersFromDB = createServerFn({
  method: "GET"
}).handler(createSsrRpc("bf9f68cc3f0968159fd2f3c7c5c5185442ded9df58820661b26d320cf7ea5c4f"));
const getCurrUserFromDB = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ad44a5199b7a96bc5814a39450f24e1e1176961a490dc28b70c412213e18ae0b"));
const getUserByIdFromDB = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(createSsrRpc("921afd49a22a8b4badc70e6e5de9a7049f90b42081dc93e1989b7005b66288f9"));
const getUserFormById = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(createSsrRpc("da1f3cd09ae2f7b78d3b4136f94789eeb3f5728f1f08ef213fd3515fef437705"));
const upsertProfile = createServerFn({
  method: "POST"
}).inputValidator(ProfileSchema).handler(createSsrRpc("9680c0ae31fff5a0df006f08fbe1f1a69c473424a668f07ebe90dcaef197f290"));
const activateProfile = createServerFn({
  method: "POST"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(createSsrRpc("482a6e781ea7c881cb91b969a203494363a1060517013d2937a6355bfe4efbea"));
export {
  getAllUsersFromDB as a,
  getUserByIdFromDB as b,
  createSsrRpc as c,
  getCurrUserFromDB as d,
  getUserFormById as e,
  activateProfile as f,
  getIsAuthenticated as g,
  upsertProfile as u
};

import { a as axios } from "../_libs/axios.mjs";
import { g as getAuthObjectForAcceptedToken } from "../_chunks/_libs/@clerk/backend.mjs";
import { e as errorThrower } from "./index-BWfzcMNy.mjs";
import { b as getStartContext } from "./index.mjs";
var getGlobalStartContext = () => {
  const context = getStartContext().contextAfterGlobalMiddlewares;
  if (!context) throw new Error(`Global context not set yet, you are calling getGlobalStartContext() before the global middlewares are applied.`);
  return context;
};
var createErrorMessage = (msg) => {
  return `🔒 Clerk: ${msg.trim()}

For more info, check out the docs: https://clerk.com/docs,
or come say hi in our discord server: https://clerk.com/discord

`;
};
createErrorMessage(`
  You're calling 'getAuth()' from a server function, without providing the request object.
  Example:

  export const someServerFunction = createServerFn({ method: 'GET' }).handler(async () => {
    const request = getWebRequest()
    const auth = getAuth(request);
    ...
  });
  `);
var clerkMiddlewareNotConfigured = createErrorMessage(`
It looks like you're trying to use Clerk without configuring the middleware.

To fix this, make sure you have the \`clerkMiddleware()\` configured in your \`createStart()\` function in your \`src/start.ts\` file.`);
var auth = (async (opts) => {
  const authObjectFn = getGlobalStartContext().auth;
  if (!authObjectFn) {
    return errorThrower.throw(clerkMiddlewareNotConfigured);
  }
  const authObject = await Promise.resolve(authObjectFn({ treatPendingAsSignedOut: opts?.treatPendingAsSignedOut }));
  return getAuthObjectForAcceptedToken({ authObject, acceptsToken: opts?.acceptsToken });
});
const api = axios.create({
  baseURL: `${process.env.SERVER_API_URL}`,
  timeout: 5e4,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
api.interceptors.request.use(async (config) => {
  const { getToken } = await auth();
  const token = await getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
function handleAPIError(error) {
  console.error(error);
  if (axios.isAxiosError(error)) {
    const err = error.response?.data;
    if (err.status === 422) throw new Error(err.generalErrors?.[0].message);
    throw new Error(err.message);
  } else {
    throw new Error("Could not process your request");
  }
}
export {
  auth as a,
  api as b,
  handleAPIError as h
};

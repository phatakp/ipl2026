import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import "../_chunks/_libs/@clerk/clerk-react.mjs";
import { u as useSuspenseQuery } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { B as Button, a as allUsersQueryOptions, c as cn } from "./router-Bkbp-GnV.mjs";
import { u as useActivateProfile } from "./hooks-BfihKV2H.mjs";
import { A as ADMINROLE } from "./schemas-CG-vrJKh.mjs";
import { B as Badge } from "./badge-C6g5EFmO.mjs";
import { K as useUser } from "../_chunks/_libs/@clerk/shared.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_chunks/_libs/@tanstack/query-core.mjs";
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@tanstack/react-router-ssr-query.mjs";
import "../_chunks/_libs/@tanstack/router-ssr-query-core.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_chunks/_libs/@unpic/react.mjs";
import "../_chunks/_libs/@unpic/core.mjs";
import "../_libs/unpic.mjs";
import "./services-D737QxMl.mjs";
import "./index.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_chunks/_libs/@clerk/themes.mjs";
import "../_libs/react-hot-toast.mjs";
import "../_libs/goober.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
import "./modal-B0GcBHov.mjs";
import "../_chunks/_libs/@radix-ui/react-dialog.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-dismissable-layer.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-use-escape-keydown.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-scope.mjs";
import "../_chunks/_libs/@radix-ui/react-portal.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_chunks/_libs/@radix-ui/react-scroll-area.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
import "../_chunks/_libs/@radix-ui/number.mjs";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}
function PendingUsers() {
  const { data: users } = useSuspenseQuery(allUsersQueryOptions);
  const { mutate } = useActivateProfile();
  const { user } = useUser();
  if (user?.publicMetadata?.role !== ADMINROLE) return;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCaption, { children: "A list of users pending activation." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[150px]", children: "Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
        u.firstName,
        " ",
        u.lastName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: u.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: u.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Active" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => mutate({ data: { clerkId: u.clerkId } }),
          children: "Activate Now"
        }
      ) })
    ] }, u.clerkId)) })
  ] }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col max-w-360 mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading Users..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PendingUsers, {}) }) });
}
export {
  RouteComponent as component
};

import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { useUser } from "@clerk/clerk-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { a as allUsersQueryOptions, B as Button, c as cn } from "./router-CJYt2Yz5.mjs";
import { u as useActivateProfile } from "./hooks-BS9dzBw6.mjs";
import { A as ADMINROLE } from "./schemas-CG-vrJKh.mjs";
import { B as Badge } from "./badge-Dh2tF0tC.mjs";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@unpic/react";
import "./services-bLtPaa4d.mjs";
import "./server.mjs";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "zod";
import "@clerk/themes";
import "react-hot-toast";
import "zod/v4";
import "./modal-VNn8FiAx.mjs";
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableCaption, { children: "A list of users pending activation." }),
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-[150px]", children: "Name" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Status" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: users.map((u) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxs(TableCell, { className: "font-medium", children: [
        u.firstName,
        " ",
        u.lastName
      ] }),
      /* @__PURE__ */ jsx(TableCell, { children: u.email }),
      /* @__PURE__ */ jsx(TableCell, { children: u.isActive ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: "Active" }) : /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col max-w-360 mx-auto w-full", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Users..." }), children: /* @__PURE__ */ jsx(PendingUsers, {}) }) });
}
export {
  RouteComponent as component
};

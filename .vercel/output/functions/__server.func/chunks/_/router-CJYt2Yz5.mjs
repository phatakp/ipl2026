import { jsx, jsxs } from "react/jsx-runtime";
import { createRouter, createRootRouteWithContext, useRouter, useMatch, rootRouteId, ErrorComponent, Link, createFileRoute, lazyRouteComponent, redirect, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryClient, queryOptions } from "@tanstack/react-query";
import { ClerkProvider, useUser, SignedIn, UserButton, SignedOut } from "@clerk/clerk-react";
import { A as ADMINROLE, M as MatchSchema, P as ProfileSchema, a as PredictionSchemaWithValidation, b as PredictionSchema, T as TEAMNAMES } from "./schemas-CG-vrJKh.mjs";
import { Image } from "@unpic/react";
import { forwardRef, createElement, createContext } from "react";
import { g as getIsAuthenticated, c as createSsrRpc, a as getAllUsersFromDB, b as getUserByIdFromDB, d as getCurrUserFromDB, e as getUserFormById } from "./services-bLtPaa4d.mjs";
import * as z from "zod";
import z__default from "zod";
import { c as createServerFn } from "./server.mjs";
import { dark } from "@clerk/themes";
import { Toaster } from "react-hot-toast";
import z4 from "zod/v4";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$5 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
];
const FileQuestionMark = createLucideIcon("file-question-mark", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
];
const Handshake = createLucideIcon("handshake", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$1);
const __iconNode = [
  ["path", { d: "M20 11v6", key: "d77pzp" }],
  ["path", { d: "M20 13h2", key: "16rner" }],
  ["path", { d: "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578", key: "1yxgtw" }],
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
];
const UserKey = createLucideIcon("user-key", __iconNode);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function amountFormatter(val, decimalPlaces = 0) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    currencyDisplay: "code",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).formatToParts(val).map((p) => p.type !== "literal" && p.type !== "currency" ? p.value : "").join("");
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-linear-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground hover:bg-accent hover:scale-101",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        success: "bg-success text-black hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-foreground",
        secondary: "bg-primary text-primary-foreground hover:bg-primary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          onClick: () => {
            router2.invalidate();
          },
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function NotFoundPage() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center px-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-6", children: [
    /* @__PURE__ */ jsx(FileQuestionMark, { className: "mx-auto h-24 w-24 text-muted-foreground" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold text-4xl tracking-tight", children: "Page not found" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center gap-2 sm:flex-row", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Return home" }) }) })
  ] }) });
}
function getContext() {
  const queryClient = new QueryClient();
  return {
    queryClient
  };
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function Logo({ className }) {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center ipl-logo relative w-25", children: /* @__PURE__ */ jsx(
    Image,
    {
      src: "/logo.avif",
      width: 100,
      height: 100,
      alt: "logo-1",
      className: " relative"
    }
  ) });
}
function Navbar() {
  const { isLoaded, user } = useUser();
  const isAdmin = user?.publicMetadata?.role === ADMINROLE;
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "sticky inset-x-0 top-0 z-99 px-4 items-center flex transition-colors duration-400 ease-in-out h-12",
        "bg-linear-to-br from-primary/95 via-primary/90 to-primary/80"
      ),
      children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between mx-auto max-w-360 w-full h-full py-4 md:py-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "w-20 h-full relative hidden md:flex", children: /* @__PURE__ */ jsx(Logo, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-8 text-primary-foreground", children: [
          /* @__PURE__ */ jsx(
            NavLink,
            {
              href: "/",
              title: "Home",
              icon: /* @__PURE__ */ jsx(House, { className: "md:hidden text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ jsxs(SignedIn, { children: [
            /* @__PURE__ */ jsx(
              NavLink,
              {
                href: "/dashboard",
                title: "Dashboard",
                icon: /* @__PURE__ */ jsx(LayoutDashboard, { className: "md:hidden  text-primary-foreground" })
              }
            ),
            isAdmin && /* @__PURE__ */ jsx(
              NavLink,
              {
                href: "/admin",
                title: "Admin",
                icon: /* @__PURE__ */ jsx(UserKey, { className: "md:hidden text-primary-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              href: "/rules",
              title: "Rules",
              icon: /* @__PURE__ */ jsx(Handshake, { className: "md:hidden text-primary-foreground" })
            }
          )
        ] }),
        !isLoaded && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-18" }) }),
        /* @__PURE__ */ jsx(SignedIn, { children: /* @__PURE__ */ jsx(UserButton, { children: /* @__PURE__ */ jsxs(UserButton.MenuItems, { children: [
          isAdmin && /* @__PURE__ */ jsx(
            UserButton.Link,
            {
              label: "Admin",
              labelIcon: /* @__PURE__ */ jsx(UserKey, {}),
              href: "/admin"
            }
          ),
          /* @__PURE__ */ jsx(UserButton.Action, { label: "signOut" })
        ] }) }) }),
        /* @__PURE__ */ jsx(SignedOut, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/sign-in/$", className: "flex items-center", children: [
          "Let's Play ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }) }) }) })
      ] })
    }
  );
}
function NavLink({
  href,
  title,
  icon
}) {
  const location = useLocation();
  return /* @__PURE__ */ jsxs(Link, { to: href, className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:flex  font-semibold", children: title }),
    icon,
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "bg-secondary h-1 w-12 transition-all duration-1000 ease-in-out",
          location.pathname === href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        )
      }
    )
  ] });
}
const postThemeValidator = z.union([z.literal("light"), z.literal("dark")]);
const getThemeServerFn = createServerFn().handler(createSsrRpc("d00cdee145bfed0516ecf734c86ce9e5be4ed2c0858d4eb37ac33b7c19ca2514"));
const setThemeServerFn = createServerFn({
  method: "POST"
}).inputValidator(postThemeValidator).handler(createSsrRpc("218549d3b403ba49a45208d3aabf08ce8ba92042dc51c0281e152f5eab9f4d6f"));
const ThemeContext = createContext(null);
function ThemeProvider({ children, theme }) {
  const router2 = useRouter();
  function setTheme(val) {
    setThemeServerFn({ data: val }).then(() => router2.invalidate());
  }
  return /* @__PURE__ */ jsx(ThemeContext, { value: { theme, setTheme }, children });
}
const PUBLISHABLE_KEY = "pk_test_ZnJlc2gtcG9zc3VtLTI3LmNsZXJrLmFjY291bnRzLmRldiQ";
function AppClerkProvider({
  children
}) {
  return /* @__PURE__ */ jsx(
    ClerkProvider,
    {
      publishableKey: PUBLISHABLE_KEY,
      afterSignOutUrl: "/",
      appearance: {
        baseTheme: dark,
        elements: {
          headerTitle: {
            fontFamily: "var(--font-sans)",
            fontSize: "1.5em",
            fontWeight: "bold",
            color: "var(--color-primary)",
            textAlign: "center"
          },
          headerSubtitle: {
            fontFamily: "var(--font-sans)",
            color: "var(--color-muted-foreground)",
            textAlign: "center"
          },
          button: {
            backgroundColor: "var(--color-secondary)",
            borderRadius: 0
          },
          input: {
            border: "var(--color-foreground)"
          },
          formButtonPrimary: {
            backgroundColor: "var(--color-primary)",
            color: "var(--color-primary-foreground)",
            borderRadius: 0
          },
          actionCard: {
            padding: 0,
            margin: 0
          },
          card: {
            fontFamily: "var(--font-sans)",
            paddingLeft: 16,
            paddingRight: 16
          }
        },
        variables: {
          colorBackground: "var(--color-background)",
          colorPrimary: "var(--color-primary)",
          colorInput: "var(--color-input)",
          colorText: "var(--color-text)",
          colorTextSecondary: "var(--color-text-secondary)",
          colorModalBackdrop: "var(--color-background)",
          colorBorder: "var(--color-border)",
          colorMuted: "var(--color-secondary)",
          colorDanger: "var(--color-destructive)",
          colorForeground: "var(--color-foreground)",
          colorSuccess: "var(--color-success)",
          colorPrimaryForeground: "var(--color-primary-foreground)",
          colorMutedForeground: "var(--color-muted-foreground)",
          fontFamily: "var(--font-sans)",
          fontFamilyButtons: "var(--font-sans)"
        }
      },
      children
    }
  );
}
function ReactHotToast() {
  return /* @__PURE__ */ jsx(
    Toaster,
    {
      position: "top-center",
      reverseOrder: false,
      toastOptions: {
        style: {
          border: "1px solid var(--color-popover-foreground)",
          padding: "16px",
          backgroundColor: "var(--color-popover)",
          color: "var(--color-popover-foreground)"
        },
        success: {
          style: {
            border: "1px solid var(--color-success)",
            backgroundColor: "var(--color-success)",
            color: "var(--color-success-foreground)"
          }
        },
        error: {
          style: {
            border: "1px solid var(--color-destructive)",
            backgroundColor: "var(--color-destructive)",
            color: "var(--color-destructive-foreground)"
          }
        }
      }
    }
  );
}
const appCss = "/assets/styles-CdLYdNIK.css";
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "IPL 2026"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=pilcrow-rounded@400,500,600,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  const theme = Route$7.useLoaderData();
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: theme, suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsx(AppClerkProvider, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid min-h-screen grid-rows-[auto_1fr]", children: [
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx("main", { className: "mx-auto w-full", children }),
        /* @__PURE__ */ jsx(ReactHotToast, {})
      ] }) }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./rules-D7Os_E4p.mjs");
const Route$6 = createFileRoute("/rules")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const userKeys = {
  all: ["users"],
  currUser: ["users", "curr-user"],
  userById: (userId) => ["users", userId],
  userFormById: (userId) => ["users", "form", userId]
};
const currDBUserQueryOptions = () => queryOptions({
  queryKey: userKeys.currUser,
  queryFn: getCurrUserFromDB,
  staleTime: 1e3 * 60 * 60 * 24
});
const dBUserQueryOptions = (userId) => queryOptions({
  queryKey: userKeys.userById(userId),
  queryFn: () => getUserByIdFromDB({ data: { clerkId: userId } }),
  staleTime: 1e3 * 60 * 60 * 24,
  enabled: userId?.startsWith("user_")
});
const userFormQueryOptions = (userId) => queryOptions({
  queryKey: userKeys.userFormById(userId),
  queryFn: () => getUserFormById({ data: { clerkId: userId } }),
  staleTime: 1e3 * 60 * 60 * 24,
  enabled: userId.startsWith("user_")
});
const allUsersQueryOptions = queryOptions({
  queryKey: userKeys.all,
  queryFn: getAllUsersFromDB,
  staleTime: 1e3 * 60 * 60 * 24
});
const $$splitComponentImporter$5 = () => import("./admin-B-7idfJr.mjs");
const Route$5 = createFileRoute("/admin")({
  loader: async ({
    context
  }) => {
    await context.queryClient.ensureQueryData(allUsersQueryOptions);
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const getFixtures = createServerFn({
  method: "GET"
}).handler(createSsrRpc("413f8fb4fa90e7183eb37f37b22258b821a4675ea9d9b766c6244b7742d0f03b"));
const getResults = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4c02a5c46d1f611d3c1545a029ed54687dcb14932ba03c2fd45d896c375d6137"));
const getMatchByNum = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("7b2afe96068e52fd8e9d65f10b5c05943c11d618be9d63a9d5c98187a22714fd"));
createServerFn({
  method: "GET"
}).inputValidator(z4.object({
  team: z4.enum(TEAMNAMES)
})).handler(createSsrRpc("88805ca389e04a8a31005a2dec201bebf2a0fd5c9f4f14d1f2128d32ab351fda"));
createServerFn({
  method: "GET"
}).inputValidator(z4.object({
  team: z4.enum(TEAMNAMES)
})).handler(createSsrRpc("f9cf0ba224eda642e586e8a89d0a4ccd9a8486f46ea9d586eb0dad7cbf5d06e2"));
const getWinnerAmtForMatch = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("5b3a6db5c367063a788926bad4289689941ad20138638aa10f5f3724c9b114ec"));
createServerFn({
  method: "POST"
}).inputValidator(MatchSchema).handler(createSsrRpc("b430ac7c2b287953741e1dda978d197a68375baf7f61dca58ebd7756777dee92"));
const updateMatch = createServerFn().inputValidator(MatchSchema).handler(createSsrRpc("3741bc9d2ce32308789f29612157a4f26713022cfb38db1419c7d0cba5ae377b"));
const addDefaultBetsForMatch = createServerFn().inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("bcf41cb81bdc91a28f3c810f0dba2203a0551d845009395a3ec70cabe5ed949f"));
const reverseBetsForMatch = createServerFn().inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("d96734dae5d51ebd6bd9232fd5a9bf979a1eb55f4e952429e630fd1abb95bcbe"));
const matchKeys = {
  all: ["matches"],
  fixtures: ["matches", "fixtures"],
  results: ["matches", "results"],
  matchByNum: (matchNum) => ["matches", matchNum],
  winnerPredByNum: (matchNum, isUserPred) => ["matches", "winner-pred", matchNum, isUserPred],
  fixturesByTeam: (team) => ["matches", "fixtures", team],
  resultsByTeam: (team) => ["matches", "results", team]
};
const fixturesQueryOptions = () => queryOptions({
  queryKey: matchKeys.fixtures,
  queryFn: getFixtures,
  staleTime: 1e3 * 60 * 60 * 24
});
const resultsQueryOptions = () => queryOptions({
  queryKey: matchKeys.results,
  queryFn: getResults,
  staleTime: 1e3 * 60 * 60 * 24
});
const matchByNumQueryOptions = (matchNum) => queryOptions({
  queryKey: matchKeys.matchByNum(matchNum),
  queryFn: () => getMatchByNum({ data: { number: matchNum } }),
  staleTime: 1e3 * 60 * 60 * 24
});
const winnerPredByNumQueryOptions = (matchNum, isUserPred) => queryOptions({
  queryKey: matchKeys.winnerPredByNum(matchNum, isUserPred),
  queryFn: () => getWinnerAmtForMatch({ data: { number: matchNum } }),
  staleTime: 1e3 * 60 * 60 * 24
});
const getTeams = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f2bd1576844e4c5e8346f1726e3555959eaa58c3eea563f74a459484d2b293ea"));
const getTeamForm = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  homeTeam: true
})).handler(createSsrRpc("09f14719dd7dafd0f2b4d8b5132e89427440fc2e17993400914c1e35a7d7e79b"));
const teamKeys = {
  all: ["teams"],
  form: (team) => ["teams", "form", team]
};
const allTeamsQueryOptions = () => queryOptions({
  queryKey: teamKeys.all,
  queryFn: () => getTeams(),
  staleTime: 1e3 * 60 * 60 * 24
});
const teamFormQueryOptions = (team) => queryOptions({
  queryKey: teamKeys.form(team),
  queryFn: () => getTeamForm({ data: { homeTeam: team } }),
  staleTime: 1e3 * 60 * 60 * 24,
  enabled: !!team
});
const $$splitComponentImporter$4 = () => import("./index-DUJWZa8e.mjs");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  loader: async ({
    context
  }) => {
    await context.queryClient.ensureQueryData(allTeamsQueryOptions());
    await context.queryClient.ensureQueryData(fixturesQueryOptions());
    await context.queryClient.ensureQueryData(resultsQueryOptions());
  }
});
const $$splitComponentImporter$3 = () => import("./sign-up._-B7jeaabQ.mjs");
const Route$3 = createFileRoute("/sign-up/$")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./sign-in._-DIB8Ktrr.mjs");
const Route$2 = createFileRoute("/sign-in/$")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getMatchPredictions = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("f0288465a7086452a3cc5b3c7937287da63c714bbcc2d77605a6eb59c9f0c37b"));
const getUserPredictions = createServerFn({
  method: "GET"
}).inputValidator(ProfileSchema.pick({
  clerkId: true
})).handler(createSsrRpc("ba8f08c4b7983f7d5efaa07606251091f8061b73cab1f8a00edec267b8f8d9a3"));
const getUserPredictionForMatch = createServerFn({
  method: "GET"
}).inputValidator(MatchSchema.pick({
  number: true
})).handler(createSsrRpc("1dca0e0baffd7b0101a108cdccd9300644c171d16f54461a9f535bfccac3a838"));
const addPrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchemaWithValidation).handler(createSsrRpc("d5f845ce8413ef39fbc2a27441c7e367f265b8b412508dafff8a558169e53308"));
const updatePrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchemaWithValidation).handler(createSsrRpc("59fb969987f554a477b79925edc0b2f891912870229b09df4b3a714339bc9b2a"));
const doublePrediction = createServerFn({
  method: "POST"
}).inputValidator(PredictionSchema.pick({
  id: true
}).extend({
  doubleAmt: z__default.number()
})).handler(createSsrRpc("b2fd87a3100fff43e85ee1858e01b9e4a3581ce46a6c227e866525b6b5ac66b8"));
const predKeys = {
  all: ["predictions"],
  userMatchPred: (matchNum) => ["predictions", "curr-user", "match", matchNum],
  matchPreds: (matchNum) => ["predictions", "match", matchNum],
  userPreds: (userId) => ["predictions", "user", userId]
};
const matchPredsQueryOptions = (matchNum) => queryOptions({
  queryKey: predKeys.matchPreds(matchNum),
  queryFn: () => getMatchPredictions({ data: { number: matchNum } }),
  staleTime: 1e3 * 60 * 60 * 24
});
const currUserMatchPredQueryOptions = (matchNum) => queryOptions({
  queryKey: predKeys.userMatchPred(matchNum),
  queryFn: () => getUserPredictionForMatch({ data: { number: matchNum } }),
  staleTime: 1e3 * 60 * 60 * 24
});
const userPredsQueryOptions = (userId) => queryOptions({
  queryKey: predKeys.userPreds(userId),
  queryFn: () => getUserPredictions({ data: { clerkId: userId } }),
  staleTime: 1e3 * 60 * 60 * 24
});
const $$splitComponentImporter$1 = () => import("./matches._matchNum-DQ1AvCvG.mjs");
const Route$1 = createFileRoute("/matches/$matchNum")({
  parseParams: (params) => ({
    matchNum: Number(params.matchNum)
    // Validates/converts to number
  }),
  beforeLoad: async () => {
    const {
      userId
    } = await getIsAuthenticated();
    return {
      loggedInUserId: userId
    };
  },
  loader: async ({
    context,
    params
  }) => {
    await context.queryClient.ensureQueryData(matchByNumQueryOptions(params.matchNum));
    await context.queryClient.ensureQueryData(matchPredsQueryOptions(params.matchNum));
    await context.queryClient.ensureQueryData(currUserMatchPredQueryOptions(params.matchNum));
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./dashboard._-_userId_-clc-OsZa.mjs");
const Route = createFileRoute("/dashboard/{-$userId}")({
  beforeLoad: async ({
    location
  }) => {
    const {
      isAuthenticated,
      userId
    } = await getIsAuthenticated();
    if (!isAuthenticated) redirect({
      to: "/sign-in/$",
      search: {
        redirectUrl: location.href
      }
    });
    return {
      loggedInUserId: userId
    };
  },
  loader: async ({
    context,
    params
  }) => {
    await context.queryClient.ensureQueryData(allUsersQueryOptions);
    await context.queryClient.ensureQueryData(fixturesQueryOptions());
    await context.queryClient.ensureQueryData(resultsQueryOptions());
    await context.queryClient.ensureQueryData(userPredsQueryOptions(params.userId ?? context.loggedInUserId));
    if (params.userId) await context.queryClient.ensureQueryData(dBUserQueryOptions(params.userId));
    else await context.queryClient.ensureQueryData(currDBUserQueryOptions());
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RulesRoute = Route$6.update({
  id: "/rules",
  path: "/rules",
  getParentRoute: () => Route$7
});
const AdminRoute = Route$5.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const SignUpSplatRoute = Route$3.update({
  id: "/sign-up/$",
  path: "/sign-up/$",
  getParentRoute: () => Route$7
});
const SignInSplatRoute = Route$2.update({
  id: "/sign-in/$",
  path: "/sign-in/$",
  getParentRoute: () => Route$7
});
const MatchesMatchNumRoute = Route$1.update({
  id: "/matches/$matchNum",
  path: "/matches/$matchNum",
  getParentRoute: () => Route$7
});
const DashboardChar123UserIdChar125Route = Route.update({
  id: "/dashboard/{-$userId}",
  path: "/dashboard/{-$userId}",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  RulesRoute,
  DashboardChar123UserIdChar125Route,
  MatchesMatchNumRoute,
  SignInSplatRoute,
  SignUpSplatRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const rqContext = getContext();
  const router2 = createRouter({
    routeTree,
    context: {
      ...rqContext
    },
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFoundPage, {})
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient: rqContext.queryClient
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
const routerCJYt2Yz5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A: router,
  B: Button,
  R: Route$1,
  S: Skeleton,
  a: allUsersQueryOptions,
  b: allTeamsQueryOptions,
  c: cn,
  d: addDefaultBetsForMatch,
  e: reverseBetsForMatch,
  f: addPrediction,
  g: updatePrediction,
  h: doublePrediction,
  i: currUserMatchPredQueryOptions,
  j: currDBUserQueryOptions,
  k: matchByNumQueryOptions,
  l: matchPredsQueryOptions,
  m: matchKeys,
  n: Route,
  o: userFormQueryOptions,
  p: predKeys,
  q: userPredsQueryOptions,
  r: resultsQueryOptions,
  s: userKeys,
  t: teamFormQueryOptions,
  u: updateMatch,
  v: fixturesQueryOptions,
  w: amountFormatter,
  x: winnerPredByNumQueryOptions,
  y: buttonVariants,
  z: formatDate
});
export {
  buttonVariants as A,
  Button as B,
  ArrowRight as C,
  routerCJYt2Yz5 as D,
  Route$1 as R,
  Skeleton as S,
  allUsersQueryOptions as a,
  allTeamsQueryOptions as b,
  cn as c,
  matchPredsQueryOptions as d,
  currDBUserQueryOptions as e,
  currUserMatchPredQueryOptions as f,
  addDefaultBetsForMatch as g,
  matchKeys as h,
  reverseBetsForMatch as i,
  addPrediction as j,
  doublePrediction as k,
  updateMatch as l,
  matchByNumQueryOptions as m,
  createLucideIcon as n,
  Route as o,
  predKeys as p,
  userPredsQueryOptions as q,
  resultsQueryOptions as r,
  userFormQueryOptions as s,
  teamFormQueryOptions as t,
  updatePrediction as u,
  userKeys as v,
  fixturesQueryOptions as w,
  winnerPredByNumQueryOptions as x,
  amountFormatter as y,
  formatDate as z
};

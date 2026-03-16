import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, b as useMatch, E as ErrorComponent, L as Link, d as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, e as useLocation } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { E as redirect, k as rootRouteId } from "../_chunks/_libs/@tanstack/router-core.mjs";
import { s as setupRouterSsrQueryIntegration } from "../_chunks/_libs/@tanstack/react-router-ssr-query.mjs";
import { S as Slot } from "../_chunks/_libs/@radix-ui/react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as QueryClient } from "../_chunks/_libs/@tanstack/query-core.mjs";
import { q as queryOptions } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { C as ClerkProvider, S as SignedIn, U as UserButton, a as SignedOut } from "../_chunks/_libs/@clerk/clerk-react.mjs";
import { A as ADMINROLE, M as MatchSchema, P as ProfileSchema, T as TEAMNAMES, b as PredictionSchemaWithValidation, a as PredictionSchema } from "./schemas-CG-vrJKh.mjs";
import { I as Image } from "../_chunks/_libs/@unpic/react.mjs";
import { g as getIsAuthenticated, c as createSsrRpc, a as getAllUsersFromDB, b as getUserByIdFromDB, d as getCurrUserFromDB, e as getUserFormById } from "./services-D737QxMl.mjs";
import { u as union, l as literal, z } from "../_libs/zod.mjs";
import { c as createServerFn } from "./index.mjs";
import { d as distExports } from "../_chunks/_libs/@clerk/themes.mjs";
import { F as Fe } from "../_libs/react-hot-toast.mjs";
import { F as FileQuestionMark, H as House, L as LayoutDashboard, U as UserKey, a as Handshake, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { K as useUser } from "../_chunks/_libs/@clerk/shared.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_chunks/_libs/@tanstack/router-ssr-query-core.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_chunks/_libs/@unpic/core.mjs";
import "../_libs/unpic.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/goober.mjs";
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: () => {
            router2.invalidate();
          },
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestionMark, { className: "mx-auto h-24 w-24 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-4xl tracking-tight", children: "Page not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center gap-2 sm:flex-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Return home" }) }) })
  ] }) });
}
function getContext() {
  const queryClient = new QueryClient();
  return {
    queryClient
  };
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function Logo({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center ipl-logo relative w-25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: cn(
        "sticky inset-x-0 top-0 z-99 px-4 items-center flex transition-colors duration-400 ease-in-out h-12",
        "bg-linear-to-br from-primary/95 via-primary/90 to-primary/80"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center justify-between mx-auto max-w-360 w-full h-full py-4 md:py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "w-20 h-full relative hidden md:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-8 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "/",
              title: "Home",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "md:hidden text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SignedIn, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                href: "/dashboard",
                title: "Dashboard",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "md:hidden  text-primary-foreground" })
              }
            ),
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                href: "/admin",
                title: "Admin",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserKey, { className: "md:hidden text-primary-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "/rules",
              title: "Rules",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "md:hidden text-primary-foreground" })
            }
          )
        ] }),
        !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-18" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignedIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UserButton.MenuItems, { children: [
          isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
            UserButton.Link,
            {
              label: "Admin",
              labelIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserKey, {}),
              href: "/admin"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserButton.Action, { label: "signOut" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignedOut, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sign-in/$", className: "flex items-center", children: [
          "Let's Play ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: href, className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:flex  font-semibold", children: title }),
    icon,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
const postThemeValidator = union([literal("light"), literal("dark")]);
const getThemeServerFn = createServerFn().handler(createSsrRpc("d00cdee145bfed0516ecf734c86ce9e5be4ed2c0858d4eb37ac33b7c19ca2514"));
const setThemeServerFn = createServerFn({
  method: "POST"
}).inputValidator(postThemeValidator).handler(createSsrRpc("218549d3b403ba49a45208d3aabf08ce8ba92042dc51c0281e152f5eab9f4d6f"));
const ThemeContext = reactExports.createContext(null);
function ThemeProvider({ children, theme }) {
  const router2 = useRouter();
  function setTheme(val) {
    setThemeServerFn({ data: val }).then(() => router2.invalidate());
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext, { value: { theme, setTheme }, children });
}
const PUBLISHABLE_KEY = "pk_test_ZnJlc2gtcG9zc3VtLTI3LmNsZXJrLmFjY291bnRzLmRldiQ";
function AppClerkProvider({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ClerkProvider,
    {
      publishableKey: PUBLISHABLE_KEY,
      afterSignOutUrl: "/",
      appearance: {
        baseTheme: distExports.dark,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Fe,
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
const appCss = "/assets/styles-DUY7ns7E.css";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: theme, suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppClerkProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid min-h-screen grid-rows-[auto_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto w-full", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReactHotToast, {})
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./rules-CrLGJlRo.mjs");
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
const $$splitComponentImporter$5 = () => import("./admin-DIZyCcgc.mjs");
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
}).inputValidator(z.object({
  team: z.enum(TEAMNAMES)
})).handler(createSsrRpc("88805ca389e04a8a31005a2dec201bebf2a0fd5c9f4f14d1f2128d32ab351fda"));
createServerFn({
  method: "GET"
}).inputValidator(z.object({
  team: z.enum(TEAMNAMES)
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
const $$splitComponentImporter$4 = () => import("./index-JlRZPvO-.mjs");
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
const $$splitComponentImporter$3 = () => import("./sign-up._-DL1X_XfZ.mjs");
const Route$3 = createFileRoute("/sign-up/$")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./sign-in._-QE9vuInN.mjs");
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
  doubleAmt: z.number()
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
const $$splitComponentImporter$1 = () => import("./matches._matchNum-DCRZqHAe.mjs");
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
const $$splitComponentImporter = () => import("./dashboard._-_userId_-B_FPy4bA.mjs");
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
    defaultNotFoundComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
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
export {
  router as A,
  Button as B,
  Route$1 as R,
  Skeleton as S,
  allUsersQueryOptions as a,
  allTeamsQueryOptions as b,
  cn as c,
  addDefaultBetsForMatch as d,
  reverseBetsForMatch as e,
  addPrediction as f,
  updatePrediction as g,
  doublePrediction as h,
  currUserMatchPredQueryOptions as i,
  currDBUserQueryOptions as j,
  matchByNumQueryOptions as k,
  matchPredsQueryOptions as l,
  matchKeys as m,
  Route as n,
  userFormQueryOptions as o,
  predKeys as p,
  userPredsQueryOptions as q,
  resultsQueryOptions as r,
  userKeys as s,
  teamFormQueryOptions as t,
  updateMatch as u,
  fixturesQueryOptions as v,
  amountFormatter as w,
  winnerPredByNumQueryOptions as x,
  buttonVariants as y,
  formatDate as z
};

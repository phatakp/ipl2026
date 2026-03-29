import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { a as useQuery, u as useSuspenseQuery } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { C as CurrentMatchCard, a as CurrentMatchLoader, M as MatchCarouselLoader, b as MatchCarousel } from "./match-carousel-loader-CEBkzrQB.mjs";
import { B as Background } from "./background-sTHMi1Po.mjs";
import { B as Badge } from "./badge-CjiRZVc8.mjs";
import { C as Card } from "./card-C7bJpo-A.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_chunks/_libs/@radix-ui/react-tabs.mjs";
import { S as Skeleton, c as cn, b as allTeamsQueryOptions, C as CloudImage, r as resultsQueryOptions } from "./router-DP86RmCx.mjs";
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
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/date-fns.mjs";
import "../_chunks/_libs/@date-fns/tz.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-roving-focus.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@tanstack/react-router-ssr-query.mjs";
import "../_chunks/_libs/@tanstack/router-ssr-query-core.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_chunks/_libs/@clerk/clerk-react.mjs";
import "../_chunks/_libs/@clerk/shared.mjs";
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
import "./schemas-pJJa3z0V.mjs";
import "../_libs/zod.mjs";
import "../_chunks/_libs/@cloudinary/react.mjs";
import "../_chunks/_libs/@cloudinary/transformation-builder-sdk.mjs";
import "./services-DjdOH3KL.mjs";
import "./index.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_chunks/_libs/@clerk/themes.mjs";
import "../_libs/react-hot-toast.mjs";
import "../_libs/goober.mjs";
import "../_chunks/_libs/@cloudinary/url-gen.mjs";
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-primary text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
function PointsTable() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title", children: "Points Table" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "short", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "short", children: "Short" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "full", children: "Full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "form", children: "Form" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "short", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PointsCard, { type: "short" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PointsCard, { type: "full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "form", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PointsCard, { type: "form" }) })
    ] })
  ] });
}
function PointsCard({
  type,
  className
}) {
  const { data: teams } = useSuspenseQuery(allTeamsQueryOptions());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn(
        "p-0 w-[calc(100vw-32px)] lg:w-full overflow-scroll  pb-4 pr-4",
        className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 h-10 text-sm font-medium px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rank, { i: 0, heading: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TeamRow, { type, heading: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: teams.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-4 text-sm h-10",
                i === 3 && "border-b"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("w-1 rounded-r-sm h-6", i < 4 && "bg-primary")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rank, { i }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TeamRow, { type, t })
              ]
            },
            t.shortName
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col overflow-scroll w-full"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center  gap-4 font-medium h-10",
                type !== "full" && "justify-end lg:justify-start xl:justify-end"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "min-w-4 text-right",
                      type === "form" && "lg:hidden xl:flex"
                    ),
                    children: "Pl"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "min-w-5 text-right",
                      type === "form" && "lg:hidden xl:flex"
                    ),
                    children: "Pts"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-10 text-right", type === "form" && "hidden"),
                    children: "NRR"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Wn"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Ls"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Dr"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-15 text-right", type !== "full" && "hidden"),
                    children: "For"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-15 text-right", type !== "full" && "hidden"),
                    children: "Against"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn("min-w-18", type === "short" ? "hidden" : "flex"),
                    children: "Form"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: teams.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-4 text-sm h-10 font-extralight",
                i === 3 && "border-b",
                type !== "full" && "justify-end lg:justify-start xl:justify-end"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.played.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["form"],
                    hideClass: "lg:hidden xl:flex"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.points.toString(),
                    className: "min-w-5 justify-end",
                    hide: ["form"],
                    hideClass: "lg:hidden xl:flex"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.nrr >= 0 ? `+${t.nrr.toFixed(3)}` : t.nrr.toFixed(3),
                    className: cn(
                      "min-w-10 justify-end",
                      t.nrr < 0 && "text-destructive",
                      t.nrr > 0 && "text-success"
                    ),
                    hide: ["form"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.won.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.lost.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: t.draw.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: `${t.forRuns} / ${t.forBalls}`,
                    className: "min-w-15 justify-end",
                    hide: ["form", "short"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TeamStat,
                  {
                    type,
                    value: `${t.againstRuns} / ${t.againstBalls}`,
                    className: "min-w-15 justify-end",
                    hide: ["form", "short"]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormStat, { type, team: t })
              ]
            },
            i
          )) })
        ] })
      ] })
    }
  );
}
const TeamStat = ({
  type,
  value,
  className,
  hide,
  hideClass
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        className,
        hide?.includes(type) ? hideClass ?? "hidden" : "flex"
      ),
      children: value
    }
  );
};
const Rank = ({ i, heading }) => {
  if (heading) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-4", children: "Pos" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-4 font-semibold", children: (i + 1).toString().padStart(2, "0") });
};
const TeamRow = ({
  t,
  heading,
  type
}) => {
  if (heading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("md:w-54 w-16", type === "full" && "lg:w-16"), children: "Team" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1",
        "md:w-54 w-16",
        type === "full" && "lg:w-16"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CloudImage, { name: `${t?.shortName}_team`, height: 24, width: 24 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex md:hidden", type === "full" && "lg:flex"), children: t?.shortName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("md:flex hidden ", type === "full" && "lg:hidden"), children: t?.fullName })
      ]
    }
  );
};
const FormStat = ({
  type,
  team
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1 min-w-18",
        type === "short" ? "hidden" : "flex"
      ),
      children: [
        team.form?.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: f.status === "WON" ? "success" : f.status === "LOST" ? "destructive" : "outline",
            className: "rounded-full size-4",
            children: f.status.charAt(0)
          },
          i
        )),
        team.form?.length <= 0 && [1, 2, 3].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "rounded-full size-4 py-2",
            children: "-"
          },
          f
        ))
      ]
    }
  );
};
function PointsTableLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title", children: "Points Table" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-col flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-7" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: cn("p-4 w-[calc(100vw-32px)] lg:w-full overflow-scroll"),
          children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 my-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-[10%] h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-[70%] h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-[10%] h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-[10%] h-6" })
          ] }, i))
        }
      )
    ] })
  ] });
}
function App() {
  const {
    data: results,
    isLoading
  } = useQuery(resultsQueryOptions());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Background, { type: "dot", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-8 gap-4 items-start justify-start w-full py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 order-2 lg:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PointsTableLoader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PointsTable, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentMatchLoader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentMatchCard, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 order-3 lg:px-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MatchCarouselLoader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(MatchCarousel, { matches: results ?? [], title: "Match Results" }) })
  ] }) });
}
export {
  App as component
};

import { jsxs, jsx } from "react/jsx-runtime";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { C as CurrentMatchCard, M as MatchCarousel } from "./match-carousel-BeNjTgpI.mjs";
import { Image } from "@unpic/react";
import { C as Card } from "./card-Sg4XhBjI.mjs";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { r as resultsQueryOptions, c as cn, b as allTeamsQueryOptions, t as teamFormQueryOptions } from "./router-CJYt2Yz5.mjs";
import { B as Badge } from "./badge-Dh2tF0tC.mjs";
import "@date-fns/tz";
import "@tanstack/react-router";
import "date-fns";
import "@cloudinary/url-gen/actions/resize";
import "@cloudinary/url-gen/index";
import "embla-carousel-react";
import "@tanstack/react-router-ssr-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@clerk/clerk-react";
import "./schemas-CG-vrJKh.mjs";
import "zod/v4";
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
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
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
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
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
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
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
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
function PointsTable() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 w-full", children: [
    /* @__PURE__ */ jsx("span", { className: "title", children: "Points Table" }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "short", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "short", children: "Short" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "full", children: "Full" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "form", children: "Form" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "short", children: /* @__PURE__ */ jsx(PointsCard, { type: "short" }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "full", children: /* @__PURE__ */ jsx(PointsCard, { type: "full" }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "form", children: /* @__PURE__ */ jsx(PointsCard, { type: "form" }) })
    ] })
  ] });
}
function PointsCard({
  type,
  className
}) {
  const { data: teams } = useSuspenseQuery(allTeamsQueryOptions());
  return /* @__PURE__ */ jsx(
    Card,
    {
      className: cn(
        "p-0 w-[calc(100vw-32px)] lg:w-full overflow-scroll  pb-4 pr-4",
        className
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex gap-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 h-10 text-sm font-medium px-4", children: [
            /* @__PURE__ */ jsx(Rank, { i: 0, heading: true }),
            /* @__PURE__ */ jsx(TeamRow, { type, heading: true })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: teams.map((t, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-4 text-sm h-10",
                i === 3 && "border-b"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("w-1 rounded-r-sm h-6", i < 4 && "bg-primary")
                  }
                ),
                /* @__PURE__ */ jsx(Rank, { i }),
                /* @__PURE__ */ jsx(TeamRow, { type, t })
              ]
            },
            t.shortName
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col overflow-scroll w-full"), children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center  gap-4 font-medium h-10",
                type !== "full" && "justify-end lg:justify-start xl:justify-end"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn(
                      "min-w-4 text-right",
                      type === "form" && "lg:hidden xl:flex"
                    ),
                    children: "Pl"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn(
                      "min-w-5 text-right",
                      type === "form" && "lg:hidden xl:flex"
                    ),
                    children: "Pts"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-10 text-right", type === "form" && "hidden"),
                    children: "NRR"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Wn"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Ls"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-4 text-right", type !== "full" && "hidden"),
                    children: "Dr"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-15 text-right", type !== "full" && "hidden"),
                    children: "For"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-15 text-right", type !== "full" && "hidden"),
                    children: "Against"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("min-w-18", type === "short" ? "hidden" : "flex"),
                    children: "Form"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: teams.map((t, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-4 text-sm h-10 font-extralight",
                i === 3 && "border-b",
                type !== "full" && "justify-end lg:justify-start xl:justify-end"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: t.played.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["form"],
                    hideClass: "lg:hidden xl:flex"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: t.points.toString(),
                    className: "min-w-5 justify-end",
                    hide: ["form"],
                    hideClass: "lg:hidden xl:flex"
                  }
                ),
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: t.won.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: t.lost.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: t.draw.toString(),
                    className: "min-w-4 justify-end",
                    hide: ["short", "form"]
                  }
                ),
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: `${t.forRuns} / ${t.forBalls}`,
                    className: "min-w-15 justify-end",
                    hide: ["form", "short"]
                  }
                ),
                /* @__PURE__ */ jsx(
                  TeamStat,
                  {
                    type,
                    value: `${t.againstRuns} / ${t.againstBalls}`,
                    className: "min-w-15 justify-end",
                    hide: ["form", "short"]
                  }
                ),
                /* @__PURE__ */ jsx(FormStat, { type, team: t })
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
  return /* @__PURE__ */ jsx(
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
  if (heading) return /* @__PURE__ */ jsx("span", { className: "min-w-4", children: "Pos" });
  return /* @__PURE__ */ jsx("span", { className: "min-w-4 font-semibold", children: (i + 1).toString().padStart(2, "0") });
};
const TeamRow = ({
  t,
  heading,
  type
}) => {
  if (heading)
    return /* @__PURE__ */ jsx("span", { className: cn("md:w-54 w-16", type === "full" && "lg:w-16"), children: "Team" });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1",
        "md:w-54 w-16",
        type === "full" && "lg:w-16"
      ),
      children: [
        /* @__PURE__ */ jsx(
          Image,
          {
            src: `./${t?.shortName}.avif`,
            height: 24,
            width: 24,
            alt: "team1"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: cn("flex md:hidden", type === "full" && "lg:flex"), children: t?.shortName }),
        /* @__PURE__ */ jsx("span", { className: cn("md:flex hidden ", type === "full" && "lg:hidden"), children: t?.fullName })
      ]
    }
  );
};
const FormStat = ({
  type,
  team
}) => {
  const { data: form } = useSuspenseQuery(
    teamFormQueryOptions(team.shortName)
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex items-center gap-1 min-w-18",
        type === "short" ? "hidden" : "flex"
      ),
      children: form?.map((f, i) => /* @__PURE__ */ jsx(
        Badge,
        {
          variant: f.status === "WON" ? "success" : f.status === "LOST" ? "destructive" : "outline",
          className: "rounded-full size-4",
          children: f.status.charAt(0)
        },
        i
      ))
    }
  );
};
function App() {
  const {
    data: results
  } = useQuery(resultsQueryOptions());
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-8 gap-4 items-start justify-start w-full py-8 px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 order-2 lg:order-1", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Points Table..." }), children: /* @__PURE__ */ jsx(PointsTable, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-1 lg:order-2", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Current Match..." }), children: /* @__PURE__ */ jsx(CurrentMatchCard, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 order-3 lg:px-4", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Results..." }), children: /* @__PURE__ */ jsx(MatchCarousel, { matches: results ?? [], title: "Results" }) }) })
  ] });
}
export {
  App as component
};

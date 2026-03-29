import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BisBhWlh.mjs";
import { B as Badge } from "./badge-CjiRZVc8.mjs";
import { T as Table, a as TableCaption, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./table-DQzdHFTA.mjs";
import "./router-DP86RmCx.mjs";
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
import "../_chunks/_libs/@tanstack/react-router-ssr-query.mjs";
import "../_chunks/_libs/@tanstack/react-query.mjs";
import "../_chunks/_libs/@tanstack/query-core.mjs";
import "../_chunks/_libs/@tanstack/router-ssr-query-core.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_chunks/_libs/@cloudinary/url-gen.mjs";
import "../_chunks/_libs/@radix-ui/react-accordion.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-collapsible.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 w-[calc(100vw-1rem)] md:w-full py-8 px-4 max-w-7xl mx-auto ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title", children: "Game Rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-1", className: "border-none py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-pretty py-4 font-normal title", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-inside list-disc space-y-4 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Every player will need to predict the overall IPL winner." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "An automatic stake of 500 points will be applicable for the IPL Winner, to be settled after final match." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Each player also to receive 5 double plays",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-2 font-semibold", children: "(only applicable for league phase)" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            ". This doubles the winning/lost points for the match.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-2 font-semibold text-foreground", children: "(additional details in settlement section below)" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-2", className: "border-none py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Prediction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-pretty py-4 font-normal title", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-inside list-disc space-y-4 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prediction should be made atleast 30 mins before start of each match." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "my-2 italic text-foreground underline", children: "Start of match will be as per schedule (and will not change in case of any weather delays)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "If you miss the cutoff for prediction, default stake equivalent to min stake for the match will be deducted from your account." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Minimum Stake is applicable for each match as below.",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCaption, { children: "Minimum Stakes at each phase of tournament" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Match type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Minimum Stake" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "League Phase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: "50 points" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "Qualifiers/Eliminator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: "100 points" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "Final" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: "200 points" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Double can be played only after start of match and up until 30 mins post start of match." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Minimum Double points will be 2x of current highest stake for the match. If current highest stake is 60, minimum double will be 120 points." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-foreground", children: [
            "Doubles can be overridden by another double (but will need 2x of current double points as stake.) ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Applicable points will be displayed at time of placing double."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-3", className: "border-none py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-pretty py-4 font-normal title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-inside list-disc space-y-4 text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Prediction can be changed as per below rule -",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCaption, { children: "Prediction Change rules" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Change type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Rule" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "Increase of points at stake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Allowed until start of match" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "Reduction of points at stake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Allowed until 30 mins prior to start of match" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "Team Change" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Until 30 mins prior to start of match. -",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Free" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "From 30 mins prior to until start of match -",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Points at stake should be 2x the current stake." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "After start of match -",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Not allowed." })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "IPL Winner Change" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                  "Allowed until completion of Match 50.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "my-2 text-foreground underline", children: "(Use Update Profile Button on Dashboard Page)" })
                ] })
              ] })
            ] })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-4", className: "border-none py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans", children: "Settlement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-pretty py-4 font-normal title", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-inside list-disc space-y-4 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Settlement to be done as per below rules -",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Rule" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If lost (no double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Points at stake to be debited from balance." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If defaulted (no double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    "Min Stake points for match to be debited from balance",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                      " ",
                      "(irrespective of match result)."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If won (no double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Credit Points = (Your Stake / Total of Winning points) x Total of Losing points" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If lost (double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    "2 x Stake points to be debited from balance",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                      " ",
                      "(only if double was won by someone)."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If defaulted (double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    "2 x Min Stake points for match to be debited from balance",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                      " ",
                      "(irrespective of match result but only if double was won by someone)."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "If won (double played)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    "Credit Points =",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                      " ",
                      "Total Losing Stake Points"
                    ] }),
                    " ",
                    "+ ((Your Stake / Total Winning stake points) x Total Losing stake points)"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Below table shows sample calculations for CSK vs SRH match -",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCaption, { children: "In case no double is played" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Player" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "If CSK Wins" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "If SRH Wins" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+49.1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+81.8" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-50" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+24.4" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+49.1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 80" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-80" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+48.9" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 60" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-60" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+36.7" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCaption, { children: "When double is played" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Player" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "If CSK Wins" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "If SRH Wins" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+36.0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "relative font-medium", children: [
                    "P2",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", className: "absolute right-0 top-1/2 -translate-y-1/2 px-2 md:right-4", children: "D" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 90" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+288.0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-180" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-80" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+33.3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "CSK 30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+36.0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 80" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-160" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+66.6" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: "P6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "SRH 60" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-destructive", children: "-120" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-success", children: "+49.9" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  RouteComponent as component
};

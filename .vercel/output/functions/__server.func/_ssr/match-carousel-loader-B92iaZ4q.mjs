import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { u as useSuspenseQuery } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { g as Carousel, h as CarouselContent, i as CarouselItem, a as CloudImage, C as Card, k as CarouselPrevious, l as CarouselNext } from "./card-M1dJ9UHe.mjs";
import { B as Button, S as Skeleton, s as fixturesQueryOptions } from "./router-1uHAjvfv.mjs";
import { c as cn } from "./utils-B5VFS_qv.mjs";
import { B as Badge } from "./badge-C7LX2Hb0.mjs";
import { c as Calendar, P as Pin, b as CircleArrowOutUpRight, e as ChevronRight } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { T as TZDate } from "../_chunks/_libs/@date-fns/tz.mjs";
function CurrentMatchCard() {
  const [mainApi, setMainApi] = reactExports.useState();
  const [thumbApi, setThumbApi] = reactExports.useState();
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const { data: fixtures } = useSuspenseQuery(fixturesQueryOptions());
  const onThumbClick = reactExports.useCallback(
    (index) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );
  const onSelect = reactExports.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);
  reactExports.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl md:hidden", children: "Next Fixtures" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Carousel, { setApi: setMainApi, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: fixtures.map((match, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/matches/$matchNum",
        params: { matchNum: match.number },
        className: "shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-4 pt-0 flex flex-col gap-4 bg-[url('/bg.jpg')] bg-no-repeat bg-cover",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground mx-auto text-sm md:text-lg px-4 rounded-b-sm flex items-center justify-center w-fit gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: match.type === "LEAGUE" ? `Match #${match.number}` : match.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: match.venue })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CloudImage,
              {
                name: "batsman",
                height: 200,
                width: 200,
                className: "hidden md:block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CloudImage,
              {
                name: "batsman",
                height: 150,
                width: 150,
                className: "md:hidden"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 z-10 w-full sm:items-center pt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:justify-center sm:flex-row sm:items-center w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl md:text-4xl font-team", children: match.homeTeam.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-versus px-2 text-lg md:text-xl", children: "v/s" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl md:text-4xl font-team", children: match.awayTeam.fullName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-muted-foreground size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                format(
                  new TZDate(
                    `${match.date}T${match.time}+05:30`,
                    "Asia/Kolkata"
                  ),
                  "PPP p"
                ),
                " ",
                "IST"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "text-muted-foreground size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: match.venue })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-fit", children: "Match Details" })
          ] })
        ]
      }
    ) }) }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Carousel,
      {
        setApi: setThumbApi,
        opts: {
          containScroll: "keepSnaps",
          dragFree: true
        },
        className: "w-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-2 flex-row", children: fixtures.map((match, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CarouselItem,
          {
            className: "basis-1/5 cursor-pointer pl-2 sm:basis-1/6 py-1",
            onClick: () => onThumbClick(index),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "rounded-lg relative aspect-square overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-card",
                  index === selectedIndex ? "border-primary opacity-100" : "shadow opacity-80 hover:opacity-100"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full", children: match.type === "LEAGUE" ? `Match ${match.number}` : match.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-sm md:text-base font-team", children: match.homeTeam.shortName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "vs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-sm md:text-base font-team", children: match.awayTeam.shortName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground hidden lg:flex items-center gap-2 text-sm md:py-1 absolute bottom-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(
                      new TZDate(
                        `${match.date}T${match.time}+05:30`,
                        "Asia/Kolkata"
                      ),
                      "MMM,dd"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(
                      new TZDate(
                        `${match.date}T${match.time}+05:30`,
                        "Asia/Kolkata"
                      ),
                      "p"
                    ) })
                  ] })
                ]
              }
            )
          },
          index
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-2", children: [
      "Swipe to see next fixtures ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowOutUpRight, { className: "size-4" })
    ] })
  ] });
}
function CurrentMatchLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl md:hidden", children: "Next Fixtures" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full h-[40vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-4 pt-0 flex flex-col gap-4 bg-[url('/bg.jpg')] bg-no-repeat bg-cover", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary text-primary-foreground mx-auto text-sm md:text-lg px-4 rounded-b-sm flex items-center justify-center w-fit gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CloudImage,
          {
            name: "batsman",
            height: 200,
            width: 200,
            className: "hidden md:block"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CloudImage,
          {
            name: "batsman",
            height: 150,
            width: 150,
            className: "md:hidden"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 z-10 w-full sm:items-center pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:justify-center sm:flex-row sm:items-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-48 h-12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-versus px-2 text-lg md:text-xl", children: "v/s" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-48 h-12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-muted-foreground size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-72 h-6" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "text-muted-foreground size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-48 h-6" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-8" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-12 md:size-48" })
    ] })
  ] });
}
function MatchCarouselItem({ match }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/matches/$matchNum", params: { matchNum: match.number }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute flex items-center -translate-x-3  -rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-b-none rounded-t-full text-base px-4", children: match.type === "LEAGUE" ? `#${match.number}` : match.type }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "w-full py-2 px-4 flex items-center justify-center gap-6"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CloudImage,
              {
                name: `${match.homeTeam.shortName}_team`,
                width: 40,
                height: 40
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "title text-2xl font-team",
                  match.homeTeam.shortName === match.winner?.shortName && "text-success"
                ),
                children: match.homeTeam.shortName
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              format(
                new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
                "p"
              ),
              " ",
              "IST"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: format(
              new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
              "MMM, dd"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CloudImage,
              {
                name: `${match.awayTeam.shortName}_team`,
                width: 40,
                height: 40
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "title text-2xl font-team",
                  match.awayTeam.shortName === match.winner?.shortName && "text-success"
                ),
                children: match.awayTeam.shortName
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "absolute right-2 top-1/2 -translate-y-1/2 text-foreground" })
  ] }) });
}
function MatchCarousel({ matches, title }) {
  if (matches.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 w-full py-4 rounded-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        opts: {
          align: "end"
        },
        orientation: "vertical",
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "h-90 md:h-150", children: matches.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CarouselItem,
            {
              className: "basis-1/3 md:basis-1/5 lg:basis-1/7",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchCarouselItem, { match: m })
            },
            m.number
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { hidden: matches.length < 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { hidden: matches.length < 4 })
        ]
      }
    )
  ] });
}
function MatchCarouselLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 w-full py-4 rounded-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl", children: "Match Results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " w-full h-90 md:h-150 overflow-hidden", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "p-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden w-full h-20 flex flex-row items-center justify-center gap-6 my-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-full size-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-6" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-full size-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-6" })
          ] })
        ]
      },
      i
    )) })
  ] });
}
export {
  CurrentMatchCard as C,
  MatchCarouselLoader as M,
  CurrentMatchLoader as a,
  MatchCarousel as b
};

import { jsxs, jsx } from "react/jsx-runtime";
import { TZDate } from "@date-fns/tz";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { useState, useCallback, useEffect } from "react";
import { g as Carousel, h as CarouselContent, i as CarouselItem, d as CloudImage, k as Calendar, l as CarouselPrevious, m as CarouselNext, C as Card, n as ChevronRight } from "./card-Sg4XhBjI.mjs";
import { n as createLucideIcon, w as fixturesQueryOptions, B as Button, c as cn } from "./router-CJYt2Yz5.mjs";
import { B as Badge } from "./badge-Dh2tF0tC.mjs";
const __iconNode$1 = [
  ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
  ["path", { d: "M22 2 12 12", key: "yg2myt" }],
  ["path", { d: "M16 2h6v6", key: "zan5cs" }]
];
const CircleArrowOutUpRight = createLucideIcon("circle-arrow-out-up-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
];
const Pin = createLucideIcon("pin", __iconNode);
function CurrentMatchCard() {
  const [mainApi, setMainApi] = useState();
  const [thumbApi, setThumbApi] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data: fixtures } = useSuspenseQuery(fixturesQueryOptions());
  const onThumbClick = useCallback(
    (index) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );
  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);
  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);
  return /* @__PURE__ */ jsxs("div", { className: "flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4", children: [
    /* @__PURE__ */ jsx("span", { className: "title text-2xl md:hidden", children: "Next Fixtures" }),
    /* @__PURE__ */ jsx(Carousel, { setApi: setMainApi, className: "w-full", children: /* @__PURE__ */ jsx(CarouselContent, { children: fixtures.map((match, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/matches/$matchNum",
        params: { matchNum: match.number },
        className: "shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-4 pt-0 flex flex-col gap-4 bg-[url('/bg.jpg')] bg-no-repeat bg-cover",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground mx-auto text-sm md:text-lg px-4 rounded-b-sm flex items-center justify-center w-fit gap-2", children: [
            /* @__PURE__ */ jsx("span", { children: match.type === "LEAGUE" ? `Match #${match.number}` : match.type }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "|" }),
            /* @__PURE__ */ jsx("span", { children: match.venue })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute right-0 bottom-0", children: [
            /* @__PURE__ */ jsx(
              CloudImage,
              {
                name: "batsman",
                height: 200,
                width: 200,
                className: "hidden md:block"
              }
            ),
            /* @__PURE__ */ jsx(
              CloudImage,
              {
                name: "batsman",
                height: 150,
                width: 150,
                className: "md:hidden"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 z-10 w-full sm:items-center pt-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:justify-center sm:flex-row sm:items-center w-full", children: [
              /* @__PURE__ */ jsx("span", { className: "title text-2xl md:text-4xl font-team", children: match.homeTeam.fullName }),
              /* @__PURE__ */ jsx("span", { className: "font-versus px-2 text-lg md:text-xl", children: "v/s" }),
              /* @__PURE__ */ jsx("span", { className: "title text-2xl md:text-4xl font-team", children: match.awayTeam.fullName })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "text-muted-foreground size-4" }),
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
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
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 ", children: [
              /* @__PURE__ */ jsx(Pin, { className: "text-muted-foreground size-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: match.venue })
            ] }),
            /* @__PURE__ */ jsx(Button, { className: "w-fit", children: "Match Details" })
          ] })
        ]
      }
    ) }) }, index)) }) }),
    /* @__PURE__ */ jsx(
      Carousel,
      {
        setApi: setThumbApi,
        opts: {
          containScroll: "keepSnaps",
          dragFree: true
        },
        className: "w-full",
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-2 flex-row", children: fixtures.slice(1).map((match, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "basis-1/5 cursor-pointer pl-2 sm:basis-1/6",
            onClick: () => onThumbClick(index),
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "rounded-lg relative aspect-square overflow-hidden border transition-all flex flex-col items-center justify-center",
                  index === selectedIndex ? "border-primary opacity-100" : "shadow opacity-40 hover:opacity-70"
                ),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full", children: match.type === "LEAGUE" ? `Match ${match.number}` : match.type }),
                  /* @__PURE__ */ jsx("span", { className: "title text-sm md:text-base font-team", children: match.homeTeam.shortName }),
                  /* @__PURE__ */ jsx("span", { children: "vs" }),
                  /* @__PURE__ */ jsx("span", { className: "title text-sm md:text-base font-team", children: match.awayTeam.shortName }),
                  /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground hidden lg:flex items-center gap-2 text-sm md:py-1 absolute bottom-0", children: [
                    /* @__PURE__ */ jsx("span", { children: format(
                      new TZDate(
                        `${match.date}T${match.time}+05:30`,
                        "Asia/Kolkata"
                      ),
                      "MMM,dd"
                    ) }),
                    /* @__PURE__ */ jsx("span", { children: format(
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
    /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground flex items-center gap-2", children: [
      "Swipe to see next fixtures ",
      /* @__PURE__ */ jsx(CircleArrowOutUpRight, { className: "size-4" })
    ] })
  ] });
}
function MatchCarouselItem({ match }) {
  return /* @__PURE__ */ jsx(Link, { to: "/matches/$matchNum", params: { matchNum: match.number }, children: /* @__PURE__ */ jsxs(Card, { className: "p-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute flex items-center -translate-x-3  -rotate-45", children: /* @__PURE__ */ jsx(Badge, { className: "rounded-b-none rounded-t-full text-base px-4", children: match.type === "LEAGUE" ? `#${match.number}` : match.type }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "w-full py-2 px-4 flex items-center justify-center gap-6"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsx(
              CloudImage,
              {
                name: `${match.homeTeam.shortName}_team`,
                width: 40,
                height: 40
              }
            ),
            /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center ", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
              format(
                new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
                "p"
              ),
              " ",
              "IST"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-base", children: format(
              new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
              "MMM, dd"
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsx(
              CloudImage,
              {
                name: `${match.awayTeam.shortName}_team`,
                width: 40,
                height: 40
              }
            ),
            /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(ChevronRight, { className: "absolute right-2 top-1/2 -translate-y-1/2 text-foreground" })
  ] }) });
}
function MatchCarousel({ matches, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 w-full py-4 rounded-sm", children: [
    /* @__PURE__ */ jsx("span", { className: "title text-2xl", children: title }),
    /* @__PURE__ */ jsxs(
      Carousel,
      {
        opts: {
          align: "end"
        },
        orientation: "vertical",
        className: "w-full",
        children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "h-90 md:h-150", children: matches.map((m) => /* @__PURE__ */ jsx(
            CarouselItem,
            {
              className: "basis-1/3 md:basis-1/5 lg:basis-1/7",
              children: /* @__PURE__ */ jsx(MatchCarouselItem, { match: m })
            },
            m.number
          )) }),
          /* @__PURE__ */ jsx(CarouselPrevious, { hidden: matches.length < 4 }),
          /* @__PURE__ */ jsx(CarouselNext, { hidden: matches.length < 4 })
        ]
      }
    )
  ] });
}
export {
  CurrentMatchCard as C,
  MatchCarousel as M,
  CircleArrowOutUpRight as a
};

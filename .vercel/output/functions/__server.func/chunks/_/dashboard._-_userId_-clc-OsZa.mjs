import { jsxs, jsx } from "react/jsx-runtime";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState, useCallback, useEffect } from "react";
import { C as CurrentMatchCard, M as MatchCarousel, a as CircleArrowOutUpRight } from "./match-carousel-BeNjTgpI.mjs";
import { P as PredCarousel, A as Amount, u as useAppForm, S as SelectItem } from "./hooks-CQ9wHICa.mjs";
import { useNavigate } from "@tanstack/react-router";
import { g as Carousel, h as CarouselContent, i as CarouselItem, C as Card, a as CardHeader, e as CardTitle, j as CardAction, d as CloudImage, b as CardContent, c as CardFooter } from "./card-Sg4XhBjI.mjs";
import { B as Badge } from "./badge-Dh2tF0tC.mjs";
import { n as createLucideIcon, o as Route, r as resultsQueryOptions, q as userPredsQueryOptions, a as allUsersQueryOptions, s as userFormQueryOptions, c as cn, B as Button } from "./router-CJYt2Yz5.mjs";
import { M as Modal } from "./modal-VNn8FiAx.mjs";
import { useUser } from "@clerk/clerk-react";
import { a as useUpsertProfile } from "./hooks-BS9dzBw6.mjs";
import { P as ProfileSchema, e as TEAMS } from "./schemas-CG-vrJKh.mjs";
import "@date-fns/tz";
import "date-fns";
import "@tanstack/react-form";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
import "react-day-picker";
import "@radix-ui/react-popover";
import "@radix-ui/react-select";
import "./chevron-down.mjs";
import "@cloudinary/url-gen/actions/resize";
import "@cloudinary/url-gen/index";
import "embla-carousel-react";
import "@radix-ui/react-slot";
import "@tanstack/react-router-ssr-query";
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
import "@radix-ui/react-dialog";
import "@radix-ui/react-scroll-area";
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode);
function ProfileForm({ profile }) {
  const { user } = useUser();
  const profileUser = {
    clerkId: profile?.clerkId || user?.id,
    firstName: profile?.firstName || user?.firstName,
    lastName: profile?.lastName || user?.lastName,
    email: profile?.email || user?.emailAddresses[0]?.emailAddress,
    imageUrl: profile?.imageUrl || user?.imageUrl,
    team: profile?.team,
    role: "PLAYER",
    balance: profile?.balance || 0,
    doublesLeft: profile?.doublesLeft || 5,
    isActive: !!profile?.isActive,
    update: !!profile?.clerkId
  };
  const { mutate } = useUpsertProfile();
  const form = useAppForm({
    defaultValues: profileUser,
    validators: {
      onSubmit: ProfileSchema
    },
    onSubmit: async ({ value }) => {
      mutate({ data: value });
    }
  });
  return /* @__PURE__ */ jsx(
    "form",
    {
      className: "flex flex-col gap-7",
      onSubmit: (e) => {
        e.preventDefault();
        form.handleSubmit();
      },
      children: /* @__PURE__ */ jsxs(form.AppForm, { children: [
        /* @__PURE__ */ jsx(form.ErrorMap, {}),
        /* @__PURE__ */ jsx(form.AppField, { name: "email", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "Email", isDisabled: true }) }),
        /* @__PURE__ */ jsx(form.AppField, { name: "firstName", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "First Name" }) }),
        /* @__PURE__ */ jsx(form.AppField, { name: "lastName", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "First Name" }) }),
        /* @__PURE__ */ jsx(form.AppField, { name: "team", children: (field) => /* @__PURE__ */ jsx(
          field.SelectField,
          {
            label: "IPL Winner Prediction",
            showClearButton: false,
            children: TEAMS.map((b) => /* @__PURE__ */ jsx(SelectItem, { value: b.shortName, children: b.longName }, b.shortName))
          }
        ) }),
        /* @__PURE__ */ jsx(form.SubmitButton, { label: "Submit", className: "w-full" })
      ] })
    }
  );
}
function ProfileBtn({ profile }) {
  return /* @__PURE__ */ jsx(
    Modal,
    {
      headerClass: cn(
        "bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 p-4 text-primary-foreground rounded-t-lg"
      ),
      closeBtnClass: "text-primary-foreground hover:text-accent/80",
      title: "Update Profile Details",
      initOpen: !profile?.clerkId,
      content: /* @__PURE__ */ jsx(ProfileForm, { profile }),
      children: /* @__PURE__ */ jsxs(Button, { size: "sm", className: "absolute right-4 bottom-4", children: [
        /* @__PURE__ */ jsx(Pen, {}),
        " Profile"
      ] })
    }
  );
}
function PlayerStandings() {
  const { userId } = Route.useParams();
  const { loggedInUserId } = Route.useRouteContext();
  const [mainApi, setMainApi] = useState();
  const [thumbApi, setThumbApi] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { data: players } = useSuspenseQuery(allUsersQueryOptions);
  const { data: form } = useQuery(
    userFormQueryOptions(userId ?? loggedInUserId)
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
  if (!players.length) return null;
  const curr = players.find((p) => p.clerkId === (userId ?? loggedInUserId));
  const rest = players.filter((p) => p.clerkId !== (userId ?? loggedInUserId));
  const users = [curr, ...rest];
  return /* @__PURE__ */ jsxs("div", { className: "flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4", children: [
    /* @__PURE__ */ jsx(Carousel, { setApi: setMainApi, className: "w-full", children: /* @__PURE__ */ jsx(CarouselContent, { children: users.map((user, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs(Card, { className: "shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-0 flex flex-col gap-4 ", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "rounded-t-lg  relative overflow-clip bg-primary text-primary-foreground py-2", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "font-team text-4xl pt-2", children: [
          "#",
          user?.rank
        ] }),
        /* @__PURE__ */ jsx(CardAction, { children: /* @__PURE__ */ jsx(CloudImage, { name: `${user?.team ?? "undefined"}_team` }) })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col pb-20 sm:pb-0", children: [
        /* @__PURE__ */ jsxs("span", { className: "title text-3xl font-team", children: [
          user?.firstName,
          " ",
          user?.lastName
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: form?.map((f, i) => /* @__PURE__ */ jsx(
          Badge,
          {
            variant: f.status === "WON" ? "success" : f.status === "LOST" ? "destructive" : "outline",
            className: "rounded-full size-6 text-base",
            children: f.status.charAt(0)
          },
          i
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between pb-4 w-full absolute bottom-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          Amount,
          {
            amount: user?.balance ?? 0,
            decimals: 2,
            decimalClass: "text-2xl",
            className: cn(
              "text-5xl",
              user?.balance && user.balance < 0 ? "text-destructive" : "text-success"
            ),
            containerClass: "justify-start"
          }
        ),
        user?.doublesLeft && /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
          "Doubles: ",
          user.doublesLeft
        ] })
      ] }) }) }),
      user?.clerkId && user.clerkId === loggedInUserId && /* @__PURE__ */ jsx(ProfileBtn, { profile: user })
    ] }) }) }, index)) }) }),
    /* @__PURE__ */ jsx(
      Carousel,
      {
        setApi: setThumbApi,
        opts: {
          containScroll: "keepSnaps",
          dragFree: true
        },
        className: "w-full",
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-2 flex-row", children: users.slice(1).map((u, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "basis-1/3 cursor-pointer pl-2 sm:basis-1/4",
            onClick: () => {
              navigate({
                to: "/dashboard/{-$userId}",
                params: {
                  userId: u?.clerkId === loggedInUserId ? void 0 : u?.clerkId
                }
              });
            },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "rounded-lg relative  aspect-video overflow-hidden border transition-all flex flex-col items-center justify-center p-4",
                  index === selectedIndex ? "border-primary opacity-100" : "shadow opacity-40 hover:opacity-70"
                ),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full", children: u?.rank }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm md:pt-2 md:text-base", children: u?.firstName }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm md:pb-8", children: u?.lastName }),
                  /* @__PURE__ */ jsx("div", { className: "text-muted-foreground hidden lg:flex flex-col items-center text-sm md:py-1 absolute bottom-0", children: /* @__PURE__ */ jsx(
                    Amount,
                    {
                      amount: u?.balance ?? 0,
                      decimals: 2,
                      className: cn(
                        u?.balance && u.balance < 0 ? "text-destructive" : "text-success"
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex lg:hidden flex-col items-center text-sm md:py-1 absolute left-1 top-0", children: [
                    "#",
                    u?.rank
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
      "Click to see player details ",
      /* @__PURE__ */ jsx(CircleArrowOutUpRight, { className: "size-4" })
    ] })
  ] });
}
function RouteComponent() {
  const {
    userId
  } = Route.useParams();
  const {
    loggedInUserId
  } = Route.useRouteContext();
  const {
    data: results
  } = useQuery(resultsQueryOptions());
  const {
    data: predictions
  } = useQuery(userPredsQueryOptions(userId ?? loggedInUserId));
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-8 gap-4 md:gap-8 items-start justify-start w-full p-4 md:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-1", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Player Standings..." }), children: /* @__PURE__ */ jsx(PlayerStandings, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-2 lg:order-3", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Predictions..." }), children: /* @__PURE__ */ jsx(PredCarousel, { match: {}, preds: predictions ?? [], title: `${userId ? `${predictions?.[0]?.user?.firstName ?? ""}` : "Your"} Predictions` }) }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-3 lg:order-2", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Current Match..." }), children: /* @__PURE__ */ jsx(CurrentMatchCard, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-4 ", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading Points Table..." }), children: /* @__PURE__ */ jsx(MatchCarousel, { matches: results ?? [], title: "Match Results" }) }) })
  ] });
}
export {
  RouteComponent as component
};

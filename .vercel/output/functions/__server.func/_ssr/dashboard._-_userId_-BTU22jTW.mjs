import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { a as useQuery, u as useSuspenseQuery } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { C as CurrentMatchCard, M as MatchCarousel } from "./match-carousel-olsXi7el.mjs";
import { P as PredCarousel, A as Amount, u as useAppForm, S as SelectItem } from "./hooks-CpOoo4EE.mjs";
import { f as useNavigate } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { g as Carousel, h as CarouselContent, i as CarouselItem, C as Card, b as CardHeader, e as CardTitle, j as CardAction, a as CloudImage, c as CardContent, d as CardFooter } from "./card-B9zI1dWD.mjs";
import { B as Badge } from "./badge-9LZ0hTRs.mjs";
import { n as Route, o as userFormQueryOptions, c as cn, a as allUsersQueryOptions, B as Button, r as resultsQueryOptions, q as userPredsQueryOptions } from "./router-D0bPNyc3.mjs";
import { M as Modal } from "./modal-CCBgzmTM.mjs";
import "../_chunks/_libs/@clerk/clerk-react.mjs";
import { a as useUpsertProfile } from "./hooks-B3Ax4H7H.mjs";
import { P as ProfileSchema, e as TEAMS } from "./schemas-CG-vrJKh.mjs";
import { b as CircleArrowOutUpRight, P as Pen } from "../_libs/lucide-react.mjs";
import { K as useUser } from "../_chunks/_libs/@clerk/shared.mjs";
import "../_chunks/_libs/@tanstack/query-core.mjs";
import "../_libs/date-fns.mjs";
import "../_chunks/_libs/@date-fns/tz.mjs";
import "../_chunks/_libs/@tanstack/react-form.mjs";
import "../_chunks/_libs/@tanstack/form-core.mjs";
import "../_chunks/_libs/@tanstack/store.mjs";
import "../_chunks/_libs/@tanstack/pacer-lite.mjs";
import "../_chunks/_libs/@tanstack/devtools-event-client.mjs";
import "../_chunks/_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_chunks/_libs/@radix-ui/react-label.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_chunks/_libs/@radix-ui/react-checkbox.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-use-previous.mjs";
import "../_chunks/_libs/@radix-ui/react-use-size.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-popover.mjs";
import "../_chunks/_libs/@radix-ui/react-dismissable-layer.mjs";
import "../_chunks/_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-use-escape-keydown.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-guards.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-scope.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_chunks/_libs/@radix-ui/react-popper.mjs";
import "../_chunks/_libs/@floating-ui/react-dom.mjs";
import "../_chunks/_libs/@floating-ui/dom.mjs";
import "../_chunks/_libs/@floating-ui/core.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@radix-ui/react-arrow.mjs";
import "../_chunks/_libs/@radix-ui/react-portal.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-select.mjs";
import "../_chunks/_libs/@radix-ui/number.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
import "../_chunks/_libs/@radix-ui/react-visually-hidden.mjs";
import "../_libs/react-day-picker.mjs";
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
import "../_chunks/_libs/@cloudinary/react.mjs";
import "../_chunks/_libs/@cloudinary/transformation-builder-sdk.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_chunks/_libs/@cloudinary/url-gen.mjs";
import "../_chunks/_libs/@tanstack/react-router-ssr-query.mjs";
import "../_chunks/_libs/@tanstack/router-ssr-query-core.mjs";
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
import "../_libs/swr.mjs";
import "../_libs/dequal.mjs";
import "../_chunks/_libs/@radix-ui/react-dialog.mjs";
import "../_chunks/_libs/@radix-ui/react-scroll-area.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      className: "flex flex-col gap-7",
      onSubmit: (e) => {
        e.preventDefault();
        form.handleSubmit();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(form.AppForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.ErrorMap, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.AppField, { name: "email", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(field.TextField, { label: "Email", isDisabled: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.AppField, { name: "firstName", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(field.TextField, { label: "First Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.AppField, { name: "lastName", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(field.TextField, { label: "First Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.AppField, { name: "team", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          field.SelectField,
          {
            label: "IPL Winner Prediction",
            showClearButton: false,
            children: TEAMS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.shortName, children: b.longName }, b.shortName))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.SubmitButton, { label: "Submit", className: "w-full" })
      ] })
    }
  );
}
function ProfileBtn({ profile }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      headerClass: cn(
        "bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 p-4 text-primary-foreground rounded-t-lg"
      ),
      closeBtnClass: "text-primary-foreground hover:text-accent/80",
      title: "Update Profile Details",
      initOpen: !profile?.clerkId,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileForm, { profile }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "absolute right-4 bottom-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, {}),
        " Profile"
      ] })
    }
  );
}
function PlayerStandings() {
  const { userId } = Route.useParams();
  const { loggedInUserId } = Route.useRouteContext();
  const [mainApi, setMainApi] = reactExports.useState();
  const [thumbApi, setThumbApi] = reactExports.useState();
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const navigate = useNavigate();
  const { data: players } = useSuspenseQuery(allUsersQueryOptions);
  const { data: form } = useQuery(
    userFormQueryOptions(userId ?? loggedInUserId)
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
  if (!players.length) return null;
  const curr = players.find((p) => p.clerkId === (userId ?? loggedInUserId));
  const rest = players.filter((p) => p.clerkId !== (userId ?? loggedInUserId));
  const users = [curr, ...rest];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Carousel, { setApi: setMainApi, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: users.map((user, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-0 flex flex-col gap-4 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "rounded-t-lg  relative overflow-clip bg-primary text-primary-foreground py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-team text-4xl pt-2", children: [
          "#",
          user?.rank
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardAction, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudImage, { name: `${user?.team ?? "undefined"}_team` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pb-20 sm:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "title text-3xl font-team", children: [
          user?.firstName,
          " ",
          user?.lastName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: form?.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: f.status === "WON" ? "success" : f.status === "LOST" ? "destructive" : "outline",
            className: "rounded-full size-6 text-base",
            children: f.status.charAt(0)
          },
          i
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between pb-4 w-full absolute bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        user?.doublesLeft && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
          "Doubles: ",
          user.doublesLeft
        ] })
      ] }) }) }),
      user?.clerkId && user.clerkId === loggedInUserId && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileBtn, { profile: user })
    ] }) }) }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Carousel,
      {
        setApi: setThumbApi,
        opts: {
          containScroll: "keepSnaps",
          dragFree: true
        },
        className: "w-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-2 flex-row", children: users.slice(1).map((u, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "rounded-lg relative  aspect-video overflow-hidden border transition-all flex flex-col items-center justify-center p-4",
                  index === selectedIndex ? "border-primary opacity-100" : "shadow opacity-40 hover:opacity-70"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full", children: u?.rank }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm md:pt-2 md:text-base", children: u?.firstName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm md:pb-8", children: u?.lastName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground hidden lg:flex flex-col items-center text-sm md:py-1 absolute bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Amount,
                    {
                      amount: u?.balance ?? 0,
                      decimals: 2,
                      className: cn(
                        u?.balance && u.balance < 0 ? "text-destructive" : "text-success"
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground flex lg:hidden flex-col items-center text-sm md:py-1 absolute left-1 top-0", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-2", children: [
      "Click to see player details ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleArrowOutUpRight, { className: "size-4" })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-8 gap-4 md:gap-8 items-start justify-start w-full p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading Player Standings..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerStandings, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-2 lg:order-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading Predictions..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PredCarousel, { match: {}, preds: predictions ?? [], title: `${userId ? `${predictions?.[0]?.user?.firstName ?? ""}` : "Your"} Predictions` }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-3 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading Current Match..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentMatchCard, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 order-4 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading Points Table..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchCarousel, { matches: results ?? [], title: "Match Results" }) }) })
  ] });
}
export {
  RouteComponent as component
};

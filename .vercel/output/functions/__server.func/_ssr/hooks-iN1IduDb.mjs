import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { v as amountFormatter, c as cn, C as CloudImage, B as Button, y as formatDate, S as Skeleton, x as buttonVariants } from "./router-Ccl7_LU1.mjs";
import { B as Badge } from "./badge-DyZ7MQUB.mjs";
import { C as Card } from "./card-pJvEH0iU.mjs";
import { c as createFormHook, a as createFormHookContexts } from "../_chunks/_libs/@tanstack/react-form.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root } from "../_chunks/_libs/@radix-ui/react-label.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_chunks/_libs/@radix-ui/react-checkbox.mjs";
import { R as Root2, T as Trigger, P as Portal, C as Content2 } from "../_chunks/_libs/@radix-ui/react-popover.mjs";
import { I as Item, a as ItemIndicator, b as ItemText, R as Root2$1, T as Trigger$1, c as Icon, V as Value, P as Portal$1, C as Content2$1, d as Viewport, S as ScrollUpButton, e as ScrollDownButton } from "../_chunks/_libs/@radix-ui/react-select.mjs";
import { f as ChevronRight, h as Check, M as Minus, i as Plus, c as Calendar$1, X, j as ChevronLeft, C as ChevronDown, k as LoaderCircle, l as ChevronUp } from "../_libs/lucide-react.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { T as TZDate } from "../_chunks/_libs/@date-fns/tz.mjs";
function Amount({
  amount,
  className,
  containerClass,
  iconClass,
  decimalClass,
  decimals = 0
}) {
  const formattedAmount = amountFormatter(amount, decimals).toString();
  let integerPart;
  let decimalPart;
  if (formattedAmount.includes(".")) {
    const [i, d] = formattedAmount.split(".");
    integerPart = i;
    decimalPart = d;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center justify-end", containerClass), children: integerPart && decimalPart ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn("font-semibold text-2xl tabular-nums", className),
        children: integerPart
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: cn(
          "font-semibold text-lg tabular-nums text-muted-foreground pt-0.5",
          decimalClass
        ),
        children: [
          ".",
          decimalPart
        ]
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-semibold text-2xl tabular-nums", className), children: amountFormatter(amount, decimals) }) });
}
function PredCarouselItem({ pred, isUserPred, matchWinnerAmt }) {
  const winnerAmts = matchWinnerAmt.filter(
    (m) => m.userId === pred.user.clerkId
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      className: "w-full",
      to: "/matches/$matchNum",
      params: { matchNum: pred.match?.number },
      disabled: !pred.match?.number || isUserPred,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: cn(
            "w-full p-0 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden md:py-2 rounded-none border-none shadow-lg",
            !!pred.match?.number && !isUserPred && "hover:scale-105 hover:bg-secondary hover:text-secondary-foreground "
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-[calc(100%-1rem)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CloudImage,
                  {
                    name: `${pred.team ?? "undefined"}_team`,
                    width: 60,
                    height: 60
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full py-2 px-4 flex flex-col "), children: [
                  isUserPred ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 wrap-break-word md:w-100 truncate", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(" font-sans text-lg md:text-xl capitalize"),
                          children: pred.user.firstName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(" font-sans text-lg capitalize"), children: pred.user.lastName })
                    ] }),
                    !["PLACED", "DEFAULT"].includes(pred.status) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                      "Points at Stake:",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Amount,
                        {
                          amount: pred.amount,
                          className: "text-sm text-foreground"
                        }
                      )
                    ] })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: `${pred.match?.number ? "# Match " : "Final"}${pred.match?.number ?? ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl font-team", children: pred.match?.homeTeam?.shortName ?? "IPL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: pred.match?.homeTeam?.shortName ? "vs" : " " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title text-2xl font-team", children: pred.match?.awayTeam?.shortName ?? "Winner" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 ", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: format(
                      new TZDate(`${pred.updatedAt}+05:30`, "Asia/Kolkata"),
                      "MMM, dd"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                      format(
                        new TZDate(`${pred.updatedAt}+05:30`, "Asia/Kolkata"),
                        "p"
                      ),
                      " ",
                      "IST"
                    ] })
                  ] }),
                  isUserPred && winnerAmts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col mt-1", children: winnerAmts.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-row items-center w-fit title text-sm font-sans gap-2",
                      children: [
                        "If ",
                        w.team,
                        " wins:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Amount,
                          {
                            amount: w.resultAmt,
                            className: cn(
                              "text-sm",
                              w.resultAmt < 0 ? "text-destructive" : "text-success"
                            ),
                            iconClass: "hidden"
                          }
                        )
                      ]
                    },
                    w.team
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                pred.isDouble && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-base rounded-sm", children: "D" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "text-foreground text-2xl",
                        pred.status === "WON" && "text-success",
                        ["LOST", "DEFAULT"].includes(pred.status) && "text-destructive"
                      ),
                      children: pred.status === "WON" ? "+" : ""
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Amount,
                    {
                      amount: ["PLACED", "DEFAULT"].includes(pred.status) ? pred.amount : pred.resultAmt,
                      decimals: ["PLACED", "DEFAULT"].includes(pred.status) ? 0 : 2,
                      className: cn(
                        "text-foreground",
                        pred.status === "WON" && "text-success",
                        ["LOST", "DEFAULT"].includes(pred.status) && "text-destructive"
                      ),
                      iconClass: "hidden"
                    }
                  )
                ] })
              ] })
            ] }),
            pred.match?.number && !isUserPred && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "absolute right-2 top-1/2 -translate-y-1/2 text-foreground" })
          ]
        }
      )
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "field-content",
      className: cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      ),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      "data-slot": "field-description",
      className: cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup({
  className,
  orientation,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(buttonGroupVariants({ orientation }), className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function AmountField({
  label,
  field,
  minAmount,
  isDisabled,
  isRequired,
  className
}) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const decrement = () => {
    if (field.state.value - 10 < minAmount) field.handleChange(minAmount);
    else field.handleChange(field.state.value - 10);
  };
  const increment = () => field.handleChange(field.state.value + 10);
  const fieldLabel = /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { htmlFor: "amount", className: cn("text-sm title"), children: label });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldContent, { className: cn("", className), children: [
    fieldLabel,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonGroup, { className: "h-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon-lg",
          disabled: isDisabled || field.state.value <= minAmount,
          onClick: decrement,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: field.name,
          name: field.name,
          value: field.state.value,
          onBlur: field.handleBlur,
          onChange: (e) => field.handleChange(+e.target.value),
          onFocus: (e) => e.target.select(),
          "aria-invalid": isInvalid,
          className: "w-full text-lg h-10 font-normal text-center",
          disabled: isDisabled,
          required: isRequired
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon-lg",
          onClick: increment,
          disabled: isDisabled,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {})
        }
      )
    ] })
  ] }) });
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LoaderCircle,
    {
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}
function FormBase({
  children,
  label,
  description,
  controlFirst,
  horizontal,
  onClear,
  isLoading = false,
  isRequired = true,
  isDisabled = false,
  showClearButton = true,
  className
}) {
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const handleClear = () => {
    field.form.setFieldValue(field.name, "");
    if (onClear) onClear();
  };
  const fieldLabel = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FieldLabel,
    {
      htmlFor: field.name,
      className: cn("text-sm", isDisabled ? "text-muted-foreground" : "title"),
      children: [
        label,
        " ",
        !isRequired && "(Optional)"
      ]
    }
  );
  if (isLoading)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: cn(controlFirst ? "size-4" : "w-full h-10") });
  if (controlFirst)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Field,
      {
        "data-invalid": isInvalid,
        orientation: horizontal ? "horizontal" : void 0,
        className: "shadow-input",
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldContent, { className: "gap-1", children: [
            fieldLabel,
            description && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDescription, { className: "text-balance", children: description }),
            isInvalid && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldErrors, { meta: field.state.meta })
          ] })
        ]
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Field,
    {
      "data-invalid": isInvalid,
      orientation: horizontal ? "horizontal" : void 0,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldContent, { children: [
        fieldLabel,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: cn("w-full", className), children: [
          children,
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) }) : showClearButton && !isDisabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            InputGroupButton,
            {
              size: "icon-xs",
              "aria-label": "Clear",
              onClick: handleClear,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {})
            }
          ) : null
        ] }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDescription, { children: description }),
        isInvalid && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldErrors, { meta: field.state.meta })
      ] })
    }
  );
}
const FieldErrors = ({ meta }) => {
  if (!meta.isTouched) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: meta.errors.map(({ message }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "w-full", children: message }, index)) });
};
function CheckboxField(props) {
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormBase, { ...props, controlFirst: true, horizontal: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox,
    {
      id: field.name,
      name: field.name,
      checked: field.state.value,
      onBlur: field.handleBlur,
      onCheckedChange: (e) => field.handleChange(!field.state.value),
      "aria-invalid": isInvalid
    }
  ) });
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronRight,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function DateField(props) {
  const id = reactExports.useId();
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const [open, setOpen] = reactExports.useState(false);
  const [date, setDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [month, setMonth] = reactExports.useState(date);
  function isValidDate(date2) {
    if (!date2) {
      return false;
    }
    return !Number.isNaN(date2.getTime());
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormBase, { ...props, showClearButton: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputGroupInput,
      {
        className: "w-full text-sm",
        id: field.name,
        name: field.name,
        value: field.state.value,
        onBlur: field.handleBlur,
        disabled: props.isDisabled,
        required: props.isRequired,
        onChange: (e) => {
          const date2 = new Date(e.target.value);
          field.handleChange(formatDate(date2));
          if (isValidDate(date2)) {
            setDate(date2);
            setMonth(date2);
          }
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        },
        "aria-invalid": isInvalid
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroupButton, { asChild: true, size: "icon-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          id,
          variant: "ghost",
          className: "absolute top-1/2 right-2 size-6 -translate-y-1/2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "size-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Select date" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PopoverContent,
        {
          className: "w-auto overflow-hidden p-0",
          align: "end",
          alignOffset: -8,
          sideOffset: 10,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Calendar,
            {
              mode: "single",
              selected: date,
              captionLayout: "dropdown",
              month,
              onMonthChange: setMonth,
              onSelect: (date2) => {
                setDate(date2);
                field.handleChange(formatDate(date2));
                setOpen(false);
              }
            }
          )
        }
      )
    ] }) })
  ] });
}
function FormErrorMap() {
  const form = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    form.Subscribe,
    {
      selector: (state) => [state.errorMap],
      children: ([errorMap]) => {
        if (!errorMap.onSubmit) return;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: Object.entries(errorMap.onSubmit).map(([fld, err]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: err?.[0].message }, fld)) });
      }
    }
  );
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger$1,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2$1,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
    }
  );
}
function SelectField({
  children,
  ...props
}) {
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Select,
    {
      onValueChange: (e) => {
        field.handleChange(e);
        if (props.onChange) props.onChange();
      },
      value: field.state.value,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            "aria-invalid": isInvalid,
            id: field.name,
            onBlur: field.handleBlur,
            className: "w-full text-sm",
            disabled: props.isDisabled,
            "aria-required": props.isRequired,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children })
      ]
    }
  ) });
}
function SubmitButton({
  label,
  className,
  variant = "default"
}) {
  const form = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    form.Subscribe,
    {
      selector: (state) => ({
        isSubmitting: state.isSubmitting,
        canSubmit: state.canSubmit
      }),
      children: ({ isSubmitting, canSubmit }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          variant,
          disabled: !canSubmit || isSubmitting,
          className: cn(className),
          children: form.state.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}),
            " Submitting..."
          ] }) : label
        }
      )
    }
  );
}
function TextField(props) {
  const field = useFieldContext();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputGroupInput,
    {
      id: field.name,
      name: field.name,
      value: field.state.value,
      onBlur: field.handleBlur,
      onChange: (e) => field.handleChange(e.target.value),
      onFocus: (e) => e.target.select(),
      "aria-invalid": isInvalid,
      className: "w-full text-sm",
      disabled: props.isDisabled,
      required: props.isRequired
    }
  ) });
}
const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();
const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    CheckboxField,
    SelectField,
    DateField,
    AmountField
  },
  formComponents: {
    SubmitButton,
    ErrorMap: FormErrorMap
  },
  fieldContext,
  formContext
});
export {
  Amount as A,
  PredCarouselItem as P,
  SelectItem as S,
  useAppForm as u
};

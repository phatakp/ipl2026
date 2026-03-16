import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  amountFormatter as a,
  cn as c,
  formatDate as f,
  sleep as s
};

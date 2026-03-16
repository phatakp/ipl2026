import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date | undefined) {
	if (!date) {
		return "";
	}
	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
}

export function amountFormatter(val: number, decimalPlaces: number = 0) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		currencyDisplay: "code",
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	})
		.formatToParts(val)
		.map((p) => (p.type !== "literal" && p.type !== "currency" ? p.value : ""))
		.join("");
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

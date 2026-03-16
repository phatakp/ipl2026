import z4 from "zod/v4";
import {
	MATCH_STATUS,
	MATCH_TYPES,
	RESULT_TYPES,
	TEAMNAMES,
} from "./lib/constants";

export const ProfileSchema = z4.object({
	clerkId: z4.string({ error: "Clerk ID is required" }),
	email: z4.email({ error: "Email is required" }),
	firstName: z4.string({ error: "First Name is required" }),
	lastName: z4.string({ error: "Last Name is required" }),
	team: z4.enum(TEAMNAMES, { error: "IPL Winner is required" }).optional(),
	doublesLeft: z4.number().min(0),
	balance: z4.number().min(0),
	imageUrl: z4.string().optional(),
	role: z4.enum(["PLAYER", "ADMIN"]),
	isActive: z4.boolean(),
	update: z4.boolean(),
});

export const MatchSchema = z4.object({
	number: z4
		.number({ error: "Match Num is required" })
		.min(1, { error: "Match Num must be at least 1" })
		.max(99, { error: "Match Num must be at most 99" }),
	homeTeam: z4.enum(TEAMNAMES, { error: "HomeTeam is required" }),
	awayTeam: z4.enum(TEAMNAMES, { error: "AwayTeam is required" }),
	winner: z4.union([
		z4.enum(TEAMNAMES, { error: "Winner is required" }),
		z4.undefined(),
	]),
	date: z4.date({ error: "Date is required" }),
	time: z4.string({ error: "Time is required" }),
	venue: z4.string({ error: "Venue is required" }),
	status: z4.enum(MATCH_STATUS, { error: "Status is required" }),
	type: z4.enum(MATCH_TYPES, { error: "Type is required" }),
	resultType: z4.enum(RESULT_TYPES).nullable(),
	resultMargin: z4.coerce.number<number>().int().min(0),
	minStake: z4.number().min(50),
	isDouble: z4.boolean(),
	homeScore: z4.string().nullable(),
	awayScore: z4.string().nullable(),
	homeOvers: z4.string().nullable(),
	awayOvers: z4.string().nullable(),
});

export const MatchSchemaWithValidation = MatchSchema.check((ctx) => {
	if (!ctx.value.winner && ctx.value.status === "COMPLETED") {
		ctx.issues.push({
			code: "custom",
			message: "Winner is required",
			input: ctx.value.winner,
			path: ["winner"],
			continue: true, // make this issue continuable (default: false)
		});
	}
	if (ctx.value.winner && ctx.value.status !== "COMPLETED") {
		ctx.issues.push({
			code: "custom",
			message: "Invalid Status",
			input: ctx.value.status,
			path: ["status"],
			continue: true, // make this issue continuable (default: false)
		});
	}
	if (
		ctx.value.winner &&
		ctx.value.status === "COMPLETED" &&
		!ctx.value.resultType
	) {
		ctx.issues.push({
			code: "custom",
			message: "Result Type is required",
			input: ctx.value.resultType,
			path: ["resultType"],
			continue: true, // make this issue continuable (default: false)
		});
	}
	if (
		ctx.value.winner &&
		ctx.value.status === "COMPLETED" &&
		ctx.value.resultType !== "SUPEROVER" &&
		!ctx.value.resultMargin
	) {
		ctx.issues.push({
			code: "custom",
			message: "Result Margin is required",
			input: ctx.value.resultMargin,
			path: ["resultMargin"],
			continue: true, // make this issue continuable (default: false)
		});
	}
	if (
		ctx.value.winner &&
		ctx.value.status === "COMPLETED" &&
		(!ctx.value.homeScore || !ctx.value.homeOvers)
	) {
		ctx.issues.push({
			code: "custom",
			message: "Home Score is required",
			input: ctx.value.homeScore,
			path: ["homeScore"],
			continue: true, // make this issue continuable (default: false)
		});
	}
	if (
		ctx.value.winner &&
		ctx.value.status === "COMPLETED" &&
		(!ctx.value.awayScore || !ctx.value.awayOvers)
	) {
		ctx.issues.push({
			code: "custom",
			message: "Away Score is required",
			input: ctx.value.awayScore,
			path: ["awayScore"],
			continue: true, // make this issue continuable (default: false)
		});
	}
});

export const PredictionSchema = z4.object({
	id: z4.union([z4.string(), z4.undefined()]),
	matchNumber: z4
		.number({ error: "Match Num is required" })
		.min(1, { error: "Match Num must be at least 1" })
		.max(99, { error: "Match Num must be at most 99" }),
	team: z4.union([
		z4.enum(TEAMNAMES, { error: "Team is required" }),
		z4.undefined(),
	]),
	amount: z4.number().min(50, { error: "Min Amount: 50 required" }),
	isDouble: z4.boolean(),
});

export const PredictionSchemaWithValidation = PredictionSchema.check((ctx) => {
	if (!ctx.value.team) {
		ctx.issues.push({
			code: "custom",
			message: "Team is required",
			input: ctx.value.team,
			path: ["team"],
			continue: false, // make this issue continuable (default: false)
		});
	}
});

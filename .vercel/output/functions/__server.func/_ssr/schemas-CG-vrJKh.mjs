import { z } from "../_libs/zod.mjs";
const ADMINROLE = "ADMIN";
const TEAMNAMES = [
  "CSK",
  "MI",
  "RCB",
  "KKR",
  "SRH",
  "DC",
  "PBKS",
  "RR",
  "LSG",
  "GT"
];
const TEAMS = [
  { shortName: "CSK", longName: "Chennai Super Kings" },
  { shortName: "MI", longName: "Mumbai Indians" },
  { shortName: "RCB", longName: "Royal Challengers Bengaluru" },
  { shortName: "KKR", longName: "Kolkata Knight Riders" },
  { shortName: "SRH", longName: "Sunrisers Hyderabad" },
  { shortName: "DC", longName: "Delhi Capitals" },
  { shortName: "PBKS", longName: "Punjab Kings" },
  { shortName: "RR", longName: "Rajasthan Royals" },
  { shortName: "LSG", longName: "Lucknow Super Giants" },
  { shortName: "GT", longName: "Gujarat Titans" }
];
const MATCH_TYPES = [
  "LEAGUE",
  "QUALIFIER1",
  "QUALIFIER2",
  "ELIMINATOR",
  "FINAL"
];
const MATCH_STATUS = ["SCHEDULED", "ABANDONED", "COMPLETED"];
const RESULT_TYPES = ["RUNS", "SUPEROVER", "WICKETS"];
const ProfileSchema = z.object({
  clerkId: z.string({ error: "Clerk ID is required" }),
  email: z.email({ error: "Email is required" }),
  firstName: z.string({ error: "First Name is required" }),
  lastName: z.string({ error: "Last Name is required" }),
  team: z.enum(TEAMNAMES, { error: "IPL Winner is required" }).optional(),
  doublesLeft: z.number().min(0),
  balance: z.number().min(0),
  imageUrl: z.string().optional(),
  role: z.enum(["PLAYER", "ADMIN"]),
  isActive: z.boolean(),
  update: z.boolean()
});
const MatchSchema = z.object({
  number: z.number({ error: "Match Num is required" }).min(1, { error: "Match Num must be at least 1" }).max(99, { error: "Match Num must be at most 99" }),
  homeTeam: z.enum(TEAMNAMES, { error: "HomeTeam is required" }),
  awayTeam: z.enum(TEAMNAMES, { error: "AwayTeam is required" }),
  winner: z.union([
    z.enum(TEAMNAMES, { error: "Winner is required" }),
    z.undefined()
  ]),
  date: z.date({ error: "Date is required" }),
  time: z.string({ error: "Time is required" }),
  venue: z.string({ error: "Venue is required" }),
  status: z.enum(MATCH_STATUS, { error: "Status is required" }),
  type: z.enum(MATCH_TYPES, { error: "Type is required" }),
  resultType: z.enum(RESULT_TYPES).nullable(),
  resultMargin: z.coerce.number().int().min(0),
  minStake: z.number().min(50),
  isDouble: z.boolean(),
  homeScore: z.string().nullable(),
  awayScore: z.string().nullable(),
  homeOvers: z.string().nullable(),
  awayOvers: z.string().nullable()
});
const MatchSchemaWithValidation = MatchSchema.check((ctx) => {
  if (!ctx.value.winner && ctx.value.status === "COMPLETED") {
    ctx.issues.push({
      code: "custom",
      message: "Winner is required",
      input: ctx.value.winner,
      path: ["winner"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
  if (ctx.value.winner && ctx.value.status !== "COMPLETED") {
    ctx.issues.push({
      code: "custom",
      message: "Invalid Status",
      input: ctx.value.status,
      path: ["status"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
  if (ctx.value.winner && ctx.value.status === "COMPLETED" && !ctx.value.resultType) {
    ctx.issues.push({
      code: "custom",
      message: "Result Type is required",
      input: ctx.value.resultType,
      path: ["resultType"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
  if (ctx.value.winner && ctx.value.status === "COMPLETED" && ctx.value.resultType !== "SUPEROVER" && !ctx.value.resultMargin) {
    ctx.issues.push({
      code: "custom",
      message: "Result Margin is required",
      input: ctx.value.resultMargin,
      path: ["resultMargin"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
  if (ctx.value.winner && ctx.value.status === "COMPLETED" && (!ctx.value.homeScore || !ctx.value.homeOvers)) {
    ctx.issues.push({
      code: "custom",
      message: "Home Score is required",
      input: ctx.value.homeScore,
      path: ["homeScore"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
  if (ctx.value.winner && ctx.value.status === "COMPLETED" && (!ctx.value.awayScore || !ctx.value.awayOvers)) {
    ctx.issues.push({
      code: "custom",
      message: "Away Score is required",
      input: ctx.value.awayScore,
      path: ["awayScore"],
      continue: true
      // make this issue continuable (default: false)
    });
  }
});
const PredictionSchema = z.object({
  id: z.union([z.string(), z.undefined()]),
  matchNumber: z.number({ error: "Match Num is required" }).min(1, { error: "Match Num must be at least 1" }).max(99, { error: "Match Num must be at most 99" }),
  team: z.union([
    z.enum(TEAMNAMES, { error: "Team is required" }),
    z.undefined()
  ]),
  amount: z.number().min(50, { error: "Min Amount: 50 required" }),
  isDouble: z.boolean()
});
const PredictionSchemaWithValidation = PredictionSchema.check((ctx) => {
  if (!ctx.value.team) {
    ctx.issues.push({
      code: "custom",
      message: "Team is required",
      input: ctx.value.team,
      path: ["team"],
      continue: false
      // make this issue continuable (default: false)
    });
  }
});
export {
  ADMINROLE as A,
  MatchSchema as M,
  ProfileSchema as P,
  RESULT_TYPES as R,
  TEAMNAMES as T,
  PredictionSchema as a,
  PredictionSchemaWithValidation as b,
  MatchSchemaWithValidation as c,
  MATCH_STATUS as d,
  TEAMS as e
};

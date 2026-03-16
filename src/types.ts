import type { UserRole } from "globals";
import type {
	MATCH_STATUS,
	MATCH_TYPES,
	PRED_STATUS,
	RESULT_TYPES,
	TEAMNAMES,
} from "./lib/constants";

export type Team = (typeof TEAMNAMES)[number];
export type MatchType = (typeof MATCH_TYPES)[number];
export type MatchStatus = (typeof MATCH_STATUS)[number];
export type ResultType = (typeof RESULT_TYPES)[number];
export type PredStatus = (typeof PRED_STATUS)[number];

export type UserShort = {
	clerkId: string;
	firstName: string;
	lastName: string;
	team: Team;
	isActive: boolean;
};

export type UserResp = UserShort & {
	email: string;
	imageUrl?: string;
	role: UserRole;
	balance: number;
	doublesLeft: number;
	rank: number;
};

export type UserForm = {
	clerkId: string;
	status: PredStatus;
};

export type TeamForm = {
	team: Team;
	status: "WON" | "LOST" | "DRAW";
};

export type TeamShort = {
	shortName: Team;
	fullName: string;
};

export type TeamResp = TeamShort & {
	played: number;
	won: number;
	lost: number;
	draw: number;
	points: number;
	nrr: number;
	forRuns: number;
	forBalls: number;
	againstRuns: number;
	againstBalls: number;
	form: TeamForm[];
};

export type MatchShort = {
	number: number;
	homeTeam: TeamShort;
	awayTeam: TeamShort;
	winner: TeamShort | null;
	status: MatchStatus;
	type: MatchType;
};

export type MatchResp = MatchShort & {
	date: Date;
	time: string;
	venue: string;
	resultType: ResultType | null;
	resultMargin: number | null;
	minStake: number;
	isDouble: boolean;
	homeScore: string | null;
	awayScore: string | null;
	homeOvers: string | null;
	awayOvers: string | null;
	hasEntryCutoffPassed: boolean;
	hasStarted: boolean;
	hasDoubleCutoffPassed: boolean;
	defaultBetsAdded: boolean;
	updated: boolean;
	isUpdated: boolean;
	maxDoubleAmt: number;
};

export type PredResp = {
	id: string;
	team: Team;
	user: UserShort;
	match: MatchShort;
	status: PredStatus;
	resultAmt: number;
	amount: number;
	isDouble: boolean;
	updatedAt: string;
};

export type WinnerPredResp = {
	userId: string;
	team: Team;
	resultAmt: number;
};

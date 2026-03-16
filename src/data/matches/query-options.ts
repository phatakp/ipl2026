import { queryOptions } from "@tanstack/react-query";
import type { Team } from "@/types";
import {
	getFixtures,
	getFixturesByTeam,
	getMatchByNum,
	getResults,
	getResultsByTeam,
	getWinnerAmtForMatch,
} from "./services";

export const matchKeys = {
	all: ["matches"] as const,
	fixtures: ["matches", "fixtures"] as const,
	results: ["matches", "results"] as const,
	matchByNum: (matchNum: number) => ["matches", matchNum] as const,
	winnerPredByNum: (matchNum: number, isUserPred: boolean) =>
		["matches", "winner-pred", matchNum, isUserPred] as const,
	fixturesByTeam: (team: Team) => ["matches", "fixtures", team] as const,
	resultsByTeam: (team: Team) => ["matches", "results", team] as const,
};

export const fixturesQueryOptions = () =>
	queryOptions({
		queryKey: matchKeys.fixtures,
		queryFn: getFixtures,
		staleTime: 1000 * 60 * 60 * 24,
	});

export const resultsQueryOptions = () =>
	queryOptions({
		queryKey: matchKeys.results,
		queryFn: getResults,
		staleTime: 1000 * 60 * 60 * 24,
	});

export const matchByNumQueryOptions = (matchNum: number) =>
	queryOptions({
		queryKey: matchKeys.matchByNum(matchNum),
		queryFn: () => getMatchByNum({ data: { number: matchNum } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const winnerPredByNumQueryOptions = (
	matchNum: number,
	isUserPred: boolean,
) =>
	queryOptions({
		queryKey: matchKeys.winnerPredByNum(matchNum, isUserPred),
		queryFn: () => getWinnerAmtForMatch({ data: { number: matchNum } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const fixturesByTeamQueryOptions = (team: Team) =>
	queryOptions({
		queryKey: matchKeys.fixturesByTeam(team),
		queryFn: () => getFixturesByTeam({ data: { team } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const resultsByTeamQueryOptions = (team: Team) =>
	queryOptions({
		queryKey: matchKeys.resultsByTeam(team),
		queryFn: () => getResultsByTeam({ data: { team } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

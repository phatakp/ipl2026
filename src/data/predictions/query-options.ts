import { queryOptions } from "@tanstack/react-query";
import {
	getMatchPredictions,
	getUserPredictionForMatch,
	getUserPredictions,
} from "./services";

export const predKeys = {
	all: ["predictions"] as const,
	userMatchPred: (matchNum: number) =>
		["predictions", "curr-user", "match", matchNum] as const,
	matchPreds: (matchNum: number) => ["predictions", "match", matchNum] as const,
	userPreds: (userId: string) => ["predictions", "user", userId] as const,
};

export const matchPredsQueryOptions = (matchNum: number) =>
	queryOptions({
		queryKey: predKeys.matchPreds(matchNum),
		queryFn: () => getMatchPredictions({ data: { number: matchNum } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const currUserMatchPredQueryOptions = (matchNum: number) =>
	queryOptions({
		queryKey: predKeys.userMatchPred(matchNum),
		queryFn: () => getUserPredictionForMatch({ data: { number: matchNum } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const userPredsQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: predKeys.userPreds(userId),
		queryFn: () => getUserPredictions({ data: { clerkId: userId } }),
		staleTime: 1000 * 60 * 60 * 24,
	});

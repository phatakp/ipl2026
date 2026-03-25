import { queryOptions } from "@tanstack/react-query";
import {
	getAllUsersFromDB,
	getCurrUserFromDB,
	getUserByIdFromDB,
	getUserFormById,
} from "./services";

export const userKeys = {
	all: ["users"] as const,
	currUser: ["users", "curr-user"] as const,
	userById: (userId: string | undefined) => ["users", userId] as const,
	userFormById: (userId: string) => ["users", "form", userId] as const,
};

export const currDBUserQueryOptions = () =>
	queryOptions({
		queryKey: userKeys.currUser,
		queryFn: getCurrUserFromDB,
		staleTime: 1000 * 60 * 60 * 24,
	});

export const dBUserQueryOptions = (userId: string | undefined) =>
	queryOptions({
		queryKey: userKeys.userById(userId!),
		queryFn: () => getUserByIdFromDB({ data: { clerkId: userId! } }),
		staleTime: 1000 * 60 * 60 * 24,
		enabled: userId?.startsWith("user_"),
	});

export const userFormQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: userKeys.userFormById(userId),
		queryFn: () => getUserFormById({ data: { clerkId: userId } }),
		staleTime: 1000 * 60 * 60 * 24,
		enabled: userId?.startsWith("user_"),
	});

export const allUsersQueryOptions = queryOptions({
	queryKey: userKeys.all,
	queryFn: getAllUsersFromDB,
	staleTime: 1000 * 60 * 60 * 24,
});

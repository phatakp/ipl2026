import { queryOptions } from "@tanstack/react-query";
import { getTeams } from "./services";

export const teamKeys = {
	all: ["teams"] as const,
	// form: (team: Team) => ["teams", "form", team] as const,
};

export const allTeamsQueryOptions = () =>
	queryOptions({
		queryKey: teamKeys.all,
		queryFn: () => getTeams(),
		staleTime: 1000 * 60 * 60 * 24,
	});

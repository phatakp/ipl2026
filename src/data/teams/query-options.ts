import { queryOptions } from "@tanstack/react-query";
import type { Team } from "@/types";
import { getTeamForm, getTeams } from "./services";

export const teamKeys = {
	all: ["teams"] as const,
	form: (team: Team) => ["teams", "form", team] as const,
};

export const allTeamsQueryOptions = () =>
	queryOptions({
		queryKey: teamKeys.all,
		queryFn: () => getTeams(),
		staleTime: 1000 * 60 * 60 * 24,
	});

export const teamFormQueryOptions = (team: Team) =>
	queryOptions({
		queryKey: teamKeys.form(team),
		queryFn: () => getTeamForm({ data: { homeTeam: team } }),
		staleTime: 1000 * 60 * 60 * 24,
		enabled: !!team,
	});

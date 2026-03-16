import { createServerFn } from "@tanstack/react-start";
import { api } from "@/integrations/axios";
import { MatchSchema } from "@/schemas";
import type { TeamForm, TeamResp } from "@/types";

export const getTeams = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await api.get("/teams");
	return res.data as TeamResp[];
});

export const getTeamForm = createServerFn({
	method: "GET",
})
	.inputValidator(MatchSchema.pick({ homeTeam: true }))
	.handler(async ({ data }) => {
		const res = await api.get(`/teams/form/${data.homeTeam}`);
		return res.data as TeamForm[];
	});

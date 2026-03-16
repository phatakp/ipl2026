import { createServerFn } from "@tanstack/react-start";
import z4 from "zod/v4";
import { api, handleAPIError } from "@/integrations/axios";
import { TEAMNAMES } from "@/lib/constants";
import { sleep } from "@/lib/utils";
import { MatchSchema } from "@/schemas";
import type { MatchResp, WinnerPredResp } from "@/types";
import { getIsAuthenticated } from "../users/services";

export const getFixtures = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await api.get("/matches/fixtures");
	await sleep(2000);
	return res.data as MatchResp[];
});

export const getResults = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await api.get("/matches/results");
	await sleep(2000);
	return res.data as MatchResp[];
});

export const getMatchByNum = createServerFn({
	method: "GET",
})
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		const res = await api.get(`/matches/${data.number}`);
		return res.data as MatchResp;
	});

export const getFixturesByTeam = createServerFn({
	method: "GET",
})
	.inputValidator(z4.object({ team: z4.enum(TEAMNAMES) }))
	.handler(async ({ data }) => {
		const res = await api.get(`/matches/fixtures/${data.team}`);
		return res.data as MatchResp[];
	});

export const getResultsByTeam = createServerFn({
	method: "GET",
})
	.inputValidator(z4.object({ team: z4.enum(TEAMNAMES) }))
	.handler(async ({ data }) => {
		const res = await api.get(`/matches/results/${data.team}`);
		return res.data as MatchResp[];
	});

export const getWinnerAmtForMatch = createServerFn({
	method: "GET",
})
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		const res = await api.get(`/matches/predict-winner/${data.number}`);

		return res.data as WinnerPredResp[];
	});

export const addMatch = createServerFn({
	method: "POST",
})
	.inputValidator(MatchSchema)
	.handler(async ({ data }) => {
		try {
			const res = await api.post(`/matches`, JSON.stringify(data));
			return res.data as MatchResp;
		} catch (error) {
			handleAPIError(error);
		}
	});

export const updateMatch = createServerFn()
	.inputValidator(MatchSchema)
	.handler(async ({ data }) => {
		try {
			const { isAuthenticated } = await getIsAuthenticated();
			if (!isAuthenticated) throw new Error("User is not authenticated");
			const res = await api.put(`/matches`, JSON.stringify(data));
			return res.data as MatchResp;
		} catch (error) {
			handleAPIError(error);
		}
	});

export const addDefaultBetsForMatch = createServerFn()
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		try {
			await api.put(`/matches/default/${data.number}`);
			return "success";
		} catch (error) {
			handleAPIError(error);
		}
	});

export const reverseBetsForMatch = createServerFn()
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		try {
			await api.put(`/matches/reverse/${data.number}`);
			return "success";
		} catch (error) {
			handleAPIError(error);
		}
	});

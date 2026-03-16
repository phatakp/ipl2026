import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { api, handleAPIError } from "@/integrations/axios";
import {
	MatchSchema,
	PredictionSchema,
	PredictionSchemaWithValidation,
	ProfileSchema,
} from "@/schemas";
import type { PredResp } from "@/types";
import { getIsAuthenticated } from "../users/services";

export const getMatchPredictions = createServerFn({
	method: "GET",
})
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		const { isAuthenticated } = await getIsAuthenticated();
		if (!isAuthenticated) return [];
		const res = await api.get(`/predictions/match/${data.number}`);
		return res.data as PredResp[];
	});

export const getUserPredictions = createServerFn({
	method: "GET",
})
	.inputValidator(ProfileSchema.pick({ clerkId: true }))
	.handler(async ({ data }) => {
		const { isAuthenticated } = await getIsAuthenticated();
		if (!isAuthenticated) return [];
		const res = await api.get(`/predictions/user/${data.clerkId}`);
		return res.data as PredResp[];
	});

export const getUserPredictionForMatch = createServerFn({
	method: "GET",
})
	.inputValidator(MatchSchema.pick({ number: true }))
	.handler(async ({ data }) => {
		const { isAuthenticated } = await getIsAuthenticated();
		if (!isAuthenticated) return null;
		const res = await api.get(`/predictions/curr-user/match/${data.number}`);
		return res.data as PredResp | null;
	});

export const addPrediction = createServerFn({
	method: "POST",
})
	.inputValidator(PredictionSchemaWithValidation)
	.handler(async ({ data }) => {
		try {
			const { isAuthenticated } = await getIsAuthenticated();
			if (!isAuthenticated) throw new Error("Not Authenticated");
			const res = await api.post(`/predictions`, JSON.stringify(data));
			return res.data as PredResp;
		} catch (error) {
			handleAPIError(error);
		}
	});

export const updatePrediction = createServerFn({
	method: "POST",
})
	.inputValidator(PredictionSchemaWithValidation)
	.handler(async ({ data }) => {
		try {
			const { isAuthenticated } = await getIsAuthenticated();
			if (!isAuthenticated) throw new Error("Not Authenticated");
			const { id, ...values } = data;
			if (!id) throw new Error("Prediction ID is required");
			const res = await api.put(`/predictions/${id}`, JSON.stringify(values));
			return res.data as PredResp;
		} catch (error) {
			handleAPIError(error);
		}
	});

export const doublePrediction = createServerFn({
	method: "POST",
})
	.inputValidator(
		PredictionSchema.pick({ id: true }).extend({ doubleAmt: z.number() }),
	)
	.handler(async ({ data }) => {
		try {
			const { isAuthenticated } = await getIsAuthenticated();
			if (!isAuthenticated) throw new Error("Not Authenticated");
			const { id } = data;
			if (!id) throw new Error("Prediction ID is required");
			await api.put(
				`/predictions/double/${id}`,
				JSON.stringify({ doubleAmt: data.doubleAmt }),
			);
			return "success";
		} catch (error) {
			handleAPIError(error);
		}
	});

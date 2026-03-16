import { auth } from "@clerk/tanstack-react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { api, handleAPIError } from "@/integrations/axios";
import { ADMINROLE } from "@/lib/constants";
import { ProfileSchema } from "@/schemas";
import type { UserForm, UserResp } from "@/types";

export const getIsAuthenticated = createServerFn({
	method: "GET",
}).handler(async () => {
	try {
		const { isAuthenticated, userId } = await auth();
		return { isAuthenticated, userId };
	} catch (error) {
		return { isAuthenticated: false, userId: null };
	}
});

export const getAllUsersFromDB = createServerFn({
	method: "GET",
}).handler(async () => {
	const { isAuthenticated } = await auth();
	if (!isAuthenticated) return [];
	const res = await api.get(`/users`);
	return res.data as UserResp[];
});

export const getCurrUserFromDB = createServerFn({
	method: "GET",
}).handler(async () => {
	const { isAuthenticated } = await auth();
	if (!isAuthenticated) return null;
	const res = await api.get(`/users/me`);
	return res.data as UserResp | null;
});

export const getUserByIdFromDB = createServerFn({
	method: "GET",
})
	.inputValidator(ProfileSchema.pick({ clerkId: true }))
	.handler(async ({ data }) => {
		const { isAuthenticated } = await auth();
		if (!isAuthenticated) return null;
		if (!data.clerkId.startsWith("user_")) return null;
		const res = await api.get(`/users/${data.clerkId}`);
		return res.data as UserResp | null;
	});

export const getUserFormById = createServerFn({
	method: "GET",
})
	.inputValidator(ProfileSchema.pick({ clerkId: true }))
	.handler(async ({ data }) => {
		const { isAuthenticated } = await auth();
		if (!isAuthenticated) return [];
		if (!data.clerkId.startsWith("user_")) return [];
		const res = await api.get(`/users/form/${data.clerkId}`);
		return res.data as UserForm[];
	});

export const upsertProfile = createServerFn({
	method: "POST",
})
	.inputValidator(ProfileSchema)
	.handler(async ({ data }) => {
		try {
			const { update, ...profileData } = data;
			const res = await api.post(`/users`, JSON.stringify(profileData));
			return res.data as UserResp | null;
		} catch (error) {
			handleAPIError(error);
		}
	});

export const activateProfile = createServerFn({
	method: "POST",
})
	.inputValidator(ProfileSchema.pick({ clerkId: true }))
	.handler(async ({ data }) => {
		try {
			const { sessionClaims } = await auth();

			if (sessionClaims?.metadata?.role !== ADMINROLE)
				throw new Error("Only admin is allowed");
			await api.put(`/users/activate/${data.clerkId}`);
			return "success";
		} catch (error) {
			handleAPIError(error);
		}
	});

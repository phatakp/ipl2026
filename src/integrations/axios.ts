import { auth } from "@clerk/tanstack-react-start/server";
import axios from "axios";

const api = axios.create({
	baseURL: `${process.env.SERVER_API_URL}`,
	timeout: 5000,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

api.interceptors.request.use(async (config) => {
	const { getToken } = await auth();
	const token = await getToken();

	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
});

type APIErrResponse = {
	message: string;
	status: number;
	generalErrors: Record<string, string>[] | null;
};

function handleAPIError(error: any) {
	console.error(error);
	if (axios.isAxiosError(error)) {
		const err = error.response?.data as APIErrResponse;
		if (err.status === 422) throw new Error(err.generalErrors?.[0].message);
		throw new Error(err.message);
	} else {
		// Handle other types of errors
		throw new Error("Could not process your request");
	}
}

export { api, handleAPIError, type APIErrResponse };

import { createServerFn } from "@tanstack/react-start";
import { api } from "@/integrations/axios";
import type { TeamResp } from "@/types";

export const getTeams = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await api.get("/teams");
	return res.data as TeamResp[];
});

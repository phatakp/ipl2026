import { createServerFn } from "@tanstack/react-start";
import { api } from "@/integrations/axios";
import { sleep } from "@/lib/utils";
import type { TeamResp } from "@/types";

export const getTeams = createServerFn({
	method: "GET",
}).handler(async () => {
	const res = await api.get("/teams");
	await sleep(2000);
	return res.data as TeamResp[];
});

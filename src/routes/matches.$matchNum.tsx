import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { MatchDetailCard } from "@/components/matches/detail/match-detail-card";
import { matchByNumQueryOptions } from "@/data/matches/query-options";
import {
	currUserMatchPredQueryOptions,
	matchPredsQueryOptions,
} from "@/data/predictions/query-options";
import { getIsAuthenticated } from "@/data/users/services";

export const Route = createFileRoute("/matches/$matchNum")({
	parseParams: (params) => ({
		matchNum: Number(params.matchNum), // Validates/converts to number
	}),
	beforeLoad: async () => {
		const { userId } = await getIsAuthenticated();
		return { loggedInUserId: userId };
	},
	loader: async ({ context, params }) => {
		context.queryClient.ensureQueryData(
			matchByNumQueryOptions(params.matchNum),
		);
		context.queryClient.ensureQueryData(
			matchPredsQueryOptions(params.matchNum),
		);
		context.queryClient.ensureQueryData(
			currUserMatchPredQueryOptions(params.matchNum),
		);
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { matchNum } = Route.useParams();
	return (
		<div className="flex items-start justify-center w-full">
			<div className="max-w-360">
				<Suspense fallback={<div>Loading Current Match...</div>}>
					<MatchDetailCard matchNum={matchNum} />
				</Suspense>
			</div>
		</div>
	);
}

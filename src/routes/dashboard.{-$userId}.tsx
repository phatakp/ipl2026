import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Suspense } from "react";
import { CurrentMatchCard } from "@/components/matches/current-match-card";
import { MatchCarousel } from "@/components/matches/match-carousel";
import { PredCarousel } from "@/components/matches/prediction-carousel";
import { PlayerStandings } from "@/components/users/player-standings";
import {
	fixturesQueryOptions,
	resultsQueryOptions,
} from "@/data/matches/query-options";
import { userPredsQueryOptions } from "@/data/predictions/query-options";
import {
	allUsersQueryOptions,
	currDBUserQueryOptions,
	dBUserQueryOptions,
} from "@/data/users/query-options";
import { getIsAuthenticated } from "@/data/users/services";
import type { MatchResp } from "@/types";

export const Route = createFileRoute("/dashboard/{-$userId}")({
	beforeLoad: async ({ location }) => {
		const { isAuthenticated, userId } = await getIsAuthenticated();
		if (!isAuthenticated)
			redirect({
				to: "/sign-in/$",
				search: { redirectUrl: location.href },
			});
		return { loggedInUserId: userId! };
	},
	loader: async ({ context, params }) => {
		await context.queryClient.ensureQueryData(allUsersQueryOptions);
		await context.queryClient.ensureQueryData(fixturesQueryOptions());
		await context.queryClient.ensureQueryData(resultsQueryOptions());
		await context.queryClient.ensureQueryData(
			userPredsQueryOptions(params.userId ?? context.loggedInUserId),
		);
		if (params.userId)
			await context.queryClient.ensureQueryData(
				dBUserQueryOptions(params.userId),
			);
		else await context.queryClient.ensureQueryData(currDBUserQueryOptions());
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { userId } = Route.useParams();
	const { loggedInUserId } = Route.useRouteContext();
	const { data: results } = useQuery(resultsQueryOptions());
	const { data: predictions } = useQuery(
		userPredsQueryOptions(userId ?? loggedInUserId),
	);

	return (
		<div className="grid lg:grid-cols-8 gap-4 md:gap-8 items-start justify-start w-full p-4 md:p-8">
			<div className="lg:col-span-4 order-1">
				<Suspense fallback={<div>Loading Player Standings...</div>}>
					<PlayerStandings />
				</Suspense>
			</div>
			<div className="lg:col-span-4 order-2 lg:order-3">
				<Suspense fallback={<div>Loading Predictions...</div>}>
					<PredCarousel
						match={{} as MatchResp}
						preds={predictions ?? []}
						title={`${userId ? `${predictions?.[0]?.user?.firstName ?? ""}` : "Your"} Predictions`}
					/>
				</Suspense>
			</div>
			<div className="lg:col-span-4 order-3 lg:order-2">
				<Suspense fallback={<div>Loading Current Match...</div>}>
					<CurrentMatchCard />
				</Suspense>
			</div>

			<div className="lg:col-span-4 order-4 ">
				<Suspense fallback={<div>Loading Points Table...</div>}>
					<MatchCarousel matches={results ?? []} title={"Match Results"} />
				</Suspense>
			</div>
		</div>
	);
}

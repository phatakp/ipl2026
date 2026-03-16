import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { CurrentMatchCard } from "@/components/matches/current-match-card";
import { MatchCarousel } from "@/components/matches/match-carousel";
import { PointsTable } from "@/components/teams/points-table";
import {
	fixturesQueryOptions,
	resultsQueryOptions,
} from "@/data/matches/query-options";
import { allTeamsQueryOptions } from "@/data/teams/query-options";

export const Route = createFileRoute("/")({
	component: App,
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(allTeamsQueryOptions());
		await context.queryClient.ensureQueryData(fixturesQueryOptions());
		await context.queryClient.ensureQueryData(resultsQueryOptions());
	},
});

function App() {
	const { data: results } = useQuery(resultsQueryOptions());
	return (
		<div className="grid lg:grid-cols-8 gap-4 items-start justify-start w-full py-8 px-4">
			<div className="lg:col-span-2 order-2 lg:order-1">
				<Suspense fallback={<div>Loading Points Table...</div>}>
					<PointsTable />
				</Suspense>
			</div>
			<div className="lg:col-span-4 order-1 lg:order-2">
				<Suspense fallback={<div>Loading Current Match...</div>}>
					<CurrentMatchCard />
				</Suspense>
			</div>
			<div className="lg:col-span-2 order-3 lg:px-4">
				<Suspense fallback={<div>Loading Results...</div>}>
					<MatchCarousel matches={results ?? []} title={"Results"} />
				</Suspense>
			</div>
		</div>
	);
}

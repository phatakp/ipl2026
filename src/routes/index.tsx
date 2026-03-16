import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { CurrentMatchCard } from "@/components/matches/current-match-card";
import { CurrentMatchLoader } from "@/components/matches/current-match-card-loader";
import { MatchCarousel } from "@/components/matches/match-carousel";
import { MatchCarouselLoader } from "@/components/matches/match-carousel-loader";
import { Background } from "@/components/shared/background";
import { PointsTable } from "@/components/teams/points-table";
import { PointsTableLoader } from "@/components/teams/points-table-loader";
import {
	fixturesQueryOptions,
	resultsQueryOptions,
} from "@/data/matches/query-options";
import { allTeamsQueryOptions } from "@/data/teams/query-options";

export const Route = createFileRoute("/")({
	component: App,
	loader: async ({ context }) => {
		context.queryClient.ensureQueryData(allTeamsQueryOptions());
		context.queryClient.ensureQueryData(fixturesQueryOptions());
		context.queryClient.ensureQueryData(resultsQueryOptions());
	},
});

function App() {
	const { data: results, isLoading } = useQuery(resultsQueryOptions());

	return (
		<Background type="dot">
			<div className="grid lg:grid-cols-8 gap-4 items-start justify-start w-full py-8 px-4">
				<div className="lg:col-span-2 order-2 lg:order-1">
					<Suspense fallback={<PointsTableLoader />}>
						<PointsTable />
					</Suspense>
				</div>
				<div className="lg:col-span-4 order-1 lg:order-2">
					<Suspense fallback={<CurrentMatchLoader />}>
						<CurrentMatchCard />
					</Suspense>
				</div>
				<div className="lg:col-span-2 order-3 lg:px-4">
					{isLoading ? (
						<MatchCarouselLoader />
					) : (
						<MatchCarousel matches={results ?? []} title={"Match Results"} />
					)}
				</div>
			</div>
		</Background>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { CurrentMatchCard } from "@/components/matches/current-match-card";
import { MatchCarousel } from "@/components/matches/match-carousel";
import { StatCard } from "@/components/shared/stat-card";
import { PointsTable } from "@/components/teams/points-table";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="grid grid-cols-6 gap-6 items-start justify-start w-full">
			<div className="col-span-6 lg:col-span-4 order-1">
				<MatchCarousel />
			</div>
			<div className="col-span-6 lg:col-span-4 order-4 md:order-2 lg:order-3 md:mt-8">
				<PointsTable />
			</div>
			<div className="col-span-6 lg:col-span-2 order-3 lg:order-2 lg:row-span-2 md:mt-8">
				<CurrentMatchCard />
			</div>

			<div className="col-span-6 overflow-scroll mt-8 order-2 md:order-4">
				<div className="flex gap-8">
					<StatCard
						data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
						title="Player Standings"
					/>
					<StatCard
						data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
						title="Player Standings"
					/>
					<StatCard
						data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
						title="Player Standings"
					/>
					<StatCard
						data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
						title="Player Standings"
					/>
				</div>
			</div>
		</div>
	);
}

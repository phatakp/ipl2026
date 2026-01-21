import { createFileRoute } from "@tanstack/react-router";
import { PointsTable } from "@/components/teams/points-table";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="grid grid-cols-6 gap-4 items-start justify-start w-full">
			<div className="col-span-6 lg:col-span-4">
				<PointsTable />
			</div>
		</div>
	);
}

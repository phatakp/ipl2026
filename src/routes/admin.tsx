import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { PendingUsers } from "@/components/users/pending-activation";
import { allUsersQueryOptions } from "@/data/users/query-options";

export const Route = createFileRoute("/admin")({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(allUsersQueryOptions);
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col max-w-360 mx-auto w-full">
			<Suspense fallback={<div>Loading Users...</div>}>
				<PendingUsers />
			</Suspense>
		</div>
	);
}

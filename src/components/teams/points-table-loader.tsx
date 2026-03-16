import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function PointsTableLoader() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<span className="title">Points Table</span>
			<div className="flex-col flex gap-4">
				<div className="flex items-center gap-1">
					<Skeleton className="w-12 h-7" />
					<Skeleton className="w-12 h-7" />
					<Skeleton className="w-12 h-7" />
				</div>
				<Card
					className={cn("p-4 w-[calc(100vw-32px)] lg:w-full overflow-scroll")}
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i} className="flex items-center gap-4 my-1">
							<Skeleton className="w-[10%] h-6" />
							<Skeleton className="w-[70%] h-6" />
							<Skeleton className="w-[10%] h-6" />
							<Skeleton className="w-[10%] h-6" />
						</div>
					))}
				</Card>
			</div>
		</div>
	);
}

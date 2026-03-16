import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MatchCarouselLoader() {
	return (
		<div className="flex flex-col gap-8 w-full py-4 rounded-sm">
			<span className="title text-2xl">Match Results</span>
			<div className=" w-full h-90 md:h-150 overflow-hidden">
				{Array.from({ length: 5 }).map((_, i) => (
					<Card
						key={i}
						className="p-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden w-full h-20 flex flex-row items-center justify-center gap-6 my-4"
					>
						<div className="flex flex-col gap-2 items-center justify-center">
							<Skeleton className="rounded-full size-10" />
							<Skeleton className="w-10 h-6" />
						</div>
						<div className="flex flex-col gap-2 items-center justify-center">
							<Skeleton className="w-16 h-5" />
							<Skeleton className="w-12 h-5" />
						</div>
						<div className="flex flex-col gap-2 items-center justify-center">
							<Skeleton className="rounded-full size-10" />
							<Skeleton className="w-10 h-6" />
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

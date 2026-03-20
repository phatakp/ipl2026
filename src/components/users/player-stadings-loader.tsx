import { Calendar, Pin } from "lucide-react";
import { CloudImage } from "@/components/shared/cloud-img";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PlayerStandingsLoader() {
	return (
		<div className="flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4">
			<span className="title text-2xl md:hidden">Next Fixtures</span>
			<Card className="w-full h-[40vh]">
				<div className="relative overflow-hidden">
					<div className="shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-4 pt-0 flex flex-col gap-4 bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
						<div className="bg-primary text-primary-foreground mx-auto text-sm md:text-lg px-4 rounded-b-sm flex items-center justify-center w-fit gap-2">
							<Skeleton className="w-24 h-8" />
						</div>
						<div className="absolute right-0 bottom-0">
							<CloudImage
								name="batsman"
								height={200}
								width={200}
								className="hidden md:block"
							/>
							<CloudImage
								name="batsman"
								height={150}
								width={150}
								className="md:hidden"
							/>
						</div>
						<div className="flex flex-col gap-4 z-10 w-full sm:items-center pt-8">
							<div className="flex flex-col sm:justify-center sm:flex-row sm:items-center w-full">
								<Skeleton className="w-48 h-12" />
								<span className="font-versus px-2 text-lg md:text-xl">v/s</span>
								<Skeleton className="w-48 h-12" />
							</div>

							<div className="flex items-center gap-4">
								<Calendar className="text-muted-foreground size-4" />
								<Skeleton className="w-72 h-6" />
							</div>

							<div className="flex items-center gap-4 ">
								<Pin className="text-muted-foreground size-4" />
								<Skeleton className="w-48 h-6" />
							</div>

							<Skeleton className="w-24 h-8" />
						</div>
					</div>
				</div>
			</Card>

			<div className="flex items-center gap-4 overflow-hidden">
				<Skeleton className="size-12 md:size-48" />
				<Skeleton className="size-12 md:size-48" />
				<Skeleton className="size-12 md:size-48" />
				<Skeleton className="size-12 md:size-48" />
				<Skeleton className="size-12 md:size-48" />
				<Skeleton className="size-12 md:size-48" />
			</div>
		</div>
	);
}

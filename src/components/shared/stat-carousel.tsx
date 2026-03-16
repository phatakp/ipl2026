import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayerStandings } from "../users/player-standings";

export function StatCarousel() {
	return (
		<div className="flex flex-col gap-6 w-full bg-linear-to-br from-white/90 via-slate-50 to-gray-100 py-4 rounded-sm">
			<Carousel
				opts={{
					align: "center",
				}}
				className="w-full max-w-90 md:max-w-full"
			>
				<CarouselContent>
					{Array.from({ length: 4 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="basis-1/1 md:basis-1/2 lg:basis-1/4"
						>
							<div className="p-1">
								<PlayerStandings />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function MatchCarousel() {
	return (
		<div className="flex flex-col gap-6 w-full bg-linear-to-br from-white/90 via-slate-50 to-gray-100 py-4 rounded-sm">
			<span className="title">Next Fixtures</span>
			<Carousel
				opts={{
					align: "end",
				}}
				className="w-full max-w-[18rem] md:max-w-full"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="basis-1/2 md:basis-1/3 lg:basis-1/5"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-3xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
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

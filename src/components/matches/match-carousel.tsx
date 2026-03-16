import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { MatchResp } from "@/types";
import { MatchCarouselItem } from "./match-carousel-item";

type Props = {
	matches: MatchResp[];
	title: string;
};

export function MatchCarousel({ matches, title }: Props) {
	return (
		<div className="flex flex-col gap-8 w-full py-4 rounded-sm">
			<span className="title text-2xl">{title}</span>
			<Carousel
				opts={{
					align: "end",
				}}
				orientation="vertical"
				className="w-full"
			>
				<CarouselContent className="h-90 md:h-150">
					{matches.map((m) => (
						<CarouselItem
							key={m.number}
							className="basis-1/3 md:basis-1/5 lg:basis-1/7"
						>
							<MatchCarouselItem match={m} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious hidden={matches.length < 4} />
				<CarouselNext hidden={matches.length < 4} />
			</Carousel>
		</div>
	);
}

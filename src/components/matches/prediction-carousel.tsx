import { useQuery } from "@tanstack/react-query";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { winnerPredByNumQueryOptions } from "@/data/matches/query-options";
import { cn } from "@/lib/utils";
import type { MatchResp, PredResp } from "@/types";
import { PredCarouselItem } from "./pred-carousel-item";

type Props = {
	match: MatchResp;
	preds: PredResp[];
	title: string;
	isUserPred?: boolean;
	className?: string;
};

export function PredCarousel({
	match,
	preds,
	title,
	isUserPred,
	className,
}: Props) {
	const { data: matchWinnerAmt } = useQuery(
		winnerPredByNumQueryOptions(match.number, !!isUserPred),
	);

	if (preds.length === 0) return;

	return (
		<div
			className={cn("flex flex-col gap-6 w-full py-4 rounded-sm", className)}
		>
			<span className="title text-2xl">{title}</span>
			<Carousel
				opts={{
					align: "end",
				}}
				orientation="vertical"
				className="w-full"
			>
				<CarouselContent
					className={`h-${preds.length < 5 ? preds.length * 18 : 90} md:h-${preds.length < 5 ? preds.length * 18 : 150} `}
				>
					{preds.map((p) => (
						<CarouselItem key={p.id} className="basis-1/5">
							<PredCarouselItem
								pred={p}
								isUserPred={isUserPred}
								matchWinnerAmt={matchWinnerAmt ?? []}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious hidden={preds.length < 5} />
				<CarouselNext hidden={preds.length < 5} />
			</Carousel>
		</div>
	);
}

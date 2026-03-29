import { useQuery } from "@tanstack/react-query";

import { winnerPredByNumQueryOptions } from "@/data/matches/query-options";
import { cn } from "@/lib/utils";
import type { MatchResp, PredResp } from "@/types";
import { ScrollArea } from "../ui/scroll-area";
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
			<ScrollArea
				className={`flex flex-col gap-6 h-${preds.length < 5 ? preds.length * 18 : 100} md:h-${preds.length < 5 ? preds.length * 18 : 150} `}
			>
				{preds.map((p) => (
					<PredCarouselItem
						key={p.id}
						pred={p}
						isUserPred={isUserPred}
						matchWinnerAmt={matchWinnerAmt ?? []}
					/>
				))}
			</ScrollArea>
		</div>
	);
}

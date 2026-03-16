import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { currUserMatchPredQueryOptions } from "@/data/predictions/query-options";
import { currDBUserQueryOptions } from "@/data/users/query-options";
import type { MatchResp, PredResp } from "@/types";
import { PredictionForm } from "./prediction-form";

type Props = {
	match: MatchResp;
	className?: string;
};

export function CurrentPrediction({ match }: Props) {
	const { data: pred } = useSuspenseQuery(
		currUserMatchPredQueryOptions(match.number),
	);
	const { data: user } = useSuspenseQuery(currDBUserQueryOptions());

	return (
		<Accordion
			type="single"
			collapsible
			defaultValue=""
			className="w-full p-0 border-none shadow-xl"
		>
			<AccordionItem value={"1"} className="w-full p-0 bg-primary">
				<AccordionTrigger chevronClass="hidden">
					<div className="flex flex-col w-full">
						<div className="flex items-center justify-between w-full px-4 py-2">
							<div className="flex flex-col">
								<span className="title text-2xl text-primary-foreground">
									Your Prediction
								</span>
								<div className="text-xl text-primary-foreground/90 flex items-center gap-2">
									<span>{user?.firstName}</span>
									<span>{user?.lastName}</span>
								</div>
							</div>
							<div className="hidden md:flex">
								<PredictionBadge match={match} pred={pred} />
							</div>
						</div>
						<ChevronDown className="mx-auto text-background" />
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col items-center justify-center gap-4 bg-card p-4">
						<div className="md:hidden">
							<PredictionBadge match={match} pred={pred} />
						</div>
						{!pred && match.hasEntryCutoffPassed ? null : (
							<PredictionForm match={match} />
						)}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

function PredictionBadge({
	match,
	pred,
}: {
	match: MatchResp;
	pred: PredResp | null;
}) {
	if ((!pred && match.hasEntryCutoffPassed) || pred?.status === "DEFAULT")
		return (
			<Badge variant={"destructive"} className="text-lg my-auto px-4 ">
				Defaulted - {match.minStake}
			</Badge>
		);

	if (!!pred && pred.status !== "PLACED")
		return (
			<Badge
				variant={
					pred.status === "WON"
						? "success"
						: pred.status === "LOST"
							? "destructive"
							: "secondary"
				}
				className="my-auto px-4 invert md:invert-0"
			>
				<span className="text-lg font-bold">
					{pred.status} - {pred.resultAmt}
				</span>
			</Badge>
		);

	if (pred?.team)
		return (
			<Badge
				variant={pred.isDouble ? "success" : "secondary"}
				className="text-lg flex items-center my-auto px-4 invert md:invert-0"
			>
				<span>{pred.team} - </span>
				<span className="font-sans text-lg font-semibold">{pred.amount}</span>
				{pred.isDouble && (
					<span className="ml-1 text-sm font-normal text-success">
						(Double)
					</span>
				)}
			</Badge>
		);

	return (
		<Badge variant={"destructive"} className="text-lg my-auto px-4">
			No Prediction yet!
		</Badge>
	);
}

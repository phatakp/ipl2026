import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Amount } from "@/components/shared/amount";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
	matchByNumQueryOptions,
	winnerPredByNumQueryOptions,
} from "@/data/matches/query-options";
import { currUserMatchPredQueryOptions } from "@/data/predictions/query-options";
import { currDBUserQueryOptions } from "@/data/users/query-options";
import { cn } from "@/lib/utils";
import { Route } from "@/routes/matches.$matchNum";
import type { MatchResp, PredResp } from "@/types";
import { PredictionForm } from "./prediction-form";

type Props = {
	className?: string;
};

export function CurrentPrediction({ className }: Props) {
	const { matchNum } = Route.useParams();
	const { data: pred } = useSuspenseQuery(
		currUserMatchPredQueryOptions(matchNum),
	);
	const { data: matchWinnerAmt } = useQuery(
		winnerPredByNumQueryOptions(matchNum, true),
	);
	const { data: match } = useSuspenseQuery(matchByNumQueryOptions(matchNum));
	const { data: user } = useSuspenseQuery(currDBUserQueryOptions());
	const winnerAmts =
		matchWinnerAmt?.filter((m) => m.userId === user?.clerkId) ?? [];

	return (
		<Accordion
			type="single"
			collapsible
			defaultValue="1"
			className="w-full p-0 border-none shadow-xl"
		>
			<AccordionItem value={"1"} className="w-full p-0 bg-primary relative">
				<AccordionTrigger chevronClass="text-background absolute left-1/2 bottom-4 -translate-x-1/2 translate-y-0 size-5">
					<div className="flex flex-col w-full">
						<div className="flex items-center justify-between w-full px-4 py-2">
							<div className="flex flex-col">
								<span className="title text-2xl text-primary-foreground">
									Your Prediction
								</span>
								<div className="text-xl text-primary-foreground/90 flex items-center gap-2 font-semibold capitalize">
									<span>{user?.firstName}</span>
									<span>{user?.lastName}</span>
								</div>
							</div>
						</div>
						<div className="px-4">
							<PredictionBadge match={match} pred={pred} />
						</div>
						{winnerAmts.length > 0 && (
							<div className="flex flex-col mt-1">
								{winnerAmts.map((w) => (
									<div
										key={w.team}
										className="flex flex-row items-center w-fit px-4 text-background text-sm font-sans gap-2"
									>
										If {w.team} wins you {w.resultAmt < 0 ? "lose" : "get"}:{" "}
										<Amount
											amount={w.resultAmt}
											className={cn(
												"text-sm",
												w.resultAmt < 0 ? "text-destructive" : "text-success",
											)}
											iconClass="hidden"
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col items-center justify-center gap-4 bg-card p-4">
						{!pred && match.hasEntryCutoffPassed ? null : <PredictionForm />}
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
			<Badge
				variant={"destructive"}
				className="text-lg my-auto px-4 rounded-sm"
			>
				Defaulted - {match.minStake} points
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
				className="my-auto px-4 rounded-sm"
			>
				<span className="text-lg font-bold">
					{pred.status} - {pred.resultAmt} points
				</span>
			</Badge>
		);

	if (pred?.team)
		return (
			<Badge
				variant={pred.isDouble ? "success" : "secondary"}
				className="text-lg flex items-center my-auto px-4 rounded-sm"
			>
				<span>{pred.team} for </span>
				<span className="font-sans text-lg font-semibold">
					{pred.amount} points
				</span>
				{pred.isDouble && (
					<span className="ml-1 text-sm font-normal text-success">
						(Double)
					</span>
				)}
			</Badge>
		);

	return (
		<Badge variant={"destructive"} className="text-lg my-auto px-4 rounded-sm">
			No Prediction yet!
		</Badge>
	);
}

import { TZDate } from "@date-fns/tz";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { Amount } from "@/components/shared/amount";
import { CloudImage } from "@/components/shared/cloud-img";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PredResp, WinnerPredResp } from "@/types";

type Props = {
	pred: PredResp;
	matchWinnerAmt: WinnerPredResp[];
	isUserPred?: boolean;
};

export function PredCarouselItem({ pred, isUserPred, matchWinnerAmt }: Props) {
	const winnerAmts = matchWinnerAmt.filter(
		(m) => m.userId === pred.user.clerkId,
	);

	return (
		<Link
			to={"/matches/$matchNum"}
			params={{ matchNum: pred.match?.number }}
			disabled={!pred.match?.number || isUserPred}
		>
			<Card
				className={cn(
					"p-0 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden md:py-2 rounded-none border-none shadow-lg",
					!!pred.match?.number &&
						!isUserPred &&
						"hover:scale-105 hover:bg-secondary hover:text-secondary-foreground ",
				)}
			>
				<div className="flex items-center justify-between w-[calc(100%-2rem)]">
					<div className="flex items-center gap-2 pl-4 w-full">
						<CloudImage
							name={`${pred.team ?? "undefined"}_team`}
							width={60}
							height={60}
						/>

						<div className={cn("w-full py-2 px-4 flex flex-col ")}>
							{isUserPred ? (
								<div className="flex flex-col">
									<div className="flex items-center gap-2 wrap-break-word md:w-100 truncate">
										<span className={cn(" font-sans text-lg md:text-xl")}>
											{pred.user.firstName}
										</span>
										<span className={cn(" font-sans text-lg")}>
											{pred.user.lastName}
										</span>
									</div>
									{!["PLACED", "DEFAULT"].includes(pred.status) && (
										<div className="flex items-center gap-2 text-sm ">
											Points at Stake:
											<Amount amount={pred.amount} className="text-sm" />
										</div>
									)}
								</div>
							) : (
								<div className="flex flex-col">
									<span className="text-muted-foreground text-sm">{`${pred.match?.number ? "# Match " : "Final"}${pred.match?.number ?? ""}`}</span>
									<div className="flex items-center gap-2">
										<span className="title text-2xl font-team">
											{pred.match?.homeTeam?.shortName ?? "IPL"}
										</span>
										<span className="text-xl">
											{pred.match?.homeTeam?.shortName ? "vs" : " "}
										</span>
										<span className="title text-2xl font-team">
											{pred.match?.awayTeam?.shortName ?? "Winner"}
										</span>
									</div>
								</div>
							)}

							<div className="flex items-center gap-1 font-normal">
								<span className="text-sm text-muted-foreground">
									{format(
										new TZDate(`${pred.updatedAt}+05:30`, "Asia/Kolkata"),
										"MMM, dd",
									)}
								</span>
								<span className="text-sm text-muted-foreground">
									{format(
										new TZDate(`${pred.updatedAt}+05:30`, "Asia/Kolkata"),
										"p",
									)}{" "}
									IST
								</span>
							</div>
							{isUserPred && winnerAmts.length > 0 && (
								<div className="flex flex-col mt-1">
									{winnerAmts.map((w) => (
										<div
											key={w.team}
											className="flex flex-row items-center w-fit title text-sm font-sans gap-2"
										>
											If {w.team} wins:{" "}
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
					</div>

					<div className="flex items-center gap-2">
						{pred.isDouble && <Badge className="text-base">Double</Badge>}
						<div className="flex items-center">
							<span
								className={cn(
									"text-foreground text-2xl",
									pred.status === "WON" && "text-success",
									["LOST", "DEFAULT"].includes(pred.status) &&
										"text-destructive",
								)}
							>
								{pred.status === "WON" ? "+" : ""}
							</span>
							<Amount
								amount={
									["PLACED", "DEFAULT"].includes(pred.status)
										? pred.amount
										: pred.resultAmt
								}
								decimals={["PLACED", "DEFAULT"].includes(pred.status) ? 0 : 2}
								className={cn(
									"text-foreground",
									pred.status === "WON" && "text-success",
									["LOST", "DEFAULT"].includes(pred.status) &&
										"text-destructive",
								)}
								iconClass="hidden"
							/>
						</div>
					</div>
				</div>
				{pred.match?.number && !isUserPred && (
					<ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground" />
				)}
			</Card>
		</Link>
	);
}

import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { matchByNumQueryOptions } from "@/data/matches/query-options";
import { matchPredsQueryOptions } from "@/data/predictions/query-options";
import { currDBUserQueryOptions } from "@/data/users/query-options";
import { ADMINROLE } from "@/lib/constants";
import { Route } from "@/routes/matches.$matchNum";
import type { MatchResp } from "@/types";
import { PredCarousel } from "../prediction-carousel-new";
import { AdminCard } from "./admin-card";
import { CurrentPrediction } from "./current-prediction";
import { MatchDateTime } from "./match-date-time";
import { MatchScore } from "./match-score";
import { MatchVenue } from "./match-venue";
import { PredictionChart } from "./prediction-chart";
import { TeamPlayer } from "./team-player";

export function MatchDetailCard() {
	const { matchNum } = Route.useParams();
	const { data: match } = useSuspenseQuery(matchByNumQueryOptions(matchNum));
	const { data: matchPreds } = useSuspenseQuery(
		matchPredsQueryOptions(matchNum),
	);

	const { data: currentUser } = useSuspenseQuery(currDBUserQueryOptions());
	const isAdmin = currentUser?.role === ADMINROLE;
	const otherPreds = matchPreds.filter(
		(p) => p.user.clerkId !== currentUser?.clerkId,
	);

	return (
		<div className="flex flex-col w-[calc(100vw-16px)] md:w-full md:min-w-200 xl:min-w-300 mt-8">
			<Card className="relative p-0 border-none ">
				<CardHeader className="relative flex flex-col gap-4 p-0 overflow-hidden rounded-t-sm bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
					<MatchVenue match={match} />
					<MatchDateTime match={match} />

					<div className="relative min-h-64 md:min-h-70 w-full">
						<MatchTeams match={match} />
						<TeamPlayer team={match.homeTeam.shortName} left />
						<TeamPlayer team={match.awayTeam.shortName} />
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<div className="flex flex-col -mt-6">
						<div className="flex items-center justify-center gap-8 w-full p-2 bg-primary">
							<Button
								className="bg-card  invert"
								disabled={matchNum === 1}
								asChild
							>
								<Link
									to="/matches/$matchNum"
									params={{ matchNum: matchNum - 1 }}
								>
									Prev Match
								</Link>
							</Button>

							<Button
								className="bg-card  invert"
								disabled={matchNum === 74}
								asChild
							>
								<Link
									to="/matches/$matchNum"
									params={{ matchNum: matchNum + 1 }}
								>
									Next Match
								</Link>
							</Button>
						</div>

						{match.hasStarted && <MatchScore match={match} />}

						{match.status === "COMPLETED" && (
							<Badge className="w-full text-lg rounded-none">
								{match.winner?.fullName} won by{" "}
								{match.resultType === "SUPEROVER" ? "" : match.resultMargin}{" "}
								{match.resultType}
							</Badge>
						)}

						{match.status === "ABANDONED" && (
							<Badge className="w-full text-lg rounded-none">
								Match Abandoned
							</Badge>
						)}

						<div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
							{currentUser && match.hasEntryCutoffPassed && (
								<PredictionChart preds={matchPreds} />
							)}
						</div>
					</div>
				</CardContent>

				<CardFooter className="p-0 border-none flex flex-col">
					{currentUser && (
						<Card className="rounded-none w-full p-0">
							<CardContent className="flex flex-col items-center gap-4 p-0">
								{isAdmin && <AdminCard match={match} />}
								{!match.hasDoubleCutoffPassed && <CurrentPrediction />}
								<PredCarousel
									match={match}
									preds={match.hasDoubleCutoffPassed ? matchPreds : otherPreds}
									title={`${match.hasDoubleCutoffPassed ? "" : "Others'"} Predictions`}
									isUserPred
									className="items-center"
								/>
							</CardContent>
						</Card>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}

function MatchTeams({ match }: { match: MatchResp }) {
	return (
		<div className="absolute bottom-0  left-1/2 -translate-x-1/2 flex flex-col justify-center items-center font-versus gap-2 md:gap-4">
			<span className="title font-team hidden md:flex">
				{match.homeTeam.fullName}
			</span>
			<span className="title font-team md:hidden">
				{match.homeTeam.shortName}
			</span>
			<span className="font-sans">v/s</span>
			<span className="title font-team hidden md:flex">
				{match.awayTeam.fullName}
			</span>
			<span className="title font-team md:hidden">
				{match.awayTeam.shortName}
			</span>
		</div>
	);
}

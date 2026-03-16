import type { MatchResp } from "@/types";
import { TeamScore } from "./team-score";

type Props = {
	match: MatchResp;
};

export function MatchScore({ match }: Props) {
	return (
		<div className="flex items-center justify-around gap-4 p-4 shadow-lg border-b">
			<TeamScore
				team={match.homeTeam.shortName}
				score={match.homeScore ?? "0/0"}
				overs={match.homeOvers ?? "0.0"}
				left
			/>
			<TeamScore
				team={match.awayTeam.shortName}
				score={match.awayScore ?? "0/0"}
				overs={match.awayOvers ?? "0.0"}
			/>
		</div>
	);
}

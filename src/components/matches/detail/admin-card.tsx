import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDefaultBetsMatch, useReverseBetsMatch } from "@/data/matches/hooks";
import type { MatchResp } from "@/types";
import { UpdateMatchBtn } from "../match-btn";

type Props = {
	match: MatchResp;
};

export function AdminCard({ match }: Props) {
	const { mutate: addDefaultBets } = useDefaultBetsMatch();
	const { mutate: reverseBets } = useReverseBetsMatch();

	return (
		<Card className="bg-input w-full flex flex-row items-center justify-between rounded-none p-4">
			<span className="text-xl font-semibold">Admin</span>
			{match.hasEntryCutoffPassed && !match.defaultBetsAdded && (
				<Button
					onClick={() => addDefaultBets({ data: { number: match.number } })}
				>
					Add Default Bets
				</Button>
			)}
			{match.hasDoubleCutoffPassed &&
				match.defaultBetsAdded &&
				!match.updated &&
				!match.isUpdated && <UpdateMatchBtn match={match} />}
			{(match.updated || match.isUpdated) && (
				<Button onClick={() => reverseBets({ data: { number: match.number } })}>
					Reverse Match
				</Button>
			)}
		</Card>
	);
}

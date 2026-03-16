import type { MatchResp } from "@/types";

type Props = {
	match: MatchResp;
};

export function MatchVenue({ match }: Props) {
	return (
		<div className="bg-accent text-accent-foreground absolute inset-x-0 left-1/2 -translate-x-1/2 text-sm md:text-lg px-4 py-2  rounded-b-none flex items-center justify-center w-full gap-2 font-semibold">
			<span>
				{match.type === "LEAGUE" ? `Match #${match.number}` : match.type}
			</span>
			<span className="font-semibold">|</span>
			<span>{match.venue}</span>
		</div>
	);
}

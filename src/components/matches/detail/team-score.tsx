import { CloudImage } from "@/components/shared/cloud-img";
import { cn } from "@/lib/utils";
import type { Team } from "@/types";

type Props = {
	team: Team;
	score: string;
	overs: string;
	left?: boolean;
};

export function TeamScore({ team, score, overs, left = false }: Props) {
	return (
		<div
			className={cn(
				"flex items-center gap-4",
				left ? "flex-row" : "flex-row-reverse",
			)}
		>
			<div
				className={cn(
					"flex items-center gap-2",
					left ? "flex-row" : "flex-row-reverse",
				)}
			>
				<CloudImage name={`${team}_team`} width={54} height={54} />
				<span className="title font-team hidden md:flex">{team}</span>
			</div>
			<div className="flex flex-col">
				<span className="text-2xl font-semibold">{score ?? "0/0"}</span>
				<span className="text-muted-foreground text-sm md:text-base">
					{overs ?? "0.0"} overs
				</span>
			</div>
		</div>
	);
}

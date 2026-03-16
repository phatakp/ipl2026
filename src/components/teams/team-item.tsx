import { TEAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Team } from "@/types";
import { CloudImage } from "../shared/cloud-img";

type Props = {
	team: Team;
	left?: boolean;
};

export function TeamItem({ team, left }: Props) {
	return (
		<div
			className={cn(
				"flex items-center gap-2 w-full flex-col justify-center md:justify-start",
				left ? "md:flex-row-reverse" : "md:flex-row",
			)}
		>
			<CloudImage name={`${team}_team`} />

			<div
				className={cn(
					"md:flex hidden flex-col ",
					left ? "text-right items-end justify-end" : "text-left",
				)}
			>
				{TEAMS.find((t) => t.shortName === team)
					?.longName.split(" ")
					.map((word) => (
						<span
							key={word}
							className="font-bold text-primary-foreground/90 font-versus "
						>
							{word}
						</span>
					))}
			</div>
			<span className="md:hidden font-versus text-xl">{team}</span>
		</div>
	);
}

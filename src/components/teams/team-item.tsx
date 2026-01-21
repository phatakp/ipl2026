import { Image } from "@unpic/react";
import { fullteams, teams } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
	team: number;
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
			<Image
				src={`./${teams[team]}.avif`}
				height={96}
				width={64}
				className="object-contain"
				alt="team1"
			/>
			<div
				className={cn(
					"md:flex hidden flex-col ",
					left ? "text-right items-end justify-end" : "text-left",
				)}
			>
				{fullteams[team].split(" ").map((word) => (
					<span
						key={word}
						className="font-bold text-primary-foreground/90 font-versus "
					>
						{word}
					</span>
				))}
			</div>
			<span className="md:hidden font-versus text-xl">{teams[team]}</span>
		</div>
	);
}

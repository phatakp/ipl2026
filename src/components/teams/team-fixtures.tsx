import { Image } from "@unpic/react";
import { format } from "date-fns";
import { teams } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
	team: number;
	left?: boolean;
};

export function TeamFixtures({ team, left }: Props) {
	return (
		<div
			key={team}
			className={cn("flex items-center gap-3", !left && "flex-row-reverse")}
		>
			<div
				className={cn(
					"flex items-center  w-max  shadow-sm from-primary via-10% via-primary/20 to-white/90 text-xs",
					left
						? "justify-end rounded-l-lg bg-linear-to-r"
						: "bg-linear-to-l rounded-r-lg",
				)}
			>
				<span className="px-4">{format(new Date(), "MMM,dd")}</span>
			</div>
			<span className="text-xs text-muted-foreground">vs</span>
			<Image src={`./${teams[team]}.avif`} height={24} width={24} alt="team1" />
		</div>
	);
}

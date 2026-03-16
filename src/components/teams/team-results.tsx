import { cn } from "@/lib/utils";
import type { MatchStatus, ResultType, Team } from "@/types";
import { CloudImage } from "../shared/cloud-img";

type Props = {
	team: Team;
	winner: Team | null;
	status: MatchStatus;
	resultType: ResultType | null;
	resultMargin: number | null;
	left?: boolean;
};

export function TeamResults({
	team,
	winner,
	status,
	resultType,
	resultMargin,
	left,
}: Props) {
	return (
		<div className={cn("flex items-center gap-1", !left && "flex-row-reverse")}>
			<div
				className={cn(
					"flex items-center  w-max  shadow-sm via-10%  to-white/90",
					left
						? "justify-end rounded-l-lg bg-linear-to-r"
						: "bg-linear-to-l rounded-r-lg ",
					winner !== team
						? "from-success via-success/20"
						: "from-destructive via-destructive/20",
					!winner && "from-muted via-muted/20",
				)}
			>
				<span className="px-4 text-xs capitalize">
					{status === "COMPLETED" && resultType !== "SUPEROVER"
						? resultMargin
						: ""}{" "}
					{status === "COMPLETED" ? resultType : status}
				</span>
			</div>
			<span className="text-xs text-muted-foreground">vs</span>
			<CloudImage name={`${team}_team`} height={24} width={24} />
		</div>
	);
}

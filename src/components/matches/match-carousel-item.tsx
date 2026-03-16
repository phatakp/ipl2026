import { TZDate } from "@date-fns/tz";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { CloudImage } from "@/components/shared/cloud-img";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { MatchResp } from "@/types";

type Props = {
	match: MatchResp;
};

export function MatchCarouselItem({ match }: Props) {
	return (
		<Link to={"/matches/$matchNum"} params={{ matchNum: match.number }}>
			<Card className="p-0 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden">
				<div className="absolute flex items-center -translate-x-3  -rotate-45">
					<Badge className="rounded-b-none rounded-t-full text-base px-4">
						{match.type === "LEAGUE" ? `#${match.number}` : match.type}
					</Badge>
				</div>
				<div
					className={cn(
						"w-full py-2 px-4 flex items-center justify-center gap-6",
					)}
				>
					<div className="flex flex-col justify-center items-center">
						<CloudImage
							name={`${match.homeTeam.shortName}_team`}
							width={40}
							height={40}
						/>
						<span
							className={cn(
								"title text-2xl font-team",
								match.homeTeam.shortName === match.winner?.shortName &&
									"text-success",
							)}
						>
							{match.homeTeam.shortName}
						</span>
					</div>
					<div className="flex flex-col items-center justify-center ">
						<span className="text-sm text-muted-foreground">
							{format(
								new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
								"p",
							)}{" "}
							IST
						</span>
						<span className="text-base">
							{format(
								new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
								"MMM, dd",
							)}
						</span>
					</div>
					<div className="flex flex-col justify-center items-center">
						<CloudImage
							name={`${match.awayTeam.shortName}_team`}
							width={40}
							height={40}
						/>
						<span
							className={cn(
								"title text-2xl font-team",
								match.awayTeam.shortName === match.winner?.shortName &&
									"text-success",
							)}
						>
							{match.awayTeam.shortName}
						</span>
					</div>
				</div>
				<ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground" />
			</Card>
		</Link>
	);
}

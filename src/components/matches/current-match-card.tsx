import { Image } from "@unpic/react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fullteams, teams } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { TeamFixtures } from "../teams/team-fixtures";
import { TeamItem } from "../teams/team-item";
import { TeamResults } from "../teams/team-results";
import { Versus } from "../teams/versus";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function CurrentMatchCard() {
	return (
		<div className="w-full">
			<Card className="p-0">
				<CardHeader
					className={cn(
						"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 rounded-t-lg pb-12 relative",
					)}
				>
					<div className="flex flex-col items-center justify-center text-primary-foreground py-2 w-full">
						<span>Match #1</span>
						<span className="text-sm text-muted/80">
							{format(new Date(), "PPP p")} IST
						</span>
						<div className="flex items-center justify-between gap-4 mt-4 w-full">
							<TeamItem team={0} left />
							<Versus />
							<TeamItem team={2} />
						</div>
					</div>
				</CardHeader>
				<CardContent className="relative">
					<Card className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 w-[90%] md:w-[80%]">
						<div className="flex flex-col gap-2">
							<Badge variant={"success"}>
								Predicted: {teams[0]} for Rs.100/-
							</Badge>
							<Button size={"sm"}>Update</Button>

							<div className="flex flex-col items-center gap-4">
								<span className="border-b w-full text-center">
									Latest Results
								</span>
								<div className="flex items-center justify-between gap-2 w-full">
									<div className="flex flex-col gap-2">
										{[1, 3, 5].map((team) => (
											<TeamResults key={team} team={team} left />
										))}
									</div>
									<div className="flex flex-col gap-2">
										{[2, 9, 7].map((team) => (
											<TeamResults key={team} team={team} />
										))}
									</div>
								</div>
							</div>

							<div className="flex flex-col items-center gap-4">
								<span className="border-b w-full text-center">Fixtures</span>
								<div className="flex items-center justify-between gap-2 w-full">
									<div className="flex flex-col gap-2">
										{[1, 3, 5].map((team) => (
											<TeamFixtures key={team} team={team} left />
										))}
									</div>
									<div className="flex flex-col gap-2">
										{[2, 9, 7].map((team) => (
											<TeamFixtures key={team} team={team} />
										))}
									</div>
								</div>
							</div>
						</div>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
}

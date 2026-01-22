import { Image } from "@unpic/react";
import { format } from "date-fns";
import { TeamFixtures } from "@/components/teams/team-fixtures";
import { TeamItem } from "@/components/teams/team-item";
import { TeamResults } from "@/components/teams/team-results";
import { Versus } from "@/components/teams/versus";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { teams } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CurrentMatchCard() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<span className="title">Current Match</span>
			<Card className="p-0">
				<CardHeader
					className={cn(
						"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 rounded-t-lg pb-12 relative overflow-clip",
					)}
				>
					<span className="bg-accent text-accent-foreground absolute px-4 -rotate-45 -translate-x-4 translate-y-4 text-sm">
						Double
					</span>
					<div className="flex flex-col items-center justify-center text-primary-foreground py-2 w-full">
						<div className="flex items-center gap-2">
							<span className="font-semibold">Match #1</span>
							<span className="text-muted/70">|</span>
							<span className="font-semibold">Raipur</span>
						</div>
						<span className="text-xs text-muted/70">
							{format(new Date(), "PPP p")} IST
						</span>
						<div className="flex items-center justify-between gap-4 mt-4 w-full">
							<TeamItem team={0} left />
							<Versus />
							<TeamItem team={2} />
						</div>
					</div>
				</CardHeader>
				<CardContent className="relative rounded-none flex justify-center">
					<Card className=" px-4 w-[95%] md:w-[80%] -translate-y-16">
						<div className="flex flex-col gap-2">
							<Badge variant={"success"} className="w-full">
								Predicted: {teams[0]} for Rs.100/-
							</Badge>
							<Button size={"sm"}>Details</Button>

							<div className="flex flex-col items-center gap-4">
								<div className="flex items-center justify-between gap-2 w-full">
									<Image
										src={`./${teams[0]}.avif`}
										height={96}
										width={64}
										className="object-contain"
										alt="team1"
									/>
									<span className="border-b w-full text-center">
										Latest Results
									</span>
									<Image
										src={`./${teams[2]}.avif`}
										height={96}
										width={64}
										className="object-contain"
										alt="team1"
									/>
								</div>
								<div className="flex items-center justify-between gap-2 w-full">
									<div className="flex flex-col gap-4">
										{[1, 3, 5, 7, 8].map((team) => (
											<TeamResults key={team} team={team} left />
										))}
									</div>
									<div className="flex flex-col gap-4">
										{[2, 9, 7, 4, 3].map((team) => (
											<TeamResults key={team} team={team} />
										))}
									</div>
								</div>
							</div>

							<div className="flex flex-col items-center gap-4">
								<div className="flex items-center justify-between gap-2 w-full">
									<Image
										src={`./${teams[0]}.avif`}
										height={96}
										width={64}
										className="object-contain"
										alt="team1"
									/>
									<span className="border-b w-full text-center">
										Next Fixtures
									</span>
									<Image
										src={`./${teams[2]}.avif`}
										height={96}
										width={64}
										className="object-contain"
										alt="team1"
									/>
								</div>
								<div className="flex items-center justify-between gap-2 w-full">
									<div className="flex flex-col gap-4">
										{[1, 3, 5, 7, 9].map((team) => (
											<TeamFixtures key={team} team={team} left />
										))}
									</div>
									<div className="flex flex-col gap-4">
										{[2, 9, 7, 1, 3].map((team) => (
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

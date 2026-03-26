import { createFileRoute } from "@tanstack/react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/rules")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-6 w-[calc(100vw-1rem)] md:w-full py-8 px-4 max-w-7xl mx-auto ">
			<span className="title">Game Rules</span>

			<Accordion type="single">
				<AccordionItem value="item-1" className="border-none py-4">
					<AccordionTrigger className="w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans">
						Registration
					</AccordionTrigger>
					<AccordionContent className="text-pretty py-4 font-normal title">
						<ol className="list-inside list-disc space-y-4 text-base">
							<li>Every player will need to predict the overall IPL winner.</li>
							<li>
								An automatic stake of 500 points will be applicable for the IPL
								Winner, to be settled after final match.
							</li>
							<li>
								Each player also to receive 5 double plays{" "}
								<span className="underline underline-offset-2 font-semibold">
									(only applicable for league phase)
								</span>{" "}
								<br />. This doubles the winning/lost points for the match.
								<span className="underline underline-offset-2 font-semibold text-foreground">
									(additional details in settlement section below)
								</span>
							</li>
							<li>
								Once a player registers, they need to complete the whole
								tournament and settle dues (if any).
							</li>

							{/* <li>
								<span>
									A caution deposit of 500/ has to be made to{" "}
									<span className="mr-2 underline underline-offset-2 font-semibold text-foreground">
										9130469142 (PhonePe / GPay)
									</span>
									compulsorily before start of Match 1.
									<br /> Until then the player status will be inactive and they
									will not be able to place predictions.
								</span>
							</li> */}
						</ol>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2" className="border-none py-4">
					<AccordionTrigger className="w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans">
						Prediction
					</AccordionTrigger>
					<AccordionContent className="text-pretty py-4 font-normal title">
						<ol className="list-inside list-disc space-y-4 text-base">
							<li>
								Prediction should be made atleast 30 mins before start of each
								match.
							</li>
							<span className="my-2 italic text-foreground underline">
								Start of match will be as per schedule (and will not change in
								case of any weather delays).
							</span>
							<li>
								If you miss the cutoff for prediction, default stake equivalent
								to min stake for the match will be deducted from your account.
							</li>
							<li>
								Minimum Stake is applicable for each match as below.
								<Table className="my-4">
									<TableCaption>
										Minimum Stakes at each phase of tournament
									</TableCaption>
									<TableHeader>
										<TableRow className="text-lg">
											<TableHead>Match type</TableHead>
											<TableHead className="text-right">
												Minimum Stake
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">
												League Phase
											</TableCell>
											<TableCell className="text-right">50 points</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												Qualifiers/Eliminator
											</TableCell>
											<TableCell className="text-right">100 points</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Final</TableCell>
											<TableCell className="text-right">200 points</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</li>
							<li>
								Double can be played only after start of match and up until 30
								mins post start of match.
							</li>

							<li>
								Minimum Double points will be 2x of current highest stake for
								the match. If current highest bet is 60, minimum double will be
								120 points.
							</li>
							<li className="text-foreground">
								Doubles can be overridden by another double (but will need 2x of
								current double points as stake.) <br />
								Applicable points will be displayed at time of placing double.
							</li>
						</ol>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3" className="border-none py-4">
					<AccordionTrigger className="w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans">
						Changes
					</AccordionTrigger>
					<AccordionContent className="text-pretty py-4 font-normal title">
						<ol className="list-inside list-disc space-y-4 text-base">
							<li>
								Prediction can be changed as per below rule -
								<Table className="mt-4">
									<TableCaption>Prediction Change rules</TableCaption>
									<TableHeader>
										<TableRow className="text-lg">
											<TableHead>Change type</TableHead>
											<TableHead>Rule</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">
												Increase of points at stake
											</TableCell>
											<TableCell>Allowed until start of match</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">
												Reduction of points at stake
											</TableCell>
											<TableCell>
												Allowed until 30 mins prior to start of match
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Team Change</TableCell>
											<TableCell>
												<ul>
													<li>
														Until 30 mins prior to start of match. -{" "}
														<span className="font-semibold text-foreground">
															Free
														</span>
													</li>
													<li>
														From 30 mins prior to until start of match -{" "}
														<span className="font-semibold text-foreground">
															Points at stake should be 2x the current stake.
														</span>
													</li>
													<li>
														After start of match -
														<span className="font-semibold text-foreground">
															Not allowed.
														</span>
													</li>
												</ul>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">
												IPL Winner Change
											</TableCell>
											<TableCell>
												Allowed until completion of Match 50.{" "}
												<span className="my-2 text-foreground underline">
													(Use Update Profile Button on Dashboard Page)
												</span>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</li>
						</ol>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4" className="border-none py-4">
					<AccordionTrigger className="w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans">
						Settlement
					</AccordionTrigger>
					<AccordionContent className="text-pretty py-4 font-normal title">
						<ol className="list-inside list-disc space-y-4 text-base">
							<li>
								Settlement to be done as per below rules -
								<Table className="my-4">
									<TableHeader>
										<TableRow className="text-lg">
											<TableHead>Stake</TableHead>
											<TableHead>Rule</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">
												If lost (no double played)
											</TableCell>
											<TableCell>
												Points at stake to be debited from balance.
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												If defaulted (no double played)
											</TableCell>
											<TableCell>
												Min Stake points for match to be debited from balance
												<span className="text-foreground">
													{" "}
													(irrespective of match result).
												</span>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												If won (no double played)
											</TableCell>
											<TableCell>
												Credit Points = (Your Stake / Total of Winning points) x
												Total of Losing points
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												If lost (double played)
											</TableCell>
											<TableCell>
												2 x Stake points to be debited from balance{" "}
												<span className="text-foreground">
													{" "}
													(only if double was won by someone).
												</span>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												If defaulted (double played)
											</TableCell>
											<TableCell>
												2 x Min Stake points for match to be debited from
												balance{" "}
												<span className="text-foreground">
													{" "}
													(irrespective of match result but only if double was
													won by someone).
												</span>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">
												If won (double played)
											</TableCell>
											<TableCell>
												Credit Points ={" "}
												<span className="text-foreground">
													{" "}
													Total Losing Stake Points
												</span>{" "}
												+ ((Your Stake / Total Winning stake points) x Total
												Losing stake points)
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</li>

							<li>
								Below table shows sample calculations for CSK vs SRH match -
								<Table className="my-4">
									<TableCaption>In case no double is played</TableCaption>
									<TableHeader>
										<TableRow className="text-lg">
											<TableHead>Player</TableHead>
											<TableHead>Stake</TableHead>
											<TableHead className="text-right">If CSK Wins</TableHead>
											<TableHead className="text-right">If SRH Wins</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">P1</TableCell>
											<TableCell>CSK 30</TableCell>
											<TableCell className="text-right text-success">
												+49.1
											</TableCell>
											<TableCell className="text-right text-destructive">
												-30
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P2</TableCell>
											<TableCell>CSK 50</TableCell>
											<TableCell className="text-right text-success">
												+81.8
											</TableCell>
											<TableCell className="text-right text-destructive">
												-50
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P3</TableCell>
											<TableCell>SRH 40</TableCell>
											<TableCell className="text-right text-destructive">
												-40
											</TableCell>
											<TableCell className="text-right text-success">
												+24.4
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P4</TableCell>
											<TableCell>CSK 30</TableCell>
											<TableCell className="text-right text-success">
												+49.1
											</TableCell>
											<TableCell className="text-right text-destructive">
												-30
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P5</TableCell>
											<TableCell>SRH 80</TableCell>
											<TableCell className="text-right text-destructive">
												-80
											</TableCell>
											<TableCell className="text-right text-success">
												+48.9
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P6</TableCell>
											<TableCell>SRH 60</TableCell>
											<TableCell className="text-right text-destructive">
												-60
											</TableCell>
											<TableCell className="text-right text-success">
												+36.7
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Table className="my-4">
									<TableCaption>When double is played</TableCaption>
									<TableHeader>
										<TableRow className="text-lg">
											<TableHead>Player</TableHead>
											<TableHead>Stake</TableHead>
											<TableHead className="text-right">If CSK Wins</TableHead>
											<TableHead className="text-right">If SRH Wins</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">P1</TableCell>
											<TableCell>CSK 30</TableCell>
											<TableCell className="text-right text-success">
												+36.0
											</TableCell>
											<TableCell className="text-right text-destructive">
												-30
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="relative font-medium">
												P2
												<Badge
													variant="success"
													className="absolute right-0 top-1/2 -translate-y-1/2 px-2 md:right-4"
												>
													D
												</Badge>
											</TableCell>
											<TableCell>CSK 90</TableCell>
											<TableCell className="text-right text-success">
												+288.0
											</TableCell>
											<TableCell className="text-right text-destructive">
												-180
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P3</TableCell>
											<TableCell>SRH 40</TableCell>
											<TableCell className="text-right text-destructive">
												-80
											</TableCell>
											<TableCell className="text-right text-success">
												+33.3
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P4</TableCell>
											<TableCell>CSK 30</TableCell>
											<TableCell className="text-right text-success">
												+36.0
											</TableCell>
											<TableCell className="text-right text-destructive">
												-30
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P5</TableCell>
											<TableCell>SRH 80</TableCell>
											<TableCell className="text-right text-destructive">
												-160
											</TableCell>
											<TableCell className="text-right text-success">
												+66.6
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell className="font-medium">P6</TableCell>
											<TableCell>SRH 60</TableCell>
											<TableCell className="text-right text-destructive">
												-120
											</TableCell>
											<TableCell className="text-right text-success">
												+49.9
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</li>
						</ol>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

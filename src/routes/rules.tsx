import { createFileRoute } from "@tanstack/react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/rules")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-6 w-[calc(100vw-1rem)] md:w-full py-8 px-4 max-w-7xl mx-auto">
			<span className="title">Game Rules</span>

			<Accordion type="multiple">
				<AccordionItem value="item-1" className="border-none py-4">
					<AccordionTrigger className="w-full rounded-sm bg-muted px-4 py-2 text-left text-lg md:text-2xl font-sans">
						Registration
					</AccordionTrigger>
					<AccordionContent className="text-pretty py-4 font-normal">
						<ol className="list-inside list-disc space-y-4 text-base">
							<li>Every player will need to predict the overall IPL winner.</li>
							<li>
								An automatic stake of Rs.500/- will be applicable for the IPL
								Winner, to be settled after final match.
							</li>
							<li>
								Each player also to receive 5 double plays{" "}
								<span className="underline underline-offset-2 font-semibold">
									(only for league phase)
								</span>
								.
							</li>
							<li>
								Once a player registers, they need to complete the whole
								tournament and settle dues (if any).
							</li>

							<li>
								<span>
									A caution deposit of Rs.500/ has to be made to{" "}
									<span className="mr-2 underline underline-offset-2 font-semibold">
										9130469142 (PhonePe / GPay)
									</span>
									compulsorily before start of Match 1.
								</span>
							</li>
						</ol>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

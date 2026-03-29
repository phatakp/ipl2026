import { ArrowUpRight } from "lucide-react";
import { Modal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FullStandingsTable } from "./full-standings-table";

export function FullStandingsBtn() {
	return (
		<Modal
			headerClass={cn(
				"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 p-4 text-primary-foreground rounded-t-lg",
			)}
			closeBtnClass="text-primary-foreground hover:text-accent/80"
			title="Player Standings"
			content={<FullStandingsTable />}
		>
			<Button size={"sm"}>
				View full table <ArrowUpRight className="size-4" />
			</Button>
		</Modal>
	);
}

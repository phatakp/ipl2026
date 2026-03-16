import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { Modal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MatchResp } from "@/types";
import { UpdateMatchForm } from "./match-form";

type Props = {
	match: MatchResp;
};

export function UpdateMatchBtn({ match }: Props) {
	return (
		<Modal
			headerClass={cn(
				"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 p-4 text-primary-foreground rounded-t-lg",
			)}
			closeBtnClass="text-primary-foreground hover:text-accent/80"
			title={`Match ${match.number}: ${match.homeTeam.shortName} vs ${match.awayTeam.shortName}`}
			description={`${match.type} on ${format(
				new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
				"MMM,dd",
			)}`}
			content={<UpdateMatchForm match={match} />}
		>
			<Button>Update Match</Button>
		</Modal>
	);
}

import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import type { MatchResp } from "@/types";

type Props = { match: MatchResp };

export function MatchDateTime({ match }: Props) {
	return (
		<div className="absolute top-12 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center">
			<div className="text-muted-foreground">
				{format(
					new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
					"p",
				)}{" "}
				IST
			</div>
			<div className="text-muted-foreground text-sm font-semibold">
				{format(
					new TZDate(`${match.date}T${match.time}+05:30`, "Asia/Kolkata"),
					"MMM,dd",
				)}
			</div>
		</div>
	);
}

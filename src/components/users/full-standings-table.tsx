import { useSuspenseQuery } from "@tanstack/react-query";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	allUsersQueryOptions,
	currDBUserQueryOptions,
} from "@/data/users/query-options";
import { cn } from "@/lib/utils";
import { Amount } from "../shared/amount";

export function FullStandingsTable() {
	const { data: currUser } = useSuspenseQuery(currDBUserQueryOptions());
	const { data: players } = useSuspenseQuery(allUsersQueryOptions);
	const total = players?.reduce((acc, player) => acc + player.balance, 0) ?? 0;

	return (
		<Table>
			<TableCaption>Player Standing 2026</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="">#</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Doubles</TableHead>
					<TableHead className="text-right">Points</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{players?.map((player) => (
					<TableRow key={player.clerkId}>
						<TableCell className="font-medium">{player.rank}</TableCell>
						<TableCell>
							<div className="flex flex-col">
								<span className="capitalize truncate">
									{player.firstName} {player.lastName}
								</span>
								<span className="text-base text-muted-foreground">
									{player.team}
								</span>
							</div>
						</TableCell>
						<TableCell>{player.doublesLeft}</TableCell>
						<TableCell className="text-right">
							<Amount
								amount={player.balance}
								decimals={2}
								decimalClass={"text-base"}
								className={cn(
									"text-lg",
									player.balance < 0 ? "text-destructive" : "text-success",
								)}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>

			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total Players</TableCell>
					<TableCell className="text-right flex items-center justify-end gap-4">
						<span className="text-2xl font-bold">{players.length}</span>
						{currUser?.role === "ADMIN" && (
							<span className="text-sm">{total.toFixed(0)}</span>
						)}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}

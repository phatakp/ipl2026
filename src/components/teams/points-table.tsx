import { useSuspenseQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	allTeamsQueryOptions,
	teamFormQueryOptions,
} from "@/data/teams/query-options";
import { cn } from "@/lib/utils";
import type { Team, TeamResp } from "@/types";
import { CloudImage } from "../shared/cloud-img";

type CardType = "short" | "full" | "form";

export function PointsTable() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<span className="title">Points Table</span>
			<Tabs defaultValue="short">
				<TabsList>
					<TabsTrigger value="short">Short</TabsTrigger>
					<TabsTrigger value="full">Full</TabsTrigger>
					<TabsTrigger value="form">Form</TabsTrigger>
				</TabsList>
				<TabsContent value="short">
					<PointsCard type="short" />
				</TabsContent>
				<TabsContent value="full">
					<PointsCard type="full" />
				</TabsContent>
				<TabsContent value="form">
					<PointsCard type="form" />
				</TabsContent>
			</Tabs>
			{/* <PointsCard val="0" className="hidden md:block" /> */}
		</div>
	);
}

function PointsCard({
	type,
	className,
}: {
	type: CardType;
	className?: string;
}) {
	const { data: teams } = useSuspenseQuery(allTeamsQueryOptions());
	return (
		<Card
			className={cn(
				"p-0 w-[calc(100vw-32px)] lg:w-full overflow-scroll  pb-4 pr-4",
				className,
			)}
		>
			<div className="flex gap-0">
				<div className="flex flex-col">
					<div className="flex items-center gap-4 h-10 text-sm font-medium px-4">
						<Rank i={0} heading />
						<TeamRow type={type} heading />
					</div>
					<div className="flex flex-col gap-2">
						{teams.map((t, i) => (
							<div
								key={t.shortName}
								className={cn(
									"flex items-center gap-4 text-sm h-10",
									i === 3 && "border-b",
								)}
							>
								<span
									className={cn("w-1 rounded-r-sm h-6", i < 4 && "bg-primary")}
								/>
								<Rank i={i} />
								<TeamRow type={type} t={t} />
							</div>
						))}
					</div>
				</div>
				<div className={cn("flex flex-col overflow-scroll w-full")}>
					<div
						className={cn(
							"flex items-center  gap-4 font-medium h-10",
							type !== "full" && "justify-end lg:justify-start xl:justify-end",
						)}
					>
						<span
							className={cn(
								"min-w-4 text-right",
								type === "form" && "lg:hidden xl:flex",
							)}
						>
							Pl
						</span>
						<span
							className={cn(
								"min-w-5 text-right",
								type === "form" && "lg:hidden xl:flex",
							)}
						>
							Pts
						</span>
						<span
							className={cn("min-w-10 text-right", type === "form" && "hidden")}
						>
							NRR
						</span>

						<span
							className={cn("min-w-4 text-right", type !== "full" && "hidden")}
						>
							Wn
						</span>

						<span
							className={cn("min-w-4 text-right", type !== "full" && "hidden")}
						>
							Ls
						</span>
						<span
							className={cn("min-w-4 text-right", type !== "full" && "hidden")}
						>
							Dr
						</span>
						<span
							className={cn("min-w-15 text-right", type !== "full" && "hidden")}
						>
							For
						</span>
						<span
							className={cn("min-w-15 text-right", type !== "full" && "hidden")}
						>
							Against
						</span>

						<span
							className={cn("min-w-18", type === "short" ? "hidden" : "flex")}
						>
							Form
						</span>
					</div>
					<div className="flex flex-col gap-2">
						{teams.map((t, i) => (
							<div
								key={i}
								className={cn(
									"flex items-center gap-4 text-sm h-10 font-extralight",
									i === 3 && "border-b",
									type !== "full" &&
										"justify-end lg:justify-start xl:justify-end",
								)}
							>
								<TeamStat
									type={type}
									value={t.played.toString()}
									className="min-w-4 justify-end"
									hide={["form"]}
									hideClass="lg:hidden xl:flex"
								/>
								<TeamStat
									type={type}
									value={t.points.toString()}
									className="min-w-5 justify-end"
									hide={["form"]}
									hideClass="lg:hidden xl:flex"
								/>
								<TeamStat
									type={type}
									value={t.nrr >= 0 ? `+${t.nrr.toFixed(3)}` : t.nrr.toFixed(3)}
									className={cn(
										"min-w-10 justify-end",
										t.nrr < 0 && "text-destructive",
										t.nrr > 0 && "text-success",
									)}
									hide={["form"]}
								/>

								<TeamStat
									type={type}
									value={t.won.toString()}
									className="min-w-4 justify-end"
									hide={["short", "form"]}
								/>
								<TeamStat
									type={type}
									value={t.lost.toString()}
									className="min-w-4 justify-end"
									hide={["short", "form"]}
								/>
								<TeamStat
									type={type}
									value={t.draw.toString()}
									className="min-w-4 justify-end"
									hide={["short", "form"]}
								/>

								<TeamStat
									type={type}
									value={`${t.forRuns} / ${t.forBalls}`}
									className="min-w-15 justify-end"
									hide={["form", "short"]}
								/>
								<TeamStat
									type={type}
									value={`${t.againstRuns} / ${t.againstBalls}`}
									className="min-w-15 justify-end"
									hide={["form", "short"]}
								/>
								<FormStat type={type} team={t} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
}

export const TeamStat = ({
	type,
	value,
	className,
	hide,
	hideClass,
}: {
	type: CardType;
	value: string;
	className?: string;
	hide?: CardType[];
	hideClass?: string;
}) => {
	return (
		<span
			className={cn(
				className,
				hide?.includes(type) ? (hideClass ?? "hidden") : "flex",
			)}
		>
			{value}
		</span>
	);
};

export const FormHeading = ({ val }: { val: string }) => (
	<span
		className={cn("min-w-18", ["3", "2"].includes(val) ? "flex" : "hidden")}
	>
		FORM
	</span>
);

export const Rank = ({ i, heading }: { i: number; heading?: boolean }) => {
	if (heading) return <span className="min-w-4">Pos</span>;
	return (
		<span className="min-w-4 font-semibold">
			{(i + 1).toString().padStart(2, "0")}
		</span>
	);
};

export const TeamRow = ({
	t,
	heading,
	type,
}: {
	type: CardType;
	t?: TeamResp;
	heading?: boolean;
}) => {
	if (heading)
		return (
			<span className={cn("md:w-54 w-16", type === "full" && "lg:w-16")}>
				Team
			</span>
		);
	return (
		<div
			className={cn(
				"flex items-center gap-1",
				"md:w-54 w-16",
				type === "full" && "lg:w-16",
			)}
		>
			<CloudImage name={`${t?.shortName}_team`} height={24} width={24} />
			<span className={cn("flex md:hidden", type === "full" && "lg:flex")}>
				{t?.shortName}
			</span>
			<span className={cn("md:flex hidden ", type === "full" && "lg:hidden")}>
				{t?.fullName}
			</span>
		</div>
	);
};

export const FormStat = ({
	type,
	team,
}: {
	type: CardType;
	team: TeamResp;
}) => {
	const { data: form } = useSuspenseQuery(
		teamFormQueryOptions(team.shortName as Team),
	);

	return (
		<div
			className={cn(
				"flex items-center gap-1 min-w-18",
				type === "short" ? "hidden" : "flex",
			)}
		>
			{form?.map((f, i) => (
				<Badge
					key={i}
					variant={
						f.status === "WON"
							? "success"
							: f.status === "LOST"
								? "destructive"
								: "outline"
					}
					className="rounded-full size-4"
				>
					{f.status.charAt(0)}
				</Badge>
			))}

			{form?.length <= 0 &&
				[1, 2, 3].map((f) => (
					<Badge
						key={f}
						variant={"outline"}
						className="rounded-full size-4 py-2"
					>
						{"-"}
					</Badge>
				))}
		</div>
	);
};

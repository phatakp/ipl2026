import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import type { PredResp } from "@/types";

type Props = {
	preds: PredResp[];
};

export function PredictionChart({ preds }: Props) {
	if (preds.length === 0) {
		return (
			<Card className="flex flex-col rounded-none w-full border-0 shadow-lg">
				<CardHeader className="bg-primary text-primary-foreground rounded-t-none">
					<CardTitle className="title text-2xl w-full text-primary-foreground">
						Prediction Stats
					</CardTitle>
					<CardDescription className="text-base text-primary-foreground/90 w-full">
						Total prediction amounts for each team
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-1 items-center justify-center pb-0">
					<span className="text-muted-foreground text-xl">
						No predictions yet
					</span>
				</CardContent>
			</Card>
		);
	}
	const grouped = preds.reduce((acc: Record<string, number>, item) => {
		acc[item.team ?? "default"] =
			(acc[item.team ?? "default"] || 0) + item.amount;
		return acc;
	}, {});
	const chartData = Object.keys(grouped).map((team) => ({
		team,
		amount: grouped[team],
		fill:
			team === "default"
				? "var(--color-destructive)"
				: team === preds[0].match.homeTeam.shortName
					? "var(--color-amount)"
					: "var(--color-success)",
	}));

	const chartConfig = {
		amount: {
			label: "Amount",
			color: "var(--chart-1)",
		},
		label: {
			color: "var(--foreground)",
		},
	} satisfies ChartConfig;

	return (
		<Card className="flex flex-col rounded-none w-full border-0 shadow-lg">
			<CardHeader className="bg-primary text-primary-foreground rounded-t-none">
				<CardTitle className="title text-2xl w-full text-primary-foreground">
					Prediction Stats
				</CardTitle>
				<CardDescription className="text-base text-primary-foreground/90 w-full">
					Total prediction amounts for each team
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-1 items-center pb-0">
				<ChartContainer
					config={chartConfig}
					className="w-full h-full max-h-30 md:max-h-40"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							right: 64,
						}}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="team"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => (value === "default" ? "Dflt" : value)}
							hide
						/>
						<XAxis dataKey="amount" type="number" hide />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Bar
							dataKey="amount"
							layout="vertical"
							// fill={"var(--color-amount)"}
							radius={4}
						>
							<LabelList
								dataKey="team"
								position="right"
								offset={8}
								className={cn("fill-(--color-label) capitalize font-team")}
								fontSize={18}
							/>
							<LabelList
								dataKey="amount"
								position="insideRight"
								offset={4}
								className="fill-foreground font-semibold"
								fontSize={18}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

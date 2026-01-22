import { Image } from "@unpic/react";
import { Star } from "lucide-react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { fullteams, teams } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
	data: number[];
	title: string;
};
export function StatCard({ data, title }: Props) {
	const rest = data.slice(1);

	return (
		<div className="flex flex-col gap-6 w-full min-w-85 max-w-87">
			<span className="title">{title}</span>
			<Card className="p-0 w-full  rounded-b-none">
				<CardHeader
					className={cn(
						"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 rounded-t-lg pt-4 relative w-full",
					)}
				>
					<CardTitle>
						<span className="text-3xl font-bold font-versus">#1</span>
					</CardTitle>
					<div className="flex flex-col w-full mt-4 mb-16">
						{fullteams[0].split(" ").map((word, i) => (
							<div
								key={word}
								className={cn(
									"font-bold text-accent/90 font-versus",
									i === 0 ? "text-3xl" : `text-xl pl-4`,
									i === 2 && "pl-8",
								)}
							>
								{word}
							</div>
						))}
						<div className="flex items-center justify-between w-full absolute inset-x-0 bottom-4 px-4">
							<span className="text-4xl font-extrabold text-primary-foreground font-versus">
								12
							</span>
							<span className="text-primary-foreground/80">NRR: +3.182</span>
						</div>
					</div>
					<CardAction>
						<Image
							src={`./${teams[0]}.avif`}
							height={96}
							width={96}
							className="object-contain"
							alt="team1"
						/>
					</CardAction>
				</CardHeader>
				<CardContent className="rounded-none p-0 m-0">
					<div className="flex flex-col">
						{rest.map((team, i) => (
							<div
								key={team}
								className="flex items-center gap-4 px-2 shadow w-full"
							>
								<span className="">{i + 2}</span>
								<div className="flex items-center justify-between w-full">
									<div className="flex flex-col py-2">
										<span className="text-sm">{fullteams[i + 1]}</span>
										<div className="flex items-center gap-2">
											{Array.from({ length: 5 }).map((_, i) => (
												<span
													key={i}
													className="size-3.5 rounded-full flex items-center justify-center bg-destructive text-[7px] text-white"
												>
													L
												</span>
											))}
										</div>
									</div>
									<div className="flex flex-col items-end py-2">
										<span className="font-versus">8</span>
										<span className="text-xs">NRR: -2.032</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

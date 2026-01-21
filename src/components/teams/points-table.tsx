import { Image } from "@unpic/react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const teams = [
	"CSK",
	"MI",
	"RCB",
	"KKR",
	"SRH",
	"DC",
	"PBKS",
	"RR",
	"LSG",
	"GT",
];
const fullteams = [
	"Chennai Super Kings",
	"Mumbai Indians",
	"Royal Challengers Bangalore",
	"Kolkata Knight Riders",
	"Sunrisers Hyderabad",
	"Delhi Capitals",
	"Punjab SuperKings",
	"Rajasthan Royals",
	"Lucknow Super Giants",
	"Gujarat Titans",
];

export function PointsTable() {
	return (
		<div>
			<Tabs defaultValue="1" className="md:hidden">
				<TabsList>
					<TabsTrigger value="1">Short</TabsTrigger>
					<TabsTrigger value="2">Full</TabsTrigger>
					<TabsTrigger value="3">Form</TabsTrigger>
				</TabsList>
				<TabsContent value="1">
					<PointsCard val="1" />
				</TabsContent>
				<TabsContent value="2">
					<PointsCard val="2" />
				</TabsContent>
				<TabsContent value="3">
					<PointsCard val="3" />
				</TabsContent>
			</Tabs>
			<PointsCard val="0" className="hidden md:block" />
		</div>
	);
}

function PointsCard({ val, className }: { val: string; className?: string }) {
	return (
		<Card
			className={cn(
				"p-0 w-fit bg-linear-to-b from-slate-100 via-gray-50 to white shadow-lg pb-4 pr-4",
				className,
			)}
		>
			<div className="flex gap-0">
				<div className="flex flex-col">
					<div className="flex items-center gap-4 h-10 text-sm font-medium px-4">
						<span className="min-w-4">Pos</span>
						<span
							className={cn(["1", "3"].includes(val) ? "w-56" : "md:w-68 w-24")}
						>
							Team
						</span>
					</div>
					<div className="flex flex-col gap-2">
						{Array.from({ length: 10 }).map((_, i) => (
							<div
								key={i}
								className={cn(
									"flex items-center gap-4 text-sm h-10",
									i === 3 && "border-b",
								)}
							>
								<span
									className={cn("w-1 rounded-r-sm h-6", i < 4 && "bg-primary")}
								/>
								<span className="min-w-4 font-semibold">
									{(i + 1).toString().padStart(2, "0")}
								</span>
								<div
									className={cn(
										"flex items-center gap-1",
										["1", "3"].includes(val) ? "w-56" : "md:w-68 w-24",
									)}
								>
									<Image
										src={`./${teams[i]}.avif`}
										height={24}
										width={24}
										alt="team1"
									/>
									<span
										className={cn(
											["1", "3"].includes(val) ? "hidden" : "md:hidden",
										)}
									>
										{teams[i]}
									</span>
									<span
										className={cn(
											"md:flex",
											["1", "3"].includes(val) ? "flex" : "hidden",
										)}
									>
										{fullteams[i]}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div
					className={cn(
						"flex flex-col overflow-scroll",
						["1", "3"].includes(val) ? "w-full" : "w-[280px] sm:w-full",
					)}
				>
					<div className="flex items-center gap-4 text-sm font-medium h-10">
						<span
							className={cn(
								"min-w-4",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							Pl
						</span>
						<span
							className={cn(
								"min-w-4",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							Wn
						</span>
						<span
							className={cn(
								"min-w-4",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							Ls
						</span>
						<span
							className={cn(
								"min-w-4",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							Dr
						</span>
						<span
							className={cn(
								"min-w-4",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							NR
						</span>
						<span className={cn("min-w-5", val !== "3" ? "flex" : "hidden")}>
							Pts
						</span>
						<span
							className={cn(
								"min-w-9 text-right",
								val !== "3" ? "flex" : "hidden",
							)}
						>
							NRR
						</span>
						<span
							className={cn(
								"min-w-20",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							FOR
						</span>
						<span
							className={cn(
								"min-w-20",
								["2", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							AGAINST
						</span>
						<span
							className={cn(
								"min-w-20",
								["3", "0"].includes(val) ? "flex" : "hidden",
							)}
						>
							FORM
						</span>
					</div>
					<div className="flex flex-col gap-2">
						{Array.from({ length: 10 }).map((_, i) => (
							<div
								key={i}
								className={cn(
									"flex items-center gap-4 text-sm h-10 font-extralight",
									i === 3 && "border-b",
								)}
							>
								<span
									className={cn(
										"min-w-4",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									{(14).toString().padStart(2, "0")}
								</span>
								<span
									className={cn(
										"min-w-4",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									{(10).toString().padStart(2, "0")}
								</span>
								<span
									className={cn(
										"min-w-4",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									{(4).toString().padStart(2, "0")}
								</span>
								<span
									className={cn(
										"min-w-4",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									{(0).toString().padStart(2, "0")}
								</span>
								<span
									className={cn(
										"min-w-4",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									{(0).toString().padStart(2, "0")}
								</span>
								<span
									className={cn("min-w-5", val !== "3" ? "flex" : "hidden")}
								>
									{(20).toString().padStart(2, "0")}
								</span>
								<span
									className={cn(
										"min-w-9 text-right",
										val !== "3" ? "flex" : "hidden",
									)}
								>
									+3.212
								</span>
								<span
									className={cn(
										"min-w-20",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									4390/3293
								</span>
								<span
									className={cn(
										"min-w-20",
										["2", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									4340/4303
								</span>
								<div
									className={cn(
										"flex items-center justify-center gap-1 min-w-20",
										["3", "0"].includes(val) ? "flex" : "hidden",
									)}
								>
									<span className="size-5 rounded-full flex items-center justify-center bg-green-500 text-[9px] text-white font-semibold">
										W
									</span>
									<span className="size-5 rounded-full flex items-center justify-center bg-green-500 text-[9px] text-white font-semibold">
										W
									</span>
									<span className="size-5 rounded-full flex items-center justify-center bg-red-500 text-[9px] text-white font-semibold">
										L
									</span>
									<span className="size-5 rounded-full flex items-center justify-center border border-black bg-muted text-[9px] text-foreground font-semibold">
										D
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
}

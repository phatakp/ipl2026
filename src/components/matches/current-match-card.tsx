import { TZDate } from "@date-fns/tz";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Calendar, CircleArrowOutUpRight, Pin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CloudImage } from "@/components/shared/cloud-img";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { fixturesQueryOptions } from "@/data/matches/query-options";
import { cn } from "@/lib/utils";

export function CurrentMatchCard() {
	const [mainApi, setMainApi] = useState<CarouselApi>();
	const [thumbApi, setThumbApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { data: fixtures } = useSuspenseQuery(fixturesQueryOptions());

	const onThumbClick = useCallback(
		(index: number) => {
			if (!mainApi || !thumbApi) return;
			mainApi.scrollTo(index);
		},
		[mainApi, thumbApi],
	);

	const onSelect = useCallback(() => {
		if (!mainApi || !thumbApi) return;
		const index = mainApi.selectedScrollSnap();
		setSelectedIndex(index);
		thumbApi.scrollTo(index);
	}, [mainApi, thumbApi]);

	useEffect(() => {
		if (!mainApi) return;
		onSelect();
		mainApi.on("select", onSelect);
		mainApi.on("reInit", onSelect);
		return () => {
			mainApi.off("select", onSelect);
			mainApi.off("reInit", onSelect);
		};
	}, [mainApi, onSelect]);

	return (
		<div className="flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4">
			<span className="title text-2xl md:hidden">Next Fixtures</span>
			<Carousel setApi={setMainApi} className="w-full">
				<CarouselContent>
					{fixtures.map((match, index) => (
						<CarouselItem key={index}>
							<div className="relative overflow-hidden">
								<Link
									to={"/matches/$matchNum"}
									params={{ matchNum: match.number }}
									className="shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-4 pt-0 flex flex-col gap-4 bg-[url('/bg.jpg')] bg-no-repeat bg-cover"
								>
									<div className="bg-primary text-primary-foreground mx-auto text-sm md:text-lg px-4 rounded-b-sm flex items-center justify-center w-fit gap-2">
										<span>
											{match.type === "LEAGUE"
												? `Match #${match.number}`
												: match.type}
										</span>
										<span className="font-semibold">|</span>
										<span>{match.venue}</span>
									</div>
									<div className="absolute right-0 bottom-0">
										<CloudImage
											name="batsman"
											height={200}
											width={200}
											className="hidden md:block"
										/>
										<CloudImage
											name="batsman"
											height={150}
											width={150}
											className="md:hidden"
										/>
									</div>
									<div className="flex flex-col gap-4 z-10 w-full sm:items-center pt-8">
										<div className="flex flex-col sm:justify-center sm:flex-row sm:items-center w-full">
											<span className="title text-2xl md:text-4xl font-team">
												{match.homeTeam.fullName}
											</span>
											<span className="font-versus px-2 text-lg md:text-xl">
												v/s
											</span>
											<span className="title text-2xl md:text-4xl font-team">
												{match.awayTeam.fullName}
											</span>
										</div>

										<div className="flex items-center gap-4">
											<Calendar className="text-muted-foreground size-4" />
											<span className="text-muted-foreground">
												{format(
													new TZDate(
														`${match.date}T${match.time}+05:30`,
														"Asia/Kolkata",
													),
													"PPP p",
												)}{" "}
												IST
											</span>
										</div>

										<div className="flex items-center gap-4 ">
											<Pin className="text-muted-foreground size-4" />
											<span className="text-muted-foreground">
												{match.venue}
											</span>
										</div>

										<Button className="w-fit">Match Details</Button>
									</div>
								</Link>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<Carousel
				setApi={setThumbApi}
				opts={{
					containScroll: "keepSnaps",
					dragFree: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-2 flex-row">
					{fixtures.map((match, index) => (
						<CarouselItem
							key={index}
							className="basis-1/5 cursor-pointer pl-2 sm:basis-1/6 py-1"
							onClick={() => onThumbClick(index)}
						>
							<div
								className={cn(
									"rounded-lg relative aspect-square overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-card",
									index === selectedIndex
										? "border-primary opacity-100"
										: "shadow opacity-80 hover:opacity-100",
								)}
							>
								<span className="bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full">
									{match.type === "LEAGUE"
										? `Match ${match.number}`
										: match.type}
								</span>

								<span className="title text-sm md:text-base font-team">
									{match.homeTeam.shortName}
								</span>
								<span>vs</span>
								<span className="title text-sm md:text-base font-team">
									{match.awayTeam.shortName}
								</span>
								<div className="text-muted-foreground hidden lg:flex items-center gap-2 text-sm md:py-1 absolute bottom-0">
									<span>
										{format(
											new TZDate(
												`${match.date}T${match.time}+05:30`,
												"Asia/Kolkata",
											),
											"MMM,dd",
										)}
									</span>
									<span>
										{format(
											new TZDate(
												`${match.date}T${match.time}+05:30`,
												"Asia/Kolkata",
											),
											"p",
										)}
									</span>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<span className="text-muted-foreground flex items-center gap-2">
				Swipe to see next fixtures <CircleArrowOutUpRight className="size-4" />
			</span>
		</div>
	);
}

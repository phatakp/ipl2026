import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { CircleArrowOutUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Amount } from "@/components/shared/amount";
import { CloudImage } from "@/components/shared/cloud-img";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {
	allUsersQueryOptions,
	userFormQueryOptions,
} from "@/data/users/query-options";
import { cn } from "@/lib/utils";
import { Route } from "@/routes/dashboard.{-$userId}";
import { ProfileBtn } from "./profile-btn";

export function PlayerStandings() {
	const { userId } = Route.useParams();
	const { loggedInUserId } = Route.useRouteContext();
	const [mainApi, setMainApi] = useState<CarouselApi>();
	const [thumbApi, setThumbApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const navigate = useNavigate();

	const { data: players } = useSuspenseQuery(allUsersQueryOptions);
	const { data: form } = useQuery(
		userFormQueryOptions(userId ?? loggedInUserId!),
	);

	// const onThumbClick = useCallback(
	// 	(index: number) => {
	// 		if (!mainApi || !thumbApi) return;
	// 		mainApi.scrollTo(index);
	// 	},
	// 	[mainApi, thumbApi],
	// );

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

	if (!players.length) return null;
	const curr = players.find((p) => p.clerkId === (userId ?? loggedInUserId));
	const rest = players.filter((p) => p.clerkId !== (userId ?? loggedInUserId));
	const users = [curr, ...rest];

	return (
		<div className="flex w-[calc(100vw-32px)] lg:w-full flex-col gap-3 py-4">
			<Carousel setApi={setMainApi} className="w-full">
				<CarouselContent>
					{users.map((user, index) => (
						<CarouselItem key={index}>
							<div className="relative overflow-hidden">
								<Card className="shadow relative w-[calc(100vw-32px)] lg:w-full h-full md:min-h-[30vh] rounded-lg overflow-hidden p-0 flex flex-col gap-4 ">
									<CardHeader className="rounded-t-lg  relative overflow-clip bg-primary text-primary-foreground py-2">
										<CardTitle className="font-team text-4xl pt-2">
											#{user?.rank}
										</CardTitle>

										<CardAction>
											<CloudImage name={`${user?.team ?? "undefined"}_team`} />
										</CardAction>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col pb-20 sm:pb-0">
											<span className="title text-3xl font-team">
												{user?.firstName} {user?.lastName}
											</span>
											<div className="flex items-center gap-1">
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
														className="rounded-full size-6 text-base"
													>
														{f.status.charAt(0)}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
									<CardFooter>
										<div className="flex items-center justify-between pb-4 w-full absolute bottom-0">
											<div className="flex items-center gap-2">
												<Amount
													amount={user?.balance ?? 0}
													decimals={2}
													decimalClass="text-2xl"
													className={cn(
														"text-5xl",
														user?.balance && user.balance < 0
															? "text-destructive"
															: "text-success",
													)}
													containerClass="justify-start"
												/>
												{user?.doublesLeft && (
													<Badge variant={"outline"}>
														Doubles: {user.doublesLeft}
													</Badge>
												)}
											</div>
										</div>
									</CardFooter>
									{user?.clerkId && user.clerkId === loggedInUserId && (
										<ProfileBtn profile={user} />
									)}
								</Card>
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
					{users.slice(1).map((u, index) => (
						<CarouselItem
							key={index}
							className="basis-1/3 cursor-pointer pl-2 sm:basis-1/4"
							onClick={() => {
								// onThumbClick(index);
								navigate({
									to: "/dashboard/{-$userId}",
									params: {
										userId:
											u?.clerkId === loggedInUserId ? undefined : u?.clerkId,
									},
								});
							}}
						>
							<div
								className={cn(
									"rounded-lg relative  aspect-video overflow-hidden border transition-all flex flex-col items-center justify-center p-4",
									index === selectedIndex
										? "border-primary opacity-100"
										: "shadow opacity-40 hover:opacity-70",
								)}
							>
								<span className="bg-primary text-primary-foreground absolute top-0 left-1/2 -translate-x-1/2 text-xs md:text-sm px-2 rounded-t-lg hidden md:flex items-center justify-center w-full">
									{u?.rank}
								</span>

								<span className="text-sm md:pt-2 md:text-base">
									{u?.firstName}
								</span>
								<span className="text-sm md:pb-8">{u?.lastName}</span>
								<div className="text-muted-foreground hidden lg:flex flex-col items-center text-sm md:py-1 absolute bottom-0">
									<Amount
										amount={u?.balance ?? 0}
										decimals={2}
										className={cn(
											u?.balance && u.balance < 0
												? "text-destructive"
												: "text-success",
										)}
									/>
								</div>
								<div className="text-muted-foreground flex lg:hidden flex-col items-center text-sm md:py-1 absolute left-1 top-0">
									#{u?.rank}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<span className="text-muted-foreground flex items-center gap-2">
				Click to see player details <CircleArrowOutUpRight className="size-4" />
			</span>
		</div>
	);
}

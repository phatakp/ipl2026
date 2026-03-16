import { Link } from "@tanstack/react-router";
import type { UserResp } from "@/types";
import { Amount } from "../shared/amount";
import { CloudImage } from "../shared/cloud-img";

type Props = {
	user: UserResp;
};

export function PlayerStandingRow({ user }: Props) {
	return (
		<Link
			to={`/dashboard/{-$userId}`}
			params={{ userId: user.clerkId }}
			className="w-full rounded transition-colors"
		>
			<div className="flex items-center bg-muted gap-4 shadow w-full px-4">
				<span className="">{user.rank}</span>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-2">
						<CloudImage name={`${user.team}_team`} />
						<div className="flex flex-col">
							<span className="">
								{user.firstName} {user.lastName}
							</span>
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
					</div>
					<div className="flex flex-col items-end py-2">
						<Amount
							amount={user.balance}
							className="text-base"
							iconClass="size-3"
						/>
						<span className="text-xs">Doubles: {user.doublesLeft}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

import { CloudImage } from "@/components/shared/cloud-img";
import { cn } from "@/lib/utils";
import type { Team } from "@/types";

type Props = { team: Team; left?: boolean };

export function TeamPlayer({ team, left = false }: Props) {
	return (
		<div className={cn("absolute bottom-0", left ? "left-0" : "right-0")}>
			<CloudImage
				name={`${team}_player`}
				width={220}
				height={220}
				className="hidden md:block"
			/>
			<CloudImage
				name={`${team}_player`}
				width={140}
				height={140}
				className="md:hidden"
			/>
		</div>
	);
}

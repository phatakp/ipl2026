import { Image } from "@unpic/react";
import { cn } from "@/lib/utils";
import { CloudImage } from "../shared/cloud-img";

type Props = {
	className?: string;
};

export function Logo({ className }: Props) {
	return (
		<div className="flex justify-center items-center ipl-logo relative w-25 text-foreground">
			<CloudImage
				name="logo_ipl"
				width={100}
				height={50}
				className="relative text-foreground"
			/>
		</div>
	);
}

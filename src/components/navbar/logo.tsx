import { Image } from "@unpic/react";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export function Logo({ className }: Props) {
	return (
		<div className="flex justify-center items-center ipl-logo relative w-[95px]">
			<Image
				src={"/logo.avif"}
				width={100}
				height={56}
				alt="logo-1"
				className=" relative"
			/>
		</div>
	);
}

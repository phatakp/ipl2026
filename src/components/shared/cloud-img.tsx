import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { cn } from "@/lib/utils";

type Props = {
	name: string;
	width?: number;
	height?: number;
	className?: string;
};

const cld = new Cloudinary({
	cloud: {
		cloudName: "dgpvaaxwq",
	},
});

export function CloudImage({ name, width, height, className }: Props) {
	const img = cld
		.image(name)
		.resize(
			fill()
				.width(width ?? 64)
				.height(height ?? 64),
		)
		.format("auto")
		.quality("auto");
	return (
		<div className={cn(className)}>
			<AdvancedImage cldImg={img} />
		</div>
	);
}

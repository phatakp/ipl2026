import { ArrowDownNarrowWideIcon, XIcon } from "lucide-react";
import { useModal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";

export function MenuBtn() {
	const { open } = useModal();
	if (open)
		return (
			<Button variant={"ghost"} size={"icon"}>
				<XIcon />
			</Button>
		);

	return (
		<Button variant={"ghost"} size={"icon"}>
			<ArrowDownNarrowWideIcon />
		</Button>
	);
}

import {
	createContext,
	type ReactNode,
	useContext,
	useId,
	useState,
} from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Props = {
	children: ReactNode;
	content: ReactNode;
	title: ReactNode;
	description?: string;
	initOpen?: boolean;
	asChild?: boolean;
	titleClass?: string;
};

type ModalContextProps = {
	open: boolean;
	modalId: string;
	closeModal: (id: string) => void;
};

const ModalContext = createContext({} as ModalContextProps);

export function Modal({
	children,
	title,
	description,
	content,
	initOpen,
	titleClass,
	asChild = true,
}: Props) {
	const modalId = useId();
	const [open, setOpen] = useState(!!initOpen);
	const closeModal = (id: string) => {
		if (id === modalId) setOpen(false);
	};

	return (
		<ModalContext.Provider value={{ modalId, closeModal, open }}>
			<Dialog onOpenChange={setOpen} open={open}>
				<DialogTrigger asChild={asChild}>{children}</DialogTrigger>
				<DialogContent className="w-full max-w-[100vw] md:max-w-lg bg-card text-card-foreground ">
					<DialogHeader>
						<DialogTitle className={cn("text-left ", titleClass)}>
							{title}
						</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<ScrollArea className="h-full max-h-[calc(100vh-64px)] my-auto me-1">
						<div className="py-4">{content}</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</ModalContext.Provider>
	);
}

export const useModal = () => useContext(ModalContext);

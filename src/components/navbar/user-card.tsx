import { useAuth } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

type Props = {
	closeNav: () => void;
};

export function UserCard({ closeNav }: Props) {
	const { signOut, sessionClaims } = useAuth();
	const queryClient = useQueryClient();

	const handleLogout = async () => {
		await signOut();
		queryClient.invalidateQueries();
		closeNav();
	};
	return (
		<Item variant="muted" className="w-full sm:max-w-sm">
			<ItemMedia>
				<Avatar className="size-10">
					<AvatarImage
						src={sessionClaims?.imageUrl ?? "https://github.com/evilrabbit.png"}
					/>
					<AvatarFallback>ER</AvatarFallback>
				</Avatar>
			</ItemMedia>
			<ItemContent>
				<ItemTitle>
					{sessionClaims?.firstName} {sessionClaims?.lastName}
				</ItemTitle>
				<ItemDescription>{sessionClaims?.email}</ItemDescription>
			</ItemContent>
			<ItemActions className="w-full justify-between">
				<Button asChild size={"sm"} onClick={closeNav}>
					<Link to={"/profile?update=true"}>Update Profile</Link>
				</Button>
				<Button
					asChild
					variant={"destructive"}
					size={"icon-lg"}
					onClick={handleLogout}
					className="rounded-full"
				>
					<Link to={"/"}>
						<LogOutIcon />
					</Link>
				</Button>
			</ItemActions>
		</Item>
	);
}

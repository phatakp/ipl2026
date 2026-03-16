import { Pen } from "lucide-react";
import { Modal } from "@/components/shared/modal";
import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/users/profile-form";
import { cn } from "@/lib/utils";
import type { UserResp } from "@/types";

type Props = {
	profile: UserResp;
};

export function ProfileBtn({ profile }: Props) {
	return (
		<Modal
			headerClass={cn(
				"bg-linear-to-br from-primary/95 via-primary/90 to-primary/80 p-4 text-primary-foreground rounded-t-lg",
			)}
			closeBtnClass="text-primary-foreground hover:text-accent/80"
			title="Update Profile Details"
			initOpen={!profile?.clerkId}
			content={<ProfileForm profile={profile} />}
		>
			<Button size={"sm"} className="absolute right-4 bottom-4">
				<Pen /> Profile
			</Button>
		</Modal>
	);
}

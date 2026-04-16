import { useUser } from "@clerk/clerk-react";
import type { UserRole } from "globals";
import type z4 from "zod/v4";
import { useAppForm } from "@/components/form/hooks";
import { SelectItem } from "@/components/ui/select";
import { useUpsertProfile } from "@/data/users/hooks";
import { TEAMS } from "@/lib/constants";
import { ProfileSchema } from "@/schemas";
import type { UserResp } from "@/types";

type Props = {
	profile?: UserResp | null;
};

export function ProfileForm({ profile }: Props) {
	const { user } = useUser();

	const profileUser = {
		clerkId: profile?.clerkId || user?.id!,
		firstName: profile?.firstName || user?.firstName!,
		lastName: profile?.lastName || user?.lastName!,
		email: profile?.email || user?.emailAddresses[0]?.emailAddress!,
		imageUrl: profile?.imageUrl || user?.imageUrl!,
		team: profile?.team,
		role: "PLAYER" as UserRole,
		balance: profile?.balance || 0,
		doublesLeft: profile?.doublesLeft || 5,
		isActive: !!profile?.isActive,
		update: !!profile?.clerkId,
	} as z4.infer<typeof ProfileSchema>;

	const { mutate } = useUpsertProfile();
	const form = useAppForm({
		defaultValues: profileUser,
		validators: {
			onSubmit: ProfileSchema,
		},
		onSubmit: async ({ value }) => {
			mutate({ data: value });
		},
	});

	return (
		<form
			className="flex flex-col gap-7"
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
		>
			<form.AppForm>
				<form.ErrorMap />
				<form.AppField name={"email"}>
					{(field) => <field.TextField label={"Email"} isDisabled />}
				</form.AppField>
				<form.AppField name={"firstName"}>
					{(field) => <field.TextField label={"First Name"} />}
				</form.AppField>
				<form.AppField name={"lastName"}>
					{(field) => <field.TextField label={"First Name"} />}
				</form.AppField>
				<form.AppField name={"team"}>
					{(field) => (
						<field.SelectField
							label="IPL Winner Prediction"
							showClearButton={false}
						>
							{TEAMS.map((b) => (
								<SelectItem key={b.shortName} value={b.shortName}>
									{b.longName}
								</SelectItem>
							))}
						</field.SelectField>
					)}
				</form.AppField>
				<form.SubmitButton label="Submit" className="w-full" />
			</form.AppForm>
		</form>
	);
}

import { useSuspenseQuery } from "@tanstack/react-query";
import { useAppForm } from "@/components/form/hooks";
import { CloudImage } from "@/components/shared/cloud-img";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	useCreatePrediction,
	useDoublePrediction,
	useUpdatePrediction,
} from "@/data/predictions/hooks";
import { currUserMatchPredQueryOptions } from "@/data/predictions/query-options";
import { currDBUserQueryOptions } from "@/data/users/query-options";
import { cn } from "@/lib/utils";
import { PredictionSchemaWithValidation } from "@/schemas";
import type { MatchResp, Team } from "@/types";

type Props = {
	match: MatchResp;
};

export function PredictionForm({ match }: Props) {
	const { data: pred } = useSuspenseQuery(
		currUserMatchPredQueryOptions(match.number),
	);
	const { data: user } = useSuspenseQuery(currDBUserQueryOptions());
	const { mutate: addPrediction } = useCreatePrediction();
	const { mutate: updatePrediction } = useUpdatePrediction();
	const { mutate: doublePrediction } = useDoublePrediction();

	const form = useAppForm({
		defaultValues: {
			id: pred?.id,
			matchNumber: match.number,
			team: pred?.team,
			amount: pred?.amount ?? match.minStake,
			isDouble: !!pred?.isDouble,
		},
		validators: {
			onSubmit: PredictionSchemaWithValidation,
		},
		onSubmit: async ({ value }) => {
			if (pred?.id) updatePrediction({ data: value });
			else addPrediction({ data: value });
		},
	});
	return (
		<form
			className="flex flex-col gap-7 w-full max-w-sm"
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
		>
			<form.AppForm>
				<form.ErrorMap />

				<form.Subscribe
					selector={(state) => state.values.team}
					children={(team) => (
						<form.Field name="team">
							{() => (
								<div className="flex items-center justify-between w-full gap-8">
									<TeamButton
										match={match}
										disabled={!user?.isActive}
										team={match.homeTeam.shortName}
										currTeam={team}
										onClick={() =>
											form.setFieldValue("team", match.homeTeam.shortName)
										}
									/>
									<TeamButton
										match={match}
										disabled={!user?.isActive}
										team={match.awayTeam.shortName}
										currTeam={team}
										onClick={() =>
											form.setFieldValue("team", match.awayTeam.shortName)
										}
									/>
								</div>
							)}
						</form.Field>
					)}
				/>

				<form.AppField name={"amount"}>
					{(field) => (
						<field.AmountField
							label="Points at Stake"
							field={field}
							minAmount={pred?.amount ?? match.minStake}
							isDisabled={match.hasStarted || !user?.isActive}
							className="w-full"
						/>
					)}
				</form.AppField>

				<div className="flex items-center w-full gap-8">
					{match.hasStarted &&
					user?.isActive &&
					!match.hasDoubleCutoffPassed &&
					!!pred &&
					!pred.isDouble &&
					pred.status === "PLACED" &&
					match.type === "LEAGUE" ? (
						<Button
							type="button"
							variant={"success"}
							size={"sm"}
							className="w-full"
							onClick={() =>
								doublePrediction({
									data: { id: pred.id, doubleAmt: match.maxDoubleAmt },
								})
							}
						>
							Play Double for {match.maxDoubleAmt}
						</Button>
					) : !match.hasStarted && user?.isActive ? (
						<form.SubmitButton
							label={pred ? "Update Now" : "Predict Now"}
							className={cn("w-full")}
							variant="success"
						/>
					) : null}

					{!user?.isActive && (
						<Badge variant="destructive" className="w-full text-base">
							Activate your profile to predict!
						</Badge>
					)}
				</div>
			</form.AppForm>
		</form>
	);
}

function TeamButton({
	match,
	team,
	currTeam,
	onClick,
	disabled,
}: {
	match: MatchResp;
	team: Team;
	currTeam?: Team;
	disabled?: boolean;
	onClick: () => void;
}) {
	return (
		<Button
			type="button"
			disabled={match.hasStarted || !!disabled}
			variant={team === currTeam ? "default" : "outline"}
			className={cn(
				"flex-col aspect-square size-32",
				team === currTeam && "shadow-lg shadow-primary",
			)}
			onClick={onClick}
		>
			<CloudImage name={`${team}_team`} />
			<span
				className={cn(
					"title font-team",
					team === currTeam && "text-primary-foreground",
				)}
			>
				{team}
			</span>
		</Button>
	);
}

import { useAppForm } from "@/components/form/hooks";
import { SelectItem } from "@/components/ui/select";
import { useUpdateMatch } from "@/data/matches/hooks";
import { MATCH_STATUS, RESULT_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MatchSchemaWithValidation } from "@/schemas";
import type { MatchResp } from "@/types";

type Props = {
	match: MatchResp;
};

export function UpdateMatchForm({ match }: Props) {
	const { mutate } = useUpdateMatch();
	const form = useAppForm({
		defaultValues: {
			number: match.number,
			homeTeam: match.homeTeam.shortName,
			awayTeam: match.awayTeam.shortName,
			winner: match.winner?.shortName,
			date: new Date(match.date),
			time: match.time,
			venue: match.venue,
			status: match.status,
			type: match.type,
			resultType: match.resultType,
			resultMargin: match.resultMargin ?? 0,
			minStake: match.minStake,
			isDouble: match.isDouble,
			homeScore: match.homeScore,
			awayScore: match.awayScore,
			homeOvers: match.homeOvers,
			awayOvers: match.awayOvers,
		},
		validators: {
			onSubmit: MatchSchemaWithValidation,
		},
		onSubmit: async ({ value }) => {
			mutate({ data: value });
		},
	});

	return (
		<form
			className="flex flex-col items-center gap-7"
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
		>
			<form.AppForm>
				<form.ErrorMap />

				<div className="flex w-full justify-center gap-8">
					<form.AppField name={"status"}>
						{(field) => (
							<field.SelectField label="Status" showClearButton={false}>
								{MATCH_STATUS.map((b) => (
									<SelectItem key={b} value={b} className="capitalize">
										{b}
									</SelectItem>
								))}
							</field.SelectField>
						)}
					</form.AppField>
					<form.AppField name={"winner"}>
						{(field) => (
							<field.SelectField label="Winner">
								<SelectItem
									value={match.homeTeam.shortName}
									className="capitalize"
								>
									{match.homeTeam.fullName}
								</SelectItem>
								<SelectItem
									value={match.awayTeam.shortName}
									className="capitalize"
								>
									{match.awayTeam.fullName}
								</SelectItem>
							</field.SelectField>
						)}
					</form.AppField>
				</div>

				<div className="flex  w-full justify-center gap-8">
					<form.AppField name={"homeScore"}>
						{(field) => (
							<field.TextField label={`${match.homeTeam.shortName} Score`} />
						)}
					</form.AppField>
					<form.AppField name={"homeOvers"}>
						{(field) => (
							<field.TextField label={`${match.homeTeam.shortName} Overs`} />
						)}
					</form.AppField>
				</div>

				<div className="flex w-full justify-center gap-8">
					<form.AppField name={"awayScore"}>
						{(field) => (
							<field.TextField label={`${match.awayTeam.shortName} Score`} />
						)}
					</form.AppField>
					<form.AppField name={"awayOvers"}>
						{(field) => (
							<field.TextField label={`${match.awayTeam.shortName} Overs`} />
						)}
					</form.AppField>
				</div>

				<div className="flex w-full justify-center gap-8">
					<form.AppField name={"resultType"}>
						{(field) => (
							<field.SelectField label="Result Type" showClearButton={false}>
								{RESULT_TYPES.map((b) => (
									<SelectItem key={b} value={b} className="capitalize">
										{b}
									</SelectItem>
								))}
							</field.SelectField>
						)}
					</form.AppField>
					<form.AppField name={"resultMargin"}>
						{(field) => <field.TextField label={"Margin"} />}
					</form.AppField>
				</div>

				<form.SubmitButton label={"Submit"} className={cn("w-full")} />
			</form.AppForm>
		</form>
	);
}

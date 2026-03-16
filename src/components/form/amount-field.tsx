import type { FieldApi } from "@tanstack/react-form";
import { Minus, Plus } from "lucide-react";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Input } from "../ui/input";

export type Props = {
	field: FieldApi<
		any,
		any,
		number,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any,
		any
	>;
	label: string;
	minAmount: number;
	isLoading?: boolean;
	isRequired?: boolean;
	isDisabled?: boolean;
	className?: string;
};

export function AmountField({
	label,
	field,
	minAmount,
	isDisabled,
	isRequired,
	className,
}: Props) {
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	const decrement = () => {
		if (field.state.value - 10 < minAmount) field.handleChange(minAmount);
		else field.handleChange(field.state.value - 10);
	};
	const increment = () => field.handleChange(field.state.value + 10);

	const fieldLabel = (
		<FieldLabel htmlFor={"amount"} className={cn("text-sm title")}>
			{label}
		</FieldLabel>
	);

	return (
		<Field>
			<FieldContent className={cn("", className)}>
				{fieldLabel}
				<ButtonGroup className="h-auto w-full">
					<Button
						type="button"
						variant={"outline"}
						size={"icon-lg"}
						disabled={isDisabled || field.state.value <= minAmount}
						onClick={decrement}
					>
						<Minus />
					</Button>
					<Input
						id={field.name}
						name={field.name}
						value={field.state.value}
						onBlur={field.handleBlur}
						onChange={(e) => field.handleChange(+e.target.value)}
						onFocus={(e) => e.target.select()}
						aria-invalid={isInvalid}
						className="w-full text-lg h-10 font-normal text-center"
						disabled={isDisabled}
						required={isRequired}
					/>
					<Button
						type="button"
						variant={"outline"}
						size={"icon-lg"}
						onClick={increment}
						disabled={isDisabled}
					>
						<Plus />
					</Button>
				</ButtonGroup>
			</FieldContent>
		</Field>
	);
}

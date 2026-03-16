import type { ReactNode } from "react";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FormBase, type FormControlProps } from "./base";
import { useFieldContext } from "./hooks";

export function SelectField({
	children,
	...props
}: FormControlProps & {
	children: ReactNode;
}) {
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	return (
		<FormBase {...props}>
			<Select
				onValueChange={(e) => {
					field.handleChange(e);
					if (props.onChange) props.onChange();
				}}
				value={field.state.value}
			>
				<SelectTrigger
					aria-invalid={isInvalid}
					id={field.name}
					onBlur={field.handleBlur}
					className="w-full text-sm"
					disabled={props.isDisabled}
					aria-required={props.isRequired}
				>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>{children}</SelectContent>
			</Select>
		</FormBase>
	);
}

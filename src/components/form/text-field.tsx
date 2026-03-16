import { InputGroupInput } from "@/components/ui/input-group";
import { FormBase, type FormControlProps } from "./base";
import { useFieldContext } from "./hooks";

export function TextField(props: FormControlProps) {
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	return (
		<FormBase {...props}>
			<InputGroupInput
				id={field.name}
				name={field.name}
				value={field.state.value}
				onBlur={field.handleBlur}
				onChange={(e) => field.handleChange(e.target.value)}
				onFocus={(e) => e.target.select()}
				aria-invalid={isInvalid}
				className="w-full text-sm"
				disabled={props.isDisabled}
				required={props.isRequired}
			/>
		</FormBase>
	);
}

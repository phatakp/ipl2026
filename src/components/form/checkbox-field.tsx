import { Checkbox } from "@/components/ui/checkbox";
import { FormBase, type FormControlProps } from "./base";
import { useFieldContext } from "./hooks";

export function CheckboxField(props: FormControlProps) {
	const field = useFieldContext<boolean>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	return (
		<FormBase {...props} controlFirst horizontal>
			<Checkbox
				id={field.name}
				name={field.name}
				checked={field.state.value}
				onBlur={field.handleBlur}
				onCheckedChange={(e) => field.handleChange(!field.state.value)}
				aria-invalid={isInvalid}
			/>
		</FormBase>
	);
}

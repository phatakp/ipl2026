import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { AmountField } from "./amount-field";
import { CheckboxField } from "./checkbox-field";
import { DateField } from "./date-field";
import { FormErrorMap } from "./error-map";
import { SelectField } from "./select-field";
import { SubmitButton } from "./submit-button";
import { TextField } from "./text-field";

const { fieldContext, formContext, useFieldContext, useFormContext } =
	createFormHookContexts();

const { useAppForm, withFieldGroup } = createFormHook({
	fieldComponents: {
		TextField,
		CheckboxField,
		SelectField,
		DateField,
		AmountField,
	},
	formComponents: {
		SubmitButton: SubmitButton,
		ErrorMap: FormErrorMap,
	},
	fieldContext,
	formContext,
});

export { useAppForm, useFieldContext, useFormContext, withFieldGroup };

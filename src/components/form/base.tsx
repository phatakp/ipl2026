import type { AnyFieldMeta } from "@tanstack/react-form";
import { XIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ZodError } from "zod";
import { Badge } from "@/components/ui/badge";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
} from "@/components/ui/input-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { useFieldContext } from "./hooks";

export type FormControlProps = {
	label: string;
	description?: string;
	isLoading?: boolean;
	showClearButton?: boolean;
	isRequired?: boolean;
	isDisabled?: boolean;
	className?: string;
	onChange?: () => void;
	onClear?: () => void;
};

type FieldErrorsProps = {
	meta: AnyFieldMeta;
};

type Props = FormControlProps & {
	children: ReactNode;
	horizontal?: boolean;
	controlFirst?: boolean;
};

export function FormBase({
	children,
	label,
	description,
	controlFirst,
	horizontal,
	onClear,
	isLoading = false,
	isRequired = true,
	isDisabled = false,
	showClearButton = true,
	className,
}: Props) {
	const field = useFieldContext<string | undefined>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	const handleClear = () => {
		field.form.setFieldValue(field.name, "");
		if (onClear) onClear();
	};

	const fieldLabel = (
		<FieldLabel
			htmlFor={field.name}
			className={cn("text-sm", isDisabled ? "text-muted-foreground" : "title")}
		>
			{label} {!isRequired && "(Optional)"}
		</FieldLabel>
	);

	if (isLoading)
		return <Skeleton className={cn(controlFirst ? "size-4" : "w-full h-10")} />;

	if (controlFirst)
		return (
			<Field
				data-invalid={isInvalid}
				orientation={horizontal ? "horizontal" : undefined}
				className="shadow-input"
			>
				{children}
				<FieldContent className="gap-1">
					{fieldLabel}
					{description && (
						<FieldDescription className="text-balance">
							{description}
						</FieldDescription>
					)}
					{isInvalid && <FieldErrors meta={field.state.meta} />}
				</FieldContent>
			</Field>
		);

	return (
		<Field
			data-invalid={isInvalid}
			orientation={horizontal ? "horizontal" : undefined}
		>
			<FieldContent>
				{fieldLabel}
				<InputGroup className={cn("w-full", className)}>
					{children}
					{isLoading ? (
						<InputGroupAddon align="inline-end">
							<Spinner />
						</InputGroupAddon>
					) : showClearButton && !isDisabled ? (
						<InputGroupButton
							size="icon-xs"
							aria-label="Clear"
							onClick={handleClear}
						>
							<XIcon />
						</InputGroupButton>
					) : null}
				</InputGroup>
				{description && <FieldDescription>{description}</FieldDescription>}
				{isInvalid && <FieldErrors meta={field.state.meta} />}
			</FieldContent>
		</Field>
	);
}

const FieldErrors = ({ meta }: FieldErrorsProps) => {
	if (!meta.isTouched) return null;

	return (
		<div className="flex flex-col gap-1">
			{meta.errors.map(({ message }: ZodError, index) => (
				<Badge key={index} variant={"destructive"} className="w-full">
					{message}
				</Badge>
			))}
		</div>
	);
};

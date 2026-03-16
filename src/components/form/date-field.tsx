import { CalendarIcon } from "lucide-react";
import { useId, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";
import { FormBase, type FormControlProps } from "./base";
import { useFieldContext } from "./hooks";

export function DateField(props: FormControlProps) {
	const id = useId();
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [month, setMonth] = useState<Date | undefined>(date);

	function isValidDate(date: Date | undefined) {
		if (!date) {
			return false;
		}
		return !Number.isNaN(date.getTime());
	}

	return (
		<FormBase {...props} showClearButton={false}>
			<InputGroupInput
				className="w-full text-sm"
				id={field.name}
				name={field.name}
				value={field.state.value}
				onBlur={field.handleBlur}
				disabled={props.isDisabled}
				required={props.isRequired}
				onChange={(e) => {
					const date = new Date(e.target.value);
					field.handleChange(formatDate(date));
					if (isValidDate(date)) {
						setDate(date);
						setMonth(date);
					}
				}}
				onKeyDown={(e) => {
					if (e.key === "ArrowDown") {
						e.preventDefault();
						setOpen(true);
					}
				}}
				aria-invalid={isInvalid}
			/>
			<InputGroupButton asChild size={"icon-xs"}>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							id={id}
							variant="ghost"
							className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
						>
							<CalendarIcon className="size-3.5" />
							<span className="sr-only">Select date</span>
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto overflow-hidden p-0"
						align="end"
						alignOffset={-8}
						sideOffset={10}
					>
						<Calendar
							mode="single"
							selected={date}
							captionLayout="dropdown"
							month={month}
							onMonthChange={setMonth}
							onSelect={(date) => {
								setDate(date);
								field.handleChange(formatDate(date));
								setOpen(false);
							}}
						/>
					</PopoverContent>
				</Popover>
			</InputGroupButton>
		</FormBase>
	);
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { predKeys } from "./query-options";
import { addPrediction, doublePrediction, updatePrediction } from "./services";

export function useCreatePrediction() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: addPrediction,
		onSuccess: () => {
			queryClient.invalidateQueries();
			router.invalidate();
			toast.success(`Prediction added successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useUpdatePrediction() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: updatePrediction,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: predKeys.all });
			router.invalidate();
			toast.success(`Prediction updated successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useDoublePrediction() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: doublePrediction,
		onSuccess: () => {
			queryClient.invalidateQueries();
			router.invalidate();
			toast.success(`Double played successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { useModal } from "@/components/shared/modal";
import { predKeys } from "../predictions/query-options";
import { matchKeys } from "./query-options";
import {
	addDefaultBetsForMatch,
	addMatch,
	reverseBetsForMatch,
	updateMatch,
} from "./services";

export function useCreateMatch() {
	const queryClient = useQueryClient();
	const { closeModal, modalId } = useModal();
	return useMutation({
		mutationFn: addMatch,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: matchKeys.all });
			closeModal(modalId);
			toast.success(`Match added successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useUpdateMatch() {
	const queryClient = useQueryClient();
	const router = useRouter();
	const { closeModal, modalId } = useModal();
	return useMutation({
		mutationFn: updateMatch,
		onSuccess: () => {
			queryClient.invalidateQueries();
			router.invalidate();
			closeModal(modalId);
			toast.success(`Match updated successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useDefaultBetsMatch() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: addDefaultBetsForMatch,
		onSuccess: (_, { data: { number } }) => {
			queryClient.invalidateQueries({ queryKey: matchKeys.matchByNum(number) });
			queryClient.invalidateQueries({ queryKey: predKeys.matchPreds(number) });
			router.invalidate();
			toast.success(`Default bets added successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useReverseBetsMatch() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: reverseBetsForMatch,
		onSuccess: () => {
			queryClient.invalidateQueries();
			router.invalidate();
			toast.success(`Bets reversed successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

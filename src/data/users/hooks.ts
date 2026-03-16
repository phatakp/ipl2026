import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { useModal } from "@/components/shared/modal";
import { userKeys } from "./query-options";
import { activateProfile, upsertProfile } from "./services";

export function useUpsertProfile() {
	const queryClient = useQueryClient();
	const router = useRouter();
	const { closeModal, modalId } = useModal();
	return useMutation({
		mutationFn: upsertProfile,
		onSuccess: (_, { data: { update } }) => {
			queryClient.invalidateQueries({ queryKey: userKeys.all });
			closeModal(modalId);
			router.invalidate();
			toast.success(`Profile ${update ? "updated" : "created"} successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

export function useActivateProfile() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: activateProfile,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: userKeys.all });
			router.invalidate();
			toast.success(`Profile activated successfully`);
		},
		onError: (error) => {
			toast.error(error.message ?? "Could not process request");
		},
	});
}

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { u as useModal } from "./modal-VNn8FiAx.mjs";
import { v as userKeys } from "./router-CJYt2Yz5.mjs";
import { f as activateProfile, u as upsertProfile } from "./services-bLtPaa4d.mjs";
function useUpsertProfile() {
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
    }
  });
}
function useActivateProfile() {
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
    }
  });
}
export {
  useUpsertProfile as a,
  useActivateProfile as u
};

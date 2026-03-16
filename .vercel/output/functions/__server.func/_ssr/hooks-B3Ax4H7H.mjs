import { b as useQueryClient, c as useMutation } from "../_chunks/_libs/@tanstack/react-query.mjs";
import { u as useRouter } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { z as zt } from "../_libs/react-hot-toast.mjs";
import { u as useModal } from "./modal-CCBgzmTM.mjs";
import { s as userKeys } from "./router-D0bPNyc3.mjs";
import { u as upsertProfile, f as activateProfile } from "./services-D737QxMl.mjs";
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
      zt.success(`Profile ${update ? "updated" : "created"} successfully`);
    },
    onError: (error) => {
      zt.error(error.message ?? "Could not process request");
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
      zt.success(`Profile activated successfully`);
    },
    onError: (error) => {
      zt.error(error.message ?? "Could not process request");
    }
  });
}
export {
  useUpsertProfile as a,
  useActivateProfile as u
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePhotos as deletePhotosApi } from "../../services/apiServices";
import toast from "react-hot-toast";
export const useDeletePhotos = () => {
  const queryClient = useQueryClient();
  const { mutate: deletePhotos, isPending: isLoading } = useMutation({
    mutationFn: deletePhotosApi,
    onSuccess: () => {
      toast.success("Photo deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["myService"] });
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { deletePhotos, isLoading };
};

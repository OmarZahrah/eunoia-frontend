import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePhotos as deletePhotosApi } from "../../services/apiServices";
export const useDeletePhotos = () => {
  const queryClient = useQueryClient();
  const { mutate: deletePhotos, isPending: isLoading } = useMutation({
    mutationFn: deletePhotosApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service"] });
    },
    onError: (err) => {
      console.log(err);
      console.log(err?.response?.data?.message);
    },
  });
  return { deletePhotos, isLoading };
};

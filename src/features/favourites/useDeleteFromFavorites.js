import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { deleteFromFavorites as deleteFromFavoritesApi } from "../../services/apiFavorites";
import toast from "react-hot-toast";

export const useDeleteFromFavorites = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteFromFavorites,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: deleteFromFavoritesApi,
    onSuccess: (service) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Removed From Favorites");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { deleteFromFavorites, isLoading, isSuccess };
};

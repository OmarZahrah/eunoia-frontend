import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addToFavorites as addToFavoriteApi } from "../../services/apiFavorites";
import toast from "react-hot-toast";

export const useAddToFavorite = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const {
    mutate: addToFavorites,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: addToFavoriteApi,
    onSuccess: (service) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Added To Favorites");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addToFavorites, isLoading, isSuccess };
};

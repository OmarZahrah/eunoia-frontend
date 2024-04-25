import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { deleteReview as deleteReviewApi } from "../../services/apiReview";
import toast from "react-hot-toast";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteReview, isPending: isLoading } = useMutation({
    mutationFn: deleteReviewApi,
    onSuccess: () => {
      toast.success("Review deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["service"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err?.response?.data?.message);
    },
  });
  return { deleteReview, isLoading };
};

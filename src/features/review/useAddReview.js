import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addReview as addReviewApi } from "../../services/apiReview";
import toast from "react-hot-toast";

export const useAddReview = () => {
  const queryClient = useQueryClient();

  const { mutate: addReview, isPending: isLoading } = useMutation({
    mutationFn: addReviewApi,
    onSuccess: () => {
      toast.success("Review added successfully");
      queryClient.invalidateQueries({ queryKey: ["service"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err?.response?.data?.message);
    },
  });
  return { addReview, isLoading };
};

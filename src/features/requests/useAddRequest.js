import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRequest as addRequestApi } from "../../services/apiRequest";
import toast from "react-hot-toast";

export const useAddRequest = () => {
  const queryClient = useQueryClient();

  const { mutate: addRequest, isPending: isLoading } = useMutation({
    mutationFn: addRequestApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requests"] });
      toast.success("Request Sent Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addRequest, isLoading };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleRequest as handleRequestApi } from "../../services/apiRequest";
import toast from "react-hot-toast";

export const useHandleRequest = () => {
  const queryClient = useQueryClient();

  const { mutate: handleRequest, isPending: isLoading } = useMutation({
    mutationFn: handleRequestApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["providerRequests"] });
      //   toast.success("Request Sent Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { handleRequest, isLoading };
};

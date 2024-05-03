import { useMutation, useQueryClient } from "@tanstack/react-query";
import { payment as paymentApi } from "../../services/apiPayment";
import toast from "react-hot-toast";

export const usePayment = () => {
  const queryClient = useQueryClient();

  const {
    mutate: payment,
    isPending: isLoading,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: paymentApi,
    onSuccess: () => {},
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { payment, isLoading, isSuccess, data };
};

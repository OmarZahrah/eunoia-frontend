import { useMutation } from "@tanstack/react-query";
import { payment as paymentApi } from "../../services/apiPayment";
export const usePayment = () => {
  const {
    mutate: payment,
    isPending: isLoading,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: paymentApi,
    onSuccess: () => {
      window.location.replace(data);
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { payment, isLoading, isSuccess, data };
};

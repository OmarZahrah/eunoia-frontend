import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addService as addServiceApi } from "../../services/apiServices";
import toast from "react-hot-toast";

export const useAddService = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: addService, isPending: isLoading } = useMutation({
    mutationFn: addServiceApi,
    onSuccess: (service) => {
      queryClient.setQueryData(["service"], service);
      navigate("/home", { replace: true });
      toast.success("Service Added Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addService, isLoading };
};

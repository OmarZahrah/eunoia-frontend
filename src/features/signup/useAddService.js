import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addService } from "../../services/services";
// import toast from "react-hot-toast";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // mutationFn: (data) => addService(data),
    mutationFn: addService,
    onSuccess: (service) => {
      console.log("service", service);
      queryClient.setQueryData(["service"], service);
      navigate("/home", { replace: true });
      // toast.success("Account successfully created!");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { updateUser, isUpdating };
};

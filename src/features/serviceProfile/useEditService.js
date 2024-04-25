import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { editService as editServiceApi } from "../../services/apiServices";
import toast from "react-hot-toast";

export const useEditService = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: editService, isPending: isLoading } = useMutation({
    mutationFn: editServiceApi,
    onSuccess: (service) => {
      // queryClient.setQueryData(["service"], service);
      //   navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["myService"] });
      toast.success("Service Updated Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { editService, isLoading };
};

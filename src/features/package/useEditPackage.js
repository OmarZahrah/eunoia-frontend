import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPackage as editPackageApi } from "../../services/apiPackages";
import toast from "react-hot-toast";

export const useEditPackage = () => {
  const queryClient = useQueryClient();

  const { mutate: editPackage, isPending: isLoading } = useMutation({
    mutationFn: editPackageApi,
    onSuccess: (service) => {
      // queryClient.setQueryData(["service"], service);
      //   navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["package"] });
      // toast.success("Service Updated Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { editPackage, isLoading };
};

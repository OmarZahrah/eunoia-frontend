import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePackage as deletePackageApi } from "../../services/apiPackages";
import toast from "react-hot-toast";

export const useDeletePackage = () => {
  const queryClient = useQueryClient();

  const { mutate: deletePackage, isPending: isLoading } = useMutation({
    mutationFn: (id) => deletePackageApi(id),
    onSuccess: (packages) => {
      queryClient.invalidateQueries({ queryKey: ["myService"] });
      toast.success("package deleted Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { deletePackage, isLoading };
};

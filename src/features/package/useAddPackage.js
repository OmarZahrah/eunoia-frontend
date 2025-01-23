import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPackage as addPackageApi } from "../../services/apiPackages";
import toast from "react-hot-toast";

export const useAddPackage = () => {
  const queryClient = useQueryClient();

  const { mutate: addPackage, isPending: isLoading } = useMutation({
    mutationFn: addPackageApi,
    onSuccess: (packages) => {
      queryClient.setQueryData(["package"], packages);
      queryClient.invalidateQueries(["myService"]);
      toast.success("package Added Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addPackage, isLoading };
};

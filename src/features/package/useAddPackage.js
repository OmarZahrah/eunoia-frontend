import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addPackage as addPackageApi } from "../../services/apiPackages";
import toast from "react-hot-toast";

export const useAddPackage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: addPackage, isPending: isLoading } = useMutation({
    mutationFn: addPackageApi,
    onSuccess: (packages) => {
      queryClient.setQueryData(["package"], packages);
      navigate(-1);
      toast.success("package Added Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addPackage, isLoading };
};

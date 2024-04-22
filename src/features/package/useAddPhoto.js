import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPhoto as addPhotoApi } from "../../services/apiPackages";
import toast from "react-hot-toast";

export const useAddPhoto = () => {
  const queryClient = useQueryClient();

  const { mutate: addPhoto, isPending: isLoading } = useMutation({
    mutationFn: (id, photo) => addPhotoApi(id, photo),
    onSuccess: (service) => {
      // queryClient.setQueryData(["service"], service);
      //   navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["package"] });
      toast.success("Package Updated Successfully");
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addPhoto, isLoading };
};

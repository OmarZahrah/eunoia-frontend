import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { addPhotos as addPhotosApi } from "../../services/apiServices";
import toast from "react-hot-toast";

export const useAddPhotos = () => {
  const queryClient = useQueryClient();

  const { mutate: addPhotos, isPending: isLoading } = useMutation({
    mutationFn: addPhotosApi,
    onSuccess: () => {
      // queryClient.setQueryData(["service"], service);
      //   navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["service"] });
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { addPhotos, isLoading };
};

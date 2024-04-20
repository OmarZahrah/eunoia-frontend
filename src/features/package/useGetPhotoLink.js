import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { photoLink as photoLinkApi } from "../../services/cloudinary";
import toast from "react-hot-toast";

export const useGetPhotoLink = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: photoLink, isPending: isLoading } = useMutation({
    mutationFn: photoLinkApi,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["package"] });
    //   navigate("/home", { replace: true });
    //   toast.success("package Added Successfully");
    // },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { photoLink, isLoading };
};

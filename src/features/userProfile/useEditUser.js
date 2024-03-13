import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export const useEditUser = () => {
  const queryClient = useQueryClient();

  //   const navigate = useNavigate();
  const { mutate: editUser, isPending: isLoading } = useMutation({
    mutationFn: editUserApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      //   navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Changes have been saved");
      console.log(user);
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { editUser, isLoading };
};

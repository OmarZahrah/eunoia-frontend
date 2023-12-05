import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { updateCurrentUser } from "../../services/user";
// import toast from "react-hot-toast";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => updateCurrentUser(data),
    onSuccess: (user) => {
      console.log(user);
      navigate("/home", { replace: true });
      // toast.success("Account successfully created!");
    },
  });
  return { updateUser, isUpdating };
};

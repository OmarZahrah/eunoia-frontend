import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const res = useMutation();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Welcome :)");
      queryClient.setQueryData(["user"], user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err?.response?.data?.message);
    },
  });
  return { login, isLoading };
};

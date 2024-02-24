import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/Auth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      toast.success("Signup Successfully :)");
      navigate("/signup/create", { replace: true });
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    },
  });
  return { signup, isLoading };
}

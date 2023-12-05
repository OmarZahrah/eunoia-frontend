import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/Auth";
import { useNavigate } from "react-router";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/home", { replace: true });
    },
  });
  return { signup, isLoading };
}

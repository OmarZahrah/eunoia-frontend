import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      Cookies.set("eunoia-jwt", data.token);
      toast.success("Welcome :)");
      () => setIsAuthenticated(true);
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err?.response?.data?.message);
    },
  });
  return { login, isLoading };
};

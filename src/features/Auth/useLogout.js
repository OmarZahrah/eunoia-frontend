import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/welcome", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.clear({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    },
  });
  return { logout, isLoading };
}

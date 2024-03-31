import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useUser() {
  const navigate = useNavigate();
  const {
    isError,
    isLoading,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
    onFailure: () => {
      navigate("/error", { replace: true });
    },
  });
  // if (isError)
  if (isError) {
    toast.error("Error, Please Login First");
    navigate("/error", { replace: true });
  }

  return { isLoading, user };
}

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

export function useUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isError,
    isLoading,
    error,
    data: user,
    status,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  // if (isError) {
  //   console.log(error);
  //   const unauthorized = error.response.status === 401;
  //   if (unauthorized) {
  //     queryClient.setQueryData(["user"], {});
  //     return { isLoading, user: {} };
  //   }
  // }

  return { isLoading, user };
}

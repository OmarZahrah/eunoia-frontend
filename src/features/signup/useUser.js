import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onError: (err) => {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    },
  });

  return { isLoading, user };
}

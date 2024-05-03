import { useQuery } from "@tanstack/react-query";
import { getUserRequests } from "../../services/apiRequest";

export function useGetUserRequest() {
  const { isLoading, data: userRequests } = useQuery({
    queryKey: ["userRequests"],
    queryFn: getUserRequests,
  });

  return { isLoading, userRequests };
}

import { useQuery } from "@tanstack/react-query";
import { getProviderRequests } from "../../services/apiRequest";

export function useGetProviderRequests() {
  const { isLoading, data: providerRequests } = useQuery({
    queryKey: ["providerRequests"],
    queryFn: getProviderRequests,
  });

  return { isLoading, providerRequests };
}

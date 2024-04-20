import { useQuery } from "@tanstack/react-query";
import { getCurrentService } from "../../services/apiServices";

export function useService(id) {
  const { isLoading, data: service } = useQuery({
    queryKey: ["service"],
    queryFn: () => getCurrentService(id),
  });

  return { isLoading, service };
}

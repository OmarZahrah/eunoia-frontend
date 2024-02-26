import { useQuery } from "@tanstack/react-query";
import { getCurrentService } from "../../services/apiServices";

export function useService() {
  const { isLoading, data: service } = useQuery({
    queryKey: ["service"],
    queryFn: getCurrentService,
  });

  return { isLoading, service };
}

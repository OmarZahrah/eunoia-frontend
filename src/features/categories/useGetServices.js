import { useQuery } from "@tanstack/react-query";
import { getAllServices, getCurrentService } from "../../services/apiServices";

export function useGetServices(filter) {
  const { isLoading, data: allServices } = useQuery({
    queryKey: ["services"],
    queryFn: () => getAllServices(filter),
  });

  return { isLoading, allServices };
}

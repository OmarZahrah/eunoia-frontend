import { useQuery } from "@tanstack/react-query";
import { getAllServices, getCurrentService } from "../../services/apiServices";

export function useGetServices(filter) {
  const { isLoading, data: allServices } = useQuery({
    queryKey: [
      `${filter && filter[0].category ? filter[0].category : "services"}`,
    ],
    queryFn: () => getAllServices(filter),
  });

  return { isLoading, allServices };
}

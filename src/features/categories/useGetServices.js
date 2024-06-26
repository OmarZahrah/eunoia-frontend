import { useQuery } from "@tanstack/react-query";
import { getAllServices, getCurrentService } from "../../services/apiServices";
import { useServiceContext } from "../../context/ServiceContext";

export function useGetServices(filter) {
  const { location, rating } = useServiceContext();
  const { isLoading, data: allServices } = useQuery({
    queryKey: [
      `${filter && filter[0].category ? filter[0].category : "services"}`,
      location,
      rating,
    ],
    queryFn: () => getAllServices(filter),
  });

  return { isLoading, allServices };
}

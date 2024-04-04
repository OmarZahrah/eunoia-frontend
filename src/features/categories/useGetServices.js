import { useQuery } from "@tanstack/react-query";
import { getAllServices, getCurrentService } from "../../services/apiServices";

export function useGetServices(limit, page) {
  const { isLoading, data: allServices } = useQuery({
    queryKey: ["services"],
    queryFn: () => getAllServices(limit, page),
    onError: (e) => {
      console.log(e);
    },
  });

  return { isLoading, allServices };
}

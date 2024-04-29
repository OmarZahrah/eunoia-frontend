import { useQuery } from "@tanstack/react-query";
import { getRequests  } from "../../services/apiRequest";


export function useGetRequest(role) {
  const { isLoading, data: requests } = useQuery({
    queryKey: ["requests"],
    queryFn:()=> getRequests(role),
  });
  

  return { isLoading, requests };
}

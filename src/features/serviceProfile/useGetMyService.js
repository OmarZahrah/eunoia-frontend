import { useQuery } from "@tanstack/react-query";
import { getMyService } from "../../services/apiServices";

export function useGetMyService() {
  const { isLoading, data: myService } = useQuery({
    queryKey: ["myService"],
    queryFn: getMyService,
  });

  return { isLoading, myService };
}

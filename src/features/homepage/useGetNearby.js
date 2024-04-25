import { useQuery } from "@tanstack/react-query";
import { nearbyServices as nearbyServicesApi } from "../../services/apiServices";
import { useQueryClient } from "@tanstack/react-query";

export function useGetNearby() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: nearbyServices,
    isError,
    error,
    status,
  } = useQuery({
    queryKey: ["nearby"],
    queryFn: nearbyServicesApi,
  });
  if (isError) {
    // console.log(error.response.status);
    // console.log(e)
    // toast.error("Error, Please Login First");
    // navigate("/login", { replace: true });
  }

  return { isLoading, nearbyServices };
}

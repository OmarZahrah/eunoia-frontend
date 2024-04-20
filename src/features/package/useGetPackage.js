import { useQuery } from "@tanstack/react-query";
import { getPackage } from "../../services/apiPackages";

export function useGetPackage(id) {
  const { isLoading, data: packageData } = useQuery({
    queryKey: ["package"],
    queryFn: () => getPackage(id),
  });

  return { isLoading, packageData };
}

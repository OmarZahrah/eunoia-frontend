import { useQuery } from "@tanstack/react-query";
import { getPackage } from "../../services/apiPackages";

export function useGetPackage(id) {
  const {
    isLoading,
    data: packageData,
    error,
  } = useQuery({
    queryKey: ["package"],
    queryFn: () => getPackage(id),
  });
  if (error) {
    console.log(error);
  }

  return { isLoading, packageData };
}

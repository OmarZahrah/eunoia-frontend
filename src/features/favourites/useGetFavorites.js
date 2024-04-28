import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../services/apiFavorites";

export function useGetFavorites() {
  const { isLoading, data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  return { isLoading, favorites };
}

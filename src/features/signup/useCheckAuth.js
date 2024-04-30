import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../../services/apiAuth";
import { Navigate } from "react-router-dom";

export function useCheckAuth() {
  const {
    isLoading,
    data: isAuthenticated,
    error,
  } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: checkAuth,
    staleTime: 60 * 1000,
  });

  return { isLoading, isAuthenticated: isAuthenticated?.isAuthenticated };
}

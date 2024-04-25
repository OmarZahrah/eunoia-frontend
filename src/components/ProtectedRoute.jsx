import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useCheckAuth } from "../features/signup/useCheckAuth";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useCheckAuth();

  if (isLoading) return <Loading />;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="login" replace="true" />
      )}
    </>
  );
};
export default ProtectedRoute;

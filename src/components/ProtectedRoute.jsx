import { useEffect } from "react";
import { useUser } from "../features/signup/useUser";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading) return <Loading />;

  if (isAuthenticated) return children;
};
export default ProtectedRoute;

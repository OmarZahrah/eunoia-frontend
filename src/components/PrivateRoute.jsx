import { useEffect, useState } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { useUser } from "../features/userProfile/useUser";
import { useAuthContext } from "../context/AuthContext";
import { useCheckAuth } from "../features/Auth/useCheckAuth";

const PrivateRoute = () => {
  // const { user, isAuthenticated, isLoading } = useUser();
  const { isAuthenticated, isLoading } = useCheckAuth();
  // const { isAuthenticated } = useAuthContext();
  // const isLoading = false;
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      }
    },
    [isAuthenticated, navigate, isLoading]
  );
  return <Outlet />;
};
export default PrivateRoute;

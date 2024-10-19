// components/PrivateRoute.js
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace={true} />;
}

export default PrivateRoute;

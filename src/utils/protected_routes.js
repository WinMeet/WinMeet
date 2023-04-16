import { Outlet, Navigate } from "react-router-dom";
import { isTokenValid } from "utils/token_manager";

const ProtectedRoutes = () => {
  const isAuthenticated = isTokenValid();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

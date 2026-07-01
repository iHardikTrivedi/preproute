import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./routes";

const isAuthenticated = false;
// Later replace with Redux/Auth Context

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

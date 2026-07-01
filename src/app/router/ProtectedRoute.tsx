import { Navigate, Outlet } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";
import { useAppSelector } from "@/hooks/redux";
import { ROUTES } from "./routes";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return <PageLoader />;
  }
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

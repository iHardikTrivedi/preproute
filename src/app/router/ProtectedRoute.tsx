import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";
import { selectToken } from "../store/auth.selectors";

import { ROUTES } from "./routes";

const ProtectedRoute = () => {
  const token = useAppSelector(selectToken);

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

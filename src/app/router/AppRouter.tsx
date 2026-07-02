import { Navigate, Route, Routes } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";

import LoginPage from "@/features/auth/pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routes";

// Temporary pages
const DashboardPage = () => <h1>Dashboard</h1>;
const CreateTestPage = () => <h1>Create Test</h1>;
const QuestionsPage = () => <h1>Questions</h1>;
const PreviewPage = () => <h1>Preview</h1>;

const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return null; // or <PageLoader />
  }

  return (
    <Routes>
      {/* Public */}
      <Route
        path={ROUTES.LOGIN}
        element={isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} replace /> : <LoginPage />}
      />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.CREATE_TEST} element={<CreateTestPage />} />
        <Route path={ROUTES.QUESTIONS} element={<QuestionsPage />} />
        <Route path={ROUTES.PREVIEW} element={<PreviewPage />} />
      </Route>

      {/* 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRouter;

import { Navigate, Route, Routes } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";
import { useAppSelector } from "@/hooks/redux";

import LoginPage from "@/features/auth/pages/LoginPage";
import { selectIsLoading, selectToken } from "../store/auth.selectors";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routes";

// Temporary pages
const DashboardPage = () => <h1>Dashboard</h1>;
const CreateTestPage = () => <h1>Create Test</h1>;
const QuestionsPage = () => <h1>Questions</h1>;
const PreviewPage = () => <h1>Preview</h1>;

const AppRouter = () => {
  const token = useAppSelector(selectToken);
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={token ? <Navigate to={ROUTES.DASHBOARD} replace /> : <LoginPage />}
      />

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.CREATE_TEST} element={<CreateTestPage />} />
        <Route path={ROUTES.QUESTIONS} element={<QuestionsPage />} />
        <Route path={ROUTES.PREVIEW} element={<PreviewPage />} />
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRouter;

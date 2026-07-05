import { Navigate, Route, Routes } from "react-router-dom";

import PageLoader from "@/components/common/PageLoader";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import CreateTestPage from "@/features/tests/pages/CreateTestPage";

import DashboardLayout from "@/layouts/DashboardLayout";

import { useAppSelector } from "@/hooks/redux";

import { selectIsLoading, selectToken } from "../store/auth.selectors";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routes";

// Temporary pages
const QuestionsPage = () => <h1>Questions</h1>;
const PreviewPage = () => <h1>Preview</h1>;

const IssuePage = () => <h1>Issues</h1>;
const TestPaperPage = () => <h1>Test Papers</h1>;
const UsersPage = () => <h1>Users</h1>;
const InstitutesPage = () => <h1>Institutes</h1>;
const ProfilePage = () => <h1>Profile</h1>;
const ArchivePage = () => <h1>Archive</h1>;
const PaymentsPage = () => <h1>Payments</h1>;
const LeaderboardPage = () => <h1>Leaderboard</h1>;
const MessagesPage = () => <h1>Messages</h1>;
const NotificationsPage = () => <h1>Notifications</h1>;
const SettingsPage = () => <h1>Settings</h1>;

const AppRouter = () => {
  const token = useAppSelector(selectToken);
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      {/* Public */}
      <Route
        path={ROUTES.LOGIN}
        element={token ? <Navigate to={ROUTES.DASHBOARD} replace /> : <LoginPage />}
      />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

          <Route path={ROUTES.CREATE_TEST} element={<CreateTestPage />} />
          <Route path={ROUTES.QUESTIONS} element={<QuestionsPage />} />
          <Route path={ROUTES.PREVIEW} element={<PreviewPage />} />

          <Route path={ROUTES.ISSUES} element={<IssuePage />} />
          <Route path={ROUTES.TEST_PAPERS} element={<TestPaperPage />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.INSTITUTES} element={<InstitutesPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.ARCHIVE} element={<ArchivePage />} />
          <Route path={ROUTES.PAYMENTS} element={<PaymentsPage />} />
          <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />
          <Route path={ROUTES.MESSAGES} element={<MessagesPage />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRouter;

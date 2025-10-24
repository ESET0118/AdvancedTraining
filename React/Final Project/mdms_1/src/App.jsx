import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./assets/Layouts/Header/Header.jsx";
import HeaderDashboard from "./assets/Layouts/Header/HeaderDashboard.jsx";

// Auth pages
import Login from "./assets/Pages/Login/Login.jsx";
import NewPassword from "./assets/Pages/Login/NewPassword.jsx";
import ResetPassword from "./assets/Pages/Login/ResetPassword.jsx";

// Main pages
import DashboardPage from "./assets/Pages/Dashboard/DashboardPage.jsx";
import BillsPage from "./assets/Pages/Bills/BillsPage.jsx";
import BillDetailsPage from "./assets/Pages/Bills/BillDetailsPage.jsx";
import ProfileSettingsPage from "./assets/Pages/Profile/ProfileSettingsPage.jsx";

// Error page
import ErrorScreen from "./assets/utils/ErrorScreen.jsx";

export default function App() {
  const location = useLocation();
  const noHeaderRoutes = ["/login", "/reset", "/new"];
  const isAuthPage = noHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Conditionally show header */}
      {isAuthPage ? <Header /> : <HeaderDashboard />}

      <main className="flex-grow">
        <Routes>
          {/* Redirect root → login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/new" element={<NewPassword />} />

          {/* Main routes */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Bills routes */}
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/bills/:month" element={<BillDetailsPage />} />

          {/* Profile & Settings routes */}
          <Route path="/profile-settings" element={<ProfileSettingsPage />} />

          {/* Other sidebar pages */}
          <Route path="/data" element={<ErrorScreen message="Meter Data – Coming Soon" />} />
          <Route path="/alerts" element={<ErrorScreen message="Alerts – Coming Soon" />} />
          <Route path="/logs" element={<ErrorScreen message="Logs – Coming Soon" />} />

          {/* Fallback */}
          <Route path="*" element={<ErrorScreen message="404 NOT FOUND" />} />
        </Routes>
      </main>
    </div>
  );
}

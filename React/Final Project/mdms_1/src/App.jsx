import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Headers
import Header from "./assets/Layouts/Header/Header.jsx";
import HeaderDashboard from "./assets/Layouts/Header/HeaderDashboard.jsx";

// Auth pages
import Login from "./assets/Pages/Login/Login.jsx";
import ResetPassword from "./assets/Pages/Login/ResetPassword.jsx";
import NewPassword from "./assets/Pages/Login/NewPassword.jsx";

// END USER pages
import DashboardPage from "./assets/Pages/End-User/DashboardPage.jsx";
import BillsPage from "./assets/Pages/End-User/Bills/BillsPage.jsx";
import BillDetailsPage from "./assets/Pages/End-User/Bills/BillDetailsPage.jsx";
import ProfileSettingsPage from "./assets/Pages/End-User/Profile/ProfileSettingsPage.jsx";
import MeterData from "./assets/Pages/End-User/MeterData.jsx";
import AlertsNotificationsPage from "./assets/Pages/End-User/AlertsNotificationsPage.jsx";

// ZONE MANAGER pages
import ZoneManagementDashboard from "./assets/Pages/Zone-Management/ZoneManagementDashboard.jsx";
import MeterManagementPage from "./assets/Pages/Zone-Management/MeterManagementPage.jsx";
import UserManagementPage from "./assets/Pages/Zone-Management/UserManagementPage.jsx";
import ReportsAnalytics from "./assets/Pages/Zone-Management/ReportsAnalytics.jsx";
import Settings from "./assets/Pages/Zone-Management/Settings.jsx";

// ENTERPRISE LEVEL PAGES
import EnterpriseDashboard from "./assets/Pages/Enterprise-Level/EnterpriseDashboard.jsx";
import ZoneManagementPage from "./assets/Pages/Enterprise-Level/Zone-ManagementPage.jsx";
import EnterpriseMeterManagementPage from "./assets/Pages/Enterprise-Level/MeterManagement.jsx";
import UserAndRoleManagementPage from "./assets/Pages/Enterprise-Level/UserManagement.jsx";
import AuditLogs from "./assets/Pages/Enterprise-Level/AuditLogs.jsx";
import EnterpriseSettings from "./assets/Pages/Enterprise-Level/SettingsConfiguration.jsx";

// Utils
import ErrorScreen from "./assets/utils/ErrorScreen.jsx";

export default function App() {
  const location = useLocation();
const [role, setRole] = useState(localStorage.getItem("role"));

useEffect(() => {
  const savedRole = localStorage.getItem("role");
  setRole(savedRole);
}, [location.pathname]);

const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const noHeaderRoutes = ["/login", "/reset", "/new"];
  const isAuthPage = noHeaderRoutes.includes(location.pathname);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      {isAuthPage ? (
        <Header onToggleTheme={toggleTheme} theme={theme} />
      ) : (
        <HeaderDashboard onToggleTheme={toggleTheme} theme={theme} />
      )}

      <main className="flex-grow">
        <Routes>
          {/* Default route → login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* ===== AUTH ROUTES ===== */}
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/new" element={<NewPassword />} />

          {/* ===== END USER ROUTES ===== */}
          {role === "enduser" && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/bills" element={<BillsPage />} />
              <Route path="/bills/:month" element={<BillDetailsPage />} />
              <Route path="/profile-settings" element={<ProfileSettingsPage />} />
              <Route path="/data" element={<MeterData />} />
              <Route path="/alerts" element={<AlertsNotificationsPage />} />
            </>
          )}

          {/* ===== ZONE MANAGER ROUTES ===== */}
          {role === "zonemanager" && (
            <>
              <Route path="/zone-dashboard" element={<ZoneManagementDashboard />} />
              <Route path="/meter-management" element={<MeterManagementPage />} />
              <Route path="/user-management" element={<UserManagementPage />} />
              <Route path="/reports" element={<ReportsAnalytics />} />
              <Route path="/settings" element={<Settings />} />
            </>
          )}

          {/* ===== ENTERPRISE ROUTES ===== */}
          {role === "enterprise" && (
            <>
              <Route path="/enterprise-dashboard" element={<EnterpriseDashboard />} />
              <Route path="/zone-management" element={<ZoneManagementPage />} />
              <Route path="/enterprise-meter-management" element={<EnterpriseMeterManagementPage />} />
              <Route path="/enterprise-user-management" element={<UserAndRoleManagementPage />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/enterprise-settings" element={<EnterpriseSettings />} />
            </>
          )}

          {/* ===== FALLBACK ===== */}
          <Route path="*" element={<ErrorScreen message="404 Not Found" />} />
        </Routes>
      </main>
    </div>
  );
}

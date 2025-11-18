import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    { to: "/dashboard", label: t("dashboard") },
    { to: "/bills", label: t("bills") },
    { to: "/data", label: t("meterData") },
    { to: "/alerts", label: t("alerts") },
    { to: "/profile-settings", label: t("profile") },
    { to: "/logs", label: t("logs") }
    
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside
      className="w-60 bg-white dark:bg-gray-800 border-r dark:border-gray-700 font-inter flex flex-col fixed left-0"
      style={{ top: "4rem", height: "calc(100vh - 4rem)", zIndex: 1000 }}
    >
      {/* Header inside sidebar */}
      <div className="px-5 py-6 border-b dark:border-gray-700 flex-shrink-0">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">End User</h2>
      </div>

      {/* Nav */}
      <nav className="flex-grow overflow-y-auto px-3 py-4 space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t dark:border-gray-700 flex-shrink-0">
        <button
          onClick={handleLogout}
          className="w-full px-2 py-2 rounded-md text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800/40 transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

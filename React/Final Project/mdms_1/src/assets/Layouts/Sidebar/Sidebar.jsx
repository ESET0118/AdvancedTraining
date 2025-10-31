import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();

  const items = [
    { to: "/dashboard", label: t("dashboard") },
    { to: "/bills", label: t("bills") },
    { to: "/data", label: t("meterData") },
    { to: "/alerts", label: t("alerts") },
    { to: "/profile-settings", label: t("profile") },
    { to: "/logs", label: t("logs") },
  ];

  return (
    <aside className="w-56 bg-white dark:bg-gray-800 h-full border-r dark:border-gray-700 transition-colors duration-300">
      
      <div className="px-4 py-6">
      </div>

      <nav className="px-2 space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-700 font-semibold text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

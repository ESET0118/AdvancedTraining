import { NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/bills", label: "Bills & Payments" },
  { to: "/data", label: "Meter Data" },
  { to: "/alerts", label: "Alerts & Notifications" },
  // 🔁 Changed to route to the main profile section
  { to: "/profile-settings", label: "Profile & Settings" },
  { to: "/logs", label: "Logs" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white dark:bg-gray-800 h-full border-r dark:border-gray-700 transition-colors duration-300">
      <div className="px-4 py-6">
        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
          MDMS
        </div>
      </div>

      <nav className="px-2 space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.label}
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

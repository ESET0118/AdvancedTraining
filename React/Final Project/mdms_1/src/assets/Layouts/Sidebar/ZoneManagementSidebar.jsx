import { NavLink, useNavigate } from "react-router-dom";

export default function ZoneManagementSidebar() {
  const navigate = useNavigate();

  const items = [
    { to: "/zone-dashboard", label: "Dashboard" },
    { to: "/meter-management", label: "Meter Management" },
    { to: "/user-management", label: "User Management" },
    { to: "/reports", label: "Reports & Analytics" },
    { to: "/settings", label: "Settings & Notifications" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
<aside
  className="w-60 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col font-inter fixed top-16 left-0 h-[calc(100vh-4rem)]"
  style={{ zIndex: 1000 }}
>

      {/* Title */}
      <div className="px-5 py-6 border-b dark:border-gray-700 flex-shrink-0">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Zone Manager</h2>
      </div>

      {/* Nav (non-scrollable) */}
      <nav className="px-3 flex-1 py-4 space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>

      {/* Fixed logout */}
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

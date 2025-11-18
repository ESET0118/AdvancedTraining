import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Sun, Moon, ChevronDown } from "lucide-react";

export default function HeaderDashboard() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || "enduser");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const safeNavigate = (path) => {
    if (!path) return;
    navigate(path);
  };

  const dashboards = {
    enduser: "/dashboard",
    zonemanager: "/zone-dashboard",
    enterprise: "/enterprise-dashboard",
  };

  const alerts = {
    enduser: "/alerts",
    zonemanager: null,
    enterprise: null,
  };

  const profiles = {
    enduser: "/profile-settings",
    zonemanager: null,
    enterprise: null,
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-300 dark:bg-gray-900 px-6 py-3 shadow-md transition-colors duration-300">
      
      {/* Logo → Dashboard */}
      <div
        className="text-xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer select-none"
        onClick={() => safeNavigate(dashboards[role])}
      >
        MDMS
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button
          className="relative w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          title="Notifications"
          onClick={() => safeNavigate(alerts[role])}
        >
          <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          <span className="absolute top-1.5 right-1.5 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Theme"
          className="w-12 h-6 bg-gray-400 dark:bg-gray-700 rounded-full relative transition duration-300 focus:outline-none flex items-center"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center
              ${darkMode ? "translate-x-6 bg-gray-900" : "bg-white"}`}
          >
            {darkMode ? <Moon className="w-3.5 h-3.5 text-yellow-400" /> : <Sun className="w-3.5 h-3.5 text-yellow-500" />}
          </span>
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center justify-between w-16 h-9 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            {language.toUpperCase()}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50">
              {[{ code: "en", label: "English" }, { code: "fr", label: "Français" }, { code: "hi", label: "हिन्दी" }].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 ${
                    language === lang.code ? "font-semibold text-purple-600 dark:text-purple-400" : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          onClick={() => safeNavigate(profiles[role])}
          title="Profile Settings"
          className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}

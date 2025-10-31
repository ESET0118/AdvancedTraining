import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar.jsx";
import ProfileTab from "./ProfileTab";
import SecurityTab from "./SecurityTab";
import NotificationTab from "./NotificationTab";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { key: "profile", label: "Profile" },
    { key: "security", label: "Security" },
    { key: "notification", label: "Notification" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center pt-8 overflow-y-auto">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Profile & Settings
        </h1>

        {/* Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-300 dark:border-gray-700 w-full max-w-lg justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="w-full flex justify-center px-4">
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "security" && <SecurityTab />}
          {activeTab === "notification" && <NotificationTab />}
        </div>
      </main>
    </div>
  );
}

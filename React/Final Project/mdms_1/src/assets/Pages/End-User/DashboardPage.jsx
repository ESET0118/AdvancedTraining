import { useState } from "react";
import Dashboard from "../../Components/Dashboard.jsx";
import Sidebar from "../../Layouts/Sidebar/Sidebar.jsx";
import HeaderDashboard from "../../Layouts/Header/HeaderDashboard.jsx";

export default function DashboardPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  const headerHeight = "3.5rem"; // must match HeaderDashboard height
  const sidebarWidth = "15rem"; // must match Sidebar width (w-60)

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      {showSidebar && (
        <Sidebar
          style={{
            top: headerHeight,
            height: `calc(100vh - ${headerHeight})`,
            position: "fixed",
          }}
        />
      )}

      {/* Main Section */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginTop: headerHeight, // space for fixed header
          marginLeft: showSidebar ? sidebarWidth : 0, // space for fixed sidebar
          height: `calc(100vh - ${headerHeight})`,
          overflow: "auto", // allow scrolling for content only
        }}
      >
        {/* Header */}
        <HeaderDashboard />

        {/* Dashboard content */}
        <main className="p-8 flex-1 overflow-y-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Welcome, xyz
              </h1>
              <p className="text-gray-500 dark:text-gray-300 mt-1">
                As of Oct 5, 2025 <br /> Zone: Bangalore North
              </p>
            </div>

            <div className="text-right text-gray-500 dark:text-gray-400 text-sm">
              <p>Last synced at 10:45 AM</p>
              <p>Data Source: Smart Meter #1023</p>
            </div>
          </div>

          <Dashboard />
        </main>
      </div>
    </div>
  );
}

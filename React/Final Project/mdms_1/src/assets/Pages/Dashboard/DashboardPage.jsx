import { useState } from "react";
import Dashboard from "../../Components/Dashboard.jsx";
import Sidebar from "../../Layouts/Sidebar.jsx";

export default function DashboardPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Main Section */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex flex-col w-full">
          {/* Header / Greeting */}
          <div className="flex justify-between items-start p-8">
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

          {/* Dashboard content */}
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

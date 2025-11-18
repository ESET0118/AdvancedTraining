import React, { useState } from "react";
import Card from "../../Components/Card.jsx";
import Button from "../../Components/Button.jsx";
import LineChart from "../../Components/LineChart.jsx";
import ZoneManagementSidebar from "../../Layouts/Sidebar/ZoneManagementSidebar.jsx";

import {
  ChartBarIcon,
  CubeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function ZoneManagementDashboard() {
  const [chartView, setChartView] = useState("week");

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 font-inter">
      {/* Sidebar (fixed below header) */}
      <ZoneManagementSidebar className="fixed top-16 h-[calc(100vh-4rem)]" />

      {/* Main content */}
      <div className="flex-1 ml-60 mt-16 overflow-auto">
        <main className="p-6">
          {/* Zone Dashboard Title */}
          <h1 className="text-gray-800 dark:text-gray-100 font-semibold text-[20px] mb-4">
            Zone Dashboard
          </h1>

          {/* Zone Dashboard Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card>
              <div className="flex flex-col items-center justify-center space-y-2">
                <ChartBarIcon className="h-8 w-8 text-purple-600" />
                <p className="font-semibold text-lg text-gray-900 dark:text-white">
                  256
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Active Meters
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CubeIcon className="h-8 w-8 text-green-500" />
                <p className="font-semibold text-lg text-gray-900 dark:text-white">
                  55%
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Avg Usage
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center justify-center space-y-2">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
                <p className="font-semibold text-lg text-gray-900 dark:text-white">
                  26
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pending Alerts
                </p>
              </div>
            </Card>
          </section>

          {/* Analytics Chart Title */}
          <h1 className="text-gray-800 dark:text-gray-100 font-semibold text-[20px] mb-4">
            Analytics Chart
          </h1>

          {/* Analytics Chart Section */}
          <section className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md mb-6">
            {/* Modern Sliding Toggle */}
            <div className="flex justify-end mb-4">
              <div className="relative inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-[160px] h-10">
                {/* Slider */}
                <span
                  className={`absolute top-1 left-1 w-1/2 h-8 bg-purple-600 rounded-full transition-all duration-300 ${
                    chartView === "month" ? "translate-x-[90%]" : ""
                  }`}
                ></span>

                {/* Labels */}
                <div className="flex w-full justify-between px-2 text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 cursor-pointer select-none">
                  <span
                    onClick={() => setChartView("week")}
                    className={`w-1/2 text-center ${
                      chartView === "week" ? "text-white" : ""
                    }`}
                  >
                    Week
                  </span>
                  <span
                    onClick={() => setChartView("month")}
                    className={`w-1/2 text-center ${
                      chartView === "month" ? "text-white" : ""
                    }`}
                  >
                    Month
                  </span>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <LineChart view={chartView} />
          </section>

          {/* Action Buttons */}
          <section className="flex space-x-4 mt-4">
            <Button text="Add Meter" />
            <Button text="Generate Report" />
          </section>
        </main>
      </div>
    </div>
  );
}

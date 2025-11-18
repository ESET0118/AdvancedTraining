import React, { useState } from "react";
import EndUserSidebar from "../../Layouts/Sidebar/ZoneManagementSidebar.jsx";
import LineChart from "../../Components/LineChart.jsx";
import Table from "../../Components/Table.jsx";
import Button from "../../Components/Button.jsx";
import SearchBox from "../../Components/Searchbox.jsx";
import YearSelector from "../../Components/YearSelector.jsx";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ReportsAnalytics() {
  const [year, setYear] = useState(2025);
  const [searchTerm, setSearchTerm] = useState("");

  const barChartData = [
    { name: "Mangaluru", value: 40 },
    { name: "Belgaum", value: 80 },
    { name: "Panampilly", value: 100 },
    { name: "PNR", value: 50 },
    { name: "Kozhikode", value: 90 },
  ];

  const tableData = [
    { id: "123", date: "2025-10-07", user: "abc", consumption: "214kWh", status: "Active" },
    { id: "124", date: "2025-09-07", user: "xyz", consumption: "99kWh", status: "De-Activated" },
    { id: "125", date: "2025-09-12", user: "abc", consumption: "214kWh", status: "Active" },
  ];

  const filteredData = tableData.filter(
    (row) =>
      row.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar fixed below header */}
      <EndUserSidebar className="fixed top-16 h-[calc(100vh-4rem)]" />

      {/* Main content */}
      <div className="flex-1 ml-60 mt-16 p-8 overflow-auto text-gray-900 dark:text-gray-100 space-y-6">
        {/* Page Header */}
        <h2 className="text-lg font-semibold mb-1">Reports and Analytics</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Trend of energy usage over time.
        </p>

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-10 transition-colors duration-300">
          <LineChart />
        </div>

        {/* Zone Filter Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-10 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <SearchBox
              placeholder="Search Zone..."
              value={searchTerm}
              onChange={setSearchTerm}
              className="h-10 w-full md:w-64"
            />
            <YearSelector
              year={year}
              setYear={setYear}
              className="h-10 w-full md:w-32"
            />
          </div>

          {/* Bar + Line Chart */}
          <div className="h-[294px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={barChartData}
                barGap={2}
                barCategoryGap="22%"
                margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
                <XAxis dataKey="name" stroke="#888" tick={{ fill: "#ccc" }} />
                <YAxis stroke="#888" tick={{ fill: "#ccc" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" barSize={126.6} fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Line type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Reports</h3>
            <div className="flex gap-2">
              <Button text="CSV" paddingX="px-2" paddingY="py-1" fontSize="text-sm" />
              <Button text="PDF" paddingX="px-2" paddingY="py-1" fontSize="text-sm" />
            </div>
          </div>

          <Table
            columns={[
              { key: "id", label: "Meter ID" },
              { key: "date", label: "Date" },
              { key: "user", label: "User name" },
              { key: "consumption", label: "Consumption" },
              { key: "status", label: "Status" },
            ]}
            data={filteredData}
          />
        </div>
      </div>
    </div>
  );
}

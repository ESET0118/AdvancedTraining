import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar.jsx";
import Card from "../../Components/Card.jsx";
import LineChart from "../../Components/LineChart.jsx";
import HeaderDashboard from "../../Layouts/Header/HeaderDashboard.jsx";

export default function MeterDataPage() {
  const [selectedRange, setSelectedRange] = useState("Day");

  const datasets = {
    Day: {
      labels: ["01 Sep", "02 Sep", "03 Sep", "04 Sep", "05 Sep", "06 Sep", "07 Sep"],
      previous: [300, 200, 250, 400, 370, 380, 310],
      current: [350, 280, 330, 410, 400, 420, 300],
    },
    Week: {
      labels: ["W1", "W2", "W3", "W4"],
      previous: [2000, 2100, 1900, 2200],
      current: [2050, 2150, 1950, 2250],
    },
    Month: {
      labels: ["Jun", "Jul", "Aug", "Sep"],
      previous: [8000, 8200, 7800, 8300],
      current: [8100, 8300, 7900, 8400],
    },
  };

  const data = {
    labels: datasets[selectedRange].labels,
    datasets: [
      {
        label: "Previous",
        data: datasets[selectedRange].previous,
        borderColor: "#C66C39",
        backgroundColor: "rgba(198,108,57,0.2)",
        tension: 0.4,
        fill: false,
        pointBorderColor: "#C66C39",
      },
      {
        label: "Current",
        data: datasets[selectedRange].current,
        borderColor: "#C25CFD",
        backgroundColor: "rgba(194,92,253,0.2)",
        tension: 0.4,
        fill: false,
        pointBorderColor: "#C25CFD",
      },
    ],
  };

  const readings = [
    { date: "01 Sep 2025", reading: "25 kWh", difference: "25 kWh", notes: "hello world" },
    { date: "02 Sep 2025", reading: "28 kWh", difference: "3 kWh", notes: "" },
    { date: "03 Sep 2025", reading: "30 kWh", difference: "2 kWh", notes: "" },
  ];

  const headerHeight = "3.5rem"; // adjust if your header height is different
  const sidebarWidth = "15rem";  // adjust if your sidebar width is different

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar
        style={{
          position: "fixed",
          top: headerHeight,
          height: `calc(100vh - ${headerHeight})`,
        }}
      />

      {/* Main content */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginTop: headerHeight,
          marginLeft: sidebarWidth,
          height: `calc(100vh - ${headerHeight})`,
          overflow: "auto",
        }}
      >
        {/* Optional fixed header */}
        <HeaderDashboard />

        <main className="p-8 flex-1 overflow-y-auto text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <h1 className="text-2xl font-semibold mb-6">Meter Data</h1>

          {/* Chart Section */}
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Select Date Range</h2>
              <div className="flex space-x-2">
                {["Day", "Week", "Month"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setSelectedRange(label)}
                    className={`px-4 py-1 rounded-full border transition-colors duration-300 ${
                      selectedRange === label
                        ? "bg-purple-200 text-purple-700 dark:bg-purple-600 dark:text-white"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="w-full h-64 bg-white dark:bg-gray-800 p-4 rounded-xl">
              <LineChart data={data} />
            </div>
          </Card>

          {/* Table Section */}
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center border-collapse text-gray-900 dark:text-gray-100">
                <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                  <tr>
                    {["Date", "Reading", "Difference", "Notes"].map((header) => (
                      <th
                        key={header}
                        className="p-2 border border-gray-300 dark:border-gray-600"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {readings.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="p-2 border border-gray-300 dark:border-gray-600">
                        {row.date}
                      </td>
                      <td className="p-2 border border-gray-300 dark:border-gray-600">
                        {row.reading}
                      </td>
                      <td className="p-2 border border-gray-300 dark:border-gray-600">
                        {row.difference}
                      </td>
                      <td className="p-2 border border-gray-300 dark:border-gray-600">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

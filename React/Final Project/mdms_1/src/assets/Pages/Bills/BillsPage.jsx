// src/Pages/MeterData/MeterData.jsx
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../../Layouts/Sidebar.jsx"; // ✅ consistent with your structure

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function MeterData() {
  const [selectedRange, setSelectedRange] = useState("Day");

  const labels = ["01 Sep", "02 Sep", "03 Sep", "04 Sep", "05 Sep", "06 Sep", "07 Sep"];
  const datasets = {
    Day: { previous: [300, 200, 250, 400, 370, 380, 310], current: [350, 280, 330, 410, 400, 420, 300] },
    Week: { previous: [2000, 2100, 1900, 2200], current: [2050, 2150, 1950, 2250] },
    Month: { previous: [8000, 8200, 7800, 8300], current: [8100, 8300, 7900, 8400] },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Previous",
        data: datasets[selectedRange].previous,
        borderColor: "#C66C39",
        backgroundColor: "rgba(198,108,57,0.2)",
        tension: 0.4,
        fill: true,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#C66C39",
      },
      {
        label: "Current",
        data: datasets[selectedRange].current,
        borderColor: "#C25CFD",
        backgroundColor: "rgba(194,92,253,0.2)",
        tension: 0.4,
        fill: true,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#C25CFD",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: "#374151" } },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue} kWh`;
          },
        },
      },
      title: { display: true, text: `Meter Data - ${selectedRange}`, font: { size: 18 }, color: "#374151" },
    },
    interaction: { mode: "nearest", intersect: false },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 100, color: "#374151" }, title: { display: true, text: "kWh", color: "#374151" } },
      x: { title: { display: true, text: "Date", color: "#374151" }, ticks: { color: "#374151" } },
    },
  };

  const readings = [
    { date: "01 Sep 2025", reading: "25 kWh", difference: "25 kWh", notes: "hello world" },
    { date: "02 Sep 2025", reading: "28 kWh", difference: "3 kWh", notes: "" },
    { date: "03 Sep 2025", reading: "30 kWh", difference: "2 kWh", notes: "" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Meter Data
        </h1>

        {/* Chart Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Select Date Range
            </h2>
            <div className="flex space-x-2">
              {["Day", "Week", "Month"].map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedRange(label)}
                  className={`px-4 py-1 rounded-full border ${
                    selectedRange === label
                      ? "bg-purple-200 text-purple-700 dark:bg-purple-600 dark:text-purple-100"
                      : "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <Line options={options} data={data} />
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <table className="min-w-full text-sm text-center border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
              <tr>
                {["Date", "Reading", "Difference", "Notes"].map((h, i) => (
                  <th
                    key={i}
                    className="p-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  >
                    {h}
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
                  <td className="p-2 border">{row.date}</td>
                  <td className="p-2 border">{row.reading}</td>
                  <td className="p-2 border">{row.difference}</td>
                  <td className="p-2 border">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// src/Pages/Bills/BillDetails.jsx
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../Layouts/Sidebar/Sidebar.jsx";
import HeaderDashboard from "../../../Layouts/Header/HeaderDashboard.jsx";

export default function BillDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const bill = state || { month: "Unknown", amount: "N/A", dueDate: "-", status: "-" };

  const details = [
    { date: "01 Sep 2025", reading: "25 kWh", consumption: "25 kWh", cost: "₹20" },
    { date: "02 Sep 2025", reading: "28 kWh", consumption: "3 kWh", cost: "₹3" },
    { date: "03 Sep 2025", reading: "30 kWh", consumption: "2 kWh", cost: "₹2" },
  ];

  const headerHeight = "3.5rem"; // must match HeaderDashboard
  const sidebarWidth = "15rem"; // must match Sidebar (w-60)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar
        style={{
          top: headerHeight,
          height: `calc(100vh - ${headerHeight})`,
          position: "fixed",
        }}
      />

      {/* Main Section */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginTop: headerHeight,
          marginLeft: sidebarWidth,
          height: `calc(100vh - ${headerHeight})`,
          overflow: "auto",
        }}
      >
        {/* Header */}
        <HeaderDashboard />

        <main className="p-8 flex-1 overflow-y-auto text-gray-900 dark:text-gray-100">
          {/* Page Header */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-purple-600 dark:text-purple-400 hover:underline mr-3"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-semibold tracking-tight">
              Bill Details – {bill.month || "N/A"}
            </h1>
          </div>

          {/* Bill Summary */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 text-center">
              Bill Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-center">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {["Month", "Total Amount", "Due Date", "Status"].map((h, i) => (
                      <th
                        key={i}
                        className="px-6 py-3 font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
                    <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{bill.month}</td>
                    <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{bill.amount}</td>
                    <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{bill.dueDate}</td>
                    <td
                      className={`px-6 py-3 border border-gray-300 dark:border-gray-600 font-medium ${
                        bill.status === "Paid"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
                      }`}
                    >
                      {bill.status}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 text-center">
              Detailed Consumption
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-center">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {["Date", "Reading", "Consumption", "Cost"].map((h, i) => (
                      <th
                        key={i}
                        className="px-6 py-3 font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {details.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 border-t border-gray-300 dark:border-gray-600"
                    >
                      <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{row.date}</td>
                      <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{row.reading}</td>
                      <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{row.consumption}</td>
                      <td className="px-6 py-3 border border-gray-300 dark:border-gray-600">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="border border-gray-400 dark:border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              Download PDF
            </button>
            <button className="border border-gray-400 dark:border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              Print Bill
            </button>
            <button className="bg-purple-600 text-white px-8 py-2 rounded-full hover:bg-purple-700 transition">
              Pay Now
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

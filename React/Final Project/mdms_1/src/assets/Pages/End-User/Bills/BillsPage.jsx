// src/Pages/MeterData/MeterData.jsx
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../Layouts/Sidebar/Sidebar.jsx";
import HeaderDashboard from "../../../Layouts/Header/HeaderDashboard.jsx";

export default function MeterData() {
  const navigate = useNavigate();

  const bills = [
    { month: "Sep 2025", amount: "₹1230.00", dueDate: "12 Oct", status: "Pending" },
    { month: "Aug 2025", amount: "₹1180.00", dueDate: "12 Sep", status: "Paid" },
    { month: "Jul 2025", amount: "₹1200.00", dueDate: "12 Aug", status: "Pending" },
    { month: "Jun 2025", amount: "₹1150.00", dueDate: "12 Jul", status: "Paid" },
  ];

  const handleView = (bill) => {
    navigate(`/bills/${bill.month.replace(" ", "-")}`, { state: bill });
  };

  const headerHeight = "3.5rem"; // match HeaderDashboard height
  const sidebarWidth = "15rem"; // match Sidebar width

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

      {/* Main content area */}
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

        <main className="p-8 flex-1 overflow-y-auto text-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-semibold mb-6">My Bills</h1>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <table className="min-w-full text-sm text-center border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <tr>
                  {["Month", "Amount", "Due Date", "Status", "Action"].map((h, i) => (
                    <th
                      key={i}
                      className="p-2 border border-gray-300 dark:border-gray-600 font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bills.map((bill, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-2 border">{bill.month}</td>
                    <td className="p-2 border">{bill.amount}</td>
                    <td className="p-2 border">{bill.dueDate}</td>
                    <td className="p-2 border">{bill.status}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleView(bill)}
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        View / Pay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              <strong>Note:</strong> All bills are generated on the 1st of each month.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

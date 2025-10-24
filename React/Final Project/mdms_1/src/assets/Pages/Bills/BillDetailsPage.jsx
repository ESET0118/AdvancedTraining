// src/Pages/Bills/BillDetailsPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../Layouts/Sidebar.jsx";
import BillDetailsTable from "../../Components/Bills/BillDetailsTable.jsx";
import BillActions from "../../Components/Bills/BillActions.jsx";

export default function BillDetailsPage() {
  const { month } = useParams();
  const navigate = useNavigate();

  const bill = {
    month: "September 2025",
    total: "₹1230",
    dueDate: "12 Oct 2025",
    status: "Pending",
    readings: [
      { date: "01 Sep 2025", consumption: "25 kWh", cost: "₹120" },
      { date: "02 Sep 2025", consumption: "24 kWh", cost: "₹115" },
    ],
  };

  const handleDownload = () => alert("Downloading PDF...");
  const handlePrint = () => window.print();
  const handlePay = () => alert("Redirecting to payment...");

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 dark:text-gray-300 text-sm mb-4 hover:underline"
        >
          ← Back
        </button>

        <h1 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Bill Details – {bill.month}
        </h1>

        {/* Summary Table */}
        <table className="w-full mb-6 border border-gray-200 dark:border-gray-700 text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="text-gray-700 dark:text-gray-200">
              <th className="px-6 py-3">Month</th>
              <th className="px-6 py-3">Total Amount</th>
              <th className="px-6 py-3">Due Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <tr>
              <td className="px-6 py-3">{bill.month}</td>
              <td className="px-6 py-3">{bill.total}</td>
              <td className="px-6 py-3">{bill.dueDate}</td>
              <td className="px-6 py-3">{bill.status}</td>
            </tr>
          </tbody>
        </table>

        <BillDetailsTable readings={bill.readings} />
        <BillActions onDownload={handleDownload} onPrint={handlePrint} onPay={handlePay} />
      </main>
    </div>
  );
}

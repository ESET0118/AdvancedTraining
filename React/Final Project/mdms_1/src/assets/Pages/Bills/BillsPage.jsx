// src/Pages/Bills/BillsPage.jsx
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Layouts/Sidebar.jsx";
import BillTable from "../../Components/Bills/BillTable.jsx";

export default function BillsPage() {
  const navigate = useNavigate();

  const bills = [
    { month: "Sep 2025", amount: "₹1230.00", due: "12 Oct", status: "Pending" },
    { month: "Aug 2025", amount: "₹1210.00", due: "12 Sep", status: "Paid" },
    { month: "Jul 2025", amount: "₹1190.00", due: "12 Aug", status: "Paid" },
    { month: "Jun 2025", amount: "₹1205.00", due: "12 Jul", status: "Paid" },
  ];

  const handleView = (bill) => {
    navigate(`/bills/${bill.month.replace(" ", "-").toLowerCase()}`);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          My Bills
        </h1>

        <BillTable bills={bills} onView={handleView} />

        {/* Pagination Placeholder */}
        <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-300 text-sm">
          <span>← Previous</span>
          <span className="font-semibold">1</span>
          <span>Next →</span>
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <strong>Note:</strong> All bills are generated on the 1st of each month.
        </p>
      </main>
    </div>
  );
}

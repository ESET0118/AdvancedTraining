// src/Components/Bills/BillTable.jsx
import React from "react";

export default function BillTable({ bills, onView }) {
  return (
    <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="px-6 py-3">Month</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Due Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          {bills.map((bill, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-3">{bill.month}</td>
              <td className="px-6 py-3">{bill.amount}</td>
              <td className="px-6 py-3">{bill.due}</td>
              <td className="px-6 py-3">{bill.status}</td>
              <td className="px-6 py-3">
                <button
                  onClick={() => onView(bill)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View / Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

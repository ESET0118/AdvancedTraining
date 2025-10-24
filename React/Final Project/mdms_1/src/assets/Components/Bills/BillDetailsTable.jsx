// src/Components/Bills/BillDetailsTable.jsx
import React from "react";

export default function BillDetailsTable({ readings }) {
  return (
    <table className="w-full mb-8 border border-gray-200 dark:border-gray-700 text-sm">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr className="text-gray-700 dark:text-gray-200">
          <th className="px-6 py-3">Date</th>
          <th className="px-6 py-3">Consumption</th>
          <th className="px-6 py-3">Cost</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {readings.map((r, i) => (
          <tr key={i}>
            <td className="px-6 py-3">{r.date}</td>
            <td className="px-6 py-3">{r.consumption}</td>
            <td className="px-6 py-3">{r.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

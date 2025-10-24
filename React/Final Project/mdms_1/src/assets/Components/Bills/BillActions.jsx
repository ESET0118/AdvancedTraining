import React from "react";

export default function BillActions({ onDownload, onPrint, onPay }) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Download Button */}
      <button
        onClick={onDownload}
        className="px-4 py-2 rounded-md text-sm font-medium 
                   border border-gray-300 dark:border-gray-600 
                   text-gray-700 dark:text-gray-200 
                   bg-white dark:bg-gray-800 
                   hover:bg-gray-100 dark:hover:bg-gray-700 
                   transition-colors duration-200"
      >
        Download PDF
      </button>

      {/* Print Button */}
      <button
        onClick={onPrint}
        className="px-4 py-2 rounded-md text-sm font-medium 
                   border border-gray-300 dark:border-gray-600 
                   text-gray-700 dark:text-gray-200 
                   bg-white dark:bg-gray-800 
                   hover:bg-gray-100 dark:hover:bg-gray-700 
                   transition-colors duration-200"
      >
        Print Bill
      </button>

      {/* Pay Now Button */}
      <button
        onClick={onPay}
        className="px-4 py-2 rounded-md text-sm font-semibold 
                   text-white bg-blue-600 
                   hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                   shadow-sm dark:shadow-md 
                   transition-colors duration-200"
      >
        Pay Now
      </button>
    </div>
  );
}

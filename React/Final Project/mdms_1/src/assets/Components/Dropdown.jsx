import React from "react";

export default function Dropdown({ label, options, value, onChange, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          border border-gray-300 dark:border-gray-700 
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          rounded-lg p-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
          transition-colors duration-300
        "
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

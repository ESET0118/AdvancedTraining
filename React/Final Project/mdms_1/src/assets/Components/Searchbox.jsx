import React from "react";
import { Search } from "lucide-react";

export default function SearchBox({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`
        flex items-center border rounded-lg px-3 py-2 
        bg-white dark:bg-gray-800
        border-gray-300 dark:border-gray-700
        shadow-sm
        focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-600
        transition-all duration-300
        ${className}
      `}
    >
      <Search size={16} className="text-gray-400 dark:text-gray-300 mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="
          w-full text-sm bg-transparent
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none
        "
      />
    </div>
  );
}

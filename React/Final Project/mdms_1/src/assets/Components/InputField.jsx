import React from "react";

export default function InputField({
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
  className = "",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`
        w-[361px] h-[40px] rounded-[16px] px-4 border-none
        bg-gray-200 dark:bg-gray-700
        text-gray-900 dark:text-gray-100
        placeholder-gray-500 dark:placeholder-gray-400
        focus:outline-none transition-colors duration-300
        ${className}
      `}
    />
  );
}

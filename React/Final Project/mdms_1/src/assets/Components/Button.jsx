import React from "react";

export default function Button({
  text,
  bgColor = "bg-white",
  textColor = "text-gray-900",
  fontSize = "text-sm",
  fontWeight = "font-semibold",
  borderRadius = "rounded-[20px]",
  borderColor = "border-[#040303]",
  paddingX = "px-4",
  paddingY = "py-1",
  defaultWidth = "w-[190px]",
  height = "h-[32px]",
  onClick,
  darkBgColor = "dark:bg-gray-700",
  darkTextColor = "dark:text-gray-100",
  darkBorderColor = "dark:border-gray-100",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} ${darkBgColor} 
        ${textColor} ${darkTextColor} 
        ${fontSize} ${fontWeight} 
        ${borderRadius} 
        ${borderColor} ${darkBorderColor} 
        ${paddingX} ${paddingY} 
        ${height} min-w-[190px]
        inline-flex items-center justify-center
        border
        whitespace-nowrap
        transition-all duration-300
      `}
    >
      {text}
    </button>
  );
}

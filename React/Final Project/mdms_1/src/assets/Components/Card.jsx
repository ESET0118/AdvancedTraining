export default function Card({ title, value, subText, icon, children, className = "" }) {
  return (
    <div
      className={`flex flex-col justify-between p-4 mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 transition-colors duration-300 ${className}`}
    >
      {icon && <div className="mb-2">{icon}</div>}
      {title && <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>}
      {value && <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{value}</p>}
      {subText && <p className="text-sm text-gray-500 dark:text-gray-300">{subText}</p>}
      {children}
    </div>
  );
}

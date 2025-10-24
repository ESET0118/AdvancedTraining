export default function Card({ title, value, subText, icon }) {
  return (
    <div className="flex flex-col items-center justify-center w-[180px] h-[100px] bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 p-4 transition-colors duration-300">
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{value}</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">{subText || title}</p>
    </div>
  );
}

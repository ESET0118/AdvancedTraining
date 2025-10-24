import DarkModeToggle from "../../Components/DarkModeToggle.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-6 py-4 transition-colors duration-300">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">MDMS</div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Dark / Light toggle */}
        <DarkModeToggle />

        {/* Language selector */}
        <div className="relative">
          <select className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-gray-900 dark:text-gray-100 focus:outline-none transition-colors duration-300">
            <option>en</option>
            <option>fr</option>
            <option>es</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;

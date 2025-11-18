import { useState } from "react";
import { Download, Search } from "lucide-react";
import Table from "../../Components/Table.jsx";
import EnterpriseSidebar from "../../Layouts/Sidebar/EnterpriseSidebar"; // adjust path if needed

export default function AuditLogs() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock Data
  const data = [
    { id: 123, timestamp: "2025-10-07T07:15:32", user: "abc", resource: "Meter", status: "Active" },
    { id: 124, timestamp: "2025-10-07T07:15:32", user: "abc", resource: "Zone", status: "Active" },
    { id: 125, timestamp: "2025-10-07T07:15:32", user: "xyz", resource: "User", status: "De-Activated" },
    { id: 126, timestamp: "2025-10-07T07:15:32", user: "xyz", resource: "Meter", status: "De-Activated" },
    { id: 127, timestamp: "2025-10-07T07:15:32", user: "lmn", resource: "Zone", status: "Active" },
  ];

  // Filter by status and search query
  const filteredData = data.filter((d) => {
    const matchesStatus =
      statusFilter === "all" ||
      d.status.toLowerCase() === statusFilter.toLowerCase();

    const matchesSearch = Object.values(d)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const handleAction = (type, row) => {
    console.log(type, row);
    alert(`${type} clicked for ${row.user}`);
  };

  const menuOptions = [
    { type: "view", label: "View" },
    { type: "edit", label: "Edit" },
    { type: "delete", label: "Delete" },
  ];

  const columns = [
    { key: "id", label: "ID" },
    { key: "timestamp", label: "Timestamp" },
    { key: "user", label: "User" },
    { key: "resource", label: "Resource" },
    { key: "status", label: "Status" },
    { key: "actions", label: "More Actions" },
  ];

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Sidebar */}
      <EnterpriseSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 mt-16 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Audit Logs
        </h1>

        {/* Filter + Search + Export */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
          {/* Left controls: Filter + Search */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Status:
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 text-sm rounded-md px-3 py-2 
                           bg-white dark:bg-gray-800 dark:text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="de-activated">De-Activated</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by ID, user, resource, or status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 dark:text-gray-100 
                           focus:outline-none focus:ring-2 focus:ring-gray-400 w-64"
              />
            </div>
          </div>

          {/* Export buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 text-sm font-medium px-3 py-2 
                               bg-gray-100 dark:bg-gray-800 
                               border border-gray-300 dark:border-gray-700 
                               rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                               text-gray-800 dark:text-gray-100 transition">
              <Download size={16} /> Export as CSV
            </button>
            <button className="flex items-center gap-2 text-sm font-medium px-3 py-2 
                               bg-gray-100 dark:bg-gray-800 
                               border border-gray-300 dark:border-gray-700 
                               rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                               text-gray-800 dark:text-gray-100 transition">
              <Download size={16} /> Export as PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={filteredData}
          rowsPerPage={10}
          onAction={handleAction}
          menuOptions={menuOptions}
          rowKeyProp="id"
        />
      </main>
    </div>
  );
}

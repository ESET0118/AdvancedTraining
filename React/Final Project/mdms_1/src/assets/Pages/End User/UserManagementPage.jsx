// src/Pages/UserManagement/UserManagementPage.jsx
import { useState } from "react";
import EndUserSidebar from "../../Layouts/Sidebar/EndUserSidebar.jsx";
import Table from "../../Components/Table.jsx";
import Button from "../../Components/Button.jsx";
import { Search, ChevronDown, UserPlus } from "lucide-react";

export default function UserManagementPage() {
  const [filterField, setFilterField] = useState("Name");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    { id: 101, name: "abc", email: "abc@gmail.com", role: "Role 1", zone: "Mangalore", status: "Active" },
    { id: 102, name: "xyz", email: "xyz@gmail.com", role: "Role 2", zone: "Bajpe", status: "De-Activated" },
    { id: 103, name: "pqr", email: "pqr@gmail.com", role: "Role 3", zone: "Surathkal", status: "Active" },
    { id: 104, name: "def", email: "def@gmail.com", role: "Role 2", zone: "Udupi", status: "De-Activated" },
  ]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "zone", label: "Zone" },
    { key: "status", label: "Status" },
    { key: "actions", label: "More Actions" },
  ];

  const handleAction = (type, row) => {
    if (type === "edit") alert(`Editing ${row.name}`);
    if (type === "activate") {
      setData((prev) =>
        prev.map((user) =>
          user.id === row.id
            ? { ...user, status: row.status === "Active" ? "De-Activated" : "Active" }
            : user
        )
      );
    }
    if (type === "reset") alert(`Reset password for ${row.name}`);
  };

  // Simple search logic
  const filteredData = data.filter((item) =>
    item[filterField.toLowerCase()].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <EndUserSidebar />

      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">User Management</h1>
          <Button
            text={
              <span className="flex items-center gap-2">
                <UserPlus size={16} /> Invite User
              </span>
            }
          />
        </div>

        {/* Filter + Search */}
        <div className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 w-fit">
          {/* Filter Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">
              {filterField} <ChevronDown size={14} />
            </button>
            <div className="absolute hidden group-hover:block mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
              {["Name", "Email", "Role", "Zone", "Status"].map((field) => (
                <button
                  key={field}
                  onClick={() => setFilterField(field)}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                >
                  {field}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-2 bg-gray-100 dark:bg-gray-700">
            <Search size={14} className="text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search by ${filterField.toLowerCase()}`}
              className="bg-transparent outline-none px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={filteredData}
          rowsPerPage={8}
          onAction={handleAction}
          menuOptions={[
            { label: "Edit", type: "edit" },
            { label: "Activate", type: "activate" },
            { label: "Reset Password", type: "reset" },
          ]}
        />
      </main>
    </div>
  );
}

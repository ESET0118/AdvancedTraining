import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/ZoneManagementSidebar.jsx";
import Table from "../../Components/Table.jsx";
import Button from "../../Components/Button.jsx";
import InviteModal from "../../Components/InviteModal.jsx";

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", zone: "North", isActive: true },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", zone: "East", isActive: true },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", zone: "West", isActive: false },
    { id: 4, name: "David Lee", email: "david@example.com", role: "User", zone: "South", isActive: true },
    { id: 5, name: "Eva Green", email: "eva@example.com", role: "Admin", zone: "Central", isActive: true },
    { id: 6, name: "Frank Wright", email: "frank@example.com", role: "User", zone: "North", isActive: false },
    { id: 7, name: "Grace Hall", email: "grace@example.com", role: "Editor", zone: "East", isActive: true },
    { id: 8, name: "Henry Adams", email: "henry@example.com", role: "User", zone: "West", isActive: true },
    { id: 9, name: "Ivy Brooks", email: "ivy@example.com", role: "Manager", zone: "Central", isActive: false },
    { id: 10, name: "Jack White", email: "jack@example.com", role: "User", zone: "South", isActive: true },
    { id: 11, name: "Karen Miller", email: "karen@example.com", role: "Admin", zone: "North", isActive: true },
    { id: 12, name: "Liam Scott", email: "liam@example.com", role: "Editor", zone: "West", isActive: false },
    { id: 13, name: "Mia Clark", email: "mia@example.com", role: "User", zone: "East", isActive: true },
    { id: 14, name: "Noah Baker", email: "noah@example.com", role: "Manager", zone: "Central", isActive: false },
    { id: 15, name: "Olivia Turner", email: "olivia@example.com", role: "Admin", zone: "South", isActive: true },
  ];

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "zone", label: "Zone" },
    {
      key: "isActive",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      ),
    },
    { key: "actions", label: "Actions" },
  ];

  const menuOptions = [
    { type: "edit", label: "Edit" },
    { type: "delete", label: "Delete" },
  ];

  const handleAction = (actionType, row) => {
    console.log("Action:", actionType, "Row:", row);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar fixed below header */}
      <Sidebar className="fixed top-16 h-[calc(100vh-4rem)]" />

      {/* Main content */}
      <div className="flex-1 ml-60 mt-16 p-6 overflow-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Management</h1>
          <Button text="Invite User" onClick={() => setIsModalOpen(true)} />
        </div>

        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={filteredUsers}
          rowsPerPage={5}
          menuOptions={menuOptions}
          onAction={handleAction}
          rowKeyProp="id"
        />

        {/* Invite Modal */}
        {isModalOpen && <InviteModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}

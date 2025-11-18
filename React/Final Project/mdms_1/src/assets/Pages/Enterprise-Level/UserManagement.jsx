import { useState } from "react";
import EnterpriseSidebar from "../../Layouts/Sidebar/EnterpriseSidebar.jsx";
import Table from "../../Components/Table.jsx";
import { Download, UserPlus, X } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function UserManagement() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const users = [
    { id: 1, name: "Arjun Menon", email: "arjun@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Ravi Kumar", email: "ravi@example.com", role: "User", status: "Active" },
    { id: 4, name: "Sneha Reddy", email: "sneha@example.com", role: "Viewer", status: "Active" },
    { id: 5, name: "John Doe", email: "john@example.com", role: "User", status: "Inactive" },
  ];

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ];

  const menuOptions = [
    { type: "view", label: "View" },
    { type: "edit", label: "Edit" },
    { type: "delete", label: "Delete" },
  ];

  const handleAction = (type, row) => {
    console.log(type, row);
  };

  const chartData = [
    { name: "Admins", value: 5 },
    { name: "Users", value: 12 },
    { name: "Viewers", value: 8 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Sidebar */}
      <EnterpriseSidebar />

      {/* Main content */}
      <main className="flex-1 ml-64 mt-16 p-6 space-y-6 overflow-auto h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0">
          <h1 className="text-2xl font-bold">User Management</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsInviteOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              <UserPlus size={16} /> Invite User
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        {/* Content: Table + Chart */}
        <div className="flex-1 flex flex-col overflow-auto space-y-6">
          {/* Table */}
          <div className="flex-1 min-h-[300px]">
            <Table
              columns={columns}
              data={users}
              menuOptions={menuOptions}
              onAction={handleAction}
              rowsPerPage={5}
              rowKeyProp="id"
            />
          </div>

          {/* Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex-shrink-0">
            <h2 className="text-lg font-semibold mb-4">User Role Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 20, left: -10, bottom: 10 }}
                barSize={55}
                barCategoryGap="25%"
              >
                <defs>
                  <linearGradient id="colorRole" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                    fontSize: "13px",
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  animationDuration={800}
                  fill="url(#colorRole)"
                  label={{ position: "top", fill: "#6B7280", fontSize: 12 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      {/* Invite Modal */}
      {isInviteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-[400px] p-6 relative">
            <button
              onClick={() => setIsInviteOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Invite New User</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Role</label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Admin</option>
                  <option>User</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(false)}
                  className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

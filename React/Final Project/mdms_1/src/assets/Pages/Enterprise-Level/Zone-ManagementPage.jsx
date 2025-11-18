import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/EnterpriseSidebar.jsx";
import Table from "../../Components/Table.jsx";
import Button from "../../Components/Button.jsx";
import SearchBox from "../../Components/Searchbox.jsx";
import ZoneModal from "../../Components/ZoneModal.jsx";

export default function ZoneManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);

  const zones = [
    { id: 123, name: "Mangalore", admin: "abc", totalMeters: 5, status: "Active" },
    { id: 124, name: "Bajpe", admin: "xyz", totalMeters: 23, status: "De-Activated" },
    { id: 125, name: "Kankanady", admin: "axyz", totalMeters: 8, status: "Active" },
  ];

  const filteredZones = zones.filter((z) =>
    z.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: "id", label: "Zone ID" },
    { key: "name", label: "Zone Name" },
    { key: "admin", label: "Admin Assigned" },
    { key: "totalMeters", label: "Total Meters" },
    { key: "status", label: "Status" },
    { key: "actions", label: "More Actions" },
  ];

  const menuOptions = [
    { type: "view", label: "View" },
    { type: "edit", label: "Edit" },
    { type: "delete", label: "Delete" },
  ];

  const handleAction = (type, zone) => {
    if (type === "edit") {
      setSelectedZone(zone);
      setIsModalOpen(true);
    } else if (type === "view") {
      alert(`Viewing ${zone.name}`);
    } else if (type === "delete") {
      alert(`Deleted ${zone.name}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-60 mt-16 p-6 overflow-auto h-[calc(100vh-4rem)]">
        {/* Header and Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Zone Management</h1>
          <Button onClick={() => setIsModalOpen(true)}>➕ Add Zone</Button>
        </div>

        {/* Search Box */}
        <div className="mb-4">
          <SearchBox
            placeholder="Search zone..."
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        {/* Table */}
        <Table
          columns={columns}
          data={filteredZones}
          menuOptions={menuOptions}
          onAction={handleAction}
          rowKeyProp="id"
        />

        {/* Modal */}
        {isModalOpen && (
          <ZoneModal
            zone={selectedZone}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedZone(null);
            }}
          />
        )}
      </main>
    </div>
  );
}

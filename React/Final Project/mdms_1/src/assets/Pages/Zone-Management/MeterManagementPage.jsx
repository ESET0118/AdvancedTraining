// src/pages/MeterManagement/MeterManagementPage.jsx
import { useState } from "react";
import EndUserSidebar from "../../Layouts/Sidebar/ZoneManagementSidebar.jsx";
import Table from "../../Components/Table.jsx";
import Button from "../../Components/Button.jsx";
import { Upload, Download, PowerOff } from "lucide-react";
import Papa from "papaparse";

export default function MeterManagementPage() {
  const [data, setData] = useState([
    { meterId: 123, zone: "Mangalore", owner: "abc", status: "Active", lastReading: "2025-10-07T07:15:13Z" },
    { meterId: 124, zone: "Bajpe", owner: "xyz", status: "De-Activated", lastReading: "2025-10-07T07:15:13Z" },
    { meterId: 125, zone: "Udupi", owner: "pqr", status: "Active", lastReading: "2025-10-06T06:11:11Z" },
    { meterId: 126, zone: "Surathkal", owner: "abc", status: "De-Activated", lastReading: "2025-10-04T05:00:01Z" },
    { meterId: 127, zone: "Bajpe", owner: "xyz", status: "Active", lastReading: "2025-10-02T10:14:00Z" },
    { meterId: 128, zone: "Mangalore", owner: "pqr", status: "Active", lastReading: "2025-10-01T11:10:13Z" },
    { meterId: 129, zone: "Surathkal", owner: "abc", status: "De-Activated", lastReading: "2025-09-30T07:15:13Z" },
    { meterId: 130, zone: "Udupi", owner: "xyz", status: "Active", lastReading: "2025-09-28T09:25:00Z" },
    { meterId: 131, zone: "Bajpe", owner: "pqr", status: "De-Activated", lastReading: "2025-09-25T07:15:13Z" },
    { meterId: 132, zone: "Mangalore", owner: "abc", status: "Active", lastReading: "2025-09-20T07:15:13Z" },
  ]);

  const columns = [
    { key: "meterId", label: "Meter ID" },
    { key: "zone", label: "Zone" },
    { key: "owner", label: "Owner" },
    { key: "status", label: "Status" },
    { key: "lastReading", label: "Last Reading" },
    { key: "actions", label: "More Actions" },
  ];

  const handleAction = (type, row) => {
    if (!row) return;
    if (type === "view") alert(`Viewing meter ${row.meterId}`);
    if (type === "edit") alert(`Editing meter ${row.meterId}`);
    if (type === "activate" || type === "deactivate") {
      setData((prev) =>
        prev.map((m) =>
          m.meterId === row.meterId
            ? { ...m, status: type === "activate" ? "Active" : "De-Activated" }
            : m
        )
      );
    }
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "meter_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar (fixed below header) */}
      <EndUserSidebar className="fixed top-16 h-[calc(100vh-4rem)]" />

      {/* Main content */}
      <main className="flex-1 ml-60 mt-16 p-8 overflow-auto space-y-8">
        <h1 className="text-lg font-semibold">Meter Management</h1>

        <Table
          columns={columns}
          data={data}
          rowsPerPage={8}
          onAction={handleAction}
          menuOptions={[
            { type: "view", label: "View" },
            { type: "edit", label: "Edit" },
            { type: "activate", label: "Activate" },
            { type: "deactivate", label: "De-Activate" },
          ]}
          rowKeyProp="meterId"
        />

        <section className="mt-8 space-y-4">
          <h2 className="font-semibold">Bulk operations</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <label>
              <input type="file" accept=".csv" onChange={handleImportCSV} className="hidden" id="importCsv" />
              <Button
                text={<span className="flex items-center gap-2"><Upload size={16} /> Import CSV</span>}
                onClick={() => document.getElementById("importCsv").click()}
              />
            </label>

            <Button
              text={<span className="flex items-center gap-2"><Download size={16} /> Export CSV</span>}
              onClick={handleExportCSV}
            />

            <Button
              text={<span className="flex items-center gap-2"><PowerOff size={16} /> De-Activate meters</span>}
              onClick={() =>
                setData((prev) => prev.map((m) => ({ ...m, status: "De-Activated" })))
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}

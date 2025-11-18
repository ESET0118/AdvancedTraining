import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "./Button.jsx";

export default function ZoneModal({ zone, onClose }) {
  const [form, setForm] = useState({
    name: "",
    admin: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (zone) {
      setForm({
        name: zone.name || "",
        admin: zone.admin || "",
        location: zone.location || "",
        description: zone.description || "",
      });
    }
  }, [zone]);

  const handleChange = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(zone ? "Updating zone:" : "Adding new zone:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-md animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">
            {zone ? "Edit Zone" : "Add Zone"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">
            This is a dialogue for {zone ? "editing" : "adding"} a zone.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Zone Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Mangalore"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Admin</label>
              <select
                value={form.admin}
                onChange={(e) => handleChange("admin", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select admin</option>
                <option value="abc">abc</option>
                <option value="xyz">xyz</option>
                <option value="axyz">axyz</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Address or pincode"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description here"
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <Button type="submit" className="w-full justify-center mt-3">
              {zone ? "Update Zone" : "Add Zone"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

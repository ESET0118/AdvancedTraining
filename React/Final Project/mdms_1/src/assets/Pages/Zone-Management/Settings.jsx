import React, { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/ZoneManagementSidebar.jsx";
import Card from "../../Components/Card.jsx";
import Button from "../../Components/Button.jsx";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("settings");

  // Settings state
  const [highConsumption, setHighConsumption] = useState(600);
  const [lowConsumption, setLowConsumption] = useState(200);
  const [abnormalFrequency, setAbnormalFrequency] = useState(5);
  const [inactiveDuration, setInactiveDuration] = useState("Sunday");

  // Notification state
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Sidebar fixed below header */}
      <Sidebar className="fixed top-16 h-[calc(100vh-4rem)]" />

      {/* Main content */}
      <main className="flex-1 ml-60 mt-16 p-8 overflow-auto space-y-6">
        {/* Header */}
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
          User Management
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Manage your alert rules and communication preferences.
        </p>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab("settings")}
            className={`pb-2 px-4 text-sm font-medium transition-colors ${
              activeTab === "settings"
                ? "border-b-2 border-purple-600 text-purple-600"
                : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`pb-2 px-4 text-sm font-medium transition-colors ${
              activeTab === "notifications"
                ? "border-b-2 border-purple-600 text-purple-600"
                : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
            }`}
          >
            Notification
          </button>
        </div>

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <>
            <h3 className="text-gray-800 dark:text-gray-200 font-medium mb-4">
              Alert Thresholds
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Set consumption limits that trigger automatic alerts for meters in your zone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card className="p-4 bg-white dark:bg-gray-800 shadow-sm">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  High Consumption Threshold (kWh)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={highConsumption}
                  onChange={(e) => setHighConsumption(e.target.value)}
                  className="w-full accent-purple-600"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {highConsumption} kWh
                </p>
              </Card>

              <Card className="p-4 bg-white dark:bg-gray-800 shadow-sm">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Low Consumption Threshold (kWh)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={lowConsumption}
                  onChange={(e) => setLowConsumption(e.target.value)}
                  className="w-full accent-purple-600"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {lowConsumption} kWh
                </p>
              </Card>

              <Card className="p-4 bg-white dark:bg-gray-800 shadow-sm">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Abnormal Reading Frequency (hours)
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={abnormalFrequency}
                  onChange={(e) => setAbnormalFrequency(e.target.value)}
                  className="w-full accent-purple-600"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {abnormalFrequency} hours
                </p>
              </Card>

              <Card className="p-4 bg-white dark:bg-gray-800 shadow-sm">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Inactive Meters Duration (days)
                </label>
                <input
                  type="text"
                  value={inactiveDuration}
                  onChange={(e) => setInactiveDuration(e.target.value)}
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-md p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </Card>
            </div>

            <Button className="rounded-full px-8 py-2 bg-black dark:bg-purple-600 text-white hover:bg-gray-800 dark:hover:bg-purple-700">
              Save and continue
            </Button>
          </>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === "notifications" && (
          <>
            <div className="space-y-4 mb-10">
              <h3 className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                Notification Preferences
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Choose how you’d like to receive alerts.
              </p>

              {/* Notification Toggles */}
              <div className="space-y-3">
                {[
                  { label: "Email", value: email, setValue: setEmail },
                  { label: "SMS", value: sms, setValue: setSms },
                  { label: "Push", value: push, setValue: setPush },
                ].map(({ label, value, setValue }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {label}
                    </span>

                    {/* Custom Toggle */}
                    <button
                      onClick={() => setValue(!value)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        value ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                          value ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Button className="rounded-full px-8 py-2 bg-black dark:bg-purple-600 text-white hover:bg-gray-800 dark:hover:bg-purple-700">
              Save and continue
            </Button>
          </>
        )}
      </main>
    </div>
  );
}

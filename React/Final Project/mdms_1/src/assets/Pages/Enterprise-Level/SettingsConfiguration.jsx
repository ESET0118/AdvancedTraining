import React, { useState } from "react";
import Button from "../../Components/Button.jsx";
import EnterpriseSidebar from "../../Layouts/Sidebar/EnterpriseSidebar.jsx"; // Adjust path if needed

export default function SettingsConfiguration() {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <EnterpriseSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="px-8 py-4 border-b dark:border-gray-700 flex gap-6 bg-gray-50 dark:bg-gray-900 sticky top-0 z-10">
          <button
            onClick={() => setActiveTab("settings")}
            className={`pb-2 text-sm font-medium ${
              activeTab === "settings"
                ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`pb-2 text-sm font-medium ${
              activeTab === "notifications"
                ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            Notification
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto p-8">
          {activeTab === "settings" ? (
            <div className="space-y-8">
              {/* Policies & Rules */}
              <section>
                <h2 className="font-semibold text-lg mb-4">Policies & Rules</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm">Data Retention Period (in days)</label>
                    <input
                      type="number"
                      defaultValue={30}
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Auto Logout Timer (minutes)</label>
                    <input
                      type="number"
                      defaultValue={30}
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Audit Log Retention (in days)</label>
                    <input
                      type="number"
                      defaultValue={30}
                      className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Localization */}
              <section>
                <h2 className="font-semibold text-lg mb-4">Localization</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm">Timezone</label>
                    <select className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none">
                      <option>UTC+05:30</option>
                      <option>UTC</option>
                      <option>UTC+01:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Default Language</label>
                    <select className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none">
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Currency Format</label>
                    <select className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none">
                      <option>INR</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="pt-6">
                <Button text="Save the changes" bgColor="bg-black" textColor="text-white" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[75vh]">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 w-full max-w-2xl space-y-8 border border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-2xl text-center mb-6">
                  Notification Preferences
                </h2>

                <div className="space-y-6">
                  {["Email Notifications", "SMS Notifications", "Push Notifications"].map(
                    (label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <span className="text-base">{label}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-purple-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                        </label>
                      </div>
                    )
                  )}
                </div>

                <div className="pt-8 flex justify-center">
                  <Button
                    text="Save and Continue"
                    bgColor="bg-black"
                    textColor="text-white"
                    paddingX="px-6"
                    paddingY="py-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

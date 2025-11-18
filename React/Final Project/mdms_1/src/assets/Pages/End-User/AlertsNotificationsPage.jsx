import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar.jsx";
import HeaderDashboard from "../../Layouts/Header/HeaderDashboard.jsx";
import { Bell } from "lucide-react";

export default function AlertsNotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Title of the notification",
      description: "Description of the notification",
      date: "05 May 2025",
      time: "06 : 15 PM",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
    },
    {
      id: 2,
      title: "Title of the notification",
      description: "Description of the notification",
      date: "03 May 2025",
      time: "09 : 45 AM",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
  ];

  const [selectedNotification, setSelectedNotification] = useState(notifications[0]);

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: "15rem" }}>
        {/* Header */}
        <HeaderDashboard />

        {/* Page content */}
        <div
          className="flex flex-1 p-6 gap-6 overflow-hidden"
          style={{ marginTop: "4rem" }} // header height
        >
          {/* Left side - Notification List */}
          <div className="w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 overflow-y-auto">
            {notifications.map((item, idx) => (
              <div key={item.id} className="mb-6">
                {(idx === 0 || item.date !== notifications[idx - 1].date) && (
                  <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                )}

                <div
                  onClick={() => setSelectedNotification(item)}
                  className={`flex items-start gap-3 p-3 border rounded-xl hover:shadow-md transition cursor-pointer ${
                    selectedNotification.id === item.id
                      ? "border-purple-500 dark:border-purple-400 bg-purple-50 dark:bg-purple-900"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                >
                  <Bell className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Notification Details */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 overflow-y-auto">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                {selectedNotification.title}
              </h2>
              <div className="text-sm text-gray-500">
                <p>{selectedNotification.date}</p>
                <p>{selectedNotification.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {selectedNotification.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Sidebar from "../../Layouts/Sidebar.jsx";
import { Bell } from "lucide-react";

export default function AlertsNotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Title of the notification",
      description: "Description of the notification",
      date: "05 May 2025",
      time: "06 : 15 PM",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and more recently with desktop publishing software like 
      Aldus PageMaker including versions of Lorem Ipsum.`,
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

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">


        {/* Page Content */}
        <div className="flex-1 flex p-6 gap-6 overflow-hidden">
          {/* Left side - Notification List */}
          <div className="w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 overflow-y-auto">
            {notifications.map((item, idx) => (
              <div key={item.id} className="mb-6">
                {/* Date header (only show if not same as previous) */}
                {(idx === 0 ||
                  item.date !== notifications[idx - 1].date) && (
                  <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                )}

                <div className="flex items-start gap-3 p-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-md transition cursor-pointer">
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
                {notifications[0].title}
              </h2>
              <div className="text-sm text-gray-500">
                <p>{notifications[0].date}</p>
                <p>{notifications[0].time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {notifications[0].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Card from "./Card.jsx";
import Chart from "./LineChart.jsx";
import QuickActions from "./QuickActions.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard() {
  const cards = [
    { 
      title: "Current Consumption", 
      value: "256 kWh",
      icon: "bi-lightning-charge-fill"
    },
    { 
      title: "This Month's Bill", 
      value: "₹1,230 Due on 12 Oct",
      icon: "bi-receipt"
    },
    { 
      title: "Outstanding Balance", 
      value: "₹120 Pending",
      icon: "bi-cash-stack"
    },
    { 
      title: "Last Payment", 
      value: "Paid ₹1,200 on 10 Sep",
      icon: "bi-calendar-check"
    },
  ];

  const actions = [
    { text: "Pay Bill" },
    { text: "View Bill History" },
    { text: "View Detailed Usage" },
    { text: "Manage Notifications" },
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Cards — 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 w-full">

        {cards.map((c, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 
                       transition-transform hover:scale-[1.02] hover:shadow-lg"
          >
            <i className={`${c.icon} text-2xl text-blue-600 dark:text-blue-400`}></i>

            <p className="text-md font-semibold">
              {c.title}
            </p>

            <p className="text-lg font-bold text-gray-700 dark:text-gray-200">
              {c.value}
            </p>
          </div>
        ))}

      </div>

      {/* Chart Section */}
      <div className="p-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-gray-700 w-full">
          <Chart />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <QuickActions actions={actions} />
      </div>

    </div>
  );
}

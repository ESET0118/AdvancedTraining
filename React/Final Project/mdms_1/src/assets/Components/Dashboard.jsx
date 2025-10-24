import Card from "./Card.jsx";
import Chart from "./LineChart.jsx";
import QuickActions from "./QuickActions.jsx";

export default function Dashboard() {
  const cards = [
    { title: "Current Consumption", value: "256 kWh" },
    { title: "This Month's Bill", value: "₹1,230 Due on 12 Oct" },
    { title: "Outstanding Balance", value: "₹120 Pending" },
    { title: "Last Payment", value: "Paid ₹1,200 on 10 Sep" },
  ];

  const actions = [
    { text: "Pay Bill" },
    { text: "View Bill History" },
    { text: "View Detailed Usage" },
    { text: "Manage Notifications" },
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Cards */}
      <div className="flex flex-wrap gap-4 p-8">
        {cards.map((c, idx) => (
          <Card key={idx} {...c} />
        ))}
      </div>

      {/* Chart container */}
      <div className="p-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md dark:shadow-gray-700 transition-colors duration-300 w-full">
          <Chart />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-8">
        <QuickActions actions={actions} />
      </div>
    </div>
  );
}

import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/EnterpriseSidebar.jsx";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Map from "../../Components/Map.jsx";
import { AlertCircle, BarChart, TrendingUp, Activity } from "lucide-react";

export default function EnterpriseDashboard() {
  const [alerts] = useState([
    { id: 1, title: "Critical Alert", description: "Meter overload detected in Zone A.", severity: "high" },
    { id: 2, title: "Alert 2", description: "Unauthorized access in Zone B.", severity: "normal" },
    { id: 3, title: "Alert 3", description: "Sensor malfunction in Zone C.", severity: "normal" },
    { id: 4, title: "Alert 4", description: "Power consumption spike in Zone D.", severity: "normal" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-60 mt-16 p-8 overflow-auto space-y-10 h-[calc(100vh-4rem)]">
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Total Zones"
            value={256}
            icon={<BarChart className="w-8 h-8" />}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
          />
          <Card
            title="Total Meters"
            value={55}
            icon={<TrendingUp className="w-8 h-8" />}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
          />
          <Card
            title="Critical Alerts"
            value={26}
            icon={<AlertCircle className="w-8 h-8 text-red-500" />}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
          />
          <Card
            title="Avg Consumption/Zone"
            value="26%"
            icon={<Activity className="w-8 h-8" />}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
          />
        </div>

        {/* Map + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Map Container */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
  <div className="h-[712px] w-full relative overflow-hidden rounded-xl">
    <Map />
  </div>
</div>


          {/* Alerts Section */}
          <div className="flex flex-col space-y-6">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-xl shadow-md p-6 transition-transform ${
                  alert.severity === "high"
                    ? "bg-red-600 text-white h-52 text-lg font-bold"
                    : "bg-white dark:bg-gray-800 text-black dark:text-gray-200 h-36 text-sm"
                } hover:scale-105`}
              >
                <p className="font-semibold">{alert.title}</p>
                <p className="mt-2">{alert.description}</p>

                <div className="flex space-x-3 mt-4">
                  <Button text="Acknowledge" bgColor="bg-green-500" textColor="text-white" />
                  <Button text="Dismiss" bgColor="bg-red-500" textColor="text-white" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import Button from "./Button"; // ⬅️ import your custom button component

const ToggleSwitch = ({ label, isOn, handleToggle }) => {
  return (
    <div className="flex justify-between items-center w-64 mb-6">
      <span className="text-gray-700 dark:text-gray-200 text-lg">{label}</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          isOn ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default function Notifications() {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);

  const handleSave = () => {
    console.log({
      emailNotifications: email,
      smsNotifications: sms,
      pushNotifications: push,
    });
    alert("Notification preferences saved!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-10 rounded-2xl shadow-md w-full max-w-md mx-auto transition-all duration-300">
        {/* Bell Icon */}
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto">
          <i className="ri-notification-2-line text-white text-2xl"></i>
        </div>

        {/* Text */}
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
          Choose how you’d like to receive notifications
        </p>

        {/* Toggles */}
        <div className="space-y-4">
          <ToggleSwitch label="Email" isOn={email} handleToggle={() => setEmail(!email)} />
          <ToggleSwitch label="SMS" isOn={sms} handleToggle={() => setSms(!sms)} />
          <ToggleSwitch label="Push" isOn={push} handleToggle={() => setPush(!push)} />
        </div>

        <div className="mt-12 flex justify-center">
          <Button text="Save and continue" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}

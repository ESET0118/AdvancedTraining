// src/Components/Common/ToggleSwitch.jsx
export default function ToggleSwitch({ enabled, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-10 h-5 rounded-full cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-purple-600" : "bg-gray-400"
      } relative`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}

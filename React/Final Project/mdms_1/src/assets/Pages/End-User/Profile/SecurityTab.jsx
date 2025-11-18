// src/Pages/ProfileSettings/SecurityTab.jsx
import { useState } from "react";
import InputField from "../../../Components/InputField.jsx";
import Button from "../../../Components/Button.jsx";

export default function SecurityTab() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      {/* User Icon */}
      <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <i className="ri-lock-line text-white text-2xl"></i>
      </div>

      <form className="flex flex-col gap-4 items-center">
        <InputField
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current password"
        />
        <InputField
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />
        <InputField
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />
        <div className="mt-4">
          <Button text="Save and continue" onClick={() => alert("Password updated!")} />
        </div>
      </form>
    </div>
  );
}

// src/Pages/ProfileSettings/ProfileTab.jsx
import { useState } from "react";
import InputField from "../../Components/InputField.jsx";
import Button from "../../Components/Button.jsx";
export default function ProfileTab() {
  const [name, setName] = useState("User name");
  const [email, setEmail] = useState("user@gmail.com");
  const [mobile, setMobile] = useState("91+ 9809892982");

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      {/* User Icon */}
      <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <i className="ri-user-line text-white text-2xl"></i>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4 items-center">
        <InputField value={name} onChange={(e) => setName(e.target.value)} placeholder="User name" />
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@gmail.com"
        />
        <InputField
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="91+ 9809892982"
        />
        <div className="mt-4">
          <Button text="Save and continue" onClick={() => alert("Profile saved")} />
        </div>
      </form>
    </div>
  );
}

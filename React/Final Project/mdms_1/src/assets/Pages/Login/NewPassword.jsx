import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField.jsx";
import Button from "../../Components/Button.jsx"; // ✅ import Button

export default function NewPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert(`Password reset successful for: ${email}`);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center"
      >
        {/* Title */}
        <p className="text-black text-[14px] font-istok leading-[100%]">
          Reset Password
        </p>

        {/* Email Field */}
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        {/* Password Field */}
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />

        {/* Submit Button */}
        <div className="flex justify-center w-full mt-2">
          <Button text="Update Password" type="submit" />
        </div>
      </form>
    </div>
  );
}

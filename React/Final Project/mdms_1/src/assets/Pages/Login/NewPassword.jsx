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
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center"
      >
        {/* Title */}
        <p className="text-black dark:text-gray-100 text-[14px] font-istok leading-[100%]">
          Reset Password
        </p>

        {/* Email Field */}
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />

        {/* Password Field */}
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />

        {/* Submit Button */}
        <div className="flex justify-center w-full mt-2">
          <Button
            text="Update Password"
            type="submit"
            bgColor="bg-white"
            darkBgColor="dark:bg-gray-800"
            textColor="text-blue-700"
            darkTextColor="dark:text-blue-400"
            borderColor="border-blue-700"
            darkBorderColor="dark:border-blue-400"
            paddingX="px-6"
            paddingY="py-2"
            borderRadius="rounded-[20px]"
          />
        </div>
      </form>
    </div>
  );
}

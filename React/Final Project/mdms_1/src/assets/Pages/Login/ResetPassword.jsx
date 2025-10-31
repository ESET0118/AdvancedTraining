import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    alert(`Reset link sent to: ${email}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        {/* Title */}
        <p className="w-[150px] h-[17px] text-black dark:text-gray-100 text-[14px] font-istok leading-[100%] mb-2">
          Forgot Password
        </p>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-[361px] h-[40px] rounded-[16px] px-4 border-none bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-colors duration-300"
          required
        />

        {/* Login link aligned left below email */}
        <div className="w-[361px] flex justify-start">
          <button
            type="button"
            onClick={goToLogin}
            className="text-[#3700FF] dark:text-[#a5a5ff] text-[14px] font-bold leading-[100%] tracking-normal font-istok mt-1 transition-colors duration-300"
          >
            Login
          </button>
        </div>

        {/* Send Reset Link Button */}
        <Button
          text="Send Reset Link"
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
      </form>
    </div>
  );
}

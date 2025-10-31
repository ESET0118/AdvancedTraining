import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField.jsx";
import Button from "../../Components/Button.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Always navigate to dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Login Form
        </p>

        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />

        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />

        <div className="flex items-center justify-between w-[361px] text-sm text-gray-800 dark:text-gray-200">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors duration-300"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => navigate("/reset")}
            className="text-[#3700FF] dark:text-[#a5a5ff] text-[14px] font-bold leading-[100%] transition-colors duration-300"
          >
            Forgot password?
          </button>
        </div>

        <Button
          text="Login"
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

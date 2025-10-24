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
    // Always navigate to the dashboard, ignoring credentials
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <p className="text-lg font-semibold">Login Form</p>

        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className="flex items-center justify-between w-[361px] text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => navigate("/reset")}
            className="text-[#3700FF] text-[14px] font-bold leading-[100%]"
          >
            Forgot password?
          </button>
        </div>

        <Button text="Login" type="submit" />
      </form>
    </div>
  );
}

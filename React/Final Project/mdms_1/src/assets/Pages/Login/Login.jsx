import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField.jsx";
import Button from "../../Components/Button.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // 🔹 Demo credentials
  const demoAccounts = {
    enduser: {
      email: "enduser@demo.com",
      password: "end123",
    },
    zonemanager: {
      email: "zone@demo.com",
      password: "zone123",
    },
    enterprise: {
      email: "enterprise@demo.com",
      password: "ent123",
    },
  };

  // 🔹 Load remembered email on mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let role = "";

    // 🔹 Validate credentials
    if (
      email === demoAccounts.enduser.email &&
      password === demoAccounts.enduser.password
    ) {
      role = "enduser";
    } else if (
      email === demoAccounts.zonemanager.email &&
      password === demoAccounts.zonemanager.password
    ) {
      role = "zonemanager";
    } else if (
      email === demoAccounts.enterprise.email &&
      password === demoAccounts.enterprise.password
    ) {
      role = "enterprise";
    } else {
      alert("Invalid email or password. Please try again.");
      return;
    }

    // 🔹 Save role for App.jsx to read
    localStorage.setItem("role", role);

    // 🔹 Remember email if checked
    if (rememberMe) localStorage.setItem("rememberedEmail", email);
    else localStorage.removeItem("rememberedEmail");

    // 🔹 Redirect by role
    if (role === "enduser") navigate("/dashboard");
    else if (role === "zonemanager") navigate("/zone-dashboard");
    else if (role === "enterprise") navigate("/enterprise-dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md"
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

        <div className="flex items-center justify-between w-full text-sm text-gray-800 dark:text-gray-200">
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

      {/* 🔹 Demo Credentials Info */}
      <div className="mt-8 text-sm text-gray-700 dark:text-gray-300 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 w-full max-w-md space-y-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Demo Login Credentials
        </p>
        <div className="space-y-2">
          <div>
            <p className="font-medium">End User:</p>
            <p>
              Email: <span className="font-mono">enduser@demo.com</span>
            </p>
            <p>
              Password: <span className="font-mono">end123</span>
            </p>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-2">
            <p className="font-medium">Zone Manager:</p>
            <p>
              Email: <span className="font-mono">zone@demo.com</span>
            </p>
            <p>
              Password: <span className="font-mono">zone123</span>
            </p>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-2">
            <p className="font-medium">Enterprise:</p>
            <p>
              Email: <span className="font-mono">enterprise@demo.com</span>
            </p>
            <p>
              Password: <span className="font-mono">ent123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

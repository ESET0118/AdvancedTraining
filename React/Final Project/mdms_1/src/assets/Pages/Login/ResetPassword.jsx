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
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        {/* Title */}
        <p className="w-[150px] h-[17px] text-black text-[14px] font-istok leading-[100%] mb-2">
          Forgot Password
        </p>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-[361px] h-[40px] rounded-[16px] px-4 border-none bg-[#EAEAEA] focus:outline-none"
          required
        />

        {/* Login link aligned left below email */}
        <div className="w-[361px] flex justify-start">
          <button
            type="button"
            onClick={goToLogin}
            className="text-[#3700FF] text-[14px] font-bold leading-[100%] tracking-normal font-istok mt-1"
          >
            login
          </button>
        </div>

        {/* Send Reset Link Button */}
        <Button text="Send Reset Link" type="submit" />
      </form>
    </div>
  );
}

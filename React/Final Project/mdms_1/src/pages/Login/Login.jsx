import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f7f1e8] flex flex-col">
      {/* Header */}
      <div className="bg-gray-200 flex justify-between items-center px-4 py-2">
        <span className="font-bold text-sm">MDMS</span>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <select className="text-sm bg-transparent focus:outline-none">
            <option>en</option>
          </select>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-sm w-[500px]">
          <h2 className="text-center font-semibold mb-6">Login Form</h2>

          <input
            type="email"
            placeholder="email"
            className="w-full mb-3 p-2 bg-gray-200 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full mb-3 p-2 bg-gray-200 rounded focus:outline-none"
          />

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-1">
              <input type="checkbox" id="remember" className="accent-purple-700" />
              <label htmlFor="remember" className="text-sm">remember me</label>
            </div>
            <a
              href="/forgot-password"
              className="text-purple-700 text-sm font-semibold hover:underline"
            >
              forgot password
            </a>
          </div>

          <button className="block w-[130px] mx-auto border border-black rounded-full py-1">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

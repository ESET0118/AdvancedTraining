import React from "react";

const ForgotPassword = () => {
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

      {/* Forgot Password Form */}
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-sm w-[500px]">
          <h2 className="text-center font-semibold mb-6">Forgot password</h2>

          <input
            type="email"
            placeholder="email"
            className="w-full mb-4 p-2 bg-gray-200 rounded focus:outline-none"
          />

          <button className="block w-[150px] mx-auto border border-black rounded-full py-1 mb-3">
            send reset link
          </button>

          <div className="text-center">
            <a
              href="/login"
              className="text-purple-700 text-sm font-semibold hover:underline"
            >
              login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

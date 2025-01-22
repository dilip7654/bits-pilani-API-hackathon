import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase"; 

export default function ForgotPassword() {
  const [inputValue, setInputValue] = useState(""); // For email or phone
  const [method, setMethod] = useState("email"); // Tracks whether email or phone is selected
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (method === "email") {
        await sendPasswordResetEmail(auth, inputValue);
        setMessage("Password reset email sent. Please check your inbox.");
      } else {
        // Handle phone number reset logic if supported by backend
        setMessage("Password reset via phone is not yet implemented.");
      }
      setError("");
    } catch (err) {
      setError("Error resetting password: " + err.message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffffff]">
      <div className="bg-[#e0f7fa] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#0077b6] mb-6">
          Reset Password
        </h2>
        <form className="space-y-4" onSubmit={handleResetPassword}>
          <div className="space-y-2">
            <label className="block text-[#03045e] font-medium">
              Select Reset Method:
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="method"
                  value="email"
                  checked={method === "email"}
                  onChange={() => setMethod("email")}
                  className="form-radio text-[#0077b6]"
                />
                <span>Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="method"
                  value="phone"
                  checked={method === "phone"}
                  onChange={() => setMethod("phone")}
                  className="form-radio text-[#0077b6]"
                />
                <span>Phone</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[#03045e] font-medium">
              Enter your {method}:
            </label>
            <input
              type={method === "email" ? "email" : "tel"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={method === "email" ? "Enter your email" : "Enter your phone number"}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#0077b6] text-white font-bold rounded hover:bg-[#00b4d8]"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

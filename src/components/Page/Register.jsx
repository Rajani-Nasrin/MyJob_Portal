import React from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.password.value;

   
    if (username === "admin") {
      toast.info("Admin already exists. Please login.");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    const existingUser = localStorage.getItem(`user_${username}`);

    if (existingUser) {
      toast.info("User already registered. Please login.");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

  
    localStorage.setItem(`user_${username}`, username);
    localStorage.setItem(`pass_${username}`, password);

    toast.success("Registration successful! Please login.");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <ToastContainer />

      <div className="w-[360px] bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Register</h2>
        <p className="text-md text-gray-700 mb-4 text-center  mb-6">
          Create your account to get started.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className=" w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className=" w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
            required
          />

          <button
            type="submit"
            className="   w-full py-3
             
              bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-lg
              text-white font-semibold
              shadow-md
              hover:opacity-90
              hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        <p
          className="text-center text-sm mt-4 text-blue-600 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;

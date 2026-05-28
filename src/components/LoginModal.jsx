import React, { useState } from "react";
import API from "./services/api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginModal({ open, setOpen, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!open) return null;

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const res = await API.get(
        `/users?username=${username}&password=${password}`,
      );

      if (res.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(res.data[0]));

        toast.success("Login successful");

        setTimeout(() => {
          setOpen(false);

          if (onSuccess) {
            onSuccess();
          }
        }, 1000);
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      // CHECK EXISTING USER
      const existingUser = await API.get(`/users?username=${username}`);

      if (existingUser.data.length > 0) {
        toast.error("User already exists");
        return;
      }

      // CREATE USER
      await API.post("/users", {
        username,
        password,
      });

      toast.success("Registration successful");

      setTimeout(() => {
        setIsLogin(true);
      }, 1000);
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <ToastContainer />

      <div className="w-[360px] bg-white p-8 rounded-xl shadow-lg relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-3 text-2xl text-gray-400 hover:text-red-500"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* SUBTITLE */}
        <p className="text-md text-gray-700 text-center mb-6">
          {isLogin ? "Welcome back to MyJob" : "Create your account"}
        </p>

        {/* FORM */}
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="space-y-4"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
            className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            required
            className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* TOGGLE */}
        <p
          className="text-center text-sm mt-4 text-blue-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "New user? Register here"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default LoginModal;

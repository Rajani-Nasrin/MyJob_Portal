import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

   
    if (username === "admin") {
      const adminPass = localStorage.getItem("pass_admin");

      if (password === adminPass) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", "admin");
        navigate("/job");
        return;
      } else {
        toast.error("Invalid admin password");
        return;
      }
    }

   
    const storedUser = localStorage.getItem(`user_${username}`);
    const storedPass = localStorage.getItem(`pass_${username}`);

    if (!storedUser) {
      toast.error("User not registered. Please register first.");
    
      return;
    }

    if (storedPass !== password) {
      toast.error("Invalid password");
      return;
    }

  
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", username);
    navigate("/job", {replace: true});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <ToastContainer />

      <div className="w-[360px] bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-md text-gray-700 mb-4 text-center  mb-6">
          Welcome to MyProject.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            autoComplete="off"
            className=" w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
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

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md
              hover:opacity-90
              hover:scale-105 transition">
            Login
          </button>
          <p
            className="text-center text-sm mt-4 text-blue-600 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            New user? Register here
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

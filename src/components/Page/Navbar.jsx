import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTop(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const user = localStorage.getItem("user");

  // const handleLogout = () => {
  //   localStorage.removeItem("user");

  //   navigate("/");
  // };
  const handleLogout = () => {
    localStorage.removeItem("user");

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");

    navigate("/");
  };

  const navLink = (path, label) => (
    <button
      onClick={() => navigate(path)}
      className={`relative group px-3 py-2 transition-all duration-300 cursor-pointer
        ${
          location.pathname === path
            ? "text-green-500 font-semibold"
            : "text-gray-700 hover:text-green-500"
        }`}
    >
      {label}

      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300
        ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex">
        {/* 🔵 LEFT LOGO */}
        <div
          className="w-56 border-r border-gray-200 flex flex-col justify-center px-6 py-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-3xl font-bold text-green-500 leading-tight">
            MyJob
          </h1>

          <span className="text-sm text-gray-500">Job Portal</span>
        </div>

        {/* 🔵 RIGHT SIDE */}
        <div className="flex-1">
          {/* Top Welcome Strip */}
          <div
            className={`transition-all duration-500 ${
              hideTop ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
            }`}
          >
            <div className="px-8 h-full flex items-center text-sm text-gray-600 border-b border-gray-100">
              Welcome to Our Job Portal
            </div>
          </div>

          {/* Main Navbar */}
          <div className="px-8 py-4 flex justify-between items-center">
            {/* Nav Links */}
            <div className="flex gap-6">
              {navLink("/", "Home")}
              {navLink("/job", "Jobs")}
              {/* {navLink("/application-list", "Job List")} */}
              {navLink("/contact", "Contact")}
              <button
                onClick={() => {
                  if (user) {
                    navigate("/application-list");
                  } else {
                    navigate("/loginapi");
                  }
                }}
                className={`relative group px-3 py-2 transition-all duration-300 cursor-pointer
    ${
      location.pathname === "/application-list"
        ? "text-green-500 font-semibold"
        : "text-gray-700 hover:text-green-500"
    }`}
              >
                Job List
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300
    ${
      location.pathname === "/application-list"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}
                ></span>
              </button>
            </div>
            <div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="relative overflow-hidden px-6 py-2 rounded-lg border border-red-500 text-red-500 group transition  cursor-pointer"
                >
                  <span className="relative z-10 group-hover:text-white transition duration-300">
                    Logout
                  </span>

                  <span className="absolute left-1/2 top-0 h-full w-0 bg-red-500 transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/loginapi")}
                  className="relative overflow-hidden px-6 py-2 rounded-lg border border-green-500 text-green-500 group transition  cursor-pointer"
                >
                  <span className="relative z-10 group-hover:text-white transition duration-300">
                    Sign In
                  </span>

                  <span className="absolute left-1/2 top-0 h-full w-0 bg-green-500 transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

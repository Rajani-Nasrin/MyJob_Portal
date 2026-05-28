// import React from "react";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// import API from "../services/api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function RegisterApi() {
  const navigate = useNavigate();
  const location = useLocation();
  
   const [showPassword, setShowPassword] = useState(false);

  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   const username = e.target.username.value.trim();
  //   const password = e.target.password.value;

  //   try {
    
  //     const existingUser = await API.get(`/users?username=${username}`);

  //     if (existingUser.data.length > 0) {
  //       toast.error("User already exists");
  //       return;
  //     }

  
  //     await API.post("/users", {
  //       username,
  //       password,
  //     });

  //     toast.success("Registration successful");

  //     setTimeout(() => {
      
  //       navigate("/loginapi", {
  //         state: location.state,
  //       });
  //     }, 1000);
  //   } catch (error) {
  //     toast.error("Registration failed");
  //   }
  // };

 const handleRegister = (e) => {
   e.preventDefault();


   const username = e.target.username.value.trim();

   const password = e.target.password.value;

   // GET USERS
   const users = JSON.parse(localStorage.getItem("users")) || [];

   // CHECK EXISTING USER
   const existingUser = users.find((user) => user.username === username);

   if (existingUser) {
     toast.error("User already exists");

     return;
   }

   // NEW USER
   const newUser = {
     id: Date.now(),
     username,
     password,
   };

   // SAVE USER
   localStorage.setItem("users", JSON.stringify([...users, newUser]));

   toast.success("Registration successful");

   setTimeout(() => {
     navigate("/loginapi", {
       state: location.state,
     });
   }, 1000);
 };
 
 
  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gray-200">
  //     <ToastContainer />

  //     <div className="w-[360px] bg-white p-8 rounded-xl shadow-lg">
  
  //       <h2 className="text-2xl font-bold text-center mb-2">Register</h2>

  
  //       <p className="text-md text-gray-700 text-center mb-6">
  //         Create your account to get started.
  //       </p>

      
  //       <form onSubmit={handleRegister} className="space-y-4">
  //         <input
  //           type="text"
  //           name="username"
  //           placeholder="Username"
  //           autoComplete="off"
  //           required
  //           className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-blue-400"
  //         />

  //         <input
  //           type="password"
  //           name="password"
  //           placeholder="Password"
  //           autoComplete="off"
  //           required
  //           className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-blue-400"
  //         />

  //         <button
  //           type="submit"
  //           className="w-full py-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-105 transition"
  //         >
  //           Register
  //         </button>
  //       </form>

    
  //       <p
  //         className="text-center text-sm mt-4 text-blue-600 cursor-pointer"
  //         onClick={() => navigate("/loginapi")}
  //       >
  //         Already have an account? Login
  //       </p>
  //     </div>
  //   </div>
  // );

return (
  <div
    className="min-h-screen
    flex items-center justify-center
    bg-gradient-to-br
    from-[#eef2ff]
    via-[#f8fafc]
    to-[#edf7ff]
    relative overflow-hidden"
  >
    {/* BG SHAPES */}
    <div
      className="absolute
      w-[500px] h-[500px]
      bg-[#4CCE5B]/10
      rounded-full
      -bottom-40 -left-40"
    ></div>

    <div
      className="absolute
      w-[400px] h-[400px]
      bg-blue-500/10
      rounded-full
      -top-32 -right-32"
    ></div>

    {/* TOAST */}
    <ToastContainer position="top-right" autoClose={2000} />

    {/* REGISTER CARD */}
    <div
      className="relative
      w-[460px]
      bg-white/90
      backdrop-blur-md
      rounded-[35px]
      shadow-2xl
      px-10 py-6"
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div
          className="w-20 h-20
          rounded-full
          bg-[#4CCE5B]/10
          flex items-center justify-center"
        >
          <i
            className="fa-solid fa-user-plus
            text-[#4CCE5B]
            text-3xl"
          ></i>
        </div>
      </div>

      {/* TITLE */}
      <h2
        className="text-3xl font-bold
        text-center text-gray-900"
      >
        Create Account
      </h2>

      {/* SUBTITLE */}
      <p
        className="text-center
        text-gray-500
        text-sm  mb-6"
      >
        Register to start your journey
      </p>

      {/* FORM */}
      <form onSubmit={handleRegister} className="space-y-6">
        {/* USERNAME */}
        <div className="relative">
          <i
            className="fa-regular fa-user
            absolute left-5 top-1/2
            -translate-y-1/2
            text-gray-400 text-lg"
          ></i>

          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
            className="w-full
            h-12
            pl-14 pr-5
            rounded-2xl
            border border-gray-200
            bg-white
            text-md
            focus:outline-none
            focus:border-[#4CCE5B]"
          />
        </div>

        {/* PASSWORD */}
        <div className="relative">
          <i
            className="fa-solid fa-lock
            absolute left-5 top-1/2
            -translate-y-1/2
            text-gray-400 text-lg"
          ></i>

          {/* <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            required
            className="w-full
            h-12
            pl-14 pr-5
            rounded-2xl
            border border-gray-200
            bg-white
            text-md
            focus:outline-none
            focus:border-[#4CCE5B]"
          /> */}
          <div className="relative">
            <i
              className="fa-solid fa-lock
    absolute left-5 top-1/2
    -translate-y-1/2
    text-gray-400 text-lg"
            ></i>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
              className="w-full
    h-12
    pl-14 pr-14
    rounded-2xl
    border border-gray-200
    bg-white
    text-md
    focus:outline-none
    focus:border-[#4CCE5B]"
            />

            {/* EYE ICON */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute
    right-5 top-1/2
    -translate-y-1/2
    cursor-pointer
    text-gray-400 text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full
          py-3
          rounded-2xl
          bg-gradient-to-r
          from-[#4CCE5B]
          to-[#32b44a]
          text-white
          text-lg
          font-semibold
          shadow-lg
          hover:scale-[1.02]
          transition duration-300 cursor-pointer"
        >
          Register
        </button>
      </form>

      {/* DIVIDER */}
      <div
        className="flex items-center
        gap-4 my-8"
      >
        <div className="flex-1 h-[1px] bg-gray-200"></div>

        <span className="text-gray-400">or</span>

        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      {/* LOGIN */}
      <p className="text-center text-gray-500">
        Already have an account?
        <span
          onClick={() =>
            navigate("/loginapi", {
              state: location.state,
            })
          }
          className="text-[#4CCE5B]
          font-semibold ml-2
          cursor-pointer hover:underline"
        >
          Login here
        </span>
      </p>
    </div>
  </div>
);

}


export default RegisterApi;

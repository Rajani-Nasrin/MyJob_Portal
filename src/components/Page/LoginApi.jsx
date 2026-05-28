// import React from "react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// import API from "../services/api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginApi() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const username = e.target.username.value.trim();
  //   const password = e.target.password.value;

  //   try {
  //     const res = await API.get(
        
  //       `/users?username=${username}&password=${password}`,
  //     );
  //     console.log(res.data);

  
  //     if (res.data.length > 0) {
      
      
  //       localStorage.setItem("user", JSON.stringify(res.data[0]));

  //       localStorage.setItem("isLoggedIn", "true");

  //       localStorage.setItem("currentUser", JSON.stringify(res.data[0]));

  //       toast.success("Login successful");

//         setTimeout(() => {
        
//           const from = location.state?.from;
//           const jobData = location.state?.jobData;
// T
//           navigate(from || "/", {
//             state: jobData,
//           });
//         }, 1000);
// setTimeout(() => {
//   const jobData = location.state?.jobData;

//   navigate("/applicationform", {
//     state: jobData,
//   });
// }, 1000);
// setTimeout(() => {
//   const fromApply = location.state?.fromApply;
//   const jobData = location.state?.jobData;

 
//   if (fromApply) {
//     navigate("/applicationform", {
//       state: jobData,
//     });
//   }

 
//   else {
//     navigate("/");
//   }
// }, 1000);
// setTimeout(() => {
//   const fromApply = location.state?.fromApply;

//   const jobData = location.state?.jobData;

  
//   if (fromApply) {
//     navigate("/applicationform", {
//       state: jobData,
//     });
//   }


//   else {
//     navigate("/");
//   }
// }, 1000);
// setTimeout(() => {
//   const fromApply = location.state?.fromApply;

//   const jobData = location.state?.jobData;


//   if (fromApply) {
//     navigate("/applicationform", {
//       state: jobData,
//     });
//   }

const handleLogin = (e) => {

  e.preventDefault();

  const username = e.target.username.value.trim();

  const password = e.target.password.value;

  // GET USERS
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  // FIND USER
  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password
  );

  // LOGIN SUCCESS
  if (user) {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    toast.success("Login successful");

    setTimeout(() => {

      const fromApply =
        location.state?.fromApply;

      const jobData =
        location.state?.jobData;

      // APPLY FLOW
      if (fromApply) {

        navigate("/applicationform", {
          state: jobData,
        });

      }

      // NORMAL LOGIN
      else {

        navigate("/");

      }

    }, 1000);

  }

  // LOGIN FAIL
  else {

    toast.error(
      "Invalid username or password"
    );

  }

};

  // NORMAL LOGIN
//   else {
//     navigate("/");
//   }
// }, 1000);
//       } else {
//         toast.error("Invalid username or password");
//       }
//     } catch (error) {
//       toast.error("Login failed");
//     }
//   };

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gray-200">
  //     <ToastContainer />

  //     <div className="w-[360px] bg-white p-8 rounded-xl shadow-lg">
      
  //       <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

  //       <p className="text-md text-gray-700 text-center mb-6">
  //         Welcome back to MyJob.
  //       </p>

       
  //       <form onSubmit={handleLogin} className="space-y-4">
  //         <input
  //           type="text"
  //           name="username"
  //           placeholder="Username"
  //           autoComplete="off"
  //           required
  //           className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-blue-400"
  //         />

        
  //         <div className="relative">
  //           <input
  //             type={showPassword ? "text" : "password"}
  //             name="password"
  //             placeholder="Password"
  //             autoComplete="off"
  //             required
  //             className="w-full pl-4 pr-12 py-3 rounded-xl
  //   bg-white border border-gray-200
  //   text-gray-800 placeholder-gray-600
  //   focus:outline-none focus:border-blue-400"
  //           />

     
  //           <span
  //             onClick={() => setShowPassword(!showPassword)}
  //             className="absolute right-4 top-1/2
  //   -translate-y-1/2 cursor-pointer
  //   text-gray-500"
  //           >
  //             {showPassword ? <FaEyeSlash /> : <FaEye />}
  //           </span>
  //         </div>

  //         <button
  //           type="submit"
  //           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition"
  //         >
  //           Login
  //         </button>
  //       </form>


  //       <p
  //         className="text-center text-sm mt-4 text-blue-600 cursor-pointer"
         
  //         onClick={() =>
  //           navigate("/registerapi", {
  //             state: location.state,
  //           })
  //         }
  //       >
  //         New user? Register here
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <div
      className="min-h-screen
  flex flex-col items-center justify-center
  px-4 py-4 md:py-10
  bg-gradient-to-br
  from-[#eef2ff]
  via-[#f8fafc]
  to-[#edf7ff]
  relative overflow-x-hidden md:overflow-hidden"
    >
      {/* BG SHAPES */}
      <div
        className="absolute
      w-[300px] h-[300px]
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

      <ToastContainer />

      {/* <div className="mb-6">
        <Link to="/">
          <h1 className="text-3xl font-bold text-green-500 leading-tight  text-center">
            MyJob
          </h1>
          <span className="text-sm text-gray-500 text-center">Job Portal</span>
        </Link>
      </div> */}
      {/* 
      <div
        className="w-56 border-r border-gray-200 flex flex-col justify-center px-6 py-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="text-3xl font-bold text-green-500 leading-tight">
          MyJob
        </h1>

        <span className="text-sm text-gray-500">Job Portal</span>
      </div> */}

      {/* LOGIN CARD */}
      <div
        className="relative
      md:w-[460px] h-auto
      bg-white/90
      backdrop-blur-md
      rounded-[35px]
      shadow-2xl
      px-4 md:px-10 py-4"
      >
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <Link to="/">
            <div
              className="w-20 h-20
          rounded-full
          bg-[#4CCE5B]/10
          flex items-center justify-center"
            >
              <i
                className="fa-solid fa-briefcase
            text-[#4CCE5B]
            text-3xl"
              ></i>
            </div>
          </Link>
        </div>

        {/* TITLE */}
        <h2
          className="text-2xl md:text-3xl font-bold
        text-center text-gray-900"
        >
          Welcome Back!
        </h2>

        {/* SUBTITLE */}
        <p
          className="text-center
        text-gray-500
        text-md  mb-6"
        >
          Login to your MyJob account
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* USERNAME */}
          <div className="relative">
            <i
              className="fa-regular fa-user
            absolute left-5 top-1/2
            -translate-y-1/2
            text-gray-400 text-md"
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
            text-lg
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
            text-gray-400 text-md"
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
            text-lg
            focus:outline-none
            focus:border-[#4CCE5B]"
            />

            {/* EYE */}
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

          {/* REMEMBER */}
          <div
            className="flex items-center
          justify-between text-sm"
          >
            <label
              className="flex items-center
            gap-2 text-gray-600"
            >
              <input type="checkbox" className="accent-[#4CCE5B]" />
              Remember me
            </label>

            <p
              className="text-[#4CCE5B]
            cursor-pointer hover:underline"
            >
              Forgot password?
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-[#4CCE5B]
          to-[#32b44a]
          text-white
          text-lg
          font-semibold
          shadow-lg
          hover:scale-[1.02]
          transition duration-300 mt-4 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* DIVIDER */}
        <div
          className="flex items-center
        gap-4 my-6"
        >
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <span className="text-gray-400">or</span>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* REGISTER */}
        <p className="text-center text-gray-500">
          New user?
          <span
            onClick={() =>
              navigate("/registerapi", {
                state: location.state,
              })
            }
            className="text-[#4CCE5B]
          font-semibold ml-2
          cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginApi;

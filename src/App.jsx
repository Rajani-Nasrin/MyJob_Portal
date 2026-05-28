import React from "react";



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Job from "./components/Job_Details/Job";
import Details from "./components/Job_Details/Details";



// import Login from "./components/Page/Login";
// import Register from "./components/Page/Register";
import AuthRoute from "./components/Page/AuthRoute";
import ApplicationList from "./components/Job_Details/applyForm/ApplicationList";
import ApplicationProfile from "./components/Job_Details/applyForm/ApplicationProfile";
import ApplicationForm from "./components/Job_Details/applyForm/ApplicationForm"
import Home from "./components/Job_Details/applyForm/Home";
import LoginApi from "./components/Page/LoginApi";
import RegisterApi from "./components/Page/RegisterApi";
import Contact from "./components/Page/Contact";
// AUTO CREATE ADMIN (only once)
// if (!localStorage.getItem("user_admin")) {
//   localStorage.setItem("user_admin", "admin");
//   localStorage.setItem("pass_admin", "admin123");
// }

function App() {
  // const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            isLoggedIn === "true" ? (
              <Navigate to="/job" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        /> */}

        <Route path="/" element={<Home />} />

        {/*  Public */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/loginapi" element={<LoginApi />} />
        <Route path="/registerapi" element={<RegisterApi />} />

        {/*  Job Page */}
        <Route
          path="/job"
          element={
            // <AuthRoute>
            <Job />
            // </AuthRoute>
          }
        />

        {/*  Other Protected Pages */}
        <Route
          path="/job/:id"
          element={
            // <AuthRoute>
            <Details />
            // </AuthRoute>
          }
        />

        <Route
          path="/applicationform"
          element={
            <AuthRoute>
              <ApplicationForm />
            </AuthRoute>
          }
        />

        <Route
          path="/application-list"
          element={
            <AuthRoute>
              <ApplicationList />
            </AuthRoute>
          }
        />

        <Route
          path="/application-profile"
          element={
            <AuthRoute>
              <ApplicationProfile />
            </AuthRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />

        {/* 🔁 Fallback */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Page/Navbar";
import Footer from "../../Page/Footer";

function ApplicationForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!state) {
    return <p className="text-center mt-20">No Job Selected</p>;
  }

  const { jobId, position } = state;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const resumeFile = form.resume.files[0];

//     if (!resumeFile) {
//       toast.error("Please upload your CV");

//       return;
//     }

//     // const newApplication = {
//     //   appId: `APP-${Date.now()}`,
//     //   jobId,
//     //   position,
//     //   name: form.name.value,
//     //   email: form.email.value,
//     //   phone:form.phone.value,
//     //   resume: form.resume.files[0],
//     // };

//     const currentUser = JSON.parse(localStorage.getItem("user"));

// // const newApplication = {
// //   appId: `APP-${Date.now()}`,

// //   username: currentUser.username,

// //   jobId,
// //   position,

// //   name: form.name.value,
// //   email: form.email.value,
// //   phone: form.phone.value,

// //   resume: form.resume.files[0],
// // };


// const newApplication = {
//   appId: `APP-${Date.now()}`,

//   username: currentUser.username,

//   jobId,
//   position,

//   name: form.name.value,
//   email: form.email.value,
//   phone: form.phone.value,

//   resume: form.resume.files[0],
// };

//     const existing = JSON.parse(localStorage.getItem("applications")) || [];

//     localStorage.setItem(
//       "applications",
//       JSON.stringify([...existing, newApplication]),
//     );

//     toast.success("Application submitted successfully ✅");
//     setSubmitted(true);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const resumeFile = form.resume.files[0];

    if (!resumeFile) {
      toast.error("Please upload your CV");

      return;
    }

    const gender = form.gender.value;

    const address = form.address.value;

    const description = form.description.value;

    const currentUser = JSON.parse(localStorage.getItem("user"));

    const newApplication = {
      appId: `APP-${Date.now()}`,

      username: currentUser.username,

      jobId,

      position,

      name: form.name.value,

      email: form.email.value,

      phone: form.phone.value,

      gender,

      address,

      description,

      resumeName: resumeFile.name,

      applyDate: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("applications")) || [];

    localStorage.setItem(
      "applications",
      JSON.stringify([...existing, newApplication]),
    );

    toast.success("Application submitted successfully ✅");

    setSubmitted(true);
  };

  return (
    <>
      {/* <main className="mt-20">
        <Navbar />

        <div className="container mx-auto px-4 py-10">
          <ToastContainer position="top-right" />

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Application Form</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            
              <div>
                <label className="block text-md font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  required
                  className=" w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                />
              </div>

          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium mb-2">
                    Job ID
                  </label>
                  <input
                    type="text"
                    defaultValue={jobId}
                    readOnly
                    className="w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                  />
                </div>

          
                <div>
                  <label className="block text-md font-medium mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    defaultValue={position}
                    readOnly
                    className="w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                  />
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 9876543210"
                    required
                    className="w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                  />
                </div>
              </div>

   
              <div>
                <label className="block text-md font-medium mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  required
                  className="w-full pl-4 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-400
                text-gray-800
                placeholder-gray-600
                focus:outline-none
                focus:border-blue-400"
                />
              </div>

              {!submitted ? (
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700   hover:opacity-90
              hover:scale-105 transition"
                >
                  Apply
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate("/application-list")}
                  className="  w-full py-3
             
              bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-lg
              text-white font-semibold
              shadow-md
              hover:opacity-90
              hover:scale-105 transition"
                >
                  Go to Application List
                </button>
              )}
            </form>
          </div>
        </div>
      </main> */}
      <main className="mt-20 bg-gray-50 min-h-screen py-16">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6">
          <ToastContainer position="top-right" />

          <div
            className="bg-white border border-gray-200
      p-8 md:p-14"
          >
            {/* TITLE */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Application Form
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Apply for your dream job opportunity.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* TOP UPLOAD */}
              <div className="flex flex-wrap items-start gap-5 mb-12">
                {/* COVER PHOTO */}
                <label
                  className="bg-[#4CCE5B]
            text-white
            px-8 py-4
            cursor-pointer
            font-semibold
            hover:bg-[#39b54a]
            transition duration-300"
                >
                  Upload Cover Photo
                  <input type="file" className="hidden" />
                </label>

                {/* CV */}
                {/* <label
                  className="bg-[#4CCE5B]
            text-white
            px-8 py-4
            cursor-pointer
            font-semibold
            hover:bg-[#39b54a]
            transition duration-300"
                >
                  Upload Your CV
                  <input
                    type="file"
                    name="resume"
                    required
                    className="hidden"
                  />
                </label> */}
                <div>
                  <label
                    className="bg-[#4CCE5B]
    text-white
    px-8 py-4
    cursor-pointer
    font-semibold
    inline-block
    hover:bg-[#39b54a]
    transition duration-300"
                  >
                    Upload Your CV
                    <input
                      type="file"
                      name="resume"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];

                        if (file) {
                          setResumeName(file.name);
                        }
                      }}
                    />
                  </label>

                  {/* FILE NAME */}
                  {/* {resumeName && (
                    <p className="mt-4 text-green-600 font-medium">
                      {resumeName}
                    </p>
                  )} */}
                  {resumeName && (
                    <p
                      className="mt-3 text-sm
    text-green-600
    font-medium
    max-w-[220px]
    truncate"
                    >
                      {resumeName}
                    </p>
                  )}
                </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NAME */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-300
              px-5 py-4
              outline-none
              focus:border-[#4CCE5B]
              transition duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full border border-gray-300
              px-5 py-4
              outline-none
              focus:border-[#4CCE5B]
              transition duration-300"
                  />
                </div>

                {/* JOB ID */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Job ID
                  </label>

                  <input
                    type="text"
                    defaultValue={jobId}
                    readOnly
                    className="w-full border border-gray-300
              bg-gray-50
              px-5 py-4
              outline-none"
                  />
                </div>

                {/* POSITION */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Position
                  </label>

                  <input
                    type="text"
                    defaultValue={position}
                    readOnly
                    className="w-full border border-gray-300
              bg-gray-50
              px-5 py-4
              outline-none"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Contact Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 9876543210"
                    required
                    className="w-full border border-gray-300
              px-5 py-4
              outline-none
              focus:border-[#4CCE5B]
              transition duration-300"
                  />
                </div>

                {/* ADDRESS */}
                <div>
                  <label className="block text-gray-500 text-sm mb-3">
                    Address
                  </label>

                  {/* <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full border border-gray-300
              px-5 py-4
              outline-none
              focus:border-[#4CCE5B]
              transition duration-300"
                  /> */}
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="w-full border border-gray-300
  px-5 py-4
  outline-none
  focus:border-[#4CCE5B]
  transition duration-300"
                  />
                </div>
              </div>

              {/* GENDER */}
              <div className="mt-12">
                <label className="block text-gray-500 text-sm mb-4">
                  Gender
                </label>

                {/* <div className="flex gap-10">
                  <label className="flex items-center gap-3 text-gray-600">
                    <input type="radio" name="gender" defaultChecked />
                    Male
                  </label>

                  <label className="flex items-center gap-3 text-gray-600">
                    <input type="radio" name="gender" />
                    Female
                  </label>
                </div> */}
                <div className="flex gap-10">
                  <label className="flex items-center gap-3 text-gray-600">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      defaultChecked
                    />
                    Male
                  </label>

                  <label className="flex items-center gap-3 text-gray-600">
                    <input type="radio" name="gender" value="Female" />
                    Female
                  </label>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-12">
                <label className="block text-gray-500 text-sm mb-4">
                  Description
                </label>
                {/* 
                <textarea
                  rows="8"
                  placeholder="Write something about yourself..."
                  className="w-full border border-gray-300
            px-5 py-4
            outline-none
            resize-none
            focus:border-[#4CCE5B]
            transition duration-300"
                ></textarea> */}

                <textarea
                  rows="8"
                  name="description"
                  placeholder="Write something about yourself..."
                  className="w-full border border-gray-300
  px-5 py-4
  outline-none
  resize-none
  focus:border-[#4CCE5B]
  transition duration-300"
                ></textarea>
              </div>

              {/* BUTTON */}
              {!submitted ? (
                <button
                  type="submit"
                  className="w-full mt-12
            bg-[#4CCE5B]
            text-white
            py-3 md:py-5
            text-lg font-semibold
            hover:bg-[#39b54a]
            transition duration-300"
                >
                  Apply Now
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate("/application-list")}
                  className="w-full mt-12
            bg-[#4CCE5B]
            text-white
              py-3 md:py-5
            text-lg font-semibold"
                >
                  Go to Application List
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ApplicationForm;

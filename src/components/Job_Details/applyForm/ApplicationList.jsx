
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Page/Navbar";
import Footer from "../../Page/Footer";

function ApplicationList() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  // useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem("applications")) || [];
  //   setApplications(stored);
  // }, []);

  useEffect(() => {
    // ALL APPLICATIONS
    const stored = JSON.parse(localStorage.getItem("applications")) || [];

    // CURRENT LOGGED IN USER
    const currentUser = JSON.parse(localStorage.getItem("user"));

    // USER WISE FILTER
    const userApplications = stored.filter(
      (app) => app.username === currentUser.username,
    );

    setApplications(userApplications);
  }, []);

  // const handleDelete = (appId) => {
  //   const updated = applications.filter((app) => app.appId !== appId);
  //   setApplications(updated);
  //   localStorage.setItem("applications", JSON.stringify(updated));
  // };

  const handleDelete = (appId) => {
    // ALL APPLICATIONS
    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    // REMOVE ONLY SELECTED APP
    const updatedAllApplications = allApplications.filter(
      (app) => app.appId !== appId,
    );

    // SAVE UPDATED ALL DATA
    localStorage.setItem(
      "applications",
      JSON.stringify(updatedAllApplications),
    );

    // CURRENT USER FILTER AGAIN
    const currentUser = JSON.parse(localStorage.getItem("user"));

    const userApplications = updatedAllApplications.filter(
      (app) => app.username === currentUser.username,
    );

    setApplications(userApplications);
  };

  if (applications.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mt-32 text-center text-gray-500 text-lg">
          <h2> No Job Application Found</h2>

          <div className="text-center flex items-center justify-center mt-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center mt-6
              px-5 py-3
              bg-[#4CCE5B]
              text-white
              font-semibold
              hover:bg-[#39b54a]
              transition duration-300 cursor-pointer"
            >
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}⬅ Back to Job Portal
            </button>
          </div>
        </div>
      </div>
    );
  }


      {/* <Navbar /> */}
      {/* <main className="mt-20">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            My Job Applications
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {applications.map((app) => (
              <div
                key={app.appId}
                className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md"
              >
               
                <div>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Job ID:</span>{" "}
                    <b>{app.jobId}</b>
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    {app.position}
                  </p>
                </div>

             
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      navigate("/application-profile", {
                        state: app,
                      })
                    }
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 cursor-pointer"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleDelete(app.appId)}
                    className="px-5 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main> */}
      return (
      <>
        <Navbar />
        <main className="mt-20 md:min-h-screen bg-gray-50 py-8 md:py-16 ">
          <div className="max-w-7xl mx-auto px-6">
            {/* TITLE */}
            <div className="text-center mb-8 md:mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold
            text-gray-900"
              >
                My Job Applications
              </h2>

              <div
                className="w-28 h-1
            bg-[#4CCE5B]
            mx-auto mt-5 rounded-full"
              ></div>

              <p className="text-gray-500 mt-6 text-lg">
                Track and manage all the jobs you have applied for.
              </p>
            </div>

            {/* EMPTY */}
            {applications.length === 0 ? (
              <div
                className="bg-white border border-gray-200
            rounded-2xl p-16 text-center shadow-sm"
              >
                <i
                  className="fa-solid fa-briefcase
              text-7xl text-[#4CCE5B]/40"
                ></i>

                <h2
                  className="text-2xl font-bold
              text-gray-800 mt-8"
                >
                  No Job Application Found
                </h2>

                <p className="text-gray-500 mt-4 text-lg">
                  Start applying for jobs and grow your career.
                </p>

                <button
                  onClick={() => navigate("/")}
                  className="mt-8
              px-8 py-4
              bg-[#4CCE5B]
              text-white
              font-semibold
              hover:bg-[#39b54a]
              transition duration-300"
                >
                  Back to Job Portal
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {applications.map((app) => (
                  <div
                    key={app.appId}
                    className="bg-white
                border border-gray-200
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                transition duration-300
                p-8
                flex flex-col lg:flex-row
                justify-between
                items-center
                gap-8"
                  >
                    {/* LEFT */}
                    <div
                      className="flex flex-col md:flex-row
                  items-center gap-8 w-full"
                    >
                      {/* ICON */}
                      <div
                        className="w-14 h-14
                    rounded-full
                    bg-[#4CCE5B]/10
                    flex items-center justify-center"
                      >
                        <i
                          className="fa-solid fa-briefcase
                      text-3xl text-[#4CCE5B]"
                        ></i>
                      </div>

                      {/* CONTENT */}
                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-lg">
                          Job ID :
                          <span className="text-[#4CCE5B] font-semibold">
                            {" "}
                            {app.jobId}
                          </span>
                        </p>

                        <h3
                          className="text-2xl font-bold
                      text-gray-900 mt-2"
                        >
                          {app.position}
                        </h3>

                        <div
                          className="flex flex-wrap
                      justify-center md:justify-start
                      gap-6 mt-3 text-gray-500"
                        >
                          <p className="flex items-center gap-2">
                            <i className="fa-solid fa-location-dot text-[#4CCE5B]"></i>

                            {app.location}
                          </p>

                          <p className="flex items-center gap-2">
                            <i className="fa-solid fa-calendar text-[#4CCE5B]"></i>
                            Applied Job
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div
                      className="flex items-center
                  gap-5"
                    >
                      {/* VIEW */}
                      <button
                        onClick={() =>
                          navigate("/application-profile", {
                            state: app,
                          })
                        }
                        className="relative overflow-hidden
                    px-5 py-3
                    border border-[#4CCE5B]
                    text-[#4CCE5B]
                    font-semibold
                    group"
                      >
                        <span
                          className="absolute left-0 top-0
                      h-full w-0
                      bg-[#4CCE5B]
                      transition-all duration-500
                      group-hover:w-full"
                        ></span>

                        {/* <span
                          className="relative z-10
                      group-hover:text-white"
                        >
                          <i className="fa-solid fa-eye mr-2"></i>
                          View
                        </span> */}
                        <span
                          className="relative z-10
  group-hover:text-white
  flex items-center"
                        >
                          <i className="fa-solid fa-eye mr-2"></i> View
                        </span>
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(app.appId)}
                        className="relative overflow-hidden
                    px-5 py-3
                    border border-red-500
                    text-red-500
                    font-semibold
                    group"
                      >
                        <span
                          className="absolute left-0 top-0
                      h-full w-0
                      bg-red-500
                      transition-all duration-500
                      group-hover:w-full"
                        ></span>

                        <span
                          className="relative z-10
                      group-hover:text-white   flex items-cente"
                        >
                          <i className="fa-solid fa-trash mr-2"></i>
                          Delete
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      
      
      <Footer />
    </>
  );
}

export default ApplicationList;

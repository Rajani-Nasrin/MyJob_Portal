
// import React, { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import jobs from "../Page/data/jobsData";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Page/Navbar";
const Job = () => {
  // const [jobs, setJobs] = useState([
  //   {
  //     id: 1,
  //     job_title: "Frontend Developer",
  //     job_description: "Develop and maintain user interfaces using React.",
  //     job_location: "Bangalore",
  //     job_exp: "0-2 Years",
  //     created_at: "2024-01-01",
  //   },
  //   {
  //     id: 2,
  //     job_title: "Backend Developer",
  //     job_description: "Build REST APIs using Node.js and Express.",
  //     job_location: "Hyderabad",
  //     job_exp: "1-3 Years",
  //     created_at: "2024-01-03",
  //   },
  //   {
  //     id: 3,
  //     job_title: "Full Stack Developer",
  //     job_description: "Work on both frontend and backend technologies.",
  //     job_location: "Pune",
  //     job_exp: "2-4 Years",
  //     created_at: "2024-01-05",
  //   },
  //   {
  //     id: 4,
  //     job_title: "React Developer",
  //     job_description:
  //       "Create reusable components and manage state using hooks.",
  //     job_location: "Kolkata",
  //     job_exp: "1-2 Years",
  //     created_at: "2024-01-07",
  //   },
  //   {
  //     id: 5,
  //     job_title: "UI Developer",
  //     job_description: "Convert UI designs into responsive web pages.",
  //     job_location: "Delhi",
  //     job_exp: "0-1 Years",
  //     created_at: "2024-01-09",
  //   },
  //   {
  //     id: 6,
  //     job_title: "Java Developer",
  //     job_description: "Develop enterprise-level applications using Java.",
  //     job_location: "Noida",
  //     job_exp: "2-5 Years",
  //     created_at: "2024-01-11",
  //   },
  //   {
  //     id: 7,
  //     job_title: "Python Developer",
  //     job_description: "Build backend services using Python and Django.",
  //     job_location: "Chennai",
  //     job_exp: "1-3 Years",
  //     created_at: "2024-01-13",
  //   },
  //   {
  //     id: 8,
  //     job_title: "Laravel Developer",
  //     job_description: "Develop web applications using Laravel framework.",
  //     job_location: "Mumbai",
  //     job_exp: "1-4 Years",
  //     created_at: "2024-01-15",
  //   },
  //   {
  //     id: 9,
  //     job_title: "PHP Developer",
  //     job_description: "Maintain and optimize server-side applications.",
  //     job_location: "Jaipur",
  //     job_exp: "0-2 Years",
  //     created_at: "2024-01-17",
  //   },
  //   {
  //     id: 10,
  //     job_title: "Software Tester",
  //     job_description: "Test applications and ensure quality standards.",
  //     job_location: "Indore",
  //     job_exp: "0-1 Years",
  //     created_at: "2024-01-19",
  //   },
  //   {
  //     id: 11,
  //     job_title: "DevOps Engineer",
  //     job_description: "Manage CI/CD pipelines and cloud infrastructure.",
  //     job_location: "Bangalore",
  //     job_exp: "3-6 Years",
  //     created_at: "2024-01-21",
  //   },
  //   {
  //     id: 12,
  //     job_title: "Mobile App Developer",
  //     job_description: "Develop Android and iOS applications.",
  //     job_location: "Hyderabad",
  //     job_exp: "1-3 Years",
  //     created_at: "2024-01-23",
  //   },
  //   {
  //     id: 13,
  //     job_title: "Data Analyst",
  //     job_description: "Analyze data and generate business insights.",
  //     job_location: "Pune",
  //     job_exp: "2-4 Years",
  //     created_at: "2024-01-25",
  //   },
  //   {
  //     id: 14,
  //     job_title: "System Administrator",
  //     job_description: "Maintain servers and system security.",
  //     job_location: "Kochi",
  //     job_exp: "3-5 Years",
  //     created_at: "2024-01-27",
  //   },
  //   {
  //     id: 15,
  //     job_title: "Cloud Engineer",
  //     job_description: "Design and maintain cloud-based solutions.",
  //     job_location: "Gurgaon",
  //     job_exp: "2-5 Years",
  //     created_at: "2024-01-29",
  //   },
  // ]);

  const navigate = useNavigate();

  const gotodetailsPage =(id)=>{
// alert(id);
navigate ((`${id}`))
  }


  const handleLogout = () => {
  
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };


  return (
    <>
      <Navbar />

      <main className="mt-20">
        <section className="bg-slate-100">
          <div className="container mx-auto px-4 py-12 ">
            {/* HEADING */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Find Your Dream Job
              </h2>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {jobs.map((item) => {
                const {
                  id,
                  job_title,
                  job_description,
                  job_location,
                  job_exp,
                  created_at,
                  job_type,
                } = item;

                return (
                  //   <div
                  //     key={id}
                  //     className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                  //   >

                  //     <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  //       {job_title}
                  //     </h3>

                  //     <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  //       {job_description}
                  //     </p>

                  //     <div className="space-y-2 text-sm text-gray-700 mb-4">
                  //       <p>
                  //         <span className="font-medium">
                  //           <i
                  //             class="fa-solid fa-location-dot  text-yellow-800
                  //  group-hover:text-yellow-600    transition-transform duration-300
                  //  group-hover:scale-110 mr-2"
                  //           ></i>{" "}
                  //           Location:
                  //         </span>{" "}
                  //         {job_location}
                  //       </p>
                  //       <p>
                  //         <span className="font-medium">
                  //           {" "}
                  //           <i
                  //             className="fa-solid fa-briefcase text-red-950
                  //  group-hover:text-red-600    transition-transform duration-300
                  //  group-hover:scale-110 mr-2"
                  //           ></i>{" "}
                  //           Experience:
                  //         </span>{" "}
                  //         {job_exp}
                  //       </p>

                  //       <p>
                  //         <span className="font-medium">
                  //           <i
                  //             class="fa-solid fa-calendar  text-orange-700
                  //  group-hover:text-orange-900    transition-transform duration-300
                  //  group-hover:scale-110 mr-2"
                  //           ></i>{" "}
                  //           Posted:
                  //         </span>{" "}
                  //         {created_at}
                  //       </p>
                  //     </div>

                  //     <button
                  //       className="w-full py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700  transition-transform duration-300
                  //  group-hover:scale-105 "
                  //       onClick={() => {
                  //         gotodetailsPage(id);
                  //       }}
                  //     >
                  //       Apply Now
                  //     </button>
                  //   </div>
                  <div
                    key={id}
                    className="bg-white border border-gray-300  p-4 md:p-6
            flex flex-col md:flex-row md:items-center justify-between
            gap-4 hover:shadow-xl transition duration-300"
                  >
                    {/* LEFT */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* IMAGE */}
                      <div
                        className="w-24 h-24 rounded-full border-4 border-gray-100
                flex items-center justify-center bg-white shadow-sm"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                          className="w-14 h-14 object-contain"
                        />
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {job_title}
                        </h3>

                        <p className="text-green-500 text-lg mt-1 font-medium">
                          myjob.com
                        </p>

                        <div className="mt-4 space-y-3 text-gray-500">
                          {/* <p className="flex items-center gap-3 text-md">
                                <i className="fa-solid fa-dollar-sign text-green-500"></i>
                                ₹20k - ₹25k
                              </p> */}

                          <p>
                            {" "}
                            <i
                              className="fa-solid fa-briefcase text-green-500    transition-transform duration-300 
               group-hover:scale-110 mr-2"
                            ></i>{" "}
                            {job_exp}
                          </p>

                          <p className="flex items-start gap-3 text-md">
                            <i className="fa-solid fa-location-dot text-green-500 mt-1"></i>

                            {job_location}
                          </p>

                          <p className="flex items-center gap-3 text-md">
                            <i className="fa-solid fa-calendar text-green-500"></i>

                            {created_at}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-4">
                      {/* <button
                        onClick={() => navigate(`/job/${id}`)}
                        className="px-4 py-3 border-2 border-green-500
                text-gray-700 text-md font-medium
                hover:bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)] hover:text-white
                transition duration-300"
                      >
                        Apply
                      </button> */}
                      <button
                        // onClick={() => navigate(`/job/${id}`)}
                        onClick={() => {
                          gotodetailsPage(id);
                        }}
                        className="relative overflow-hidden px-4 py-3 border-2 border-green-500
  text-green-500 text-md font-medium group"
                      >
                        <span
                          className="absolute left-0 top-0 h-full w-0
    bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
    transition-all duration-500 ease-in-out
    group-hover:w-full"
                        ></span>

                        <span className="relative z-10 group-hover:text-white transition duration-300">
                          Apply
                        </span>
                      </button>

                      <button className="relative overflow-hidden px-4 py-3 text-white text-md font-medium">
                        <span
                          className="absolute left-0 top-0 h-full w-full
    bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]"
                        ></span>

                        <span className="relative z-10">{job_type}</span>
                      </button>

                      {/* <button
                        className={`px-4 py-3 text-white text-md font-medium

                ${
                  job_type === "Full Time"
                    ? "bg-blue-500"
                    : job_type === "Part Time"
                      ? "bg-yellow-500"
                      : "bg-pink-500"
                }`}
                      >
                        {job_type}
                      </button> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
export default Job;
import React from "react";
import Navbar from "../../Page/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Page/Footer";
import jobs from "../../Page/data/jobsData";
import "../../custom.css";
 import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


function Home() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("All");

  const filteredJobs =
    activeTab === "All"
      ? jobs.slice(0, 6)
      : jobs.slice(0, 6).filter((job) => job.job_type === activeTab);

      const [searchInput, setSearchInput] = useState("");

      const [locationInput, setLocationInput] = useState("");

      const [categoryInput, setCategoryInput] = useState("");

      // const [filteredJobs, setFilteredJobs] = useState(jobs.slice(0, 6));

      const searchedJobs = filteredJobs.filter((job) => {
        const matchesSearch =
          searchInput === ""
            ? true
            : job.job_title.toLowerCase().includes(searchInput.toLowerCase());

        const matchesLocation =
          locationInput === "" ? true : job.job_location === locationInput;

        const matchesCategory =
          categoryInput === ""
            ? true
            : job.job_title.toLowerCase().includes(categoryInput.toLowerCase());

        return matchesSearch && matchesLocation && matchesCategory;
      });

      const handleSearch = () => {
        let updatedJobs = jobs.slice(0, 6);

        // TAB FILTER
        if (activeTab !== "All") {
          updatedJobs = updatedJobs.filter((job) => job.job_type === activeTab);
        }

        // SEARCH FILTER
        if (searchInput !== "") {
          updatedJobs = updatedJobs.filter((job) =>
            job.job_title.toLowerCase().includes(searchInput.toLowerCase()),
          );
        }

        // LOCATION FILTER
        if (locationInput !== "") {
          updatedJobs = updatedJobs.filter(
            (job) => job.job_location === locationInput,
          );
        }

        // CATEGORY FILTER
        if (categoryInput !== "") {
          updatedJobs = updatedJobs.filter((job) =>
            job.job_title.toLowerCase().includes(categoryInput.toLowerCase()),
          );
        }

        setFilteredJobs(updatedJobs);
      };

      const fullText = "Preferred";

      const [displayText, setDisplayText] = useState("");
 useEffect(() => {
   const startTyping = () => {
     let index = 0;

     setDisplayText("");

     const typingInterval = setInterval(() => {
       setDisplayText(fullText.slice(0, index + 1));

       index++;

       if (index === fullText.length) {
         clearInterval(typingInterval);
       }
     }, 150);
   };

   // FIRST TIME
   startTyping();

   // EVERY 30 SEC
   const repeatInterval = setInterval(() => {
     startTyping();
   }, 10000);

   return () => clearInterval(repeatInterval);
 }, []);


 const { ref, inView } = useInView({
   triggerOnce: false,
   threshold: 0.3,
 });

  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="md:max-w-4xl max-w-6xl">
              {/* TITLE */}

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Get Your <br className="md:hidden" />
                <span
                  className="bg-gradient-to-r from-[#38A745] to-[#4CCE5B]
  bg-clip-text text-transparent transition-all duration-500"
                >
                  {displayText}
                </span>{" "}
                Job
              </h1>

              {/* SUBTITLE */}
              <p className="text-white text-lg md:text-2xl mt-4 font-semibold">
                Jobs, Employment & Future Career Opportunities
              </p>
              {/* TRENDING */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <p className="text-white  text-lg md:text-2xl font-semibold">
                  Trending Jobs Keywords:
                </p>

                <span className="px-1 py-1 md:px-2 md:py-2 rounded-md bg-green-500/20 text-green-400  text-sm md:text-md">
                  Web Designer
                </span>

                <span className="px-1 py-1 md:px-2 md:py-2 rounded-md bg-green-500/20 text-green-400  text-sm md:text-md">
                  Web Developer
                </span>

                <span className="px-1 py-1 md:px-2 md:py-2 rounded-md bg-green-500/20 text-green-400  text-sm md:text-md">
                  IOS Developer
                </span>

                <span className="px-1 py-1 md:px-2 md:py-2 rounded-md bg-green-500/20 text-green-400  text-sm md:text-md">
                  Android Developer
                </span>
              </div>

              {/* SEARCH BOX */}
              <div className="bg-white/20 backdrop-blur-md p-2 md:p-5 mt-6 md:mt-14">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                  {/* JOB TITLE */}
                  <div className="bg-white px-6 py-4 border-r border-gray-200 flex items-center justify-between">
                    {/* <input
                      type="text"
                      placeholder="Job Title"
                      className="outline-none text-lg w-full"
                    /> */}

                    <input
                      type="text"
                      placeholder="Job Title"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="outline-none text-lg w-full"
                    />

                    <i className="fa-solid fa-magnifying-glass text-green-500 text-3xl"></i>
                  </div>

                  {/* LOCATION */}
                  {/* <div className="bg-white px-8 py-6 border-r border-gray-200 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="City or State"
                      className="outline-none text-lg w-full"
                    />

                    <i className="fa-solid fa-location-dot text-green-500 text-3xl"></i>
                  </div> */}

                  {/* LOCATION */}
                  <div className="bg-white px-6 py-4 border-r border-gray-200 flex items-center justify-between">
                    <select
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      className="outline-none text-lg w-full bg-transparent text-gray-500"
                    >
                      <option value="">Location</option>

                      <option>Bangalore</option>

                      <option>Hyderabad</option>

                      <option>Kolkata</option>

                      <option>Pune</option>

                      <option>Delhi</option>

                      <option>Noida</option>

                      <option>Mumbai</option>
                    </select>

                    {/* <i className="hidden md:block fa-solid fa-location-dot text-green-500 text-3xl "></i> */}
                  </div>

                  {/* CATEGORY */}
                  <div className="bg-white px-6 py-4 flex items-center justify-between">
                    {/* <select className="outline-none text-lg w-full bg-transparent text-gray-500">
                      <option>Job Category</option>
                      <option>Frontend</option>
                      <option>Backend</option>
                      <option>Full Stack</option>
                      <option>UI/UX</option>
                    </select> */}
                    <select
                      value={categoryInput}
                      onChange={(e) => setCategoryInput(e.target.value)}
                      className="outline-none text-lg w-full bg-transparent text-gray-500"
                    >
                      <option value="">Job Category</option>

                      <option>Frontend</option>

                      <option>Backend</option>

                      <option>React</option>

                      <option>UI</option>
                    </select>
                  </div>

                  {/* BUTTON */}
                  {/* <button
                    className="relative overflow-hidden
            bg-green-500 text-white text-2xl font-semibold
            px-12 py-6 group"
                  >
                    <span
                      className="absolute left-0 top-0 h-full w-0
              bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
              transition-all duration-500 ease-in-out
              group-hover:w-full"
                    ></span>

                    <span className="relative z-10">Search</span>
                  </button> */}
                  {/* BUTTON */}
                  <button
                    // onClick={() => {
                    //   console.log("Search Working");
                    // }}
                    onClick={() => {
                      const section = document.getElementById("recent-jobs");

                      window.scrollTo({
                        top: section.offsetTop - 120,
                        behavior: "smooth",
                      });
                    }}
                    className="relative overflow-hidden
  bg-green-500 text-white text-lg md:text-2xl font-semibold
  px-12 py-3 md:py-4 group cursor-pointer"
                  >
                    {/* HOVER BG */}
                    <span
                      className="absolute left-0 top-0 h-full w-0
    bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
    transition-all duration-500 ease-in-out
    group-hover:w-full"
                    ></span>

                    {/* TEXT */}
                    <span className="relative z-10">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CATEGORY SECTION */}
        <section className="bg-gray-100 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Choose Your Desire Category
              </h2>
            </div>

            {/* CATEGORY GRID */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-8 gap-4">
              {[
                {
                  icon: "fa-solid fa-gear",
                  title: "Technical Support",
                  color: "bg-orange-100 text-orange-500",
                },

                {
                  icon: "fa-solid fa-layer-group",
                  title: "Business Development",
                  color: "bg-purple-100 text-purple-500",
                },

                {
                  icon: "fa-solid fa-house",
                  title: "Real Estate Business",
                  color: "bg-green-100 text-green-500",
                },

                {
                  icon: "fa-solid fa-magnifying-glass-chart",
                  title: "Share Market Analysis",
                  color: "bg-yellow-100 text-yellow-500",
                },

                {
                  icon: "fa-solid fa-hand-holding-dollar",
                  title: "Finance & Banking Service",
                  color: "bg-gray-200 text-gray-500",
                },

                {
                  icon: "fa-solid fa-network-wired",
                  title: "IT & Networking Services",
                  color: "bg-sky-100 text-sky-500",
                },

                {
                  icon: "fa-solid fa-utensils",
                  title: "Restaurant Services",
                  color: "bg-pink-100 text-pink-500",
                },

                {
                  icon: "fa-solid fa-truck-fast",
                  title: "Home Delivery Services",
                  color: "bg-green-100 text-green-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-sm
          flex flex-col items-center justify-center
          hover:shadow-2xl hover:-translate-y-2
          transition-all duration-300 cursor-pointer group"
                >
                  {/* ICON BOX */}
                  <div
                    className={`w-20 h-20 rounded-xl flex items-center justify-center mb-8
            ${item.color}`}
                  >
                    <i className={`${item.icon} text-4xl`}></i>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-lg font-semibold text-center text-gray-800
            leading-relaxed group-hover:text-green-500 transition duration-300"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECENT JOBS */}
        <section className="  py-8 md:py-12 " id="recent-jobs">
          <div className="max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Recent Jobs
              </h2>
            </div>

            {/* FILTER BUTTONS */}
            <div
              className="overflow-x-auto
  scrollbar-hide"
            >
              <div
                className="flex w-max md:w-auto
    flex-row justify-start md:justify-center
    gap-4 md:gap-10
    md:mt-10 mt-6
    bg-gray-100 shadow-md
    py-4 md:py-8
    px-4
    rounded-sm
    max-w-4xl mx-auto"
              >
                {["All", "Full Time", "Part Time", "Internship"].map(
                  (item, index) => (
                    //         <button
                    //           key={index}
                    //           onClick={() => setActiveTab(item)}
                    //           className={`px-6 py-3 border-2 text-lg font-medium transition duration-300

                    // ${
                    //   activeTab === item
                    //     ? "bg-green-500 text-white border-green-500"
                    //     : "bg-white text-gray-700 border-green-500 hover:bg-green-500 hover:text-white"
                    // }`}
                    //         >
                    //           {item}
                    //         </button>
                    <button
                      key={index}
                      onClick={() => setActiveTab(item)}
                      className={`relative overflow-hidden px-3 py-2 md:px-6 md:py-3 border-2 md:text-lg text-md font-medium group

  ${
    activeTab === item
      ? "text-white border-green-500"
      : "text-gray-700 border-green-500"
  }`}
                    >
                      {/* HOVER BG */}
                      <span
                        className={`absolute left-0 top-0 h-full transition-all duration-500 ease-in-out

    ${
      activeTab === item
        ? "w-full bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]"
        : "w-0 group-hover:w-full bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]"
    }`}
                      ></span>

                      {/* TEXT */}
                      <span
                        className={`relative z-10 transition duration-300

    ${activeTab === item ? "text-white" : "group-hover:text-white"}`}
                      >
                        {item}
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>
            {/* JOB GRID */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8 md:mt-16">
              {/* {filteredJobs.map((item, index) =>  */}
              {/* {searchedJobs.map((item, index) =>  */}
              {
                /* {(searchInput !== "" ||
              locationInput !== "" ||
              categoryInput !== ""
                ? searchedJobs
                : filteredJobs
              ).map((item, index) => { */
                (searchInput !== "" ||
                locationInput !== "" ||
                categoryInput !== ""
                  ? searchedJobs
                  : filteredJobs
                ).length > 0 ? (
                  (searchInput !== "" ||
                  locationInput !== "" ||
                  categoryInput !== ""
                    ? searchedJobs
                    : filteredJobs
                  ).map((item, index) => {
                    const {
                      id,
                      job_title,
                      job_location,
                      created_at,
                      job_type,
                      job_exp,
                    } = item;

                    return (
                      <div
                        key={id}
                        className="bg-white border border-gray-300 p-4 md:p-6
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
                            <h3 className=" text-xl md:text-2xl font-semibold text-gray-800">
                              {job_title}
                            </h3>

                            <p className="text-green-500 text-md md:text-lg mt-1 font-medium">
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
                            onClick={() => navigate(`/job/${id}`)}
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
                  })
                ) : (
                  <div className="col-span-2 text-center py-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
                      Sorry, Job Not Found 😔
                    </h2>

                    <p className="text-gray-500 mt-4 text-lg">
                      Try another keyword or location
                    </p>

                    <button
                      onClick={() => {
                        setSearchInput("");
                        setLocationInput("");
                        setCategoryInput("");
                        setActiveTab("All");
                      }}
                      className="mt-8 relative overflow-hidden px-8 py-4
                  border-2 border-green-500 text-green-500
                  text-lg font-medium group"
                    >
                      <span
                        className="absolute left-0 top-0 h-full w-0
                    bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
                    transition-all duration-500 ease-in-out
                    group-hover:w-full"
                      ></span>

                      <span className="relative z-10 group-hover:text-white transition duration-300">
                        Show More Jobs
                      </span>
                    </button>
                  </div>
                )
              }
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  navigate("/job");

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="relative overflow-hidden w-full md:w-auto inline-block
    bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)] text-white
    text-xl font-semibold
    px-12 py-4
    group cursor-pointer"
              >
                {/* HOVER BG */}
                <span
                  className="absolute left-0 top-0 h-full w-0
      bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
      transition-all duration-500 ease-in-out
      group-hover:w-full"
                ></span>

                {/* TEXT */}
                <span className="relative z-10">View More</span>
              </button>
            </div>
          </div>
        </section>

        {/* Counter */}

        <section ref={ref} className="bg-[#4CCE5B] py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6 md:gap-12">
              {/* ITEM */}
              <div className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {inView && <CountUp start={0} end={14} duration={3} />}
                  k+
                </h3>

                <p className="text-white text-md md:text-xl mt-1 md:mt-4">
                  Active Jobs
                </p>
              </div>

              {/* ITEM */}
              <div className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {inView && <CountUp start={0} end={18} duration={3} />}
                  k+
                </h3>

                <p className="text-white text-md md:text-xl mt-1 md:mt-4">
                  Total Candidates
                </p>
              </div>

              {/* ITEM */}
              <div className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {inView && <CountUp start={0} end={22} duration={3} />}
                  k+
                </h3>

                <p className="text-white text-md md:text-xl mt-1 md:mt-4">
                  Registered Users
                </p>
              </div>

              {/* ITEM */}
              <div className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {inView && <CountUp start={0} end={55} duration={3} />}
                  k+
                </h3>

                <p className="text-white text-md md:text-xl mt-1 md:mt-4">
                  Successful Hiring
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Popular Companies
              </h2>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },

                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },

                1280: {
                  slidesPerView: 4,
                },
              }}
              className="pb-16"
            >
              {[
                {
                  image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
                  name: "Infiniza.com",
                  location: "North Street, California",
                },

                {
                  image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
                  name: "Glovibo.com",
                  location: "Barming Road, UK",
                },

                {
                  image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
                  name: "Bizotic.com",
                  location: "Washington, New York",
                },

                {
                  image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
                  name: "Winbrans.com",
                  location: "Quadra Street, Canada",
                },

                {
                  image:
                    "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
                  name: "Techify.com",
                  location: "London, UK",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="bg-white p-4 md:p-6 text-center
            hover:shadow-2xl transition duration-300"
                  >
                    {/* IMAGE */}
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt=""
                        className="w-10 h-10 md:w-16 md:h-16 object-contain"
                      />
                    </div>

                    {/* NAME */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-3 md:mt-8">
                      {item.name}
                    </h3>

                    {/* LOCATION */}
                    <p
                      className="flex items-center justify-center gap-2
              text-gray-500 mt-1 md:mt-4 text-sm md:text-lg"
                    >
                      <i className="fa-solid fa-location-dot"></i>

                      {item.location}
                    </p>

                    {/* BUTTON */}
                    <button
                      className="mt-6 relative overflow-hidden
              px-5 py-2 border-2 border-green-500
              text-green-500 text-md font-medium group"
                    >
                      <span
                        className="absolute left-0 top-0 h-full w-0
                bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
                transition-all duration-500 ease-in-out
                group-hover:w-full"
                      ></span>

                      <span
                        className="relative z-10
                group-hover:text-white transition duration-300"
                      >
                        Hiring
                      </span>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="bg-gray-100 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Latest Blogs
              </h2>
            </div>

            {/* BLOG GRID */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

                  date: "22 May, 2024",

                  title: "The next generation IT will change the world",
                },

                {
                  image:
                    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",

                  date: "25 June, 2024",

                  title: "It is the most important sector in the world",
                },

                {
                  image:
                    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",

                  date: "10 July, 2024",

                  title: "Nowadays IT is being most popular",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden
          hover:shadow-2xl transition duration-500 group"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[160px] md:h-[280px] object-cover
              group-hover:scale-110 transition duration-700"
                    />

                    {/* DATE */}
                    <div
                      className="absolute bottom-0 left-0
              bg-white px-6 py-2
              translate-y-full opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all duration-700"
                    >
                      <p className="text-[#4CCE5B] text-md font-semibold">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-6">
                    {/* TITLE */}
                    <h3
                      className="text-xl md:text-2xl font-bold text-gray-800
              leading-snug group-hover:text-[#4CCE5B]
              transition duration-300"
                    >
                      {item.title}
                    </h3>

                    {/* BOTTOM */}
                    <div className="flex items-center justify-between mt-4 md:mt-8">
                      {/* AUTHOR */}
                      <div className="flex items-center gap-4">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt=""
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                        />

                        <p className="text-gray-500 text-sm md:text-md">Aikin Ward</p>
                      </div>

                      {/* READ MORE */}
                      <button
                        className="text-[#4CCE5B] text-md font-semibold
                flex items-center gap-2 group/btn cursor-pointer"
                      >
                        Read More
                        <i
                          className="fa-solid fa-angle-right
                  group-hover/btn:translate-x-2
                  transition duration-300"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;

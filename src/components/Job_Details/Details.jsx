import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Page/Navbar';
// import LoginModal from '../LoginModal';

function Details() {

    const [jobDetails, setJobDetails] = useState([
      // {
      //   id: 1,
      //   job_title: "Frontend Developer",
      //   job_description: "Develop and maintain user interfaces using React.",
      //   job_location: "Bangalore",
      //   job_exp: "0-2 Years",
      //   created_at: "2024-01-01",
      //   skills: ["React", "Tailwind", "JavaScript"],
      //   salary: "₹4–6 LPA",
      // },
      {
        id: 1,

        job_title: "Frontend Developer",

        job_description:
          "Develop and maintain user interfaces using React and modern frontend technologies. Build responsive websites and optimize application performance for better user experience.",

        job_location: "Bangalore",

        job_exp: "0-2 Years",

        created_at: "2024-01-01",

        skills: ["React", "Tailwind", "JavaScript", "Redux", "REST API"],

        salary: "₹4–6 LPA",

        qualification: "Bachelor Degree",

        company_address: "4th Floor, 408 No Chamber",

        company_email: "frontend@gable.com",

        company_phone: "+07 554 332 322",

        gender: "Male & Female",

        job_type: "Full Time",
      },
      //
      {
        id: 2,

        job_title: "Backend Developer",

        job_description:
          "Build REST APIs and manage scalable server-side applications using Node.js and Express framework.",

        job_location: "Hyderabad",

        job_exp: "1-3 Years",

        created_at: "2024-01-03",

        skills: ["Node.js", "Express", "MongoDB"],

        salary: "₹5–7 LPA",

        qualification: "Bachelor Degree",

        company_address: "Cyber Tower, Hyderabad",

        company_email: "backend@gable.com",

        company_phone: "+91 9876543210",

        gender: "Male & Female",

        job_type: "Full Time",
      },

      {
        id: 3,

        job_title: "Full Stack Developer",

        job_description:
          "Work on frontend and backend applications with React, Node.js, and SQL databases.",

        job_location: "Pune",

        job_exp: "2-4 Years",

        created_at: "2024-01-05",

        skills: ["React", "Node.js", "SQL"],

        salary: "₹6–9 LPA",

        qualification: "B.Tech / MCA",

        company_address: "IT Park, Pune",

        company_email: "fullstack@gable.com",

        company_phone: "+91 9123456780",

        gender: "Male & Female",

        job_type: "Remote",
      },

      {
        id: 4,

        job_title: "React Developer",

        job_description:
          "Create reusable React components and manage state efficiently using Redux and Hooks.",

        job_location: "Kolkata",

        job_exp: "1-2 Years",

        created_at: "2024-01-07",

        skills: ["React", "Hooks", "Redux"],

        salary: "₹4–6.5 LPA",

        qualification: "Graduate",

        company_address: "Sector V, Kolkata",

        company_email: "react@gable.com",

        company_phone: "+91 9988776655",

        gender: "Male & Female",

        job_type: "Part Time",
      },

      {
        id: 5,

        job_title: "UI Developer",

        job_description:
          "Convert UI/UX designs into responsive web pages using HTML, CSS, and Tailwind CSS.",

        job_location: "Delhi",

        job_exp: "0-1 Years",

        created_at: "2024-01-09",

        skills: ["HTML", "CSS", "Tailwind"],

        salary: "₹3–4.5 LPA",

        qualification: "Any Graduate",

        company_address: "Connaught Place, Delhi",

        company_email: "ui@gable.com",

        company_phone: "+91 9871234560",

        gender: "Male & Female",

        job_type: "Internship",
      },

      {
        id: 6,

        job_title: "Java Developer",

        job_description:
          "Develop enterprise-level Java applications using Spring Boot and MySQL.",

        job_location: "Noida",

        job_exp: "2-5 Years",

        created_at: "2024-01-11",

        skills: ["Java", "Spring Boot", "MySQL"],

        salary: "₹6–8 LPA",

        qualification: "B.Tech in Computer Science",

        company_address: "Tech Zone, Noida",

        company_email: "java@gable.com",

        company_phone: "+91 9012345678",

        gender: "Male & Female",

        job_type: "Full Time",
      },

      {
        id: 7,

        job_title: "Python Developer",

        job_description:
          "Build backend services and APIs using Python and Django framework.",

        job_location: "Chennai",

        job_exp: "1-3 Years",

        created_at: "2024-01-13",

        skills: ["Python", "Django", "REST API"],

        salary: "₹5–7 LPA",

        qualification: "MCA / BCA",

        company_address: "OMR Road, Chennai",

        company_email: "python@gable.com",

        company_phone: "+91 9765432101",

        gender: "Male & Female",

        job_type: "Remote",
      },

      {
        id: 8,

        job_title: "Laravel Developer",

        job_description:
          "Develop scalable web applications using Laravel and PHP frameworks.",

        job_location: "Mumbai",

        job_exp: "1-4 Years",

        created_at: "2024-01-15",

        skills: ["Laravel", "PHP", "MySQL"],

        salary: "₹4.5–7 LPA",

        qualification: "BCA / MCA",

        company_address: "Andheri East, Mumbai",

        company_email: "laravel@gable.com",

        company_phone: "+91 9988123456",

        gender: "Male & Female",

        job_type: "Full Time",
      },

      {
        id: 9,

        job_title: "PHP Developer",

        job_description:
          "Maintain and optimize PHP applications and backend systems.",

        job_location: "Jaipur",

        job_exp: "0-2 Years",

        created_at: "2024-01-17",

        skills: ["PHP", "MySQL", "jQuery"],

        salary: "₹3–5 LPA",

        qualification: "Graduate",

        company_address: "Pink City Tower, Jaipur",

        company_email: "php@gable.com",

        company_phone: "+91 9345678901",

        gender: "Male & Female",

        job_type: "Part Time",
      },

      {
        id: 10,

        job_title: "Software Tester",

        job_description:
          "Test applications, track bugs, and ensure software quality.",

        job_location: "Indore",

        job_exp: "0-1 Years",

        created_at: "2024-01-19",

        skills: ["Manual Testing", "Test Cases", "Bug Tracking"],

        salary: "₹2.5–4 LPA",

        qualification: "Any Graduate",

        company_address: "Vijay Nagar, Indore",

        company_email: "tester@gable.com",

        company_phone: "+91 9456123789",

        gender: "Male & Female",

        job_type: "Internship",
      },

      {
        id: 11,

        job_title: "DevOps Engineer",

        job_description:
          "Manage cloud infrastructure and CI/CD pipelines efficiently.",

        job_location: "Bangalore",

        job_exp: "3-6 Years",

        created_at: "2024-01-21",

        skills: ["AWS", "Docker", "CI/CD"],

        salary: "₹8–12 LPA",

        qualification: "B.Tech / MCA",

        company_address: "Electronic City, Bangalore",

        company_email: "devops@gable.com",

        company_phone: "+91 9876501234",

        gender: "Male & Female",

        job_type: "Remote",
      },

      {
        id: 12,

        job_title: "Mobile App Developer",

        job_description:
          "Develop Android and iOS mobile applications using modern frameworks.",

        job_location: "Hyderabad",

        job_exp: "1-3 Years",

        created_at: "2024-01-23",

        skills: ["React Native", "Flutter", "API"],

        salary: "₹5–8 LPA",

        qualification: "B.Tech",

        company_address: "HiTech City, Hyderabad",

        company_email: "mobile@gable.com",

        company_phone: "+91 9765012345",

        gender: "Male & Female",

        job_type: "Full Time",
      },

      {
        id: 13,

        job_title: "Data Analyst",

        job_description:
          "Analyze business data and generate visual reports for decision making.",

        job_location: "Pune",

        job_exp: "2-4 Years",

        created_at: "2024-01-25",

        skills: ["Excel", "SQL", "Power BI"],

        salary: "₹6–9 LPA",

        qualification: "B.Sc / MCA",

        company_address: "Magarpatta, Pune",

        company_email: "data@gable.com",

        company_phone: "+91 9345609876",

        gender: "Male & Female",

        job_type: "Remote",
      },

      {
        id: 14,

        job_title: "System Administrator",

        job_description:
          "Maintain servers, network systems, and ensure system security.",

        job_location: "Kochi",

        job_exp: "3-5 Years",

        created_at: "2024-01-27",

        skills: ["Linux", "Networking", "Security"],

        salary: "₹5–7.5 LPA",

        qualification: "B.Tech / Diploma",

        company_address: "Marine Drive, Kochi",

        company_email: "sysadmin@gable.com",

        company_phone: "+91 9234567810",

        gender: "Male & Female",

        job_type: "Full Time",
      },

      {
        id: 15,

        job_title: "Cloud Engineer",

        job_description:
          "Design and manage cloud infrastructure using AWS and Azure services.",

        job_location: "Gurgaon",

        job_exp: "2-5 Years",

        created_at: "2024-01-29",

        skills: ["AWS", "Azure", "Terraform"],

        salary: "₹7–10 LPA",

        qualification: "B.Tech in IT",

        company_address: "Cyber Hub, Gurgaon",

        company_email: "cloud@gable.com",

        company_phone: "+91 9012783456",

        gender: "Male & Female",

        job_type: "Remote",
      },
    ]);

    // const [jobMatch, setjobMatch] = useState();
    const {id} = useParams();
    const findJob = jobDetails.find((item) =>{return item.id == id});
    console.log(findJob);


    const navigate=useNavigate();

    // const formforapplication =()=>{
  
    //    navigate("/applicationform", {
    //      state: {
    //        jobId: findJob.id,
    //        position: findJob.job_title,
    //        location: findJob.job_location,
    //      },
    //    });
    // }
// const [openAuth, setOpenAuth] = useState(false);

const formforapplication = () => {
  const user = localStorage.getItem("user");

  // USER LOGGED IN
  if (user) {
    // navigate("/applicationform", {
    //   state: {
    //     jobId: findJob.id,
    //     position: findJob.job_title,
    //     location: findJob.job_location,
    //   },
  //   navigate("/loginapi", {
  // state: {
  //   fromApply: true,

  //   jobData: {
  //     jobId: findJob.id,
  //     position: findJob.job_title,
  //     location: findJob.job_location,
  //   },
  // },

  //   });
  // }


  // else {
  //   navigate("/loginapi", {
  //     state: {
  //       from: "/applicationform",
  //       jobData: {
  //         jobId: findJob.id,
  //         position: findJob.job_title,
  //         location: findJob.job_location,
  //       },
  //     },
  //   });
  // }
      navigate("/applicationform", {
      state: {
        jobId: findJob.id,
        position: findJob.job_title,
        location: findJob.job_location,
      },
    });

  }

  // LOGIN NA THAKLE LOGIN PAGE
  else {

    navigate("/loginapi", {
      state: {

        fromApply: true,

        jobData: {
          jobId: findJob.id,
          position: findJob.job_title,
          location: findJob.job_location,
        },

      },
    });
  }
};
  return (
    <>
      {/* <LoginModal
        open={openAuth}
        setOpen={setOpenAuth}
        onSuccess={() => {
          navigate("/applicationform", {
            state: {
              jobId: findJob.id,
              position: findJob.job_title,
              location: findJob.job_location,
            },
          });
        }}
      /> */}
      <Navbar />
      {/* <main className="mt-20">
        <div className="container mx-auto px-4 py-10">
          <div
            className="group max-w-2xl mx-auto bg-white rounded-2xl
    shadow-lg border border-gray-200 p-8
    hover:shadow-xl transition-all duration-300"
          >
         
            <p className="text-sm text-gray-400 mb-2">Job ID: {findJob.id}</p>

     
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {findJob.job_title}
            </h2>

         
            <p className="text-gray-600 mb-6">{findJob.job_description}</p>

         
            <div className="space-y-3 text-sm text-gray-700 mb-6">
              <p>
                <span className="font-medium">
                  <i
                    className="fa-solid fa-location-dot text-yellow-800
            group-hover:text-yellow-600 transition-transform duration-300
            group-hover:scale-110 mr-2"
                  ></i>
                  Location:
                </span>{" "}
                {findJob.job_location}
              </p>

              <p>
                <span className="font-medium">
                  <i
                    className="fa-solid fa-briefcase text-red-950
            group-hover:text-red-600 transition-transform duration-300
            group-hover:scale-110 mr-2"
                  ></i>
                  Experience:
                </span>{" "}
                {findJob.job_exp}
              </p>

              <p>
                <span className="font-medium">
                  <i
                    className="fa-solid fa-calendar text-orange-700
            group-hover:text-orange-900 transition-transform duration-300
            group-hover:scale-110 mr-2"
                  ></i>
                  Posted:
                </span>{" "}
                {findJob.created_at}
              </p>

              <p>
                <span className="font-medium">
                  <i
                    className="fa-solid fa-indian-rupee-sign text-green-800
            group-hover:text-green-600 transition-transform duration-300
            group-hover:scale-110 mr-2"
                  ></i>
                  Salary:
                </span>{" "}
                {findJob.salary}
              </p>
            </div>

           
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {findJob.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-blue-100 text-blue-700
            rounded-full text-sm transition-transform duration-300
            hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

     
            <button
              className="w-full py-3 rounded-xl bg-blue-600 text-white
      font-semibold hover:bg-blue-700
      transition-transform duration-300
      group-hover:scale-105 cursor-pointer"
              onClick={formforapplication}
            >
              Apply Now
            </button>
          </div>
        </div>
      </main> */}
      <main className="mt-20 bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 bg-white p-10 border border-gray-200">
              {/* TITLE */}
              <div className="mb-10">
                <h1 className="text-5xl font-bold text-gray-800">
                  {findJob.job_title}
                </h1>

                <div className="flex flex-wrap items-center gap-8 mt-6">
                  <p className="flex items-center gap-3 text-gray-500 text-lg">
                    <i className="fa-solid fa-location-dot text-[#4CCE5B]"></i>

                    {findJob.job_location}
                  </p>

                  <p className="flex items-center gap-3 text-gray-500 text-lg">
                    <i className="fa-solid fa-briefcase text-[#4CCE5B]"></i>

                    {findJob.job_exp}
                  </p>

                  <p className="flex items-center gap-3 text-gray-500 text-lg">
                    <i className="fa-solid fa-calendar text-[#4CCE5B]"></i>

                    {findJob.created_at}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Job Description
                </h2>

                <p className="text-gray-500 leading-9 text-lg">
                  {findJob.job_description}
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Required Knowledge, Skills, and Abilities
                </h2>

                <div className="space-y-5">
                  {findJob.skills.map((skill, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-4
                text-gray-500 text-lg"
                    >
                      <i className="fa-solid fa-angle-right text-[#4CCE5B]"></i>

                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="mt-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Education Qualification
                </h2>

                <div className="space-y-5">
                  <p className="flex items-center gap-4 text-gray-500 text-lg">
                    <i className="fa-solid fa-angle-right text-[#4CCE5B]"></i>

                    {findJob.qualification}
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={formforapplication}
                className="w-full mt-16
          relative overflow-hidden
          bg-[#4CCE5B]
          text-white text-xl font-semibold
          py-5 group"
              >
                <span
                  className="absolute left-0 top-0 h-full w-0
            bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
            transition-all duration-500 ease-in-out
            group-hover:w-full"
                ></span>

                <span className="relative z-10">Apply Now</span>
              </button>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-8">
              {/* OVERVIEW */}
              <div className="bg-white border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Overview
                </h2>

                <div className="space-y-8">
                  {/* SALARY */}
                  <div className="flex items-start gap-4">
                    <i className="fa-solid fa-dollar-sign text-[#4CCE5B] text-xl mt-1"></i>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Offered Salary
                      </h4>

                      <p className="text-gray-500">{findJob.salary}</p>
                    </div>
                  </div>

                  {/* GENDER */}
                  <div className="flex items-start gap-4">
                    <i className="fa-solid fa-user text-[#4CCE5B] text-xl mt-1"></i>

                    <div>
                      <h4 className="font-semibold text-gray-800">Gender</h4>

                      <p className="text-gray-500">{findJob.gender}</p>
                    </div>
                  </div>

                  {/* EXPERIENCE */}
                  <div className="flex items-start gap-4">
                    <i className="fa-solid fa-briefcase text-[#4CCE5B] text-xl mt-1"></i>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Experience
                      </h4>

                      <p className="text-gray-500">{findJob.job_exp}</p>
                    </div>
                  </div>

                  {/* QUALIFICATION */}
                  <div className="flex items-start gap-4">
                    <i className="fa-solid fa-graduation-cap text-[#4CCE5B] text-xl mt-1"></i>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Qualification
                      </h4>

                      <p className="text-gray-500">{findJob.qualification}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPANY ADDRESS */}
              <div className="bg-white border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Company Address
                </h2>

                <div className="w-full h-[2px] bg-gray-200 mb-8 relative">
                  <span className="absolute left-0 top-0 w-24 h-full bg-[#4CCE5B]"></span>
                </div>

                <div className="space-y-6">
                  <p className="flex items-center gap-4 text-gray-500 text-lg">
                    <i className="fa-solid fa-location-dot text-[#4CCE5B]"></i>

                    {findJob.company_address}
                  </p>

                  <p className="flex items-center gap-4 text-gray-500 text-lg">
                    <i className="fa-solid fa-phone text-[#4CCE5B]"></i>

                    {findJob.company_phone}
                  </p>

                  <p className="flex items-center gap-4 text-gray-500 text-lg">
                    <i className="fa-solid fa-envelope text-[#4CCE5B]"></i>

                    {findJob.company_email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Details
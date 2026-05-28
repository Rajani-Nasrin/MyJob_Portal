// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faFacebookF,
//   faInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faAngleRight,
//   faLocationDot,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// import logo from "../assets/images/logo-footer.png";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Footer() {

  const navigate = useNavigate();

  return (
    <>
      <footer className="relative bg-[#38A745] ">
        {/* FOOTER CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16">
            {/* ABOUT */}
            <div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-lightbulb text-white text-4xl"></i>

                <h2 className="text-3xl font-bold text-white">Myjob</h2>
              </div>

              <p className="text-white/90 leading-6 mt-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-6 mt-8">
                <Link to="#" className="text-[#38A745] font-semibold">
                  <i className="fa-brands fa-facebook-f text-white text-2xl cursor-pointer hover:scale-125 transition duration-300"></i>
                </Link>

                <Link to="#" className="text-[#38A745] font-semibold">
                  <i className="fa-brands fa-instagram text-white text-2xl cursor-pointer hover:scale-125 transition duration-300"></i>
                </Link>

                <Link to="#" className="text-[#38A745] font-semibold">
                  <i className="fa-brands fa-twitter text-white text-2xl cursor-pointer hover:scale-125 transition duration-300"></i>
                </Link>

                <Link to="#" className="text-[#38A745] font-semibold">
                  <i className="fa-brands fa-youtube text-white text-2xl cursor-pointer hover:scale-125 transition duration-300"></i>
                </Link>
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <h2 className="text-3xl font-bold text-white">Category</h2>

              <div className="w-full h-[2px] bg-white/20 mt-5 relative">
                <span className="absolute left-0 top-0 w-16 h-full bg-white"></span>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Development",
                  "Business",
                  "Tech & IT",
                  "Finance",
                  "Networking",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="text-white text-lg
              hover:translate-x-2 transition duration-300
              cursor-pointer"
                  >
                    <i className="fa-solid fa-angle-right mr-3"></i>

                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            {/* <div>
              <h2 className="text-3xl font-bold text-white">Quick Links</h2>

              <div className="w-full h-[2px] bg-white/20 mt-5 relative">
                <span className="absolute left-0 top-0 w-16 h-full bg-white"></span>
              </div>

              <div className="mt-8 space-y-3">
                {["Home", "About Us", "Blogs", "Companies", "Testimonials"].map(
                  (item, index) => (
                    <p
                      key={index}
                      className="text-white text-lg
              hover:translate-x-2 transition duration-300
              cursor-pointer"
                    >
                      <i className="fa-solid fa-angle-right mr-3"></i>

                      {item}
                    </p>
                  ),
                )}
              </div>
            </div> */}

            {/* QUICK LINKS */}
            <div>
              <h2 className="text-3xl font-bold text-white">Quick Links</h2>

              {/* LINE */}
              <div
                className="w-full h-[2px]
    bg-white/20 mt-5 relative"
              >
                <span
                  className="absolute left-0 top-0
      w-16 h-full bg-white"
                ></span>
              </div>

              {/* LINKS */}
              <div className="mt-8 space-y-3">
                {[
                  {
                    name: "Home",
                    path: "/",
                  },

                  {
                    name: "Jobs",
                    path: "/job",
                  },

                  {
                    name: "Application List",
                    path: "/application-list",
                  },

                  {
                    name: "Contact",
                    path: "/contact",
                  },

                  {
                    name: "Login",
                    path: "/loginapi",
                  },
                ].map((item, index) => (
                  <p
                    key={index}
                    // onClick={() => navigate(item.path)}
                    onClick={() => {
                      navigate(item.path);

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="group
        text-white text-lg
        flex items-center
        gap-3
        hover:translate-x-2
        transition duration-300
        cursor-pointer"
                  >
                    {/* ICON */}

                    <i className="fa-solid fa-angle-right mr-3"></i>

                    {/* TEXT */}
                    <span>{item.name}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-3xl font-bold text-white">Find Us</h2>

              <div className="w-full h-[2px] bg-white/20 mt-5 relative">
                <span className="absolute left-0 top-0 w-16 h-full bg-white"></span>
              </div>

              <div className="mt-8 space-y-5">
                <p className="text-white text-lg flex items-center gap-4">
                  <i className="fa-solid fa-location-dot"></i>
                  28/A Street, New York City
                </p>

                <p className="text-white text-lg flex items-center gap-4">
                  <i className="fa-solid fa-phone"></i>
                  +88 0123 456 789
                </p>

                <p className="text-white text-lg flex items-center gap-4">
                  <i className="fa-solid fa-envelope"></i>
                  example@gmail.com
                </p>

                {/* INPUT + BUTTON */}
                <div
                  className="flex items-center
  mt-6
  overflow-hidden
  rounded-md"
                >
                  {/* INPUT */}
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1
    h-12
    px-4
    bg-white
    text-gray-700
    text-sm
    outline-none"
                  />

                  {/* BUTTON */}
                  <button
                    className="w-14 h-12
    bg-[#2f923d]
    flex items-center justify-center
    hover:bg-green-600
    transition duration-300"
                  >
                    <i
                      className="fa-solid fa-paper-plane
      text-white text-sm"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="border-t border-white/20
      mt-20 pt-5
      flex md:flex-row flex-col
      items-center justify-between gap-5"
          >
            <p className="text-white text-lg">
              © MyJob is Proudly Owned by HiBootstrap
            </p>

            <div className="flex items-center gap-5">
              <p className="text-white text-lg cursor-pointer">
                Terms & Conditions
              </p>

              <span className="text-white">-</span>

              <p className="text-white text-lg cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="pt-28 overflow-hidden">
        {/* HERO SECTION */}

        <section
          className="relative
  bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
  py-12 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div
              className="relative
      grid lg:grid-cols-2
      gap-16 items-center"
            >
              {/* LEFT */}
              <div className="relative z-10">
                <span
                  className="inline-block
          bg-white/15
          text-white
          px-6 py-2
          rounded-full
          text-sm font-medium"
                >
                  GET IN TOUCH
                </span>

                <h1
                  className="text-4xl md:text-6xl
          font-black
          text-white mt-4
          leading-tight"
                >
                  Contact Us
                </h1>

                <p
                  className="text-white/90
          text-base md:text-lg
          leading-7 mt-4 max-w-2xl"
                >
                  We'd love to hear from you! Whether you have a question,
                  feedback, or need assistance, our team is here to help.
                </p>

                {/* BREADCRUMB */}
                <div
                  className="mt-8
          flex items-center gap-4
          bg-white w-fit
          px-6 md:px-8
          py-3 md:py-4
          rounded-full"
                >
                  <Link to="/" className="text-[#38A745] font-semibold">
                    Home
                  </Link>

                  <i className="fa-solid fa-angle-right text-[#38A745]"></i>

                  <span className="text-gray-700 font-semibold">Contact</span>
                </div>
              </div>

              {/* RIGHT */}
              <div
                className="absolute lg:relative
        right-[-60px]
        top-0 md:top-auto
        md:right-0
        opacity-20 lg:opacity-100
        flex justify-center"
              >
                <div
                  className="w-[250px] md:w-[500px]
          h-[250px] md:h-[350px]
          bg-white/10
          rounded-[40px]
          backdrop-blur-md
          flex items-center justify-center"
                >
                  <i
                    className="fa-solid fa-envelope-open-text
            text-white
            text-[100px] md:text-[180px]"
                  ></i>
                </div>

                <div
                  className="absolute
          top-10 -left-2 md:-left-10
          w-16 h-16 md:w-24 md:h-24
          rounded-full
          bg-white/20"
                ></div>

                <div
                  className="absolute
          bottom-0 -right-2 md:-right-10
          w-20 h-20 md:w-32 md:h-32
          rounded-full
          bg-white/10"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="grid
      lg:grid-cols-4
      md:grid-cols-2
      gap-6"
            >
              {[
                {
                  icon: "fa-location-dot",

                  title: "Our Location",

                  text1: "123 Business Street",

                  text2: " 28/A Street, New York City",
                },

                {
                  icon: "fa-phone",

                  title: "Phone Number",

                  text1: "+8801234567890",

                  text2: "+8809876543210",
                },

                {
                  icon: "fa-envelope",

                  title: "Email Address",

                  text1: "info@myjob.com",

                  text2: "support@myjob.com",
                },

                {
                  icon: "fa-clock",

                  title: "Working Hours",

                  text1: "Sun - Thu: 9AM - 6PM",

                  text2: "Friday: Closed",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white
          border border-gray-100
          shadow-lg
          rounded-2xl
          md:p-6 p-4
          text-center
          hover:-translate-y-2
          transition duration-500"
                >
                  {/* ICON */}
                  <div
                    className="md:w-20 md:h-20 w-14 h-14
            mx-auto rounded-full
            bg-[#4CCE5B]/10
            flex items-center justify-center"
                  >
                    <i
                      className={`fa-solid ${item.icon}
              text-[#38A745] text-2xl md:text-3xl`}
                    ></i>
                  </div>

                  {/* TITLE */}
                  <h2
                    className="text-2xl font-bold
            text-gray-900 mt-4 md:mt-8"
                  >
                    {item.title}
                  </h2>

                  {/* PHONE */}
                  {item.title === "Phone Number" ? (
                    <>
                      <a
                        href={`tel:${item.text1}`}
                        className="block
                text-gray-600 text-lg mt-6
                hover:text-[#38A745]
                transition duration-300"
                      >
                        {item.text1}
                      </a>

                      <a
                        href={`tel:${item.text2}`}
                        className="block
                text-gray-600 text-lg  mt-4 md:mt-2
                hover:text-[#38A745]
                transition duration-300"
                      >
                        {item.text2}
                      </a>
                    </>
                  ) : item.title === "Email Address" ? (
                    /* EMAIL */
                    <>
                      <a
                        href={`mailto:${item.text1}`}
                        className="block
                text-gray-600 text-lg  mt-4 md:mt-6
                hover:text-[#38A745]
                transition duration-300"
                      >
                        {item.text1}
                      </a>

                      <a
                        href={`mailto:${item.text2}`}
                        className="block
                text-gray-600 text-lg mt-2
                hover:text-[#38A745]
                transition duration-300"
                      >
                        {item.text2}
                      </a>
                    </>
                  ) : (
                    /* NORMAL TEXT */
                    <>
                      <p
                        className="text-gray-600
                text-lg mt-6"
                      >
                        {item.text1}
                      </p>

                      <p
                        className="text-gray-600
                text-lg mt-2"
                      >
                        {item.text2}
                      </p>
                    </>
                  )}

                  {/* LINE */}
                  <div
                    className="w-16 h-1
            bg-[#38A745]
            mx-auto mt-8 rounded-full"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + MAP */}
        <section className="pb-6 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
              {/* FORM */}
              <div
                className="bg-[#f8fff9]
                rounded-[35px]
                p-4 md:p-12 shadow-lg"
              >
                <h2
                  className="text-3xl md:text-4xl  font-bold
                  text-gray-900 text-center md:text-left"
                >
                  Send Us a Message
                </h2>

                <div
                  className="w-20 h-1
                  bg-[#38A745]
                  rounded-full mt-6"
                ></div>

                <p
                  className="text-gray-600
                  text-lg leading-8 mt-4"
                >
                  Have a question or suggestion? Fill out the form below and
                  we'll get back to you as soon as possible.
                </p>

                {/* FORM */}
                <form className=" mt-6 md:mt-10  space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <i
                        className="fa-regular fa-user
                        absolute left-5 top-1/2
                        -translate-y-1/2
                        text-gray-400"
                      ></i>

                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full
                        py-4
                        rounded-2xl
                        border border-gray-200
                        pl-14 pr-5
                        outline-none
                        focus:border-[#38A745]"
                      />
                    </div>

                    <div className="relative">
                      <i
                        className="fa-regular fa-envelope
                        absolute left-5 top-1/2
                        -translate-y-1/2
                        text-gray-400"
                      ></i>

                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full
                        py-4
                        rounded-2xl
                        border border-gray-200
                        pl-14 pr-5
                        outline-none
                        focus:border-[#38A745]"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <i
                      className="fa-regular fa-file-lines
                      absolute left-5 top-7
                      text-gray-400"
                    ></i>

                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full
                       py-4
                      rounded-2xl
                      border border-gray-200
                      pl-14 pr-5
                      outline-none
                      focus:border-[#38A745]"
                    />
                  </div>

                  <div className="relative">
                    <i
                      className="fa-regular fa-pen-to-square
                      absolute left-5 top-7
                      text-gray-400"
                    ></i>

                    <textarea
                      rows="6"
                      placeholder="Message"
                      className="w-full
                      rounded-2xl
                      border border-gray-200
                      pl-14 pr-5 py-5
                      outline-none
                      resize-none
                      focus:border-[#38A745]"
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="relative overflow-hidden
                     bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)] text-white
                    text-lg font-semibold
                    px-8 py-4
                    group cursor-pointer w-full md:w-auto inline-block text-center justify-center items-center"
                  >
                    {/* HOVER BG */}
                    <span
                      className="absolute left-0 top-0 h-full w-0
                      bg-[linear-gradient(90deg,_rgb(56,167,69)_0%,_rgb(76,206,91)_63%)]
                      transition-all duration-500 ease-in-out
                      group-hover:w-full"
                    ></span>

                    {/* TEXT */}
                    <span className="relative z-10 flex items-center gap-3 text-center justify-center ">
                      Send Message
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                  </button>
                </form>
              </div>

              {/* MAP */}
              <div
                className="rounded-[35px]
                overflow-hidden
                shadow-lg
                h-[250px] md:h-full "
              >
                {/* <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.059584032851!2d90.39945267594286!3d23.75091638879262!2m3!1f0!2f0!3f0!"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.7453322841975!2d-78.84453072470998!3d42.814867406248226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d31028edd6b8e1%3A0x3e51b09c2a7b0e2c!2s28%20A%20St%2C%20Lackawanna%2C%20NY%2014218%2C%20USA!5e0!3m2!1sen!2sin!4v1779809272329!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-6 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <div className="text-center">
              <h2
                className="text-3xl md:text-4xl font-black
        text-gray-900 mt-6"
              >
                Frequently Asked Questions
              </h2>

              <div
                className="w-20 h-1
        bg-[#38A745]
        mx-auto mt-8 rounded-full"
              ></div>
            </div>

            {/* FAQ ITEMS */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                {
                  question: "How can I post a job on Myjob?",

                  answer:
                    "You can create an employer account and post jobs directly from your dashboard.",
                },

                {
                  question: "How can I track my application?",

                  answer:
                    "You can view all your applied jobs from the Application List page after login.",
                },

                {
                  question: "Is there any fee for job seekers?",

                  answer:
                    "No, applying for jobs on Myjob is completely free for all job seekers.",
                },

                {
                  question: "How can I contact support?",

                  answer:
                    "You can contact us anytime using the contact form or support email provided above.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group
          border border-gray-200
          rounded-2xl
          p-4
          cursor-pointer
          hover:shadow-lg
          transition duration-300"
                >
                  {/* QUESTION */}
                  <summary
                    className="list-none
            flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      {/* ICON */}
                      <div
                        className="w-14 h-14
                rounded-full
                bg-[#4CCE5B]/10
                flex items-center justify-center"
                      >
                        <i
                          className="fa-solid fa-circle-question
                  text-[#38A745]"
                        ></i>
                      </div>

                      {/* QUESTION */}
                      <h3
                        className="text-xl font-semibold
                text-gray-900"
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* ARROW */}
                    <i
                      className="fa-solid fa-angle-down
              text-gray-500
              transition duration-300
              group-open:rotate-180"
                    ></i>
                  </summary>

                  {/* ANSWER */}
                  <p
                    className="text-gray-600
            text-md leading-8
            mt-4 pl-[76px]"
                  >
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;

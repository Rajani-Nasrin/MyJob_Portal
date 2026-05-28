import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Page/Navbar";
import Footer from "../../Page/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeft,
//   faTrash,
//   faSave,
// } from "@fortawesome/free-solid-svg-icons";

function ApplicationProfile() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [enableEdit, setEnableEdit] = useState(false);
  const [profile, setProfile] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (!state) return;

    const stored = JSON.parse(localStorage.getItem("applications")) || [];

    const current = stored.find((app) => app.appId === state.appId);

    setProfile(current || null);
  }, [state]);

  if (!profile || deleted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mt-32 text-center text-gray-500 text-lg">
          <h2> No Job Application Found</h2>

          <div className="text-center flex items-center justify-center mt-4">
            <button
              onClick={() => navigate("/application-list")}
              className="flex items-center justify-center gap-2 text-sm text-blue-600 mb-4 hover:underline"
            >
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}⬅ Back to
              Application List
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!enableEdit) return;

    const stored = JSON.parse(localStorage.getItem("applications")) || [];

    const updated = stored.map((app) =>
      app.appId === profile.appId ? profile : app,
    );

    localStorage.setItem("applications", JSON.stringify(updated));

    setEnableEdit(false); 
  };

  const handleDelete = () => {
    if (!enableEdit) return;

    const stored = JSON.parse(localStorage.getItem("applications")) || [];

    const updated = stored.filter((app) => app.appId !== profile.appId);

    localStorage.setItem("applications", JSON.stringify(updated));

    setDeleted(true); e
  };


      {/* <Navbar /> */}
      return (
        <>
          <Navbar />

          <main className="mt-20 min-h-screen bg-gray-50 py-8 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
              {/* BACK BUTTON */}
              <button
                onClick={() => navigate("/application-list")}
                className="flex items-center gap-3
          text-[#4CCE5B]
          font-medium
          hover:translate-x-1
          transition duration-300 mb-10"
              >
                <i className="fa-solid fa-arrow-left"></i>
                Back to Application List
              </button>

              {/* MAIN CARD */}
              <div
                className="bg-white
          rounded-3xl
          shadow-sm
          border border-gray-200
          p-6 md:p-14"
              >
                {/* TITLE */}
                <div className="text-center mb:8 md:mb-14">
                  <h2
                    className="text-3xl md:text-4xl font-bold
              text-gray-900"
                  >
                    Application Details
                  </h2>

                  <div
                    className="w-28 h-1
              bg-[#4CCE5B]
              mx-auto mt-5 rounded-full"
                  ></div>

                  <p className="text-gray-500 mt-5 text-lg">
                    View your application information
                  </p>
                </div>

                {/* JOB INFO */}
                <div
                  className="bg-[#4CCE5B]/5
            rounded-2xl
            md:p-8 p-4
            flex flex-col md:flex-row
            items-center gap-3 md:gap-8 mb-4 md:mb-10"
                >
                  {/* ICON */}
                  <div
                    className="w-16 h-16
              rounded-full
              bg-white
              flex items-center justify-center"
                  >
                    <i
                      className="fa-solid fa-briefcase
                text-3xl text-[#4CCE5B]"
                    ></i>
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-3">
                    <p className="text-lg text-gray-500">
                      Job ID :
                      <span
                        className="text-[#4CCE5B]
                  font-bold ml-2"
                      >
                        {profile.jobId}
                      </span>
                    </p>

                    <p className="text-xl text-gray-500">
                      Position :
                      <span
                        className="text-gray-900
                  font-bold ml-2"
                      >
                        {profile.position}
                      </span>
                    </p>
                  </div>
                </div>

                {/* FORM FIELDS */}
                <div
                  className="border border-gray-200
            rounded-2xl overflow-hidden p-4 md:p-10"
                >
                  {/* NAME */}
                  <Field
                    icon="fa-user"
                    label="Full Name"
                    value={profile.name}
                    name="name"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* EMAIL */}
                  <Field
                    icon="fa-envelope"
                    label="Email"
                    value={profile.email}
                    name="email"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* PHONE */}
                  <Field
                    icon="fa-phone"
                    label="Contact Number"
                    value={profile.phone}
                    name="phone"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* GENDER */}
                  <Field
                    icon="fa-venus-mars"
                    label="Gender"
                    value={profile.gender}
                    name="gender"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* ADDRESS */}
                  <Field
                    icon="fa-location-dot"
                    label="Address"
                    value={profile.address}
                    name="address"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* DESCRIPTION */}
                  <Field
                    icon="fa-file-lines"
                    label="Description"
                    value={profile.description}
                    name="description"
                    editable={enableEdit}
                    onChange={handleChange}
                  />

                  {/* APPLY DATE */}
                  <Field
                    icon="fa-calendar-days"
                    label="Applied On"
                    value={profile.applyDate}
                    editable={false}
                  />

                  {/* RESUME */}
                  {/* <Field
                  icon="fa-file-arrow-down"
                  label="Uploaded CV"
                  value={profile.resumeName}
                  editable={false}
                /> */}
                  {/* <div
                  className="grid 
  border-b border-gray-200"
                > */}
                  {/* ICON */}

                  {/* CONTENT */}
                  <div className=" ">
                    <label
                      className="block
      text-[16px] mb-4 font-medium mt-4"
                    >
                      <i
                        className="fa-solid fa-file-arrow-down
         text-[#4CCE5B] mr-2"
                      ></i>
                      Uploaded CV
                    </label>

                    {!enableEdit ? (
                      <div
                        className="w-full pl-4 pr-4 py-3
        rounded-xl
        bg-white
        border border-gray-300"
                      >
                        {profile.resumeName}
                      </div>
                    ) : (
                      <div>
                        {/* CURRENT FILE */}
                        <div
                          className="w-full border border-gray-200
          rounded-xl
          px-5 py-4
          text-xl text-gray-700
          bg-gray-50 mb-4"
                        >
                          {profile.resumeName}
                        </div>

                        {/* NEW FILE */}
                        <label
                          className="inline-block
          bg-[#4CCE5B]
          text-white
          px-6 py-3
          rounded-xl
          cursor-pointer
          hover:bg-[#39b54a]
          transition duration-300"
                        >
                          Delete & Upload New CV
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];

                              if (file) {
                                setProfile({
                                  ...profile,

                                  resumeName: file.name,
                                });
                              }
                            }}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                </div>

                {/* CHECKBOX */}
                <label
                  className="flex items-center gap-3
            mt-10 text-lg text-gray-700  cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={enableEdit}
                    onChange={(e) => setEnableEdit(e.target.checked)}
                    className="w-5 h-5 accent-[#4CCE5B]"
                  />
                  Enable Edit / Delete
                </label>

                {/* BUTTONS */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2
            gap-6 mt-10"
                >
                  {/* SAVE */}
                  <button
                    onClick={handleSave}
                    disabled={!enableEdit}
                    className={`md:py-4 py-3
              rounded-2xl
               text-md md:text-xl font-semibold
              transition duration-300
              flex items-center justify-center gap-3 cursor-pointer
              ${
                enableEdit
                  ? "bg-[#4CCE5B] text-white hover:bg-[#39b54a]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Save Changes
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={handleDelete}
                    disabled={!enableEdit}
                    className={`md:py-4 py-3
              rounded-2xl
                text-md md:text-xl  font-semibold
              transition duration-300
              flex items-center justify-center gap-3 cursor-pointer
              ${
                enableEdit
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
                  >
                    <i className="fa-solid fa-trash"></i>
                    Delete Application
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </>
      );
      {/* <main className="mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <button
              onClick={() => navigate("/application-list")}
              className="flex items-center gap-2 text-sm  text-blue-600 mb-4 hover:underline cursor-pointer"
            >
             ⬅ Back to
              Application List
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Application Details
            </h2>

          
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-md space-y-1 ">
              <p>
                <span className="mr-2  font-bold">Job ID:</span> {profile.jobId}
              </p>
              <p>
                <span className="mr-2 font-bold">Position:</span>{" "}
                {profile.position}
              </p>
            </div>

          
            <Field
              label="Full Name"
              value={profile.name}
              name="name"
              editable={enableEdit}
              onChange={handleChange}
            />

        
            <Field
              label="Email"
              value={profile.email}
              name="email"
              editable={enableEdit}
              onChange={handleChange}
            />

            <Field
              label="Contact Number"
              value={profile.phone}
              name="email"
              editable={enableEdit}
              onChange={handleChange}
            />

          
            <label className="flex items-center gap-2 mt-6 text-sm">
              <input
                type="checkbox"
                checked={enableEdit}
                onChange={(e) => setEnableEdit(e.target.checked)}
              />
              Enable Edit / Delete
            </label>

         
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                disabled={!enableEdit}
                className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform ${
                  enableEdit
                    ? "bg-green-600 text-white hover:scale-105 hover:bg-green-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
               
                Save
              </button>

              <button
                onClick={handleDelete}
                disabled={!enableEdit}
                className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform ${
                  enableEdit
                    ? "bg-red-600 text-white hover:scale-105 hover:bg-red-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
             
                Delete
              </button>
            </div>
          </div>
        </div>
      </main> */}
  
}

export default ApplicationProfile;

/* 🔹 Field Component */
// const Field = ({ label, value, name, editable, onChange }) => (
//   const Field = ({
//   icon,
//   label,
//   value,
//   name,
//   editable,
//   onChange,
// }) =>(
//   <div className="mt-4">
//     <label className="block text-md font-medium mb-2">{label}</label>

//     {!editable ? (
//       <div
//         className="w-full pl-4 pr-4 py-3
//                 rounded-xl
//                 bg-white
//                 border border-gray-300
//                 text-gray-800
//                 placeholder-gray-600
//                 focus:outline-none
//                 focus:border-blue-400"
//       >
//         {value}
//       </div>
//     ) : (
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full pl-4 pr-4 py-3
//                 rounded-xl
//                 bg-white
//                 border border-gray-400
//                 text-gray-800
//                 placeholder-gray-600
//                 focus:outline-none
//                 focus:border-blue-400"
//       />
//     )}
//   </div>
// );
const Field = ({ icon, label, value, name, editable, onChange }) => (
  <div className="mt-4">
    <div className="flex items-center gap-2 mb-2">
      <i
        className={`fa-solid ${icon}
        text-[#4CCE5B]`}
      ></i>

      <label className="text-md font-medium">{label}</label>
    </div>

    {!editable ? (
      <div
        className="w-full pl-4 pr-4 py-3
        rounded-xl
        bg-white
        border border-gray-300"
      >
        {value}
      </div>
    ) : (
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-4 pr-4 py-3
        rounded-xl
        bg-white
        border border-gray-400"
      />
    )}
  </div>
);


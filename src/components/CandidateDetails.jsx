import Profile from "../assets/profile.png";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GoVersions } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { RiHistoryFill } from "react-icons/ri";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

const CandidateDetails = () => {
  const [candidateData, setCandidateData] = useState({
    name: "Mickael Jhon",
    role: "Coderspace · Senior Software Developer",
    profile: Profile,
    linkedinUrl: "https://www.linkedin.com/in/mickael-jhon",
    email: "mickel@example.com",
    phone: "+94 (111) 222 333",
    birthDate: "22 July 1996",
    age: "28 Years old",
    salary: "$24,000",
    salaryLabel: "Salary Expectation",
    location: "Istanbul, Izmir, Ankara, Turkey, US, Europe",
    workType: "Remote, Fulltime, Part-Time, Internship, Freelance",
  });

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <GoVersions size={16} />,
    },
    {
      id: "notes",
      label: "Notes",
      icon: <FaRegNoteSticky size={16} />,
    },
    {
      id: "tests",
      label: "Tests",
      icon: <TbNotes size={16} />,
    },
    {
      id: "history",
      label: "History",
      icon: <RiHistoryFill size={16} />,
    },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...candidateData });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setCandidateData(editData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={Profile} alt="Profile" className="h-12 w-12 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              {candidateData.name}
            </h2>
            <p className="text-gray-900">{candidateData.role}</p>
          </div>
        </div>
        <a
          href={candidateData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-blue-600 gap-2"
        >
          <FaLinkedin size={22} />
          LinkedIn Account
        </a>
      </div>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              activeTab === tab.id
                ? "bg-violet-600 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Personal Information Section */}
      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === "overview" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">All Personal Informations</h3>
              {isEditing ? (
                <button
                  className="text-green-600 flex items-center gap-1"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-violet-600 flex items-center gap-1"
                  onClick={handleEditClick}
                >
                  <AiTwotoneEdit size={16} />
                  Edit
                </button>
              )}
            </div>

            <div className="gap-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                    <RiMailSendLine size={16} />
                  </div>
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                        className="border p-1 rounded-md"
                      />
                    ) : (
                      <>
                        <p className="text-gray-900">{candidateData.email}</p>
                        <p className="text-sm text-gray-500">Mail Address</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                    <IoPhonePortraitOutline size={16} />
                  </div>
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={editData.phone}
                        onChange={handleChange}
                        className="border p-1 rounded-md"
                      />
                    ) : (
                      <>
                        <p className="text-gray-900">{candidateData.phone}</p>
                        <p className="text-sm text-gray-500">Phone Number</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                    <IoCalendarNumberOutline size={16} />
                  </div>
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="birthDate"
                        value={editData.birthDate}
                        onChange={handleChange}
                        className="border p-1 rounded-md"
                      />
                    ) : (
                      <>
                        <p className="text-gray-900">
                          {candidateData.birthDate}
                        </p>
                        <p className="text-sm text-gray-500">
                          {candidateData.age}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                    <PiCurrencyCircleDollar size={16} />
                  </div>
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="salary"
                        value={editData.salary}
                        onChange={handleChange}
                        className="border p-1 rounded-md"
                      />
                    ) : (
                      <>
                        <p className="text-gray-900">{candidateData.salary}</p>
                        <p className="text-sm text-gray-500">
                          {candidateData.salaryLabel}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <hr className="my-5" />

              <div className="flex items-start gap-3 mb-4">
                <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                  <GrLocation size={16} />
                </div>
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={editData.location}
                      onChange={handleChange}
                      className="border p-1 rounded-md"
                    />
                  ) : (
                    <>
                      <p className="text-gray-900">{candidateData.location}</p>
                      <p className="text-sm text-gray-500">Location</p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-gray-400 bg-gray-100 rounded-md p-2">
                  <MdOutlineWorkOutline size={16} />
                </div>
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="workType"
                      value={editData.workType}
                      onChange={handleChange}
                      className="border p-1 rounded-md"
                    />
                  ) : (
                    <>
                      <p className="text-gray-900">{candidateData.workType}</p>
                      <p className="text-sm text-gray-500">Work Type</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "notes" && <p>Notes content goes here...</p>}
        {activeTab === "tests" && <p>Tests content goes here...</p>}
        {activeTab === "history" && <p>History content goes here...</p>}
      </div>
    </div>
  );
};

export default CandidateDetails;




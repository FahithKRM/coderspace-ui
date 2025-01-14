import { useState } from "react";
import { TbNotes } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";

import Company from "../assets/experi.png";

const Sidebar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    phoneNumber: "+94 (111) 222 333",
    email: "mickel@example.com",
  });

  const activePositions = [
    {
      company: "Trendyol",
      logo: Company,
      position: "Front-End Developer",
      status: "Interview",
    },
    {
      company: "Anadolu Sigorta",
      logo: Company,
      position: "Sr. Front-End Developer",
      status: "Invited",
    },
  ];

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Active Positions Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Active Positions</h3>
        <div className="space-y-4">
          {activePositions.map((position, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={position.logo}
                  alt={position.company}
                  className="w-16 h-16 rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {position.position}
                </p>
                <p className="text-sm text-gray-500">{position.company}</p>
              </div>
              <div
                className={`px-3 py-1 text-xs rounded-full ${
                  position.status === "Interview"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-purple-100 text-violet-600"
                }`}
              >
                {position.status}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
          Show All
        </button>
      </div>

      {/* Career Status Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Career Status</h3>
        <div className="relative">
          <select
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            defaultValue="actively-seeking"
          >
            <option value="actively-seeking">Actively Seeking Job</option>
            <option value="open">Open to Opportunities</option>
            <option value="not-looking">Not Looking</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Personal Informations</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-gray-400 bg-gray-100 rounded-md p-2">
              <IoPhonePortraitOutline size={16} />
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={personalInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="text-sm text-gray-900 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
                />
              ) : (
                <p className="text-sm text-gray-900">
                  {personalInfo.phoneNumber}
                </p>
              )}
              <p className="text-xs text-gray-500">Phone Number</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-gray-400 bg-gray-100 rounded-md p-2">
              <RiMailSendLine size={16} />
            </div>
            <div>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handleInputChange}
                  className="text-sm text-gray-900 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
                />
              ) : (
                <p className="text-sm text-gray-900">{personalInfo.email}</p>
              )}
              <p className="text-xs text-gray-500">Mail Address</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleEditToggle}
          className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Resume Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Resume</h3>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-200 rounded">
              <TbNotes size={16} />
            </div>
            <span className="text-sm text-gray-700">Jhon Clark-resume.pdf</span>
          </div>
          <button className="bg-violet-600 rounded-full p-2 hover:text-violet-700">
            <FaArrowDown color="white" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import Company from "../assets/experi.png";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([
    {
      company: "Trendyol.com",
      companyLogo: Company,
      position: "Front-End Developer",
      type: "Fulltime",
      duration: "1 Year 2 Months",
    },
    {
      company: "TiklaGelsin",
      companyLogo: Company,
      position: "Front-End Developer",
      type: "Contract",
      duration: "1 Year 2 Months",
    },
    {
      company: "Pazarama",
      companyLogo: Company,
      position: "Front-End Developer",
      type: "Internship",
      duration: "1 Year",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedExperiences, setEditedExperiences] = useState(experiences);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedExperiences([...experiences]);
  };

  const handleSaveClick = () => {
    setExperiences(editedExperiences);
    setIsEditing(false);
  };

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...editedExperiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setEditedExperiences(updatedExperiences);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">All Experiences</h3>

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
      <div className="space-y-6">
        {(isEditing ? editedExperiences : experiences).map(
          (experience, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <img
                  src={experience.companyLogo}
                  alt=""
                  className="h-16 w-16 rounded"
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    {isEditing ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={experience.company}
                          onChange={(e) =>
                            handleChange(index, "company", e.target.value)
                          }
                          className="block w-full px-3 py-2 border rounded-md text-sm"
                        />
                        <input
                          type="text"
                          value={experience.position}
                          onChange={(e) =>
                            handleChange(index, "position", e.target.value)
                          }
                          className="block w-full px-3 py-2 border rounded-md text-sm"
                        />
                      </div>
                    ) : (
                      <>
                        <h4 className="text-base font-medium">
                          {experience.company}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {experience.position}
                        </p>
                      </>
                    )}
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={experience.duration}
                      onChange={(e) =>
                        handleChange(index, "duration", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md text-sm w-32"
                    />
                  ) : (
                    <span className="text-sm text-gray-500">
                      {experience.duration}
                    </span>
                  )}
                </div>
                <div className="mt-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={experience.type}
                      onChange={(e) =>
                        handleChange(index, "type", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md text-sm"
                    />
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded">
                      {experience.type}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;

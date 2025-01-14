
import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import University from '../assets/educa.png'

const EducationSection = () => {
  const [educations, setEducations] = useState([
    {
      university: "Middle Earth Technic University",
      universityLogo: University,
      degree: "Master degree in Computer Science and Mathematics",
      startDate: "January, 2012",
      location: "Istanbul, Turkey",
    },
    {
      university: "Bogazici Technic University",
      universityLogo: University,
      degree: "Master degree in Computer Science and Mathematics",
      startDate: "January, 2012",
      location: "Istanbul, Turkey",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedEducations, setEditedEducations] = useState(educations);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedEducations([...educations]);
  };

  const handleSaveClick = () => {
    setEducations(editedEducations);
    setIsEditing(false);
  };

 

  const handleChange = (index, field, value) => {
    const updatedEducations = [...editedEducations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };
    setEditedEducations(updatedEducations);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Education</h3>
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
        {(isEditing ? editedEducations : educations).map((education, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <img
                src={education.universityLogo}
                alt=""
                className="h-16 w-16 rounded"
              />
            </div>
            <div className="ml-4">
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={education.university}
                    onChange={(e) => handleChange(index, 'university', e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-sm"
                  />
                  <input
                    type="text"
                    value={education.degree}
                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                    className="block w-full px-3 py-2 border rounded-md text-sm"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={education.startDate}
                      onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                      className="px-3 py-2 border rounded-md text-sm flex-1"
                    />
                    <input
                      type="text"
                      value={education.location}
                      onChange={(e) => handleChange(index, 'location', e.target.value)}
                      className="px-3 py-2 border rounded-md text-sm flex-1"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h4 className="text-base font-medium">{education.university}</h4>
                  <p className="text-sm text-gray-700">{education.degree}</p>
                  <div className="mt-1 text-sm text-gray-500">
                    <span>{education.startDate}</span>
                    <span className="mx-1">•</span>
                    <span>{education.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
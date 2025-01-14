import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";

const SkillsSection = () => {
  const [positions, setPositions] = useState([
    { title: "Front-End Developer (React)", years: "2 Year" },
    { title: "Back-End Developer (Python)", years: "1 Year" },
    { title: "Mobile Developer (React Native)", years: "1 Year" },
  ]);

  const [skills, setSkills] = useState([
    "Mobile Application",
    "Web Development",
    "Data Analysis",
    "React",
    "Javascript",
    "Django",
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedPositions, setEditedPositions] = useState(positions);
  const [editedSkills, setEditedSkills] = useState(skills);
  const [newSkill, setNewSkill] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedPositions([...positions]);
    setEditedSkills([...skills]);
  };

  const handleSaveClick = () => {
    setPositions(editedPositions);
    setSkills(editedSkills);
    setIsEditing(false);
  };

  const handlePositionChange = (index, field, value) => {
    const updatedPositions = [...editedPositions];
    updatedPositions[index] = { ...updatedPositions[index], [field]: value };
    setEditedPositions(updatedPositions);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setEditedSkills([...editedSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    setEditedSkills(editedSkills.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Positions Section */}
      <div className="bg-white rounded-lg rounded-b-none shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Preferred Positions</h3>
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
        <div className="space-y-3">
          {(isEditing ? editedPositions : positions).map((position, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-gray-300 rounded-lg"
            >
              {isEditing ? (
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={position.title}
                    onChange={(e) =>
                      handlePositionChange(index, "title", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <input
                    type="text"
                    value={position.years}
                    onChange={(e) =>
                      handlePositionChange(index, "years", e.target.value)
                    }
                    className="w-24 px-3 py-2 border rounded-md text-sm"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-normal">{position.title}</span>
                    <IoMdCheckmarkCircle size={20} color="#16a34a" />
                  </div>
                  <span className="text-gray-900">{position.years}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow p-6 rounded-t-none">
        <h3 className="text-lg font-medium mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {(isEditing ? editedSkills : skills).map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-lg"
            >
              {skill}
              {isEditing && (
                <button
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <RxCross2 size={16} />
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
                className="px-3 py-1 border rounded-full text-sm"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddSkill();
                  }
                }}
              />
              <button onClick={handleAddSkill} className="text-violet-600">
                <FaPlus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;


import { useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';

const LanguageSection = () => {
  const [languages, setLanguages] = useState([
    {
      name: "French",
      code: "FR",
      level: "Beginner"
    },
    {
      name: "Spanish", 
      code: "ES",
      level: "Intermediate"
    },
    {
      name: "English",
      code: "EN",
      level: "Advanced",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedLanguages, setEditedLanguages] = useState(languages);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedLanguages([...languages]);
  };

  const handleSaveClick = () => {
    setLanguages(editedLanguages);
    setIsEditing(false);
  };

  const handleChange = (index, field, value) => {
    const updatedLanguages = [...editedLanguages];
    updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
    setEditedLanguages(updatedLanguages);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Language</h3>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(isEditing ? editedLanguages : languages).map((language, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg"
          >
            {isEditing ? (
              <div className="flex-1 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={language.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                    placeholder="Language"
                  />
                  <input
                    type="text"
                    value={language.code}
                    onChange={(e) => handleChange(index, 'code', e.target.value)}
                    className="w-16 px-3 py-2 border rounded-md text-sm"
                    placeholder="Code"
                  />
                </div>
                <input
                  type="text"
                  value={language.level}
                  onChange={(e) => handleChange(index, 'level', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Level"
                />
              </div>
            ) : (
              <>
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full text-sm font-medium">
                  {language.code}
                </div>
                <div>
                  <p className="font-medium text-sm">{language.name}</p>
                  <p className="text-xs text-gray-500">{language.level}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
import { TbNotes } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";

const ResumeSection = () => {
  const resume = {
    filename: "Jhon Clark-resume.pdf",
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <h3 className="text-lg font-medium">Resume</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gray-400 bg-gray-100 rounded-md p-2">
            <TbNotes size={16} />
          </div>
          <span className=" text-gray-900">{resume?.filename}</span>
        </div>

        <button className="flex items-center gap-2 text-white bg-violet-600 rounded-full py-1 px-2 font-medium">
          Download
          <FaArrowDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;

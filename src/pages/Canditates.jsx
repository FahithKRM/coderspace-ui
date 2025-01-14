import Header from "../components/Header";
import CandidateDetails from "../components/CandidateDetails";
import ResumeSection from "../components/ResumeSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import LanguageSection from "../components/LanguageSection";
import Sidebar from "../components/Sidebar";

const Canditates = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button className="flex items-center text-gray-9900 hover:text-gray-900">
            Back to Candidates
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CandidateDetails />
            <ResumeSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <LanguageSection />
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Canditates;

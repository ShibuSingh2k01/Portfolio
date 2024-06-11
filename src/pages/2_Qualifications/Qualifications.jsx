import Navbar from "../../components/Navbar";
import Education from "./EducationSection/Education";
import SkillBadges from "./SkillBadges";

const Qualifications = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Qualifications
            </h1>
            <p className="text-lg text-gray-600">
              Here's a summary of my education and skills.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 divide-primary md:grid-cols-2 md:divide-x lg:pl-6">
            <div className="md:pr-12">
              <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                Education
              </h2>
              <Education />
            </div>
            <div className="md:pl-12">
              <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                Skills
              </h2>
              <SkillBadges />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualifications;

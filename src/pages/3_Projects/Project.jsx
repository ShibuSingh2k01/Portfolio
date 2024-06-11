import Navbar from "../../components/Navbar";
import ProjectCard from "./ProjectCard";
import ViewMore from "./ViewMore";

const Section3 = () => {
  return (
    <>
      <div className="h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center bg-background p-4 sm:px-40">
          {/* Title */}
          <div className="mb-8 mt-1 text-4xl font-bold text-primary md:text-5xl">
            Projects
          </div>
          {/* Contents */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-5">
            <ProjectCard />
            {/* <div className="hidden customlg:block">
            <ProjectCard />
          </div>

          <div className="hidden xl:block">
            <ProjectCard />
          </div>

          <div className="hidden 2xl:block">
            <ProjectCard />
          </div> */}
            <ViewMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

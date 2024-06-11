import ProjectPic1 from "/ProjectPic1.png";

const ProjectCard = () => {
  return (
    <>
      <div className="h-72 w-96 overflow-hidden rounded-lg bg-secondary shadow-xl">
        <div className="flex flex-col">
          {/* Image */}
          <img src={ProjectPic1} alt="Project" className="h-48" />

          {/* Content */}
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xl font-bold text-primary">
              React-Jobs-App
            </h2>
            <p className="text-gray-700">
              A responsive Web Application made using React, Tailwind and SQL
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

import Illustration1 from "/Illustration1.svg";

const Intro = () => {
  return (
    <div className="flex h-full flex-col  bg-background lg:flex-row">
      <div className="flex flex-col justify-center bg-secondary p-10 lg:px-12">
        {/* Designation */}
        <div className="mb-8 text-lg font-bold text-accent">
          Fresher Developer & Designer
        </div>
        {/* Intro */}
        <div className="mb-8 text-justify text-5xl font-extrabold leading-tight text-primary md:text-6xl">
          A Fresher on a journey to become a Full Stack DEV
        </div>
        {/* Something about yourself - Goal, Flex, Experience */}
        <div className="text-justify text-lg leading-relaxed text-text md:text-xl">
          I am <span className="font-bold text-accent">Shibu</span>. A
          passionate web developer with a keen eye for design and functionality,
          I am dedicated to delivering high-quality, responsive, and visually
          appealing websites tailored to meet the unique needs of each project.
        </div>
      </div>
      <div className="flex justify-center bg-background p-6 lg:flex lg:items-center">
        <img
          src={Illustration1}
          alt="Illustration"
          className="lg:h-[39rem] lg:w-[80rem]"
        />
      </div>
    </div>
  );
};

export default Intro;

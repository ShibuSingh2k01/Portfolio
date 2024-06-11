import HTML5Logo from "./icons/HTML5.png";
import CSS3Logo from "./icons/CSS3.png";
import TailwindLogo from "./icons/Tailwind.png";
import JSLogo from "./icons/JS.png";
import ReactLogo from "./icons/React.png";
import MySqlLogo from "./icons/MySql.png";
import CppLogo from "./icons/Cpp.png";
import DSALogo from "./icons/DSA.png";

const SkillBadges = () => {
  const skills = [
    HTML5Logo,
    CSS3Logo,
    TailwindLogo,
    JSLogo,
    ReactLogo,
    MySqlLogo,
    CppLogo,
    DSALogo,
  ];

  return (
    <>
      <div className="flex flex-wrap gap-8 md:justify-normal">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-secondary hover:bg-accent"
          >
            <img className="h-20 w-20" src={skill} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillBadges;

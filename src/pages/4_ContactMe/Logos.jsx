import { NavLink } from "react-router-dom";
import githubLogo from "./icons/githubBlack.png";
import gmailLogo from "./icons/gmail.png";
import linkedInLogo from "./icons/linkedInLogo.png";

const Logos = () => {
  return (
    <>
      <div className="mb-8 flex gap-6">
        <NavLink
          to="https://github.com/ShibuSingh2k01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary hover:bg-accent"
        >
          <img className="h-12 w-12" src={githubLogo} alt="Github" />
        </NavLink>
        <NavLink
          to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=work.shibusingh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary hover:bg-accent"
        >
          <img className="h-11 w-11" src={gmailLogo} alt="Gmail" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/shibusingh6122001/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary hover:bg-accent"
        >
          <img className="h-14 w-14" src={linkedInLogo} alt="LinkedIn" />
        </NavLink>
      </div>
    </>
  );
};
export default Logos;

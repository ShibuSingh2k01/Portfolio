import Navbar from "../../components/Navbar";
import Logos from "./Logos";
import ContactMe from "/ContactMe.svg";

const Contact = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex h-full w-screen flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex justify-center bg-background p-12 lg:flex lg:items-center">
            <img
              src={ContactMe}
              alt="Illustration"
              className="h-auto w-80 lg:w-auto"
            />
          </div>

          {/* Right Section */}
          <div className="text-dark flex w-full flex-col items-center justify-center bg-background p-8 lg:p-0">
            <div className="mb-4 text-4xl font-bold text-primary">
              Thanks For Visiting!
            </div>
            <div className="mb-8 text-center text-lg">
              If you're interested in collaborating on innovative projects,
              let's connect and make great things happen! Feel free to reach
              out.
            </div>

            {/* Logo */}
            <Logos />

            {/* Resume */}
            <div>
              <a
                href="https://drive.google.com/file/d/1JUndLqL5MHlyHhn41kD6k5RKvZkF4ktu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                // className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-lg font-medium text-background hover:bg-accent"
                className="inline-flex transform items-center justify-center rounded-md bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

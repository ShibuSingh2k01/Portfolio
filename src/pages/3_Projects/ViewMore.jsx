import { useState } from "react";
import ViewBackground from "/ViewMore.jpg";
import { NavLink } from "react-router-dom";

const ViewMore = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="h-72 w-96 overflow-hidden rounded-lg bg-secondary shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col">
          {/* Blur Container */}
          <div className="relative">
            {/* Image */}
            <NavLink
              to="https://github.com/ShibuSingh2k01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ViewBackground}
                alt="View More"
                className="h-48 w-full blur-sm"
              />

              {/* Hover Effect */}
              {isHovered && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-9 w-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              )}
            </NavLink>
          </div>

          {/* Content */}
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xl font-bold text-primary">View All</h2>
            <p className="text-gray-700">More Projects on GitHub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;

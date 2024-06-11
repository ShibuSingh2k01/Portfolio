import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen); //Toggle
  };

  return (
    <nav className="flex h-16 items-center justify-between bg-primary px-2 md:px-12">
      {/* Logo */}
      <div className="pt-2 text-accent">
        <NavLink to="/">
          <span className="text-3xl text-accent">&lt; </span>
          <span className="font-logo text-3xl text-white hover:text-button">
            Shibu Singh
          </span>
          <span className="text-3xl text-accent"> /&gt;</span>
        </NavLink>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center md:mr-40">
        <div className="hidden lg:block">
          <NavLink
            to="/"
            className="rounded-md px-3 pb-3 pt-2 font-medium text-white hover:bg-button"
          >
            Home
          </NavLink>
          <NavLink
            to="/qualifications"
            className="rounded-md px-3 pb-3 pt-2 font-medium text-white hover:bg-button"
          >
            Qualifications
          </NavLink>
          <NavLink
            to="/projects"
            className="rounded-md px-3 pb-3 pt-2 font-medium text-white hover:bg-button"
          >
            Projects
          </NavLink>
        </div>
      </div>
      <div className="hidden lg:block">
        <NavLink
          to="/contact"
          className="rounded-md bg-accent px-3 pb-3 pt-2 font-medium text-black hover:bg-button hover:text-white"
        >
          Contact
        </NavLink>
      </div>

      {/* Hamburger */}
      <button
        onClick={handleMenu}
        className="rounded-md px-3 py-3 font-medium text-white hover:bg-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-primary bg-opacity-95 lg:hidden">
          <div className="flex h-16 items-center justify-between bg-primary px-2 md:px-12">
            <div className="pt-2 text-accent">
              <NavLink to="/">
                <span className="text-3xl text-accent">&lt; </span>
                <span className="font-logo text-3xl text-white hover:text-button">
                  Shibu Singh
                </span>
                <span className="text-3xl text-accent"> /&gt;</span>
              </NavLink>
            </div>
            <button
              onClick={handleMenu}
              className="rounded-md px-3 py-3 font-medium text-white hover:bg-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <NavLink
              to="/"
              className="block w-full rounded-md px-3 py-3 text-center font-medium text-white hover:bg-button"
              onClick={handleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/qualifications"
              className="block w-full rounded-md px-3 py-3 text-center font-medium text-white hover:bg-button"
              onClick={handleMenu}
            >
              Qualifications
            </NavLink>
            <NavLink
              to="/projects"
              className="block w-full rounded-md px-3 py-3 text-center font-medium text-white hover:bg-button"
              onClick={handleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="block w-full rounded-md bg-accent px-3 py-3 text-center font-medium text-black hover:bg-button hover:text-white"
              onClick={handleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

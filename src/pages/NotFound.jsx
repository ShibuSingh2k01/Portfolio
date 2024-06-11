import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex h-full flex-col items-center justify-center bg-primary text-white">
          <div className="text-center">
            <div className="lg:text-10xl mb-4 text-9xl font-extrabold">404</div>
            <div className="mb-4 text-4xl font-bold tracking-tight">
              Oops! Looks like you've stumbled upon a void
            </div>
            <div className="mb-8 text-lg font-light text-gray-300">
              The page you're trying to access seems to be lost in the digital
              abyss.
            </div>
            <NavLink to="/">
              <button className="rounded-md bg-accent px-6 py-3 font-semibold text-gray-900 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80">
                Go back Home
              </button>
            </NavLink>
          </div>
          <footer className="absolute bottom-0 w-full bg-primary py-4 text-center text-gray-300">
            © 2024 PranavNair. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

export default NotFound;

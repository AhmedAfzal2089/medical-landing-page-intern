import React, { useState } from "react";
import NavLogo from "../svgs/NavLogo";

const Navbar = () => {
  const [MobileMode, setMobileMode] = useState(false);

  return (
    <nav className="lg:h-20 h-15 flex justify-around items-center px-4 md:px-8 bg-blue-100">
      <div>
        <NavLogo />
      </div>

      <div className="hidden md:flex items-center gap-5">
        <span className="cursor-pointer text-blue-600 font-semibold border-b-3 border-blue-600">
          Home
        </span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Application</span>
        <span className="cursor-pointer">History</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <span className="py-2 px-4 cursor-pointer border-1 border-blue-600 rounded-3xl text-blue-600 font-semibold">
          Login
        </span>
        <span className="bg-blue-600 text-white py-2 px-4 cursor-pointer border-1 border-blue-600 rounded-3xl font-semibold">
          SignUp
        </span>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMode(!MobileMode)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {MobileMode ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {MobileMode && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <span className="cursor-pointer text-blue-600 font-semibold border-b-3 border-blue-600">
            Home
          </span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Application</span>
          <span className="cursor-pointer">History</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

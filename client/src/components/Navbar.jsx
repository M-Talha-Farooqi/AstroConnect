import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-600 p-5 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl md:text-4xl sm:text-3xl font-bold"
          style={{ position: "relative", marginLeft: "5vw" }}
        >
          AstroConnect
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none ml-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ul
          className={`flex-col md:flex md:flex-row rounded-lg md:space-x-4 fixed md:static bg-purple-600 w-full md:w-auto md:bg-transparent transition-all duration-500 ease-in-out transform ${
            isOpen ? "top-14" : "-top-full"
          } left-0 md:left-auto font-bold md:top-0 md:transform-none z-50 md:ml-auto`}
        >
          {[
            { path: "/challenges", label: "Challenges" },
            { path: "/gamespage", label: "Games" },
            { path: "/physical-tasks", label: "Physical Tasks" },
            { path: "/chat", label: "Chat" },
            { path: "/book-audio", label: "Audio Books" },
            { path: "/yoga-meditation", label: "Meditation & Yoga" },
            { path: "/daily-tips", label: "Daily Tips" },
          ].map((item) => (
            <li key={item.path} className="border-b md:border-none">
              <Link
                to={item.path}
                className="block py-3 px-4 text-white text-sm md:text-base hover:bg-purple-500 hover:text-white transition"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

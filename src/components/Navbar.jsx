import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center px-2 py-5 shadow-md relative">
      <Link to={"/"} className="text-blue-600 text-4xl font-bold">
        Myjob
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 hover:bg-gray-100 rounded"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:w-auto lg:flex lg:items-center`}
      >
        <ul className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-10 text-lg mt-4 lg:mt-0">
          <li className="flex items-center gap-2 cursor-pointer">Jobs</li>
          <li className="flex items-center gap-2 cursor-pointer">Company</li>
          <li className="flex items-center gap-2 cursor-pointer">Career</li>
        </ul>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-5 mt-4 lg:mt-0 lg:ml-10">
          {buttons.map((button, index) => (
            <Link
              key={index}
              to={button.link}
              className={`${
                button.type === "bluebtn"
                  ? "text-white bg-blue-600 px-5 py-1 border rounded text-center"
                  : button.type === "whitebtn"
                  ? "text-blue-600 border-blue-600 px-5 py-1 border rounded text-center"
                  : ""
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ buttons }) => {
  return (
    <nav className="flex justify-between items-center padding py-5 shadow-md">
      <Link to={"/"} className="text-blue-600 text-4xl font-bold">
        Myjob
      </Link>

      <div>
        <ul className="flex gap-x-10 text-lg">
          <li>Jobs</li>
          <li>Company</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="flex justify-between gap-x-5">
        {buttons.map((button) => (
          <Link
            to={button.link}
            className={`${
              button.type === "bluebtn"
                ? "text-white bg-blue-600 px-5 py-1 border rounded"
                : button.type === "whitebtn"
                ? "text-blue-600 border-blue-600 px-5 py-1 border rounded"
                : ""
            }`}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

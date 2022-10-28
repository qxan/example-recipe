import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between h-[6rem]">
      <div className="ml-5 p-8 w-[50rem] flex justify-center items-center text-2xl text-cyan-700">
        <h1>Delicous</h1>
      </div>
      <div className="p-8 w-[60rem] flex justify-center items-center text-xl text-white">
        <div className="flex gap-12 ">
          <Link to="/Home" className="text-red-700 ">
            Home
          </Link>
          <NavLink className="hover:text-red-700" to="/About">
            About
          </NavLink>
          <a href="https://github.com/qxan/react-reacipe-app" className="hover:text-red-700">Github</a>
          <NavLink className="hover:text-red-700" to="/Login">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

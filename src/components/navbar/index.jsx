import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";

const GlobalNav = ({ menu }) => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center text-xl mr-20">
        <FaUserGraduate className="mr-2" />
        <span className="font-black">BAC</span>
        <span className="text-sky-400">Track</span>
      </Link>
    </div>
  );
};

export default GlobalNav;

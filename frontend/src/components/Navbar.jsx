import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] px-4">
      <div className="flex flex-col items-center justify-between py-4 h-6 bg-red-500 md:flex-row">
        <Link to={"/"} className="text-white">
          Product Store
        </Link>
        <div className="flex items-center">
          <Link to={"/create"}>Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

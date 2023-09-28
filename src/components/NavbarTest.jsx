import React from "react";
import NavList from "./molecules/NavList";
import MainLogo from "./molecules/MainLogo";

const NavbarTest = () => {
  return (
    <nav className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <MainLogo />
          <NavList />
          <div className="w-2/12 relative">
            <input
              type="text"
              className="w-full py-3 px-6 bg-search bg-gray-700 rounded-full pl-12 outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTest;

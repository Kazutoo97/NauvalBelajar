import React, { useState } from "react";
import DropdownNav from "../../assets/svg/DropdownNav";
import { Link } from "react-router-dom";

const NavList = () => {
  const [dropdown, setDropdown] = useState(false);
  const navItems = [
    { label: "Internet", to: "/" },
    { label: "Books", to: "/" },
    { label: "Open Source", to: "/" },
  ];
  return (
    <div className="w-8/12">
      <ul className="flex space-x-11">
        <li>
          <Link className="hover:underline">UI Design</Link>
        </li>
        <li>
          <Link className="hover:underline">Front-End</Link>
        </li>
        <li>
          <Link className="hover:underline">Back-End</Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center hover:underline"
            onClick={() => setDropdown(!dropdown)}
          >
            Lainnya
            <DropdownNav className="ml-2" />
          </Link>
          {dropdown && (
            <ul className="absolute bg-gray-800 mt-3 w-[200px] rounded shadow-xl">
              {navItems.map(({ label, to }) => (
                <li
                  key={label}
                  className=" border-b border-white/5 last:border-0"
                >
                  <Link
                    to={to}
                    className="flex py-3 px-6  hover:bg-gray-700/60"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavList;

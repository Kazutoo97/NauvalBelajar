import React, { useState } from "react";
import DropdownNav from "../assets/svg/DropdownNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const NavList = [
    { text: "Internet", to: "/" },
    { text: "Books", to: "/" },
    { text: "Open Source", to: "/" },
  ];

  return (
    <nav className="py-10">
      <div className="px-6 mx-auto xl:max-w-screen-lg xl:px-0 lg:max-w-screen-md lg:px-0">
        <div className="flex items-center">
          <div className="w-2/12 flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
              E
            </div>
            Epictetus
          </div>
          <div className="w-8/12">
            <ul className="flex items-center space-x-14">
              <li>
                <Link to="/" className="hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Front-End
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Back-End
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <DropdownNav className="ml-3" />
                </Link>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {NavList.map(({ text, to }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link
                          to={to}
                          className="flex py-3 px-6  hover:bg-gray-700/60"
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-2/12 relative">
            <input
              type="text"
              className="bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

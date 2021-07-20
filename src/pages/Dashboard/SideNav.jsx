import React, { useState } from "react";
import nav from "./navigations.json";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function SideNav() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="bg_primary h-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:block md:flex-col">
          <h1 className="flex items-center text-xl text-white font-bold px-4 py-4">
            <FaBars
              className="md:hidden mr-2"
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
            />{" "}
            SNAKEBITE NEPAL
          </h1>
          <div className="px-4">
            <button className="bg-white px-4 rounded-full py-1 hover:opacity-80 font-semibold text-sm">
              Logout
            </button>
          </div>
        </div>
        <div
          className={
            mobileNav
              ? "bg_primary absolute ml-0 mt-14 w-full transition duration-500 ease-in-out "
              : " transition duration-500 ease-in-out bg_primary absolute md: -ml-80 md:relative md:ml-0 md:block"
          }
        >
          {nav.map((nav, index) => (
            <Link to={nav.to} key={index}>
              <p className="py-3 font-semibold px-4 hover:bg-yellow-200 cursor: pointer ">
                {nav.default}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideNav;

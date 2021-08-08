import React from "react";
import { BiChevronRight } from "react-icons/bi";

function TitleBar({ name }) {
  return (
    <div className="titleBar ">
      <div className="layer bg-gray-100 bg-opacity-80 h-40 md:py-5 ">
        <div className="container mx-auto px-4 py-5">
          <h1 className="font-bold text-xl text-center">{name}</h1>
          <p className="flex items-center justify-center text-sm mt-2">
            Home <BiChevronRight className="mx-1" /> {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;

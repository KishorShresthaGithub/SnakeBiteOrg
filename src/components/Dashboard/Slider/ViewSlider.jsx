import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";

function ViewSlider() {
  return (
    <table className=" border-collapse border border-green-800 table-auto text-left w-full">
      <thead className="">
        <tr>
          <th className="border border-gray-200 p-2">#</th>
          <th className="border border-gray-200 p-2">Image</th>
          <th className="border border-gray-200 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="border border-gray-200 p-2">1</td>
          <td className="border border-gray-200 p-2">
            <img
              src="https://images.pexels.com/photos/87428/basilisk-rattlesnake-rattlesnake-snake-viper-87428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="max-w-xs"
              alt=""
            />
          </td>
          <td className="flex items-center">
            <RiEditBoxLine className="bg-blue-400 h-10 w-10 p-2 text-white mr-2" />
            <MdDeleteSweep className="bg-red-500 h-10 w-10 p-2 text-white" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ViewSlider;

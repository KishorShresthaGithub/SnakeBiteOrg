import React from "react";
import AddSnakebite from "@components/Dashboard/Snakebite/AddSnakebite";
import ViewSnakebite from "@components/Dashboard/Snakebite/ViewSnakebite";
import UpdateSnakebite from "@components/Dashboard/Snakebite/UpdateSnakebite";
import DashCard from "@template/DashCard";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_snakes",
    tab_show: true,
    tab_name: "View Snakes",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewSnakebite />,
  },
  {
    tab_id: "add_snakes",
    tab_show: true,
    tab_name: "Add Snakes",
    tab_icon: <IoMdAdd />,
    page: <AddSnakebite />,
  },
  {
    tab_id: "update_snakes",
    tab_name: "Update Snakes",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateSnakebite />,
  },
];

function DSnakebite() {
  return (
    <>
      <DashCard options={options} />
    </>
  );
}

export default DSnakebite;

import React from "react";
import AddEvents from "@components/Dashboard/Events/AddEvents";
import ViewEvents from "@components/Dashboard/Events/ViewEvents";
import DashCard2 from "@template/DashCard2";
import UpdateEvents from "@components/Dashboard/Events/UpdateEvents";
import { IoMdAdd } from "react-icons/io";
import { GrFormAttachment, GrFormView } from "react-icons/gr";

const options = [
  {
    tab_id: "view_events",
    tab_show: true,
    tab_name: "View Events",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewEvents />,
  },
  {
    tab_id: "add_events",
    tab_show: true,
    tab_name: "Add Events",
    tab_icon: <IoMdAdd />,
    page: <AddEvents />,
  },
  {
    tab_id: "update_events",
    tab_name: "Update Events",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateEvents />,
  },
];

function DEvents() {
  return (
    <>
      <DashCard2 options={options} />
    </>
  );
}

export default DEvents;

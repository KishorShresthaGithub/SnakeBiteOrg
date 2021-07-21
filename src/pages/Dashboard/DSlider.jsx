import AddSlider from "@components/Dashboard/Slider/AddSlider";
import ViewSlider from "@components/Dashboard/Slider/ViewSlider";
import UpdateSlider from "@components/Dashboard/Slider/UpdateSlider";

import DashCard2 from "@template/DashCard2";
import React from "react";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_slider",
    tab_show: true,
    tab_name: "View Slider",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewSlider />,
  },
  {
    tab_id: "add_slider",
    tab_show: true,
    tab_name: "Add Slider",
    tab_icon: <IoMdAdd />,
    page: <AddSlider />,
  },
  {
    tab_id: "update_slider",
    tab_name: "Update Slider",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateSlider />,
  },
];

function DSlider() {
  return (
    <>
      <DashCard2 options={options} />
    </>
  );
}

export default DSlider;

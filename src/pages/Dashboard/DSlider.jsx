import AddSlider from "@components/Dashboard/Slider/AddSlider";
import UpdateSlider from "@components/Dashboard/Slider/UpdateSlider";
import ViewSlider from "@components/Dashboard/Slider/ViewSlider";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import DashCard2 from "@template/DashCard2";
import { GrFormAttachment, GrFormView } from "react-icons/gr";

const options = [
  {
    tab_id: "view_slider",
    tab_show: true,
    tab_name: "View Slider",
    tab_icon: <IoMdAdd />,
    page: <ViewSlider />,
  },
  {
    tab_id: "add_slider",
    tab_show: true,
    tab_name: "Add Slider",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <AddSlider />,
  },
  {
    tab_id: "update_slider",
    tab_name: "Update Slider",
    tab_show: false,
    tab_icon: <IoMdAdd />,
    page: <GrFormAttachment className="text-2xl" />,
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

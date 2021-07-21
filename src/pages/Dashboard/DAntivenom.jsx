import React from "react";
import AddAVC from "@components/Dashboard/Antivenom/AddAVC";
import UpdateAVC from "@components/Dashboard/Antivenom/UpdateAVC";
import ViewAVC from "@components/Dashboard/Antivenom/ViewAVC";
import DashCard from "@template/DashCard2";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_avc",
    tab_show: true,
    tab_name: "View Anti Venom Centers",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewAVC />,
  },
  {
    tab_id: "add_avc",
    tab_show: true,
    tab_name: "Add Anti Venom Centers",
    tab_icon: <IoMdAdd />,
    page: <AddAVC />,
  },
  {
    tab_id: "update_avc",
    tab_name: "Update Anti Venom Centers",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateAVC />,
  },
];

function DAntivenom() {
  return (
    <>
      <DashCard options={options} />
    </>
  );
}

export default DAntivenom;

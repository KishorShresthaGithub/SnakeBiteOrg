import DashCard from "@template/DashCard";
import React from "react";
import { GrFormView } from "react-icons/gr";
import UserEdit from "../../components/Dashboard/UserEdit";

const options = [
  {
    tab_id: "edit_user",
    tab_show: true,
    tab_name: "Edit User",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <UserEdit />,
  },
];

function DUser() {
  return (
    <>
      <DashCard options={options} />
    </>
  );
}

export default DUser;

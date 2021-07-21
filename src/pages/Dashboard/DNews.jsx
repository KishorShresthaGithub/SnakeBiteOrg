import AddNews from "@components/Dashboard/News/AddNews";
import UpdateNews from "@components/Dashboard/News/UpdateNews";
import ViewNews from "@components/Dashboard/News/ViewNews";
import DashCard2 from "@template/DashCard2";
import React from "react";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_news",
    tab_show: true,
    tab_name: "View News",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewNews />,
  },
  {
    tab_id: "add_news",
    tab_show: true,
    tab_name: "Add News",
    tab_icon: <IoMdAdd />,
    page: <AddNews />,
  },
  {
    tab_id: "update_news",
    tab_name: "Update News",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateNews />,
  },
];

function DNews() {
  return (
    <>
      <DashCard2 options={options}></DashCard2>
    </>
  );
}

export default DNews;

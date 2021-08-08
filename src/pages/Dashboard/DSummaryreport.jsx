import AddSummaryReport from "@components/Dashboard/SummaryReport/AddSummaryReport";
import UpdateSummaryReport from "@components/Dashboard/SummaryReport/UpdateSummaryReport";
import ViewSummaryReport from "@components/Dashboard/SummaryReport/ViewSummaryReport";
import DashCard from "@template/DashCard";
import React from "react";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_reports",
    tab_show: true,
    tab_name: "View Summary Report",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewSummaryReport />,
  },
  {
    tab_id: "add_reports",
    tab_show: true,
    tab_name: "Add Summary Report",
    tab_icon: <IoMdAdd />,
    page: <AddSummaryReport />,
  },
  {
    tab_id: "update_reports",
    tab_name: "Update Summary Report",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateSummaryReport />,
  },
];

function DSummaryReport() {
  return (
    <>
      <DashCard options={options}></DashCard>
    </>
  );
}

export default DSummaryReport;

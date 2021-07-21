import DashCard from "@template/DashCard2";
import React from "react";
import { GrFormView } from "react-icons/gr";
import ViewContacts from "../../components/Dashboard/Contact/ViewContacts";

const options = [
  {
    tab_id: "view_contacts",
    tab_show: true,
    tab_name: "View Contacts",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewContacts />,
  },
];

function DContact() {
  return (
    <>
      <DashCard options={options} />
    </>
  );
}

export default DContact;

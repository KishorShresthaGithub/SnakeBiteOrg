import DashCard from "@template/DashCard";
import React from "react";
import ViewContacts from "../../components/Dashboard/Contact/ViewContacts";

function DContact() {
  return (
    <>
      <DashCard btnView="Contact" ViewComponents={<ViewContacts />}></DashCard>
    </>
  );
}

export default DContact;

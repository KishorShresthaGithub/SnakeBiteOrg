import React from "react";
import AddEvents from "@components/Dashboard/Events/AddEvents";
import ViewEvents from "@components/Dashboard/Events/ViewEvents";
import DashCard from "@template/DashCard";
import UpdateEvents from "@components/Dashboard/Events/UpdateEvents";

function DEvents() {
  return (
    <>
      <DashCard
        btnAdd="Add Events"
        btnView="View Events"
        btnUpdate="Update Events"
        AddComponent={<AddEvents />}
        ViewComponents={<ViewEvents />}
        UpdateComponent={<UpdateEvents />}
      ></DashCard>
    </>
  );
}

export default DEvents;

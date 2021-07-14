import React from "react";
import AddAntivenom from "../../components/Dashboard/Antivenom/AddAntivenom";
import ViewAntivenom from "../../components/Dashboard/Antivenom/ViewAntivenom";
import DashCard from "../../template/DashCard";

function DAntivenom() {
  return (
    <>
      <DashCard
        btnAdd="Add Antivenom"
        btnView="View Antivenom"
        AddComponent={<AddAntivenom />}
        ViewComponents={<ViewAntivenom />}
      ></DashCard>
    </>
  );
}

export default DAntivenom;

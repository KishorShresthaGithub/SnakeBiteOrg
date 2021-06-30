import React from "react";
import AddAntivenom from "../../components/Dashboard/Antivenom/AddAntivenom";
import ViewAntivenom from "../../components/Dashboard/Antivenom/ViewAntivenom";
import Dashboard from "../../template/Dashboard";
import DashCard from "../../template/DashCard";

function DAntivenom() {
  return (
    <Dashboard>
      <DashCard
        btnAdd="Add Antivenom"
        btnView="View Antivenom"
        AddComponent={<AddAntivenom />}
        ViewComponents={<ViewAntivenom />}
      ></DashCard>
    </Dashboard>
  );
}

export default DAntivenom;

import React from "react";
import AddAVC from "@components/Dashboard/Antivenom/AddAVC";
import UpdateAVC from "@components/Dashboard/Antivenom/UpdateAVC";
import ViewAVC from "@components/Dashboard/Antivenom/ViewAVC";
import DashCard from "@template/DashCard";

function DAntivenom() {
  return (
    <>
      <DashCard
        btnAdd="Add Antivenom"
        btnView="View Antivenom"
        btnUpdate="Update Anti Venom"
        AddComponent={<AddAVC />}
        ViewComponents={<ViewAVC />}
        UpdateComponent={<UpdateAVC />}
      ></DashCard>
    </>
  );
}

export default DAntivenom;

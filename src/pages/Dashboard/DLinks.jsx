import AddLinks from "@components/Dashboard/Links/AddLinks";
import ViewLinks from "@components/Dashboard/Links/ViewLinks";
import NavWrapper from "@provider/NavProvider";
import DashCard from "@template/DashCard";
import React from "react";
import UpdateLinks from "@components/Dashboard/Links/UpdateLinks";

function DLinks() {
  return (
    <NavWrapper>
      <DashCard
        btnAdd="Add Links"
        btnView="View Links"
        btnUpdate="Update Links"
        AddComponent={<AddLinks />}
        ViewComponents={<ViewLinks />}
        UpdateComponent={<UpdateLinks />}
      />
    </NavWrapper>
  );
}

export default DLinks;

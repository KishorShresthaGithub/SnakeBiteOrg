import React from "react";
import AddLinks from "../../components/Dashboard/Links/AddLinks";
import ViewLinks from "../../components/Dashboard/Links/ViewLinks";
import NavWrapper from "../../provider/NavProvider";
import DashCard from "../../template/DashCard";

function DLinks() {
  return (
    <NavWrapper>
      <DashCard
        btnAdd="Add Links"
        btnView="View Links"
        AddComponent={<AddLinks />}
        ViewComponents={<ViewLinks />}
      ></DashCard>
    </NavWrapper>
  );
}

export default DLinks;

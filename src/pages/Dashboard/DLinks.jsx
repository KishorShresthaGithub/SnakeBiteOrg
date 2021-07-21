import AddLinks from "@components/Dashboard/Links/AddLinks";
import ViewLinks from "@components/Dashboard/Links/ViewLinks";
import NavWrapper from "@provider/NavProvider";
import DashCard from "@template/DashCard";
import React from "react";
import UpdateLinks from "@components/Dashboard/Links/UpdateLinks";
import LinkPage from "../../components/Dashboard/Links/LinkPage";

function DLinks() {
  return (
    <NavWrapper>
      <DashCard
        btnAdd="Add Links"
        btnView="View Links"
        btnUpdate="Update Links"
        btnPage="Update Page"
        AddComponent={<AddLinks />}
        ViewComponents={<ViewLinks />}
        UpdateComponent={<UpdateLinks />}
        LinkPage={<LinkPage />}
      />
    </NavWrapper>
  );
}

export default DLinks;

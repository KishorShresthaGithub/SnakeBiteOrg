import AddLinks from "@components/Dashboard/Links/AddLinks";
import ViewLinks from "@components/Dashboard/Links/ViewLinks";
import NavWrapper from "@provider/NavProvider";
import DashCard from "@template/DashCard";
import React, { useContext } from "react";
import UpdateLinks from "../../components/Dashboard/Links/UpdateLinks";
import { NavContext } from "../../provider/NavProvider";

function DLinks() {
  const nav = useContext(NavContext);

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

import React from "react";
import AddNews from "@components/Dashboard/News/AddNews";
import ViewNews from "@components/Dashboard/News/ViewNews";
import DashCard from "@template/DashCard";
import UpdateNews from "@components/Dashboard/News/UpdateNews";
import "react-quill/dist/quill.snow.css";

function DNews() {
  return (
    <>
      <DashCard
        btnAdd="Add News"
        btnView="View News"
        btnUpdate="Update News"
        AddComponent={<AddNews />}
        ViewComponents={<ViewNews />}
        UpdateComponent={<UpdateNews />}
      ></DashCard>
    </>
  );
}

export default DNews;

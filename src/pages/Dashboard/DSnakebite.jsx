import React from "react";
import AddSnakebite from "@components/Dashboard/Snakebite/AddSnakebite";
import ViewSnakebite from "@components/Dashboard/Snakebite/ViewSnakebite";
import DashCard from "@template/DashCard";

function DSnakebite() {
  return (
    <>
      <DashCard
        btnAdd="Add Snakes & Snakebites"
        btnView="View Snakes & Snakebites"
        AddComponent={<AddSnakebite />}
        ViewComponents={<ViewSnakebite />}
      ></DashCard>
    </>
  );
}

export default DSnakebite;

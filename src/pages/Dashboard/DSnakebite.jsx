import React from "react";
import AddSnakebite from "../../components/Dashboard/Snakebite/AddSnakebite";
import ViewSnakebite from "../../components/Dashboard/Snakebite/ViewSnakebite";
import Dashboard from "../../template/Dashboard";
import DashCard from "../../template/DashCard";

function DSnakebite() {
  return (
    <Dashboard>
      <DashCard
        btnAdd="Add Snakes & Snakebites"
        btnView="View Snakes & Snakebites"
        AddComponent={<AddSnakebite />}
        ViewComponents={<ViewSnakebite />}
      ></DashCard>
    </Dashboard>
  );
}

export default DSnakebite;

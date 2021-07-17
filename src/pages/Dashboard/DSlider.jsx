import React from "react";
import AddSlider from "@components/Dashboard/Slider/AddSlider";
import ViewSlider from "@components/Dashboard/Slider/ViewSlider";
import DashCard from "@template/DashCard";
import UpdateSlider from "@components/Dashboard/Slider/UpdateSlider";

function DSlider() {
  return (
    <>
      <DashCard
        btnAdd="Add Slider"
        btnView="View Slider"
        btnUpdate="Update Slider"
        AddComponent={<AddSlider />}
        ViewComponents={<ViewSlider />}
        UpdateComponent={<UpdateSlider />}
      ></DashCard>
    </>
  );
}

export default DSlider;

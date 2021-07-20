import React, { useState } from "react";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import LinkPage from "../components/Dashboard/Links/LinkPage";
import AddLayout from "./DashTabs/AddLayout";
import UpdateLayout from "./DashTabs/UpdateLayout";
import ViewLayout from "./DashTabs/ViewLayout";

export const DashCardContext = React.createContext();

function DashCard(props) {
  const [layout, setLayout] = useState("View");
  const [updateData, setUpdateData] = useState({});

  const renderTab = () => {
    switch (layout) {
      case "Add":
        return (
          <AddLayout btnAdd={props.btnAdd}>{props.AddComponent}</AddLayout>
        );
      case "View":
        return (
          <ViewLayout btnView={props.btnView}>
            {props.ViewComponents}
          </ViewLayout>
        );
      case "Update":
        return (
          <UpdateLayout btnUpdate={props.btnUpdate}>
            {props.UpdateComponent}
          </UpdateLayout>
        );
      case "Page":
        return <LinkPage btnPage={props.btnPage}>{props.LinkPage}</LinkPage>;
      default:
        return (
          <ViewLayout
            btnView={props.btnView}
            viewComponent={props.ViewComponents}
          />
        );
    }
  };

  return (
    <DashCardContext.Provider
      value={{ layout, setLayout, updateData, setUpdateData }}
    >
      <div className="bg-gray-100 min-h-screen md:px-6 md:py-8">
        <div className="card shadow-md bg-white">
          {/* top section starts  */}
          <div className="flex items-center">
            <div
              className={
                layout === "Add"
                  ? `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200 ${
                      !props.btnAdd ? "hidden" : ""
                    }  `
                  : `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 ${
                      !props.btnAdd ? "hidden" : ""
                    }`
              }
              onClick={() => setLayout("Add")}
            >
              <IoMdAdd />
              {props.btnAdd}
            </div>
            <div
              className={
                layout === "View"
                  ? `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200 ${
                      !props.btnAdd ? "hidden" : ""
                    }`
                  : `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 ${
                      !props.btnAdd ? "hidden" : ""
                    }`
              }
              onClick={() => setLayout("View")}
            >
              <GrFormView className="text-2xl" />
              {props.btnView}
            </div>
            <div
              className={
                layout === "Update"
                  ? `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200 ${
                      !props.btnAdd ? "hidden" : ""
                    }  `
                  : `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 hidden`
              }
              onClick={() => setLayout("Update")}
            >
              {" "}
              <GrFormAttachment className="text-2xl" />
              {props.btnUpdate}
            </div>
            <div
              className={
                layout === "Page"
                  ? `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200 ${
                      !props.btnAdd ? "hidden" : ""
                    }  `
                  : `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 hidden`
              }
              onClick={() => setLayout("Page")}
            >
              {" "}
              <GrFormAttachment className="text-2xl" />
              {props.btnUpdate}
            </div>
          </div>
          {/* top section ends  */}
          {props.children}
          {renderTab(props)}
        </div>
      </div>
    </DashCardContext.Provider>
  );
}

export default DashCard;

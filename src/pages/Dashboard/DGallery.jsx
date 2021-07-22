import AddGallery from "@components/Dashboard/Gallery/AddGallery";
import AddGalleryImage from "@components/Dashboard/Gallery/AddGalleryImage";
import UpdateGallery from "@components/Dashboard/Gallery/UpdateGallery";
import UpdateGalleryImage from "@components/Dashboard/Gallery/UpdateGalleryImage";
import ViewGallery from "@components/Dashboard/Gallery/ViewGallery";
import ViewGalleryImage from "@components/Dashboard/Gallery/ViewGalleryImage";
import DashCard from "@template/DashCard";
import React, { useState } from "react";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const options = [
  {
    tab_id: "view_gallery",
    tab_show: true,
    tab_name: "View Gallery",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewGallery />,
  },
  {
    tab_id: "add_gallery",
    tab_show: true,
    tab_name: "Add Gallery",
    tab_icon: <IoMdAdd />,
    page: <AddGallery />,
  },
  {
    tab_id: "update_gallery",
    tab_name: "Update Gallery",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateGallery />,
  },
  {
    tab_id: "view_single_gallery",
    tab_name: "View Single Gallery",
    tab_show: false,
    tab_icon: <GrFormView className="text-2xl" />,
    page: <ViewGalleryImage />,
  },
  {
    tab_id: "add_single_gallery",
    tab_name: "Add to Gallery",
    tab_show: false,
    tab_icon: <IoMdAdd />,
    page: <AddGalleryImage />,
  },
  {
    tab_id: "update_single_gallery",
    tab_name: "Update Gallery Image",
    tab_show: false,
    tab_icon: <GrFormView className="text-2xl" />,
    page: <UpdateGalleryImage />,
  },
];

export const GalleryImageContext = React.createContext();

function DGallery() {
  const [singleGallery, setSingleGallery] = useState({});

  return (
    <GalleryImageContext.Provider value={{ singleGallery, setSingleGallery }}>
      <DashCard options={options} />
    </GalleryImageContext.Provider>
  );
}

export default DGallery;

import UpdateEvents from "@components/Dashboard/Events/UpdateEvents";
import ViewEvents from "@components/Dashboard/Events/ViewEvents";
import AddGallery from "@components/Dashboard/Gallery/AddGallery";
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
    page: <ViewEvents />,
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
    page: <UpdateEvents />,
  },
  {
    tab_id: "view_single_gallery",
    tab_name: "View Single Gallery",
    tab_show: false,
    tab_icon: <GrFormView className="text-2xl" />,
    page: <UpdateEvents />,
  },
  {
    tab_id: "add_single_gallery",
    tab_name: "Add Single Gallery",
    tab_show: false,
    tab_icon: <IoMdAdd />,
    page: <UpdateEvents />,
  },
  {
    tab_id: "update_single_gallery",
    tab_name: "Update Single Gallery",
    tab_show: false,
    tab_icon: <GrFormView className="text-2xl" />,
    page: <UpdateEvents />,
  },
];

const GalleryImageContext = React.createContext();

function DGallery() {
  const [galleryImage, setGalleryImage] = useState({});

  return (
    <GalleryImageContext.Provider value={{ galleryImage, setGalleryImage }}>
      <DashCard options={options} />
    </GalleryImageContext.Provider>
  );
}

export default DGallery;

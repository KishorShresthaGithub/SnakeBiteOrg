import { GalleryImageContext } from "@pages/Dashboard/DGallery";
import useToken from "@provider/AuthProvider";
import { deleteGallery, getGallery } from "@requests/gallery";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { useToasts } from "react-toast-notifications";
import { deleteImage, getSingleGallery } from "../../../requests/gallery";
import DataTable from "../../DataTable";

function ViewGalleryImage() {
  const dashTab = useContext(DashCardContext);
  const { singleGallery } = useContext(GalleryImageContext);

  const [gallery, setGallery] = useState(singleGallery.GalleryImages);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteImage({
      gallery_id: singleGallery.id,
      gallery_image_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getSingleGallery({ gallery_id: singleGallery.id, signal }).then(
          (res) => {
            const gallery = res?.data.data;
            if (gallery) setGallery(gallery);
          }
        );
      })
      .catch(console.log);
  };

  const columns = [
    { title: "Gallery Image ID", field: "id", width: "10%" },
    {
      title: "Gallery Image ",
      render: (row) => (
        <a href={row.image} target="_blank" rel="noreferrer" className="m-4">
          <img style={{ width: "300px" }} src={row.image} alt="slider " />
        </a>
      ),
    },
    {
      title: "Modify",
      width: "20%",
      render(row) {
        return (
          <div className="flex flex-row ">
            <RiEditBoxLine
              onClick={() => {
                dashTab.setUpdateData(row);
                dashTab.setLayout("update_gallery");
              }}
              className="bg-blue-400 h-10 w-10 p-2 text-white mr-2"
            />
            <MdDeleteSweep
              onClick={() => handleDelete(row.id)}
              className="bg-red-500 h-10 w-10 p-2 text-white"
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="py-4 flex ">
        <BiBookAdd
          onClick={() => {
            dashTab.setLayout("add_single_gallery");
          }}
          className="bg-pink-400 h-10 w-10 p-2 text-white mr-2 cursor-pointer"
        ></BiBookAdd>
        <span className="text-xl "> Add New Image</span>
      </div>

      <DataTable title="Gallery" columns={columns} data={gallery} />
    </>
  );
}

export default ViewGalleryImage;

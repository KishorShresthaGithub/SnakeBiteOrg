import { GalleryImageContext } from "@pages/Dashboard/DGallery";
import useToken from "@provider/AuthProvider";
import { deleteImage, getSingleGallery } from "@requests/gallery";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { useToasts } from "react-toast-notifications";
import DataTable from "../../DataTable";

function ViewGalleryImage() {
  const { updateData, setLayout } = useContext(DashCardContext);
  const { setSingleGallery } = useContext(GalleryImageContext);

  const [gallery, setGallery] = useState([]);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const getGalleryCallback = useCallback(
    (signal) => {
      getSingleGallery({ gallery_id: updateData.id, signal })
        .then((res) => {
          let gallery = res?.data?.data;
          if (gallery) setGallery(gallery.GalleryImages);
        })
        .catch(console.log);
    },
    [updateData.id]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getGalleryCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getGalleryCallback]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteImage({
      gallery_id: updateData.id,
      gallery_image_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getSingleGallery({ gallery_id: updateData.id, signal }).then((res) => {
          const gallery = res?.data.data;

          if (gallery) setGallery(gallery.GalleryImages);
        });
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
                setSingleGallery(row);
                setLayout("update_single_gallery");
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
      <h2>Gallery ID: {updateData.id}</h2>
      <div className="py-4 flex ">
        <BiBookAdd
          onClick={() => {
            setLayout("add_single_gallery");
          }}
          className="bg-pink-400 h-10 w-10 p-2 text-white mr-2 cursor-pointer rounded"
        ></BiBookAdd>
        <span className="text-xl "> Add New Image</span>
      </div>

      <DataTable title="Gallery" columns={columns} data={gallery} />
    </>
  );
}

export default ViewGalleryImage;

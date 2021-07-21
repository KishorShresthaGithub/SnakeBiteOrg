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
import { GalleryImageContext } from "@pages/Dashboard/DGallery";
import DataTable from "../../DataTable";

function ViewGallery() {
  const dashTab = useContext(DashCardContext);
  const { setSingleGallery } = useContext(GalleryImageContext);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [gallery, setGallery] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteGallery({
      gallery_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getGallery({ signal }).then((res) => {
          const gallery = res?.data.data;
          if (gallery) setGallery(gallery);
        });
      })
      .catch(console.log);
  };

  const getGalleryCallback = useCallback((signal) => {
    getGallery({ signal })
      .then((res) => {
        const gallery = res.data.data;
        if (gallery) setGallery(gallery);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getGalleryCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getGalleryCallback]);

  const columns = [
    { title: "Gallery ID", field: "id", width: "10%" },
    {
      title: "Gallery Title ",
      field: "title",
    },
    {
      title: "Modify",
      width: "20%",
      render(row) {
        return (
          <div className="flex flex-row ">
            <BiBookAdd
              onClick={() => {
                setSingleGallery(row);
                dashTab.setLayout("view_single_gallery");
              }}
              className="bg-pink-400 h-10 w-10 p-2 text-white mr-2"
            />

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
      <DataTable
        title="Gallery"
        detailPanel={[
          {
            tooltip: "Show Description",
            render: (rowData) => {
              return (
                <div
                  style={{ padding: "30px" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(rowData.description),
                  }}
                ></div>
              );
            },
          },
          {
            tooltip: "Show Image",
            icon: "image",
            render: (row) => {
              return (
                <div className="flex flex-wrap">
                  {row.GalleryImages.map((res, index) => (
                    <a
                      key={index}
                      href={res.image}
                      target="_blank"
                      rel="noreferrer"
                      className="m-4"
                    >
                      <img
                        style={{ width: "300px" }}
                        src={res.image}
                        alt="slider "
                      />
                    </a>
                  ))}
                </div>
              );
            },
          },
        ]}
        columns={columns}
        data={gallery}
      />
    </>
  );
}

export default ViewGallery;

import useToken from "@provider/AuthProvider";
import { getSnakearts } from "@requests/events";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import "react-quill/dist/quill.snow.css";
import { useToasts } from "react-toast-notifications";
import { deleteGallery, getGallery } from "../../../requests/gallery";
import DataTable from "../../DataTable";

function ViewGallery() {
  const dashTab = useContext(DashCardContext);
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

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getSnakearts({ signal })
      .then((res) => {
        const events = res.data.data;
        if (events) setGallery(events);
      })
      .catch(console.log);

    return () => {
      signal.cancel();
    };
  }, []);

  const columns = [
    { title: "snakeart ID", field: "id", width: "10%" },
    {
      title: "snakeart Title ",
      field: "title",
    },
    {
      title: "snakeart Start Date",
      render: (row) => moment(row.start_date).format("YYYY-MM-DD"),
    },
    {
      title: "snakeart End Date",
      render: (row) => moment(row.end_date).format("YYYY-MM-DD"),
    },
    { title: "snakeart Location", field: "location" },
    { title: "snakeart Time", field: "time" },

    {
      title: "Modify",
      width: "20%",
      render(row) {
        return (
          <div>
            <RiEditBoxLine
              onClick={() => {
                dashTab.setLayout("Update");
                dashTab.setUpdateData(row);
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
        title="Snakearts"
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
                <div>
                  <a href={row.image} target="_blank" rel="noreferrer">
                    <img
                      style={{ width: "300px" }}
                      src={row.image}
                      alt="slider "
                    />
                  </a>
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

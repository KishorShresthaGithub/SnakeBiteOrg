import useToken from "@provider/AuthProvider";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import "react-quill/dist/quill.snow.css";
import { useToasts } from "react-toast-notifications";
import { deleteAVC, getAVCs } from "../../../requests/avc";
import DataTable from "../../DataTable";

function ViewAVC() {
  const dashTab = useContext(DashCardContext);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [avcs, setAVC] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteAVC(
      {
        avc_id: id,
        accesstoken: access_token,
      },
      addToast
    )
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getAVCs({ signal })
          .then((res) => {
            const avc = res.data.data;
            if (avc) setAVC(avc);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getAVCs({ signal })
      .then((res) => {
        const avc = res.data?.data;
        if (avc) setAVC(avc);
      })
      .catch(console.log);

    return () => {
      signal.cancel();
    };
  }, []);

  const columns = [
    { title: "AVC ID", field: "id", width: "10%" },
    {
      title: "AVC Name",
      field: "name",
    },
    { title: "AVC District", field: "district" },

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
        title="Anti Venom Centers"
        /*   detailPanel={[
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
        ]} */
        columns={columns}
        data={avcs}
      />
    </>
  );
}

export default ViewAVC;

import useToken from "@provider/AuthProvider";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";

import { useToasts } from "react-toast-notifications";
import { deleteAVC, getAVCs } from "@requests/avc";
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

        getAVCs({ signal }).then((res) => {
          const avc = res.data.data;
          if (avc) setAVC(avc);
        });
      })
      .catch(console.log);
  };

  const getAVCCallback = useCallback((signal) => {
    getAVCs({ signal })
      .then((res) => {
        const avc = res.data?.data;
        if (avc) setAVC(avc);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getAVCCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getAVCCallback]);

  const columns = [
    { title: "AVC ID", field: "id", width: "10%" },
    {
      title: "AVC Name",
      field: "name",
    },
    {
      title: "AVC Contact",
      field: "contact",
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
                dashTab.setLayout("update_avc");
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
        detailPanel={[
          {
            tooltip: "Show Image",
            render: (row) => {
              if (row.map_location) {
                return (
                  <div>
                    <iframe
                      width="300"
                      height="200"
                      title={row.id}
                      src={row.map_location}
                      frameBorder="0"
                      scrolling="no"
                    />
                  </div>
                );
              }

              return "";
            },
          },
        ]}
        columns={columns}
        data={avcs}
      />
    </>
  );
}

export default ViewAVC;

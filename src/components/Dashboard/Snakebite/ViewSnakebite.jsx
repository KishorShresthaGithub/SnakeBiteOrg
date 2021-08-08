import useToken from "@provider/AuthProvider";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import "react-responsive-modal/styles.css";
import { useToasts } from "react-toast-notifications";
import { deleteSnake, getSnakes } from "@requests/snakes";
import DataTable from "../../DataTable";

function ViewSnakebite(props) {
  const dashTab = useContext(DashCardContext);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [snakebite, setSnakebite] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteSnake(
      {
        snake_id: id,
        accesstoken: access_token,
      },
      addToast
    )
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getSnakes({ signal }).then((res) => {
          const snakebites = res.data.data;
          if (snakebites) setSnakebite(snakebites);
        });
      })
      .catch(console.log);
  };

  const getSnakebitesCallback = useCallback((signal) => {
    return getSnakes({ signal })
      .then((res) => {
        const snakebites = res?.data?.data;
        if (snakebites) setSnakebite(snakebites);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getSnakebitesCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getSnakebitesCallback]);

  const columns = [
    { title: "Snakebite ID", field: "id", width: "10%" },
    {
      title: "Snakebite Name",
      field: "name",
    },
    { title: "Snakebite Scientific Name", field: "scientific_name" },

    {
      title: "Modify",
      width: "20%",
      render(row) {
        return (
          <div>
            <RiEditBoxLine
              onClick={() => {
                dashTab.setUpdateData(row);
                dashTab.setLayout("update_snakes");
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
        title="Snakebites"
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
        data={snakebite}
      />
    </>
  );
}

export default ViewSnakebite;

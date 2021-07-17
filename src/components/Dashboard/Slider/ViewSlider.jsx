import useToken from "@provider/AuthProvider";
import { deleteSlider, getSliders } from "@requests/sliders";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import "react-responsive-modal/styles.css";
import { useToasts } from "react-toast-notifications";
import DataTable from "../../DataTable";

function ViewSlider() {
  const dashTab = useContext(DashCardContext);
  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [slider, setSlider] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delet this resource?")) return;

    deleteSlider({
      slider_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getSliders({ signal })
          .then((res) => {
            const sliders = res.data.data;
            if (sliders) setSlider(sliders);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getSliders({ signal })
      .then((res) => {
        const sliders = res.data.data;
        if (sliders) setSlider(sliders);
      })
      .catch(console.log);

    return () => {
      signal.cancel();
    };
  }, []);

  const columns = [
    { title: "Slider ID", field: "id", width: "10%" },
    {
      title: "Slider Image",

      render: (row) => (
        <a href={row.image} target="_blank" rel="noreferrer">
          <img style={{ width: "300px" }} src={row.image} alt="slider " />
        </a>
      ),
    },
    { title: "Slider Caption", field: "caption" },
    { title: "Slider Position", field: "position" },

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
      <DataTable columns={columns} data={slider} />
    </>
  );
}

export default ViewSlider;

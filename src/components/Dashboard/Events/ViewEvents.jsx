import useToken from "@provider/AuthProvider";
import { deleteEvent, getEvents } from "@requests/events";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";

import { useToasts } from "react-toast-notifications";
import DataTable from "../../DataTable";

function ViewEvents() {
  const dashTab = useContext(DashCardContext);
  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [events, setEvent] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteEvent({
      event_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getEvents({ signal })
          .then((res) => {
            const events = res.data.data;
            if (events) setEvent(events);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  const getEventsCallback = useCallback((signal) => {
    return getEvents({ signal })
      .then((res) => {
        const events = res?.data.data;
        if (events) setEvent(events);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getEventsCallback(signal).catch(console.log);

    return () => {
      signal.cancel();
    };
  }, [getEventsCallback]);

  const columns = [
    { title: "Event ID", field: "id", width: "10%" },
    {
      title: "Event Title ",
      field: "title",
    },
    {
      title: "Event Start Date",
      render: (row) => moment(row.start_date).format("YYYY-MM-DD"),
    },
    {
      title: "Event End Date",
      render: (row) => moment(row.end_date).format("YYYY-MM-DD"),
    },
    { title: "Event Location", field: "location" },
    { title: "Event Time", field: "time" },

    {
      title: "Modify",
      width: "20%",
      render(row) {
        return (
          <div>
            <RiEditBoxLine
              onClick={() => {
                dashTab.setLayout("update_events");
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
        title="Events"
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
        data={events}
      />
    </>
  );
}

export default ViewEvents;

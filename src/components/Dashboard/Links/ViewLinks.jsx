import DataTable from "@components/DataTable";
import useToken from "@provider/AuthProvider";
import { NavContext } from "@provider/NavProvider";
import { deleteNav, getNavLinksAll } from "@requests/nav";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine, RiPagesLine } from "react-icons/ri";
import "react-responsive-modal/styles.css";
import { useToasts } from "react-toast-notifications";

function ViewLinks() {
  const dashTab = useContext(DashCardContext);
  //init select
  const { getNav } = useContext(NavContext);
  const { addToast } = useToasts();

  const { access_token } = useToken();
  const [links, setLinks] = useState([]);

  //init table
  const getNavs = useCallback(async (signal) => {
    try {
      const res = await getNavLinksAll({ signal });

      if (res) {
        const linksDB = res?.data?.data;

        linksDB?.forEach((link, index) => {
          if (link.parent_link !== null) {
            let parent = linksDB.find((res) => res.id === link.parent_link);
            link.parent = parent;
          }
        });

        setLinks(linksDB);
      }
    } catch (err) {
      console.log("Error", err);
    }
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteNav({
      nav_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getNavs(signal).catch(console.log);
      })
      .catch(console.log);
  };

  useEffect(() => {
    const signal = axios.CancelToken.source();

    Promise.all([getNavs(signal), getNav(signal)]).catch(console.log);

    return () => {
      signal.cancel();
    };
  }, [getNav, getNavs]);

  const columns = [
    { title: "Link ID", field: "id" },
    { title: "Link Title", field: "title" },
    { title: "Link", field: "link" },
    {
      title: "Parent Link",
      field: "parent",
      render(row) {
        return <span>{row.parent?.title}</span>;
      },
    },
    { title: "Position", field: "position" },
    {
      title: "Page",
      render(row) {
        return (
          <div>
            <RiPagesLine
              className="bg-pink-400 h-10 w-10 p-2 text-white mr-2"
              onClick={() => {
              
                dashTab.setUpdateData(row);
                  dashTab.setLayout("page_links");
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Modify",
      render(row) {
        return (
          <div>
            <RiEditBoxLine
              onClick={() => {
                dashTab.setLayout("update_links");
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
      <DataTable title="Link table" columns={columns} data={links} />
    </>
  );
}

export default ViewLinks;

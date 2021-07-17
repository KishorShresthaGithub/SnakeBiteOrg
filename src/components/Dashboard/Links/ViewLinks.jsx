import { cancelToken } from "@provider/AxiosCancel";
import { NavContext } from "@provider/NavProvider";
import { deleteNav, getNavLinksAll } from "@requests/nav";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import DataTable from "../../DataTable";

import useToken from "@provider/AuthProvider";
import { useToasts } from "react-toast-notifications";

function ViewLinks() {
  const dashTab = useContext(DashCardContext);
  const { getNav } = useContext(NavContext);
  const { addToast } = useToasts();

  const { access_token } = useToken();

  const [page, setPage] = useState(false);
  const [links, setLinks] = useState([]);

  const getNavs = useCallback(async (signal) => {
    try {
      const res = await getNavLinksAll({ signal });
      if (res) {
        const linksDB = res.data.data;

        linksDB?.forEach((link, index) => {
          if (link.parent_link !== null) {
            let parent = linksDB.find((res) => res.id === link.parent_link);

            link.parent = parent;
          }
        });

        setLinks(linksDB);
      }
    } catch (err) {
      return cancelToken(err);
    }
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delet this resource?")) return;

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
  }, [dashTab, getNav, getNavs]);

  const [updateLink, setUpdateLink] = useState({
    id: 0,
    title: "",
    link: "",
    page: "",
    parent: {},
    parent_link: 0,
  });

  const onOpenPageModel = (model) => {
    setUpdateLink({
      id: model.id,
      title: model.title,
      link: model.link,
      page: model.page,
      parent_link: model.parent_link,
    });
    setPage(true);
  };
  const onClosePageModel = () => setPage(false);

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
        return <div onClick={() => onOpenPageModel(row)}>Page</div>;
      },
    },
    {
      title: "Modify",
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
      <DataTable columns={columns} data={links} />

      <Modal open={page} onClose={onClosePageModel} center>
        <h2>Page</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(updateLink.page),
          }}
        ></div>
      </Modal>
    </>
  );
}

export default ViewLinks;

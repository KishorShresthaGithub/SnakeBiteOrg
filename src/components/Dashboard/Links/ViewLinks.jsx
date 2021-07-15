import axios from "axios";
import DOMPurify from "dompurify";
import MaterialTable from "material-table";
import React, { useCallback, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { cancelToken } from "../../../provider/AxiosCancel";
import { getNavLinksAll } from "../../../requests/nav";

function ViewLinks() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(false);

  const [links, setLinks] = useState([]);
  const [updateLink, setUpdateLink] = useState({
    id: 0,
    title: "",
    link: "",
    page: "",
    parent: {},
    parent_link: 0,
  });

  const onOpenModal = (model) => {
    setUpdateLink({
      id: model.id,
      title: model.title,
      link: model.link,
      page: model.page,
      parent_link: model.parent_link,
    });
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

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
              onClick={() => onOpenModal(row)}
              className="bg-blue-400 h-10 w-10 p-2 text-white mr-2"
            />
            <MdDeleteSweep className="bg-red-500 h-10 w-10 p-2 text-white" />
          </div>
        );
      },
    },
  ];

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

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getNavs(signal).catch(console.log);

    return () => {
      signal.cancel();
    };
  }, [getNavs]);

  return (
    <>
      <MaterialTable columns={columns} data={links} />

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Page</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(updateLink.page),
          }}
        ></div>
      </Modal>

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

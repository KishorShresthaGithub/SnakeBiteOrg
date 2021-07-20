import useToken from "@provider/AuthProvider";
import { deleteNews, getNews } from "@requests/news";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import "react-quill/dist/quill.snow.css";
import { useToasts } from "react-toast-notifications";
import DataTable from "../../DataTable";

function ViewNews() {
  const dashTab = useContext(DashCardContext);
  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [news, setNews] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteNews({
      news_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getNews({ signal })
          .then((res) => {
            const news = res.data.data;
            if (news) setNews(news);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getNews({ signal })
      .then((res) => {
        const news = res.data.data;
        if (news) setNews(news);
      })
      .catch(console.log);

    return () => {
      signal.cancel();
    };
  }, []);

  const columns = [
    { title: "News ID", field: "id", width: "10%" },
    {
      title: "News Title ",
      field: "title",
    },
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
        title="News"
        detailPanel={[
          {
            tooltip: "Show Description",
            render: (row) => {
              return (
                <div
                  style={{ padding: "30px" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(row.description),
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
                      alt="news "
                    />
                  </a>
                </div>
              );
            },
          },
        ]}
        columns={columns}
        data={news}
      />
    </>
  );
}

export default ViewNews;

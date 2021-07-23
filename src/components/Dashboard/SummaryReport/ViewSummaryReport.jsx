import useToken from "@provider/AuthProvider";
import {
  deleteSummaryReport,
  getSummaryReports,
} from "@requests/summaryreport";
import { DashCardContext } from "@template/DashCard";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { useToasts } from "react-toast-notifications";
import DataTable from "@components/DataTable";  
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function ViewSummaryReport() {
  const dashTab = useContext(DashCardContext);

  const { addToast } = useToasts();
  const { access_token } = useToken();

  const [reports, setReport] = useState([]);

  const handleDelete = (id) => {
    if (!window.confirm("Do you want to delete this resource?")) return;

    deleteSummaryReport({
      summaryreport_id: id,
      accesstoken: access_token,
    })
      .then((res) => {
        addToast(res.data.message, { appearance: "success" });
        const signal = axios.CancelToken.source();

        getSummaryReports({ signal })
          .then((res) => {
            const report = res.data.data;
            if (report) setReport(report);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  const getNewsCallback = useCallback((signal) => {
    return getSummaryReports({ signal })
      .then((res) => {
        const report = res.data.data;
        if (report) setReport(report);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getNewsCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getNewsCallback]);

  const columns = [
    { title: "Report ID", field: "id", width: "10%" },
    {
      title: "Report Title ",
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
                dashTab.setUpdateData(row);
                dashTab.setLayout("update_reports");
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
            tooltip: "Show PDF",
            icon: "image",
            render: (row) => {
              return (
                <div>
                  <Document file={row.pdf_link}>
                    <Page pageNumber={1} />
                  </Document>
                </div>
              );
            },
          },
        ]}
        columns={columns}
        data={reports}
      />
    </>
  );
}

export default ViewSummaryReport;

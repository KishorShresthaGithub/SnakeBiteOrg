import { getSummaryReport } from "@requests/summaryreport";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { server_url } from "@requests/config";
import truncate from "html-truncate";
import { FormattedMessage } from "react-intl";

function Books() {
  const [report, setReport] = useState({
    id: 0,
    pdf_link: "",
    title: "",
    description: "",
  });

  const [isRead, setRead] = useState(false);

  const getReportCallback = useCallback((signal) => {
    getSummaryReport({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data) setReport(data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getReportCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getReportCallback]);

  return (
    <div className="md:mx-10 w-80 md:w-auto bg_lightGrey p-4 md:p-8 shadow-md">
      <h1 className="text-2xl font-bold mb-2">
        <FormattedMessage id="summary_report" defaultMessage="Summary Report" />
      </h1>
      <hr className="border-1 border-gray-400 py-2" />

      <Document file={report.pdf_link}>
        <Page pageNumber={1} />
      </Document>

      <div className="text-center">
        <h1 className="text-xl font-bold py-4">{report.title}</h1>
        <div
          className="p-5 text-justify"
          style={{ maxHeight: "500px", overflowY: "auto" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              !isRead ? truncate(report.description, 150) : report.description
            ),
          }}
        ></div>
        {report.description !== "" ? (
          <span
            className="block text-blue-500"
            onClick={() => setRead(!isRead)}
          >
            Read {!isRead ? "More" : "Less"}
          </span>
        ) : (
          ""
        )}

        <a
          className="block btn-primary w-full mt-6"
          href={`${server_url}/api/summaryreport/${report.id}/download`}
        >
          <FormattedMessage id="download" defaultMessage="Download" />
        </a>
      </div>
    </div>
  );
}

export default Books;

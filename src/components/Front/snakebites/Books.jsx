import { getSummaryReport } from "@requests/summaryreport";
import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { server_url } from "@requests/config";

function Books() {
  const [report, setReport] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [numPages, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getReportCallback = useCallback((signal) => {
    getSummaryReport({ signal })
      .then((res) => {
        const data = res?.data?.data;
        setReport(data);
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
      <h1 className="text-2xl font-bold mb-2">Books & Articles</h1>
      <hr className="border-1 border-gray-400 py-2" />

      <Document file={report.pdf_link} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>

      <div className="text-center">
        <h1 className="text-xl font-bold py-4">Summary Report</h1>
        <div
          className="p-5"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(report.description),
          }}
        ></div>
        <a
          className="btn-primary w-full mt-6"
          href={`${server_url}/api/summaryreport/${report.id}/download`}
        >
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}

export default Books;

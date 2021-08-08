import axios from "axios";
import DOMPurify from "dompurify";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "../components/Front/TitleBar";
import { getNavLink } from "../requests/nav";

const Pages = () => {
  const { url } = useParams();

  const [link, setLink] = useState({});

  const getLinkCallback = useCallback(
    (signal) => {
      getNavLink({ signal, nav_url: url }).then((res) => {
        const data = res?.data?.data;

        if (data) setLink(data);
      });
    },
    [url]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getLinkCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getLinkCallback]);

  return (
    <>
      <TitleBar name={link.title} />
      <div className="container mx-auto px-4">
        <div
          className="p-5"
          style={{ minHeight: "50vh" }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(link.page) }}
        ></div>
      </div>
    </>
  );
};

export default Pages;

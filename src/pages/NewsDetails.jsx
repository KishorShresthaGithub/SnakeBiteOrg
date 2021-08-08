import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { FacebookProvider, Share } from "react-facebook";
import { BsCalendarFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Books from "../components/Front/snakebites/Books";
import Youtube from "../components/Front/snakebites/Youtube";
import TitleBar from "../components/Front/TitleBar";
import { getNew } from "../requests/news";

function NewsDetails() {
  const { slug } = useParams();
  const [news, setNews] = useState({
    id: 0,
    title: "",
    image: "",
    description: "",
    created_at: "",
  });

  const getNewsCallback = useCallback(
    (signal) => {
      getNew({ news_slug: slug, signal })
        .then((res) => {
          const data = res?.data?.data;
          if (data) setNews(data);
        })
        .catch(console.log);
    },
    [slug, setNews]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getNewsCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getNewsCallback]);

  return (
    <>
      <TitleBar name="News" />
      <div className="container mx-auto px-4">
        {/* container newss starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* news articles starts  */}
          <div className="col-span-2">
            <h1 className="font-bold mt-5 text-3xl">{news.title}</h1>
            <p className="py-2 flex font-bold items-center mb-5">
              <BsCalendarFill className="mr-2" title="Scientific Name" />{" "}
              {moment(news.created_at).format("YYYY MMM DD")}
            </p>
            <img
              className="text-center"
              src={news.image}
              style={{ height: "400px", width: "auto", textAlign: "center" }}
              alt={news.name}
            />
            <div
              className="leading-6 py-10"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(news.description),
              }}
            ></div>

            {/* facebook share starts  */}
            <div className="my-2 flex items-center">
              <FacebookProvider appId="123456789">
                <Share href="http://www.facebook.com">
                  {({ handleClick, loading }) => (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleClick}
                      className="bg-blue-700 px-4 py-2 text-white shadow rounded flex items-center"
                    >
                      {" "}
                      <FaFacebookF className="mr-2" /> Share
                    </button>
                  )}
                </Share>
              </FacebookProvider>
            </div>
            {/* facebook share ends  */}
          </div>
          {/* news articles ends  */}

          {/* books and articles starts  */}
          <Books />
          {/* books and articles ends  */}
        </div>
        {/* container newss ends  */}
      </div>
      <Youtube />
    </>
  );
}

export default NewsDetails;

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import NewsCard from "../components/Front/NewsCard";
import paginateArray from "../components/Front/Paginate";
import TitleBar from "../components/Front/TitleBar";
import { server_url } from "../requests/config";
import { getNews } from "../requests/news";

function News({ intl }) {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const pagData = (data) => setData(paginateArray(data, 6));

  //get snake data from database
  const getNewsCallback = useCallback((signal) => {
    getNews({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) {
          setNews(data);
          pagData(data);
        }
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

  //search for news
  const searchNews = () => {
    //if textbox is empty
    if (search === "") {
      pagData(news);
      return;
    }
    //filter snakes
    const data = news.filter((res) => res.title.toLowerCase().includes(search));

    if (data?.length) setData(data);
    //if no data set placeholder
    else
      setData([
        {
          name: "No results",
          scientific_name: "",
          image: `${server_url}/public/placeholder_logo.svg`,
          description: "",
        },
      ]);
  };

  const renderPageLinks = () => {
    return (
      <div className="my-4 flex items-center">
        <p
          className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4"
          onClick={() => setPage(page - 1 >= 0 ? page - 1 : page)}
        >
          {"<"}
        </p>

        {data?.map((res, index) => (
          <p
            key={index}
            className={`border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 ${
              index === page ? "bg-blue-200" : ""
            }   `}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </p>
        ))}

        <p
          className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4"
          onClick={() => setPage(page + 1 < data.length ? page + 1 : page)}
        >
          {">"}
        </p>
      </div>
    );
  };

  const renderPages = () => {
    if (data[page]?.length) {
      return (
        <>
          {data[page]?.map((res, index) => (
            <NewsCard data={res} key={index} />
          ))}
        </>
      );
    } else {
      return data?.map((res, index) => <NewsCard data={res} key={index} />);
    }
  };

  return (
    <>
      <TitleBar
        name={intl.formatMessage({
          id: "nav.news",
          defaultMessage: "News",
        })}
      />
      <div className="container mx-auto px-4">
        <div className="my-10">
          <h1 className="text-xl md:text-2xl font-bold mt-10">News & Update</h1>
          <input
            title="Search empty to return back to original list"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="mt-6 border-2 border-gray-200 px-5 shadow-md py-1.5 pr-3 rounded-full w-80"
            placeholder="search...."
          />
          <button
            style={{ transform: "translateX(-40px)" }}
            className="bg_primary hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-full"
            onClick={() => searchNews()}
          >
            Search
          </button>
        </div>
        <div
          style={{ minHeight: "300px" }}
          className="flex flex-wrap justify-center"
        >
          {renderPages()}
        </div>

        <div className="flex justify-center">
          {/* pagination starts  */}
          {renderPageLinks()}
          {/* pagination ends  */}
        </div>
      </div>
    </>
  );
}

export default injectIntl(News);

import { getSnakes } from "@requests/snakes";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import paginateArray from "../components/Front/Paginate";
import Books from "../components/Front/snakebites/Books";
import Snakebite from "../components/Front/snakebites/Snakebite";
import TitleBar from "../components/Front/TitleBar";
import { server_url } from "../requests/config";

function Snakes_and_snakebites({ intl }) {
  const [snakes, setSnakes] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const pagData = (data) => setData(paginateArray(data, 4));

  //get snake data from database
  const getSnakesCallback = useCallback((signal) => {
    getSnakes({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) {
          setSnakes(data);
          pagData(data);
        }
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getSnakesCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getSnakesCallback]);

  //search for snakes
  const searchSnake = () => {
    //if textbox is empty
    if (search === "") {
      pagData(snakes);
      return;
    }
    //filter snakes
    const data = snakes.filter((res) =>
      res.name.toLowerCase().includes(search)
    );

    if (data?.length) setData(paginateArray(data, 4));
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
            <Snakebite
              key={index}
              id={res.id}
              img={res.image}
              title={res.name}
              des={res.description}
              sname={res.scientific_name}
            />
          ))}
          {/* pagination starts  */}
          {renderPageLinks()}
          {/* pagination ends  */}
        </>
      );
    } else {
      return data?.map((res, index) => (
        <Snakebite
          key={index}
          img={res.image}
          title={res.name}
          des={res.description}
          sname={res.scientific_name}
        />
      ));
    }
  };

  return (
    <>
      <TitleBar
        name={intl.formatMessage({
          id: "nav.sns",
          defaultMessage: "Snakes & Snakebites",
        })}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-2xl font-bold mt-10">
          <FormattedMessage
            id="venomous_nepal"
            defaultMessage=" VENEMOUS SNAKES IN NEPAL "
          />
        </h1>
        <input
          title="Search empty to return back to original list"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 border-2 border-gray-200 px-5 shadow-md py-1.5 pr-3 rounded-full w-80"
          placeholder="Search...."
        />
        <button
          style={{ transform: "translateX(-40px)" }}
          className="bg_primary z-auto hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-full"
          onClick={() => searchSnake()}
        >
          <FormattedMessage id="search" defaultMessage="Search" />
        </button>

        {/* container snakes starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* snake articles starts  */}
          <div className="col-span-2">{renderPages()}</div>
          {/* snake articles ends  */}

          {/* books and articles starts  */}
          <Books />
          {/* books and articles ends  */}
        </div>
        {/* container snakes ends  */}
      </div>
      {/* <Youtube /> */}
    </>
  );
}

export default injectIntl(Snakes_and_snakebites);

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import AntivenomCard from "../components/Front/AntivenomCard";
import paginateArray from "../components/Front/Paginate";
import TitleBar from "../components/Front/TitleBar";
import { getDistricts } from "../requests/avc";

function Antivenom() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const pagData = (data) => setData(paginateArray(data, 6));

  // eslint-disable-next-line no-unused-vars
  const [districts, setDistricts] = useState([]);

  const getAVCenterCbck = useCallback((signal) => {
    getDistricts({ signal }).then((res) => {
      const data = res?.data?.data;
      setDistricts(data);
      pagData(data);
    });
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getAVCenterCbck(signal);
    return () => {
      signal.cancel();
    };
  }, [getAVCenterCbck]);

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
            <AntivenomCard key={index} data={res} />
          ))}
        </>
      );
    } else {
      return data?.map((res, index) => (
        <AntivenomCard key={index} data={res} />
      ));
    }
  };

  return (
    <>
      <TitleBar name="Antivenom Center" />

      {/* antivenom center starts  */}
      <div className="pt-10 pb-20 anitvenom   bg_lightGrey">
        {/* <p className="mt-5">He went to Mario Negri Institute of Pharmacological research, Bergamo, Italy for Fellow of International Society of Nephrology (Italy); Fellow ISPD (Dialysis) (London, UK); Fellow JSN (Mie University, </p> */}
        <div className="flex justify-center">{renderPages()}</div>

        <div className="flex justify-center ">{renderPageLinks()}</div>
      </div>
      {/* antivenom center ends  */}
    </>
  );
}

export default Antivenom;

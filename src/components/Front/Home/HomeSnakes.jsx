import { getSnakes } from "@requests/snakes";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { server_url } from "../../../requests/config";

const HomeSnakes = () => {
  const [snakesData, setSnakes] = useState([
    {
      image: `${server_url}/public/placeholder_logo.svg`,
      name: "No snake",
      scientific_name: "",
    },
  ]);

  const getSnakesCallback = useCallback((signal) => {
    getSnakes({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) setSnakes(data);
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

  return (
    <>
      {snakesData?.map((s,index) => (
        <div className="text-center" key={index}>
          <div className="card flex justify-center ">
            <img src={s.image} alt="" className="object-cover h-80 md:h-72" />
          </div>
          <h4 className="font-bold text-xl mt-5">{s.name}</h4>
          <button className="btn-primary mt-5">Info</button>
        </div>
      ))}
    </>
  );
};

export default HomeSnakes;

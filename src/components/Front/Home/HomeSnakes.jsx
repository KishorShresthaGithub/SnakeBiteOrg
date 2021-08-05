import { getSnakes } from "@requests/snakes";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeSnakes = () => {
  const [snakesData, setSnakes] = useState([]);

  const getSnakesCallback = useCallback((signal) => {
    getSnakes({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length >= 5) {
          let snakesData = [...data];
          let tempData = [];
          //get 4 random data
          for (let i = 1; i < 5; i++) {
            let randomIndex = Math.floor(
              Math.random() * (snakesData.length - 1)
            );
            tempData.push(snakesData[randomIndex]);
            //remove data
            snakesData.splice(randomIndex, 1);
          }

          setSnakes(tempData);
        } else {
          setSnakes(data);
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

  return (
    <>
      {snakesData?.map((res, index) => (
        <div className="text-center" key={index}>
          <div className="card flex justify-center ">
            <img src={res.image} alt="" className="object-cover h-80 md:h-72" />
          </div>
          <h4 className="font-bold text-xl mt-5">{res.name}</h4>
          <Link
            className="btn-primary mt-5 block"
            to={`snakes_and_snakebites/${res.id}`}
          >
            Info
          </Link>
        </div>
      ))}
    </>
  );
};

export default HomeSnakes;

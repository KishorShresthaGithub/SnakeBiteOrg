import { getDistricts } from "@requests/avc";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import AntivenomCard from "../AntivenomCard";

const AVCenters = () => {
  const [avc, setAVC] = useState([
    {
      district: "",
      count: 0,
    },
  ]);

  const getAVCCallback = useCallback((signal) => {
    getDistricts({ signal })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) setAVC(data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getAVCCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getAVCCallback]);

  return (
    <>
      <h1 className="flex items-center flex-col md:flex-row font-bold text-xl md:mt-10">
        Antivenom Centers{" "}
        <span className="font-black mx-2 hidden md:block">|</span>{" "}
        <button className="btn-outline-primary mt-2 md:mt-0">
          Find One Near You
        </button>
      </h1>
      {/* <p className="mt-5">He went to Mario Negri Institute of Pharmacological research, Bergamo, Italy for Fellow of International Society of Nephrology (Italy); Fellow ISPD (Dialysis) (London, UK); Fellow JSN (Mie University, </p> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-7 mt-8">
        {avc?.map((av, index) => (
          <AntivenomCard key={index} name={av.district} no={av.count} />
        ))}
      </div>
    </>
  );
};

export default AVCenters;

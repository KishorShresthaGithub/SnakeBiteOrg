import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AntivenomCentersCard from "../components/Front/Antivenom/AntivenomCentersCard";
import TitleBar from "../components/Front/TitleBar";
import { getCentersFromDistrict } from "../requests/avc";

function AntivenomDetails() {
  const { district } = useParams();

  const [avcs, setAVC] = useState([
    { id: 0, name: "", contact: "", map_location: "", district: "" },
  ]);

  const getAvcCallback = useCallback(
    (signal) => {
      getCentersFromDistrict({ district, signal }).then((res) => {
        const data = res?.data?.data;

        if (data?.length) setAVC(data);
      });
    },
    [district]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getAvcCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getAvcCallback]);

  return (
    <>
      <TitleBar name={` ${district} Antivenom Center`} />
      <div className="container mx-auto px-4">
        {/* heading starts  */}
        <div className="flex justify-between py-10">
          <div>
            <h1 className="font-bold text-lg">Emergency Call</h1>
            <h1 className="font-bold text-red-600 text-xl">+943438989349</h1>
          </div>
        </div>
        {/* heading ends  */}

        {/* card section starts  */}
        <div className="mt-8 grid md:grid-cols-4 gap-5 mb-20">
          {avcs?.map((res, index) => (
            <AntivenomCentersCard key={index} data={res} />
          ))}
        </div>
      </div>
      {/* container ends  */}
    </>
  );
}

export default AntivenomDetails;

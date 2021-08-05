import Messages from "@components/Front/About/Messages";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import AboutSnakebite from "../components/Front/About/About_snakebite";
import ImageGallery from "../components/Front/About/ImageGallery";
import StoriesCard from "../components/Front/About/Stories_card";
import Sponsers from "../components/Front/Sponsers";
import TitleBar from "../components/Front/TitleBar";
import { getSummaryReports } from "../requests/summaryreport";

function About() {
  const [report, setReport] = useState([]);

  const getReportCallback = useCallback((signal) => {
    getSummaryReports({ signal, limit: 4 })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) setReport(data);
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
    <>
      <TitleBar name="About Us" />
      <AboutSnakebite />

      {/* stories starts  */}
      <div className="bg_lightGrey">
        <div className="container mx-auto px-4 py-16 md:py-16">
          <h1 className="flex items-center flex-col md:flex-row font-bold text-xl ">
            Summary Report{" "}
          </h1>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-4 gap-10 mt-10">
              {report?.map((res, index) => (
                <StoriesCard key={index} data={res} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* stories ends  */}

      {/* connecting dots starts */}
      <div className="container mx-auto px-4 py-10 md:py-20">
        <h1 className="text-xl font-bold">Messages</h1>
        <Messages />
      </div>
      {/* connecting dots ends  */}

      {/* historical image gallery starts  */}
      <div className="bg_lightGrey py-10 md:py-20">
        <div className="container mx-auto px-4">
          {/* heading section starts  */}
          <div className="text-center">
            <h1 className="text-xl font-bold">HISTORICAL IMAGE GALLERY</h1>
            <button className="btn-outline-primary mt-4">View All</button>
          </div>
          {/* heading section endss  */}

          <div className="grid md:grid-cols-4 mt-10 md:mt-20 gap-6">
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
            <ImageGallery
              img="https://savethesnakes.org/wp-content/uploads/2018/06/District-workshop-860704384-1534792011705.jpg"
              title="identifying venomous snakes; the clinical presentation of snakebite and pathophysiology"
            />
          </div>
        </div>
      </div>
      {/* historical image gallery ends  */}

      {/* Sponsers & Promoters starts  */}
      <div className="container mx-auto px-4 mt-10 md:mt-20 px-8 md:px-4 mb-10 md:mb-32">
        <h1 className="flex items-center font-bold text-xl md:mt-10 mb-10">
          Sponsers & Promoters
        </h1>
        <Sponsers />
      </div>
      {/* Sponsers & Promoters ends  */}
    </>
  );
}

export default About;

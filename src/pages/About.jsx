import Messages from "@components/Front/About/Messages";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import AboutSnakebite from "../components/Front/About/About_snakebite";
import ImageGallery from "../components/Front/About/ImageGallery";
import StoriesCard from "../components/Front/About/Stories_card";
import Sponsers from "../components/Front/Sponsers";
import TitleBar from "../components/Front/TitleBar";
import { getSummaryReports } from "../requests/summaryreport";
import { getGallery } from "../requests/gallery";
import { server_url } from "../requests/config";
import { Link } from "react-router-dom";

function About() {
  const [report, setReport] = useState([]);
  const [gallery, setGallery] = useState([]);

  const getReportCallback = useCallback((signal) => {
    getSummaryReports({ signal, limit: 4 })
      .then((res) => {
        const data = res?.data?.data;

        if (data?.length) setReport(data);
      })
      .catch(console.log);
  }, []);

  const getGalleryCallback = useCallback((signal) => {
    getGallery({ signal, limit: 4 }).then((res) => {
      const data = res?.data?.data;

      if (data?.length) setGallery(data);
    });
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getReportCallback(signal);
    getGalleryCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getGalleryCallback, getReportCallback]);

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
            <h1 className="text-xl font-bold"> IMAGE GALLERY</h1>
            <Link className="btn-outline-primary mt-4 " to="/gallery">
              View All
            </Link>
          </div>
          {/* heading section endss  */}

          <div className="grid md:grid-cols-4 mt-10 md:mt-20 gap-6">
            {gallery?.map((res, index) => (
              <ImageGallery
                key={index}
                to={`gallery/${res.id}`}
                description={res.description}
                created_at={res.created_at}
                img={
                  res?.GalleryImages[0]?.image ||
                  `${server_url}/public/placeholder_logo.svg`
                }
                title={res.title}
              />
            ))}
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

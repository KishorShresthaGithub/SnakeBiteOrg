import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { FacebookProvider, Share } from "react-facebook";
import { BiTime } from "react-icons/bi";
import { BsCalendarFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Books from "../components/Front/snakebites/Books";
import TitleBar from "../components/Front/TitleBar";
import { getEvent } from "../requests/events";

function EventDetails() {
  const { slug } = useParams();

  const [event, setEvent] = useState({
    id: 0,
    title: "",
    start_date: "",
    end_data: "",
    location: "",
    time: "",
    image: "",
    description: "",
  });

  const geteventsCallback = useCallback(
    (signal) => {
      getEvent({ event_slug: slug, signal })
        .then((res) => {
          const data = res?.data?.data;
          if (data) setEvent(data);
        })
        .catch(console.log);
    },
    [slug, setEvent]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();

    geteventsCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [geteventsCallback]);

  return (
    <>
      <TitleBar name="Events" />
      <div className="container mx-auto px-4">
        {/* container eventss starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* events articles starts  */}
          <div className="col-span-2">
            <h1 className="font-bold mt-5 text-3xl">{event.title}</h1>
            <p className="py-2 flex font-semibold items-center mb-5">
              <BsCalendarFill className="mr-2" title="Scientific Name" />
              {moment(event.start_date).format("YYYY MMM DD")} -
              <BsCalendarFill className="mr-2 ml-2" title="Scientific Name" />
              {moment(event.end_date).format("YYYY MMM DD")}
            </p>
            <img
              className="text-center block"
              src={event.image}
              style={{ height: "400px", width: "auto", textAlign: "center" }}
              alt={event.name}
            />
            <hr className="my-3" />
            <div className="leading-6 mt-3 ">
              <p className="flex items-center mt-2 font-semibold">
                <span className="mr-2 block ">
                  <HiLocationMarker title="Location" />
                </span>
                {event.location}
              </p>
            </div>
            <div className="leading-6 ">
              <p className="flex items-center mt-2 font-semibold">
                <span className="mr-2">
                  <BiTime title="Time" />
                </span>
                {event.time}
              </p>
            </div>

            <div
              className="leading-6 py-6"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(event.description),
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
          {/* events articles ends  */}

          {/* books and articles starts  */}
          <Books />
          {/* books and articles ends  */}
        </div>
        {/* container eventss ends  */}
      </div>
      {/* <Youtube /> */}
    </>
  );
}

export default EventDetails;

import { getUpcoming } from "@requests/events";
import axios from "axios";
import dompurify from "dompurify";
import truncate from "html-truncate";
import React, { useCallback, useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdEvent, MdEventNote } from "react-icons/md";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

function UpcomingEvent() {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "No Upcoming Events",
      start_date: new Date(),
      end_date: new Date(),
      // location: "",
      // time: "",
      // image: "",
      // description: "",
    },
  ]);

  const history = useHistory();

  const getUpcomingEventsCallback = useCallback(async (signal) => {
    try {
      const res = await getUpcoming({ signal });
      const data = res?.data?.data;
      if (data?.length) setEvents(data);
    } catch (message) {
      return console.log(message);
    }
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getUpcomingEventsCallback(signal).catch(console.log);

    return () => {
      signal.cancel();
    };
  }, [getUpcomingEventsCallback]);

  const renderDate = (start, end) => {
    start = start.toDateString();
    end = end.toDateString();

    if (start === end) return `${start}`;
    else return `${start} to ${end}`;
  };

  return (
    <>
      <div className="card bg-blue-600 text-white p-4 md:p-8 h-96 w-10/12  overflow-y-scroll scroll ">
        <div className="title flex justify-between items-center w-full ">
          <h1 className="font-bold text-xl ">
            <FormattedMessage
              id="nav.upcoming_events"
              defaultMessage="Upcoming Events"
            />
          </h1>
          <span
            className="font-bold text-xl "
            onClick={() => history.push("/events")}
          >
            <MdEventNote className="cursor-pointer" title="View all events" />
          </span>
        </div>

        {events.map((res, index) => {
          return (
            <div
              className="cursor-pointer"
              onClick={() => history.push(`/events/${res.slug}`)}
              key={index}
            >
              <hr className="mt-2" />
              <p className=" font-bold text-xl mt-5 mb-3">{res.title}</p>
              <div className="flex justify-evenly">
                <div className="flex-grow">
                  {/* date starts  */}
                  <p className="flex items-center mt-4 font-semibold">
                    <span className="mr-2">
                      <MdEvent />
                    </span>
                    {renderDate(
                      new Date(res.start_date),
                      new Date(res.end_date)
                    )}
                  </p>
                  {/* date ends  */}
                  {/* location starts  */}
                  {res.location ? (
                    <p className="flex items-center mt-2 font-semibold">
                      <span className="mr-2">
                        <HiLocationMarker />
                      </span>
                      {res.location}
                    </p>
                  ) : (
                    ""
                  )}
                  {/* location ends  */}
                  {/* time starts  */}
                  {res.time ? (
                    <p className="flex items-center mt-2 font-semibold">
                      <span className="mr-2">
                        <BiTime />
                      </span>
                      {res.time}
                    </p>
                  ) : (
                    ""
                  )}
                  {/* time ends  */}
                </div>
                <div className="">
                  {res.image ? (
                    <img
                      style={{
                        width: "150px",
                        height: "auto",
                        marginRight: "30px",
                      }}
                      src={res.image}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* event description starts  */}
              {res.description ? (
                <>
                  <p className="mt-4">
                    <u>
                      <b>Event Description</b>
                    </u>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncate(
                        dompurify.sanitize(res.description, {
                          ALLOWED_TAGS: ["b", "q"],
                        }),
                        300
                      ),
                    }}
                    className="text-justify mt-2 font-semibold"
                  ></div>
                </>
              ) : (
                ""
              )}
              {/* event description ends  */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UpcomingEvent;

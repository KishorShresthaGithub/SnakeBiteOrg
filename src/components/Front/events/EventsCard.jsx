import DOMPurify from "dompurify";
import truncate from "html-truncate";
import moment from "moment";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";

function EventsCard({ data }) {
  return (
    <Link to={`/events/${data.slug}`} className="m-7 w-3/12">
      <div className="card">
        <img src={data.image} className="w-full h-32 object-cover" alt="Npto" />

        <div className="card-body p-3 mt-2">
          <h1 className="my-2 font-medium text-md flex space-between font-bold items-center">
            <span className="mx-1 inline">
              <BiNews />
            </span>
            {data.title}
          </h1>
          <div className="p2 flex justify-between items-center mb-5">
            <p className="flex items-center text-sm">
              <span className="mr-1">
                <BiTimeFive />
              </span>{" "}
              {moment(data.start_date).format("YYYY MMM DD")} -{" "}
              {moment(data.end_date).format("YYYY MMM DD")}
            </p>
          </div>

          <div className="flex items-center text-sm">
            <div
              dangerouslySetInnerHTML={{
                __html: truncate(
                  DOMPurify.sanitize(data.description, {
                    ALLOWED_TAGS: ["b", "q"],
                  }),
                  150
                ),
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventsCard;

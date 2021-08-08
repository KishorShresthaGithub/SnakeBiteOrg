import DOMPurify from "dompurify";
import truncate from "html-truncate";
import moment from "moment";
import React from "react";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

function ImageGallery({ img, title, description, to, created_at }) {
  return (
    <Link to={to}>
      <div className="card bg-white cursor-pointer">
        <div
          className="mt-4 px-4"
          style={{ maxHeight: "200px", overflow: "hidden" }}
        >
          <img
            style={{ height: "110%", width: "auto" }}
            src={img}
            alt={title}
          />
        </div>

        <div className="mt-4 p-4">
          <p className="font-semibold text-lg">{title}</p>
        </div>
        <div className="mt-1 px-4 ">
          <div className=" text-sm flex items-center">
            {" "}
            <BiTime title="Time" />
            {` ` + moment(created_at).format("YYYY MMM DD")}
          </div>
        </div>

        <div className=" p-4">
          <div
            dangerouslySetInnerHTML={{
              __html: truncate(
                DOMPurify.sanitize(description || "", {
                  ALLOWED_TAGS: ["b", "q"],
                }),
                150
              ),
            }}
          ></div>
        </div>
      </div>
    </Link>
  );
}

export default ImageGallery;

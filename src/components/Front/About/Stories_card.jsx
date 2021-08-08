import moment from "moment";
import React from "react";
import { BiTime } from "react-icons/bi";

function Stories_card({ data }) {
  return (
    <div className="card bg-white rounded-xl p-4 py-10">
      <div className="flex items-center">
        <BiTime />
        <p className="ml-2">{moment(data.created_at).format("YYYY-MM-DD")}</p>
      </div>
      <h2 className="font-bold text-xl mt-3">{data.title}</h2>

      <a
        href={data.pdf_link}
        className="btn-primary block text-center p-2 cursor-pointer m-10"
      >
        Download File
      </a>
    </div>
  );
}

export default Stories_card;

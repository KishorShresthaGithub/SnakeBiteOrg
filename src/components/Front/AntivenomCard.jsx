import React from "react";
import { Link } from "react-router-dom";

function AntivenomCard({ data }) {
  return (
    <Link
      to={`/antivenom/${data.district}`}
      className="m-3"
      style={{ minWidth: "200px", minHeight: "200px" }}
    >
      <div className="card px-3 md:px-4 pt-7 pb-10 bg_white rounded-md">
        <p className="text-sm">District</p>
        <h4 className="md:font-bold font-semibold text-md md:text-lg uppercase mt-2">
          {data.district}
        </h4>
        <h1 className="font-bold text-5xl mt-2">{data.count}</h1>
      </div>
    </Link>
  );
}

export default AntivenomCard;

import React, { useState } from "react";

function AntivenomCentersCard({ data }) {
  return (
    <div className="card rounded-md">
      {/* google map section  */}
      <iframe
        title="venomcentermap"
        src={data.map_location}
        allowFullScreen=""
        loading="lazy"
        className="w-full h-72"
      ></iframe>
      <div className="p-4 md:p-6">
        <h1 className="mt-4 font-bold text-xl">{data.name}</h1>

        <a
          href={`tel:${data.contact}`}
          className="block mt-4 w-full bg-yellow-500 py-1 rounded-full text-lg  text-center font-bold text-white"
        >
          {data.contact}
        </a>
      </div>
    </div>
  );
}

export default AntivenomCentersCard;

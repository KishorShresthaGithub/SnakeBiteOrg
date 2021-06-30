import React from "react";

function AntivenomCentersCard() {
  return (
    <div className="card rounded-md">
      {/* google map section  */}
      <iframe
        title="venomcentermap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.856579661726!2d85.32444601453862!3d27.721714131468364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196dbd2b0f61%3A0xb394bc8610c6459!2sTrioPlus%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1624418122676!5m2!1sen!2snp"
        allowfullscreen=""
        loading="lazy"
        className="w-full h-72"
      ></iframe>
      <div className="p-4 md:p-6">
        <h1 className="mt-4 font-bold text-xl">Name of Antivenom Center</h1>
        <p>Address Goes Here</p>
        <button className="mt-4 w-full bg-yellow-500 py-1 rounded-full text-lg font-bold text-white">
          9848281938
        </button>
      </div>
    </div>
  );
}

export default AntivenomCentersCard;

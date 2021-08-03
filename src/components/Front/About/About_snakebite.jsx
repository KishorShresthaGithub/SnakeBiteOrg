import React from "react";
import sideImg from "@images/Image 11.png";

function About_snakebite() {
  return (
    <div
      className="grid md:grid-cols-3"
      style={{ height: "500px", overflow: "hidden" }}
    >
      <div className=" md:ml-8 col-span-2 flex items-center ">
        <div className="md:p-10">
          <h4 className="text-xl font-bold py-4">
            Always treat a snake bite as if it’s venomous.
          </h4>
          <p className="leading-8 text-justify">
            About 7,000 venomous snake biteTrusted Source cases are reported
            every year in the United States. A bite from a venomous snake is
            rarely deadly — about 6 fatalities are reported every year — but it
            should always be treated as a medical emergency. Even a bite from a
            harmless snake can be serious, leading to an allergic reaction or an
            infection. Venomous snake bites can produce an array of symptoms,
            including localized pain and swelling, convulsions, nausea, and even
            paralysis.About 7,000 venomous snake biteTrusted Source cases are
            reported every year in the United States. A bite from a venomous
            snake is rarely deadly — about 6 fatalities are reported every year
            — but it should always be treated as a medical emergency. Even a
            bite from a harmless snake can be serious, leading to an allergic
            reaction or an infection. Venomous snake bites can produce an array
            of symptoms, including localized pain and swelling, convulsions,
            nausea, and even paralysis.
          </p>
          <button className="mt-8 btn-primary">CONTACT US !</button>
        </div>
      </div>
      <div className="hidden md:block overflow-hidden">
        <img src={sideImg} alt="" />
      </div>
    </div>
  );
}

export default About_snakebite;

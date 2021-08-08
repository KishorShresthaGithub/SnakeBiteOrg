import React from "react";

function Youtube() {
  return (
    <div className="bg_lightGrey py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="flex items-center flex-col md:flex-row font-bold text-xl md:mt-10">
          YouTube Videos Collection{" "}
          <span className="font-black mx-2 hidden md:block">|</span>{" "}
          <button className="btn-outline-primary mt-2 md:mt-0">View All</button>
        </h1>
        <div className="grid md:grid-cols-4 py-10 gap-5">
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/XgTecQ1Beok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="md:w-full md:h-72"
            ></iframe>
          </div>
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/XgTecQ1Beok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="md:w-full md:h-72"
            ></iframe>
          </div>
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/XgTecQ1Beok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="md:w-full md:h-72"
            ></iframe>
          </div>
          <div className="card">
            <iframe
              src="https://www.youtube.com/embed/XgTecQ1Beok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="md:w-full md:h-72"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;

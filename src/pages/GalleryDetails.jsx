import axios from "axios";
import DOMPurify from "dompurify";
import truncate from "html-truncate";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import GalleryCard from "../components/Front/GalleryCard";
import paginateArray from "../components/Front/Paginate";
import TitleBar from "../components/Front/TitleBar";
import { getSingleGallery } from "../requests/gallery";

function GalleryDetails() {
  const { id } = useParams();

  const [gallery, setGallery] = useState({ title: "" });

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const pagData = (data) => setData(paginateArray(data, 6));

  //get snake data from database
  const getGalleryCallback = useCallback(
    (signal) => {
      getSingleGallery({ gallery_id: id, signal })
        .then((res) => {
          const result = res?.data?.data;

          if (result) {
            setGallery(result);
            pagData(result.GalleryImages);
          }
        })
        .catch(console.log);
    },
    [id]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    getGalleryCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getGalleryCallback]);

  const renderPageLinks = () => {
    return (
      <div className="my-4 flex items-center">
        <p
          className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4"
          onClick={() => setPage(page - 1 >= 0 ? page - 1 : page)}
        >
          {"<"}
        </p>

        {data?.map((res, index) => (
          <p
            key={index}
            className={`border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 ${
              index === page ? "bg-blue-200" : ""
            }   `}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </p>
        ))}

        <p
          className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4"
          onClick={() => setPage(page + 1 < data.length ? page + 1 : page)}
        >
          {">"}
        </p>
      </div>
    );
  };

  const renderPages = () => {
    if (data[page]?.length) {
      return (
        <>
          {data[page]?.map((res, index) => (
            <div key={index} style={{ height: "300px", overflow: "hidden" }}>
              <img
                src={res.image}
                alt={res.title}
                className="block m-3 cursor-pointer"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
          ))}
        </>
      );
    } else {
      return data?.map((res, index) => <GalleryCard data={res} key={index} />);
    }
  };

  return (
    <>
      <TitleBar name={gallery.title} />
      <div className="container mx-auto px-4">
        <div
          className="p-5"
          dangerouslySetInnerHTML={{
            __html: truncate(
              DOMPurify.sanitize(gallery.description, {
                ALLOWED_TAGS: ["b", "q"],
              }),
              150
            ),
          }}
        ></div>

        <SRLWrapper>
          <div
            style={{ minHeight: "300px" }}
            className="flex flex-wrap justify-center mt-5"
          >
            {renderPages()}
          </div>
        </SRLWrapper>

        <div className="flex justify-center">
          {/* pagination starts  */}
          {renderPageLinks()}
          {/* pagination ends  */}
        </div>
      </div>
    </>
  );
}

export default GalleryDetails;

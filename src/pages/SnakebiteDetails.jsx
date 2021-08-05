import axios from "axios";
import DOMPurify from "dompurify";
import React, { useCallback, useEffect, useState } from "react";
import { FacebookProvider, Share } from "react-facebook";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import Books from "../components/Front/snakebites/Books";
import Youtube from "../components/Front/snakebites/Youtube";
import TitleBar from "../components/Front/TitleBar";
import { getSnake } from "../requests/snakes";

function Snakebite_Details() {
  const { id } = useParams();
  const [snake, setSnake] = useState({
    id: 0,
    name: "",
    scientific_name: "",
    image: "",
    description: "",
  });

  const getSnakeCallback = useCallback(
    (signal) => {
      getSnake({ id: id, signal })
        .then((res) => {
          const data = res?.data?.data;
          if (data) setSnake(data);
        })
        .catch(console.log);
    },
    [id, setSnake]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getSnakeCallback(signal);
    return () => {
      signal.cancel();
    };
  }, [getSnakeCallback]);

  return (
    <>
      <TitleBar name="Snakebite Details" />
      <div className="container mx-auto px-4">
        {/* container snakes starts  */}
        <div className="grid md:grid-cols-3 my-10">
          {/* snake articles starts  */}
          <div className="col-span-2">
            <h1 className="font-bold mt-5 text-3xl">{snake.name}</h1>
            <p className="py-2 flex font-bold items-center mb-5">
              <BsFillInfoCircleFill className="mr-2" title="Scientific Name" />{" "}
              {snake.scientific_name}
            </p>
            <SRLWrapper>
              <img
                className="text-center"
                src={snake.image}
                style={{ height: "400px", width: "auto", textAlign: "center" }}
                alt={snake.name}
              />
            </SRLWrapper>
            <div
              className="leading-6 py-10"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(snake.description),
              }}
            ></div>

            {/* facebook share starts  */}
            <div className="my-2 flex items-center">
              <FacebookProvider appId="123456789">
                <Share href="http://www.facebook.com">
                  {({ handleClick, loading }) => (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleClick}
                      className="bg-blue-700 px-4 py-2 text-white shadow rounded flex items-center"
                    >
                      {" "}
                      <FaFacebookF className="mr-2" /> Share
                    </button>
                  )}
                </Share>
              </FacebookProvider>
            </div>
            {/* facebook share ends  */}
          </div>
          {/* snake articles ends  */}

          {/* books and articles starts  */}
          <Books />
          {/* books and articles ends  */}
        </div>
        {/* container snakes ends  */}
      </div>
      <Youtube />
    </>
  );
}

export default Snakebite_Details;

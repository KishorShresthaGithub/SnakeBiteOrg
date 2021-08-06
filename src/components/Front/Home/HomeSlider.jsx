import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getSlidersHero } from "@requests/sliders";

function HomeSlider() {
  const [slider, setSlider] = useState([
    { image: "", position: 0, caption: "" },
  ]);

  const getSliderCallback = useCallback(async (signal) => {
    try {
      const res = await getSlidersHero({ signal });
      const data = res?.data?.data;
      setSlider(data);
    } catch (message) {
      return console.log(message);
    }
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();

    getSliderCallback(signal);

    return () => {
      signal.cancel();
    };
  }, [getSliderCallback]);

  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} style={{ zIndex: 0 }}>
        {slider?.map((data, index) => (
          <div key={index}>
            <img
              src={data.image}
              alt=""
              className="z-0 w-full object-cover"
              style={{ height: "80vh" }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default HomeSlider;

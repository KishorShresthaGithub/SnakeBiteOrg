import React, { useState } from "react";
import TitleBar from "../components/TitleBar";
import Page from "../template/Page";
import { AiOutlineClose } from "react-icons/ai";

function ArtAndCulture() {
  let data = [
    {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/3844014/pexels-photo-3844014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/6844527/pexels-photo-6844527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 3,
      imgSrc:
        "https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 4,
      imgSrc:
        "https://images.pexels.com/photos/3281127/pexels-photo-3281127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 5,
      imgSrc:
        "https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 6,
      imgSrc:
        "https://images.pexels.com/photos/1040659/pexels-photo-1040659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 7,
      imgSrc:
        "https://images.pexels.com/photos/3445161/pexels-photo-3445161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 8,
      imgSrc:
        "https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 9,
      imgSrc:
        "https://images.pexels.com/photos/80474/grass-snake-snake-serpentes-natrix-80474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 10,
      imgSrc:
        "https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      id: 11,
      imgSrc:
        "https://images.pexels.com/photos/5899211/pexels-photo-5899211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 12,
      imgSrc:
        "https://images.pexels.com/photos/6200064/pexels-photo-6200064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 13,
      imgSrc:
        "https://images.pexels.com/photos/9199/animal-zoo-green-predator.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 15,
      imgSrc:
        "https://images.pexels.com/photos/4913540/pexels-photo-4913540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    console.log("img", imgSrc);
    setModal(true);
  };
  return (
    <>
      <TitleBar name="Sankes in Art & Cuture" />
      <div className="container mx-auto px-4 mt-20">
        <div className="gallery mb-10">
          {data.map((item, index) => (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          ))}
        </div>
      </div>
      {/* modal starts  */}
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} alt="" />
        <AiOutlineClose
          className="fixed text-white top-4 right-2 font-bold text-4xl cursor-pointer"
          onClick={() => {
            setModal(false);
          }}
        />
      </div>
    </>
  );
}

export default ArtAndCulture;

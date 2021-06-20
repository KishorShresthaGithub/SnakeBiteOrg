import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BiLeftArrowCircle} from 'react-icons/bi'
import {BiRightArrowCircle} from 'react-icons/bi'

function Home_Slider() {
    var settings = {
        dots: true,
        arrow:true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        autoplaySpeed:3000,
        slidesToScroll: 1
      };
      const sliderData=[
          {
              img:"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
              img:"https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
              img:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
      ]
    return (
        <div>
            <Slider {...settings} style={{zIndex:0}}>
               
                {sliderData.map((data)=>(
                <div key={sliderData.indexOf(data)}>
                    <img src={data.img} alt="" className="z-0 w-full object-cover" style={{height:'80vh'}} />
                </div>
                ))}
                           
            </Slider>
      </div>
    )
}

export default Home_Slider

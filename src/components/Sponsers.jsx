import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../images/logo (1).png';
import logo2 from '../images/logo (2).png'
import logo3 from '../images/logo (3).png'
import logo4 from '../images/logo (4).png'
import logo5 from '../images/logo (5).png'


function Sponsers() {
    var settings = {
        dots: false,
        arrow:true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 4,
        autoplaySpeed:3000,
        slidesToScroll: 1
      };
      const sliderData=[
          {
              img:logo1
          },
          {
              img:logo2
         },
          {
              img:logo3
        },
        {
            img:logo4
        },
        {
            img:logo5
        }
      ]
    return (
        <div style={{zIndex:-100}}>
            <Slider {...settings} style={{zIndex:0}}>
               
                {sliderData.map((data)=>(
                <div key={sliderData.indexOf(data)}>
                    <img src={data.img} alt="" className="z-0 mx-8 md:mx-4" />
                </div>
                ))}
                           
            </Slider>
      </div>
    )
}

export default Sponsers

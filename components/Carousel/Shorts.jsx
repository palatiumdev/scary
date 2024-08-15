"use client";
//functions
import { useRef } from "react";

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Slider from "react-slick";
import Video from "../Video/Video";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Shorts = () => {
  const sliderRef = useRef()

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex w-full place-content-center gap-8">
      <button><FaArrowLeft size={50} onClick={() => { sliderRef.current.slickPrev(); }} /></button>
      <div className="w-5/6">
        <Slider {...settings} ref={sliderRef} style={{ maskImage: 'linear-gradient(to right, transparent, black, black, transparent)' }}>
          <div className="w-80 p-5">
            <Video videoId={"cR35mJKAJak"} isShort={true} />
          </div>
          <div className="w-80 p-5">
            <Video videoId={"mnso-G2NpyI"} isShort={true} />
          </div>
          <div className="w-80 p-5">
            <Video videoId={"q_jL-7F2X2M"} isShort={true} />
          </div>
          <div className="w-80 p-5">
            <Video videoId={"O-bNMMN1Tqc"} isShort={true} />
          </div>
        </Slider>
      </div>
      <button><FaArrowRight size={50} onClick={() => { sliderRef.current.slickNext(); }} /></button>

    </div>
  );
}

export default Shorts;

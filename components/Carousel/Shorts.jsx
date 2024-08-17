"use client";
//functions
import { useRef } from "react";
import MediaQuery from 'react-responsive'

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Slider from "react-slick";
import Video from "../Video/Video";

//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Shorts = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex w-full place-content-center gap-8">
      <MediaQuery minWidth={770}>
        <button onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft size={50} />
        </button>
      </MediaQuery>
      <div className="w-5/6">
        <Slider
          {...settings}
          ref={sliderRef}
          style={{ maskImage: 'linear-gradient(to right, transparent, black, black, transparent)' }}
        >
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
      <MediaQuery minWidth={770}>
        <button onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight size={50} />
        </button>
      </MediaQuery>
    </div>
  );
};

export default Shorts;
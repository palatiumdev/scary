"use client";
//functions
import { useRef } from "react";
import MediaQuery from 'react-responsive'

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Slider from "react-slick";
import Short from "../Video/Short";
import "./shorts.css"

//Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Shorts = ({ shorts }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 1500,
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
          style={{
            maskImage: 'linear-gradient(to right, transparent, black, black, transparent)',
            overflow: 'hidden', // Make sure overflow is hidden to avoid stacking issues
          }}
        >
          {shorts.map((short, i) => (
            <div className="w-80 m-5" key={i}>
              <Short videoId={short.videoId} />
            </div>
          ))}
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
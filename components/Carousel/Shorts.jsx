"use client";
//functions
import { useRef } from "react";
import MediaQuery from 'react-responsive'

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Slider from "react-slick";

//Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import dynamic from 'next/dynamic';

const Short = dynamic(() => import('../Video/Short'), {
  ssr: false, // Disable server-side rendering if you want it client-side only
  loading: () => <div className="relative w-full rounded-3xl overflow-clip bg-slate-300 animate-pulse" style={{ paddingBottom: '177.78%' /* (16/9)*100 = 177.78% to maintain 9:16 aspect ratio */ }} />
});

const Shorts = ({ shorts }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
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
            <div className="w-80 p-5" key={i}>
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
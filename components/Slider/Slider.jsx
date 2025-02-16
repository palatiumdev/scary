"use client"
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Slider2 = ({ children, velocity, gap }) => {
  const ref = useRef(null);

  const [duration, setDuration] = useState(0);
  const [animation, setAnimation] = useState("startZero");

  const x = useMotionValue(0);

  useEffect(() => {
    const width = ref.current.offsetWidth;

    if (ref.current) {

      // Set duration based on velocity and ref width
      setDuration((width / 2) / velocity);

      let controls;

      if (animation === "startZero") {
        controls = animate(x, ["-100%", "0%"], {
          duration: width / velocity,
          repeat: Infinity,
          ease: "linear",
        });
      } else if (animation === "paused") {
        controls = animate(x, [x.get(), (parseFloat(x.get()) + 2) + "%"], {
          type: "tween",
          ease: "easeOut",
          duration: 1,
        });
      } else if (animation === "startHover") {
        const deltaPercent = -parseFloat(x.get())
        const delta = parsePercent(deltaPercent, width); //Δs

        controls = animate(x, [x.get(), "0%"], {
          duration: (delta / velocity), //t = delta/velocity
          ease: "linear",
          onComplete: () => {
            setAnimation("startZero");
          },
        });
      }

      return () => {
        if (controls) controls.stop();
      };
    }
  }, [velocity, duration, animation, x]);

  return (
    <div className="relative overflow-hidden" style={{ width: `${children.length * gap}rem` }}>
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        ref={ref}
        style={{ x }}
        onHoverStart={() => setAnimation("paused")}
        onHoverEnd={() => setAnimation("startHover")}
      >
        {/* Render duplicated slides */}
        {[...children, ...children].map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${100 / children.length}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              {slide}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const parsePercent = (percentage, proportion) => {
  return percentage / 100 * proportion
}

export default Slider2;

import React, { forwardRef } from "react";
import profilePic from "/profile2.jpeg";
import { useInView } from "react-intersection-observer";
const Home = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`mb-20`}>
      <div
        ref={ref1}
        className={` pt-32 xl:pt-44 w-5/6 xl:w-2/3 mx-auto flex flex-col gap-5 xl:gap-0 lg:flex-row justify-between`}
      >
        <div className="flex flex-col gap-5 justify-center w-5/6 mx-auto md:w-2/3  text-white p-3">
          <div className="text-gray-300 text-xl md:text-2xl">
            <p
              className={`transition-transform transform duration-500 ${
                inView
                  ? "motion-preset-shrink motion-duration-1000"
                  : "opacity-0"
              }`}
            >
              HELLO THERE!
            </p>
          </div>
          <div className="text-2xl md:text-7xl lg:text-5xl xl:text-7xl flex flex-col gap-4">
            <span
              className={`transition-transform transform duration-500 ${
                inView ? "animate-popUpLate" : "opacity-0"
              }`}
            >
              I am Nipun Baryah,
            </span>
            <span
              className={`transition-transform transform duration-500 ${
                inView ? "animate-popUpLater" : "opacity-0"
              }`}
            >
              a web developer
            </span>
          </div>
          <div
            className={`transition-transform transform duration-500 ${
              inView ? "motion-preset-shrink motion-duration-1500" : "opacity-0"
            } text-gray-400 text-xl`}
          >
            <p>ENTRY LEVEL DEVELOPER</p>
          </div>
        </div>
        <div
          className={`transition-transform transform duration-500 ${
            inView ? "animate-popUpLate" : "opacity-0"
          } w-5/6 mx-auto lg:w-1/3 h-full flex items-center justify-center border border-white rounded-xl`}
        >
          <img
            src={profilePic}
            className="w-full scale-90 hover:scale-100 duration-200 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;

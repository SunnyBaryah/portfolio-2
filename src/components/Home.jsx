import React, { forwardRef } from "react";
import profilePic from "/profile2.jpeg";
import { useInView } from "react-intersection-observer";
const Home = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`min-h-screen `}>
      <div
        ref={ref1}
        className={`transition-transform transform duration-500 ${
          inView ? "animate-popUp" : "opacity-0"
        } pt-32 xl:pt-44 w-5/6 xl:w-2/3 mx-auto flex flex-col gap-5 xl:gap-0 lg:flex-row justify-between`}
      >
        <div className="flex flex-col gap-5 justify-center w-5/6 mx-auto md:w-2/3  text-white p-3">
          <div className="text-gray-300 text-xl md:text-2xl">
            <p>HELLO THERE!</p>
          </div>
          <div className="text-2xl md:text-7xl lg:text-5xl xl:text-7xl flex flex-col gap-4">
            <span>I am Nipun Baryah,</span>
            <span>a web developer</span>
          </div>
          <div className=" text-gray-400 text-xl">
            <p>ENTRY LEVEL DEVELOPER</p>
          </div>
        </div>
        <div className="w-5/6 mx-auto lg:w-1/3 h-full flex items-center justify-center border border-white">
          <img
            src={profilePic}
            className="w-full scale-90 hover:scale-100 duration-200"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;

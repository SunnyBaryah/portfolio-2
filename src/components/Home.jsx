import React, { forwardRef } from "react";
import profilePic from "/profile2.jpeg";
const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen">
      <div className="pt-32 xl:pt-44 w-5/6 xl:w-2/3 mx-auto flex flex-col gap-5 xl:gap-0 lg:flex-row justify-between">
        <div className="flex flex-col gap-5 justify-center w-5/6 mx-auto md:w-2/3  text-white p-3">
          <div className="text-gray-300 text-xl md:text-2xl">
            <p>HELLO THERE!</p>
          </div>
          <div className="text-3xl md:text-7xl lg:text-5xl xl:text-7xl flex flex-col gap-4">
            <p>I am Nipun Baryah,</p>
            <p>a web developer</p>
          </div>
          <div className=" text-gray-400 text-xl">
            <p>ENTRY LEVEL DEVELOPER</p>
          </div>
        </div>
        <div className="w-5/6 mx-auto lg:w-1/3 h-full flex items-center justify-center border-white">
          <img
            src={profilePic}
            className=" border border-spacing-5 w-full p-5 hover:p-0 duration-200"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;

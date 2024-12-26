import React, { forwardRef } from "react";
import aboutPic from "/about3.jfif";
import { useInView } from "react-intersection-observer";
import ProgressBar from "./common/ProgressBar";
const Skills = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="mb-32 w-4/6 mx-auto ">
      <div
        ref={ref1}
        className={`transition-transform transform duration-500 ${
          inView ? "animate-popUp" : "opacity-0"
        } flex flex-col items-center lg:gap-20 text-white`}
      >
        <div className={` flex flex-col items-center mt-14 lg:mt-0`}>
          <h2 className="text-4xl md:text-7xl pt-8 pb-2">Skills</h2>
          <p className="text-gray-400">MY EXPERTISE</p>
        </div>
        <div
          className={`transition-transform transform duration-500 ${
            inView ? "animate-popUp" : "opacity-0"
          } w-full flex flex-col gap-10 items-center mt-14 lg:mt-0`}
        >
          <div className={`w-full flex flex-col gap-2`}>
            <div className="w-full flex justify-between">
              <h1>Object-Oriented Programming in C++</h1>
              <h1>90%</h1>
            </div>

            <ProgressBar
              className={`transition-transform transform duration-500 ${
                inView ? "animate-popUp" : "opacity-0"
              }`}
              targetProgress={90}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <h1>Frontend Development</h1>
              <h1>90%</h1>
            </div>
            {
              <ProgressBar
                className={`transition-transform transform duration-500 ${
                  inView ? "animate-popUp" : "opacity-0"
                }`}
                targetProgress={90}
              />
            }
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <h1>Backend Development</h1>
              <h1>80%</h1>
            </div>
            {
              <ProgressBar
                className={`transition-transform transform duration-500 ${
                  inView ? "animate-popUp" : "opacity-0"
                }`}
                targetProgress={80}
              />
            }
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <h1>Database Management: Mongo DB</h1>
              <h1>85%</h1>
            </div>
            {
              <ProgressBar
                className={`transition-transform transform duration-500 ${
                  inView ? "animate-popUp" : "opacity-0"
                }`}
                targetProgress={85}
              />
            }
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <h1>JS Frameworks: React</h1>
              <h1>80%</h1>
            </div>
            {
              <ProgressBar
                className={`transition-transform transform duration-500 ${
                  inView ? "animate-popUp" : "opacity-0"
                }`}
                targetProgress={80}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;

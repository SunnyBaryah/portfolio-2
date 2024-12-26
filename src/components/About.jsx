import React, { forwardRef } from "react";
import aboutPic from "/about3.jfif";
import { useInView } from "react-intersection-observer";
const About = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="mb-32 ">
      <div
        ref={ref1}
        className={`transition-transform transform duration-500 ${
          inView ? "animate-popUp" : "opacity-0"
        } flex flex-col items-center gap-10 lg:gap-20 text-white`}
      >
        <div className={` flex flex-col items-center mt-14 lg:mt-0`}>
          <h2 className="text-4xl md:text-7xl pt-8 pb-2">About Me</h2>
          <p className="text-gray-400">INTRODUCTION</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-5/6 md:w-4/6 gap-7 lg:gap-20 xl:gap-32">
          <div className="w-full xl:w-2/5 h-full flex items-center justify-center border border-white">
            <img
              src={aboutPic}
              className=" border border-spacing-5 w-full scale-90 hover:scale-100 duration-200"
            />
          </div>
          <div className="w-full xl:w-3/4 lg:text-xl flex items-center">
            <p
              className={`leading-relaxed transition-transform transform duration-1000 ${
                inView ? "animate-popUpLate" : "opacity-0"
              }`}
            >
              I am a dedicated web developer with over a year of hands-on
              experience, including mastering data structures and algorithms
              (DSA) and developing full-stack projects using the MERN stack. My
              journey has involved countless hours of learning and applying
              technologies to create functional, user-friendly, and
              aesthetically pleasing web applications. From front-end
              development with HTML, CSS, and JavaScript to building robust
              back-end systems with Node.js, Express, and MongoDB, I strive to
              deliver seamless digital experiences. Join me as I continue
              exploring new possibilities in web development, pushing
              boundaries, and crafting dynamic, full-stack solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;

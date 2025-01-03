import React, { forwardRef } from "react";
import ProjectCard from "./common/ProjectCard";
import passPic from "/PassGen.JPG?url";
import currencyPic from "/Currency.JPG?url";
import quickBitePic from "/QuickBite.JPG?url";
import codeGeekPic from "/CodeGeek.JPG?url";
import { useInView } from "react-intersection-observer";
const Projects = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  const projects = [
    {
      title: "CodeGeek",
      pic: codeGeekPic,
      link: "https://code-geek-client.vercel.app/",
      descp: "A coding platform inspired by LeetCode, using MERN stack",
    },
    {
      title: "QuickBite",
      pic: quickBitePic,
      link: "https://quick-bite-client.vercel.app",
      descp: "A canteen web application using MERN stack",
    },
    {
      title: "Currency Convertor",
      pic: currencyPic,
      link: "https://sunnybaryah.github.io/currency-convertor/",
      descp: "A currency convertor using React JS",
    },
    {
      title: "Password Generator",
      pic: passPic,
      link: "https://sunnybaryah.github.io/password-generator/",
      descp: "A password generator using React JS",
    },
  ];
  return (
    <div ref={ref} className="w-5/6 mx-auto mb-32 ">
      <div
        ref={ref1}
        className={`transition-transform transform duration-500 ${
          inView ? "animate-popUp" : "opacity-0"
        } flex flex-col items-center gap-10 xl:gap-20 text-white pb-10 mt-12 xl:mt-0`}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl pt-8 pb-4">
            Projects
          </h2>
          <p className="text-gray-400">AN OVERVIEW OF MY WORK</p>
        </div>
        <div
          className={`transition-transform transform duration-500 ${
            inView ? "animate-popUp" : "opacity-0"
          } flex flex-wrap gap-8 w-[90%] justify-center items-center`}
        >
          {projects.length > 0 &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;

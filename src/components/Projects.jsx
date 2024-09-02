import React, { forwardRef } from "react";
import ProjectCard from "./common/ProjectCard";
import calciPic from "/Calci.JPG?url";
import passPic from "/PassGen.JPG?url";
import currencyPic from "/Currency.JPG?url";
import quickBitePic from "/QuickBite.JPG?url";
const Projects = forwardRef((props, ref) => {
  const projects = [
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
    {
      title: "Calculator",
      pic: calciPic,
      link: "https://sunnybaryah.github.io/Calculator/",
      descp: "A simple Calculator using Vanilla JavaScript",
    },
  ];
  return (
    <div
      ref={ref}
      className="w-4/6 mx-auto min-h-screen flex flex-col items-center gap-10 xl:gap-20 text-white pb-10 mt-12 xl:mt-0"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl pt-8 pb-4">Projects</h2>
        <p className="text-gray-400">AN OVERVIEW OF MY WORK</p>
      </div>
      <div className="flex flex-wrap w-4/5 gap-x-20 gap-y-10 justify-center items-center">
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </div>
  );
});

export default Projects;

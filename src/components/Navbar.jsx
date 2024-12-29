import React from "react";
import { useState, useEffect } from "react";
import NavButton from "./common/NavButton";
import { motion, AnimatePresence } from "motion/react";
const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef, skillRef }) => {
  const scrollToSection = (sectionRef) => {
    setIsOpen(!isOpen);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If we scroll down, hide the navbar
        setShowNavbar(false);
      } else {
        // If we scroll up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`bg-black text-white min-w-full p-6 fixed z-10 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } duration-300`}
      >
        <div className="flex items-center justify-between w-3/4 mx-auto">
          <div className="flex gap-1 text-2xl font-semibold">
            <div>NB's</div>
            <div className="text-blue-400">Portfolio</div>
          </div>
          <nav className="hidden lg:block">
            <NavButton onClick={() => scrollToSection(homeRef)}>Home</NavButton>
            <NavButton onClick={() => scrollToSection(aboutRef)}>
              About
            </NavButton>
            <NavButton onClick={() => scrollToSection(skillRef)}>
              Skills
            </NavButton>
            <NavButton onClick={() => scrollToSection(projectsRef)}>
              Projects
            </NavButton>
            <NavButton onClick={() => scrollToSection(contactRef)}>
              Contact
            </NavButton>
          </nav>
          <a
            href="https://drive.google.com/file/d/1R-JVSHL4XUs3Ctn5YklWY_3iJnYuaYHG/view?usp=sharing"
            target="_blank"
          >
            <button className=" bg-white text-blue-400 px-2 py-1 lg:px-4 lg:py-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300 rounded-md">
              My CV
            </button>
          </a>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 fixed z-20 bg-black min-h-screen w-full flex flex-col gap-10 md:gap-16 justify-center content-center text-white text-xl md:text-3xl"
          >
            <NavButton
              className="motion-preset-compress motion-duration-500"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </NavButton>
            <NavButton
              className="motion-preset-compress motion-duration-500"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </NavButton>
            <NavButton
              className="motion-preset-compress motion-duration-500"
              onClick={() => scrollToSection(skillRef)}
            >
              Skills
            </NavButton>
            <NavButton
              className="motion-preset-compress motion-duration-500"
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </NavButton>
            <NavButton
              className="motion-preset-compress motion-duration-500"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </NavButton>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="lg:hidden fixed bottom-10 right-10 z-30">
        <button
          className="flex flex-col justify-between w-10 h-10 md:w-14 md:h-14 focus:outline-none bg-white px-2 py-2 md:px-4 md:py-3 rounded-full z-0"
          onClick={toggleMenu}
        >
          <span
            className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
              isOpen
                ? "rotate-[50deg] translate-y-2.5 md:rotate-[40deg] md:translate-y-3.5"
                : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
              isOpen
                ? "-rotate-[55deg] -translate-y-2.5 md:-rotate-[40deg] md:-translate-y-3.5"
                : ""
            }`}
          ></span>
        </button>
      </div>
    </>
  );
};

export default Navbar;

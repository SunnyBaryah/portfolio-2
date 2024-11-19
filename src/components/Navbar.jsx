import React from "react";
import { useState, useEffect } from "react";
import NavButton from "./common/NavButton";
const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div
      className={`bg-black text-white min-w-full p-6 fixed z-50 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      } duration-300`}
    >
      <div className="flex items-center justify-between w-3/4 mx-auto">
        <div className="flex gap-1 text-2xl font-semibold">
          <div>My</div>
          <div className="text-blue-400">Portfolio</div>
        </div>
        <nav className="hidden lg:block">
          <NavButton onClick={() => scrollToSection(homeRef)}>Home</NavButton>
          <NavButton onClick={() => scrollToSection(aboutRef)}>About</NavButton>
          <NavButton onClick={() => scrollToSection(projectsRef)}>
            Projects
          </NavButton>
          <NavButton onClick={() => scrollToSection(contactRef)}>
            Contact
          </NavButton>
        </nav>
        <a
          href="https://drive.google.com/file/d/1BpvURoUhBN3kgN7FygHosDBEW9xzGOkW/view?usp=sharing"
          target="_blank"
        >
          <button className=" bg-white text-blue-400 px-2 py-1 lg:px-4 lg:py-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300">
            My CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

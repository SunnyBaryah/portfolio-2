import { useRef } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to to-black bg-[length:200%_200%] animate-gradient-slow font-['Poppins'] ">
      {/* Pass refs to the Navbar for scrolling */}
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectRef}
        contactRef={contactRef}
        skillRef={skillRef}
      />

      {/* Pass refs to the sections */}
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />
      <div className="py-2 flex justify-center content-center text-gray-400">
        <p>Made by NipunBaryah</p>
      </div>
    </div>
  );
}

export default App;

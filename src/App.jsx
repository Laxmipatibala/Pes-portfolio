import { useState } from "react";
import About from "./components/About"
import MainPage from "./components/MainPage"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Training from "./components/Training";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import CVDownload from "./components/CVDownload";
import Footer from "./components/Footer";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="m-0 p-0 font-sans text-slate-800 bg-[#f4f7f6] min-h-screen selection:bg-blue-200 relative overflow-x-hidden"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setPos({
          x: clientX / window.innerWidth,
          y: clientY / window.innerHeight,
        });
      }}
    >
      {/* Global Background Interactive Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-purple-200 rounded-full blur-[120px] opacity-70 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${pos.x * 120}px, ${pos.y * 120}px)`,
            top: "-15%",
            left: "-5%",
          }}
        ></div>
        <div
          className="absolute w-[700px] h-[700px] bg-blue-200 rounded-full blur-[140px] opacity-60 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${pos.x * -90}px, ${pos.y * -90}px)`,
            bottom: "-25%",
            right: "-15%",
          }}
        ></div>
        <div
          className="absolute w-[500px] h-[500px] bg-pink-200 rounded-full blur-[100px] opacity-60 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${pos.y * 80}px, ${pos.x * 80}px)`,
            top: "25%",
            left: "50%",
            marginLeft: "-250px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <MainPage />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <Education />
        <CVDownload />
        <Footer />
      </div>
    </div>
  )
}

export default App
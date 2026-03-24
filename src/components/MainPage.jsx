import { useState } from "react";
import formalImg from "./Photos/formal.jpeg";

function MainPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div id="mainpage"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-16 px-4 md:px-8 animate-fade-in-up"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setPos({
          x: clientX / window.innerWidth,
          y: clientY / window.innerHeight,
        });
      }}
    >
      {/* Main Glassy Container - limited by max-w to match other sections */}
      <div className="relative z-10 w-full max-w-7xl min-h-[85vh] rounded-[3rem] bg-white/40 backdrop-blur-[60px] saturate-[150%] border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-center gap-12 group transition-transform duration-700 hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)]">
        
        {/* Subtle Shine/Gloss effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>

        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center relative z-10 text-center lg:text-left mt-8 lg:mt-0">
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
            Hello! I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block my-2">
              Laxmi Pati Bala
            </span>
            <span className="text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 font-bold block mt-4">
              A Full Stack Developer
            </span>
            
          </h1>
          <p className="text-[1.1rem] lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            I’m a full-stack developer specializing in React, Node.js, and Laravel, building robust cloud architectures, dynamic web applications, and scalable backend systems using SQL and MongoDB.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 active:translate-y-0">
                   View Work
               </button>
               <button onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 rounded-2xl bg-white/60 text-slate-800 font-bold text-lg hover:bg-white border border-white/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm">
                   Contact Me
               </button>
          </div>
        </div>

        {/* Right Content / Image Area */}
        <div className="flex-1 flex items-center justify-center relative z-10 w-full mb-8 lg:mb-0">
          
          {/* Aesthetic Interactive Background Blurs (Acting as glowing backdrop) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div 
                className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-300/60 to-blue-400/60 blur-[60px] opacity-80 mix-blend-multiply rounded-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${pos.x * 120}px, ${pos.y * 120}px)`,
                }}
              ></div>
              <div 
                className="absolute w-72 h-72 bg-gradient-to-tr from-indigo-300/60 to-purple-400/60 blur-[60px] opacity-80 mix-blend-multiply rounded-full transition-transform duration-700 ease-out"
                style={{
                  transform: `translate(${pos.x * -150}px, ${pos.y * -150}px)`,
                }}
              ></div>
          </div>

          {/* Portrait Image with floating animation */}
          <div className="relative z-10 w-full max-w-xs lg:max-w-sm aspect-square rounded-full p-2.5 bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] animate-float group/card hover:-rotate-3 hover:scale-[1.03] transition-all duration-700 ease-out">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/30 shadow-inner bg-slate-100">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-400/10 pointer-events-none z-20 mix-blend-overlay"></div>
               <img 
                 src={formalImg} 
                 alt="Laxmi Pati Bala" 
                 className="w-full h-full object-cover object-top group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-700 ease-out" 
                 onError={(e) => { e.target.src = "https://placehold.co/800x800/e2e8f0/475569?text=Profile+Photo"; }}
               />
               
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;
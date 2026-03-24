function About() {
    return (
        <div id="about" className="relative w-full py-24 px-4 md:px-16 flex items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Container matching MainPage */}
            <div className="relative w-full max-w-5xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 lg:p-20 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group transition-transform duration-700 hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)]">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-10">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-700 max-w-4xl leading-relaxed font-medium">
                        I’m a full-stack developer with a strong foundation
                        in building modern web applications using <span className="text-indigo-600 font-bold">React</span>,
                        <span className="text-indigo-600 font-bold"> Node.js</span>, and <span className="text-indigo-600 font-bold">MongoDB</span>. I enjoy creating efficient, 
                        scalable, and user-friendly solutions that balance
                        both frontend experience and backend performance.
                        <br/><br/>
                        Alongside web development, I have solid programming
                        knowledge in C, C++, Java, and JavaScript, which helps
                        me approach problems with a deeper understanding of 
                        logic and system design. I’m always focused on writing
                        clean, maintainable code and continuously improving my
                        skills to stay aligned with current technologies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
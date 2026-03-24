function Skills() {
    const skills = [
        { name: "React", icon: "https://skillicons.dev/icons?i=react&theme=light" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs&theme=light" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb&theme=light" },
        { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql&theme=light" },
        { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel&theme=light" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c&theme=light" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp&theme=light" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java&theme=light" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html&theme=light" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind&theme=light" },
    ];

    return (
        <div id="skills" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-16 relative z-20">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Skills</span>
                </h2>
                
                <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 place-items-center">
                    
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 group/skill cursor-pointer">
                            <div className="relative w-28 h-28 rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center transition-all duration-500 group-hover/skill:-translate-y-4 group-hover/skill:shadow-[0_20px_40px_rgba(79,70,229,0.15)] group-hover/skill:bg-white group-hover/skill:border-indigo-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl"></div>
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="relative z-10 w-16 h-16 object-contain transition-transform duration-500 group-hover/skill:scale-[1.15]"
                                />
                            </div>
                            <span className="text-slate-600 font-extrabold text-sm tracking-widest uppercase opacity-80 group-hover/skill:opacity-100 group-hover/skill:text-indigo-600 transition-all duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
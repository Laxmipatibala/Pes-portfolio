function Education() {
    const educationPaths = [
        {
            degree: "Bachelor of Technology: Computer Science and Engineering",
            school: "Lovely Professional University",
            year: "2023 - 2027",
            details: "Specialized in Advanced Web Engineering. Delivered multiple high-performance projects and actively led tech clubs. CGPA: 7.53"
        },
        {
            degree: "Intermediate",
            school: "K.P.S College, Patna",
            year: "2021 - 2023",
            details: "Completed 11th and 12th with 67%"
        },
        {
            degree: "Matriculation",
            school: "St. Mary's School Masaurhi, Patna",
            year: "2009 - 2021",
            details: "Completed 10th with 75%"
        }
    ];

    return (
        <div id="education" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-16 relative z-20 text-center">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Education</span>
                </h2>
                
                {/* Beautiful Vertical Cards Layout */}
                <div className="relative z-20 flex flex-col gap-8 max-w-4xl mx-auto w-full">
                    
                    {educationPaths.map((edu, idx) => (
                        <div key={idx} className="group relative w-full flex flex-col md:flex-row p-6 md:p-8 rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-white/70">
                            
                            {/* Academic Icon / Year Badge (Left side on Desktop) */}
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:w-48 md:border-r border-indigo-200/50 md:pr-6 flex flex-col justify-center">
                                <div className="text-sm font-black text-indigo-500 tracking-wider uppercase mb-1">{edu.year}</div>
                                <div className="text-indigo-900 font-semibold opacity-70">Full-Time</div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-grow md:pl-8">
                                <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight">
                                    {edu.degree}
                                </h3>
                                <div className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 8.56l-1.222.524a1 1 0 000 1.838l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-1.222-.524-1.015.435L15 9.718l-1.076.461a.999.999 0 00-.51 1.488l1.417 2.479c.097.169.172.35.216.536A2.5 2.5 0 0115 15.5V16H5v-.5a2.5 2.5 0 01.156-1.144c.044-.185.118-.363.213-.53l1.41-2.463a1 1 0 00-.5L5.076 9.7l-.396-.17-1.37-.588z" />
                                    </svg>
                                    {edu.school}
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    {edu.details}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Education;
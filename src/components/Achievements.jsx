function Achievements() {
    const achievements = [
        {
            title: "Top 1% in Tech Challenge",
            date: "Nov 2024",
            description: "Ranked among the top 1% globally in an advanced Data Structures and Algorithms hackathon out of 10,000+ engineers."
        },
        {
            title: "Open Source Contributor",
            date: "Jul 2024",
            description: "Successfully merged multiple critical pull requests into leading open-source React UI libraries used by thousands."
        },
        {
            title: "Best UI/UX Award",
            date: "Jan 2025",
            description: "Awarded 'Best Design and User Experience' for developing a sleek, highly performant portfolio generation platform."
        }
    ];

    return (
        <div id="achievements" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-16 relative z-20 text-center">
                    Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Achievements</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
                    {achievements.map((item, idx) => (
                        <div key={idx} className="group/card relative flex flex-col p-8 rounded-[2rem] bg-indigo-50/30 backdrop-blur-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)] hover:bg-white/60">
                            
                           
                            
                            <div className="mb-4 text-indigo-500 bg-white/50 w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm border border-white/80 relative z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>

                            <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 relative z-10">{item.date}</div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 leading-tight">
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-700 font-medium leading-relaxed relative z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achievements;
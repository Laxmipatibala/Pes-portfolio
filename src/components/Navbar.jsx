function Navbar() {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-8 pointer-events-none animate-fade-in-up">
            <div className="max-w-7xl mx-auto rounded-[2rem] bg-white/60 backdrop-blur-2xl saturate-[200%] border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] flex justify-between items-center px-6 md:px-8 py-4 pointer-events-auto transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                {/* Logo Section */}
                <div>
                    <h1 onClick={() => scrollToSection("mainpage")} className="text-xl md:text-2xl font-black tracking-tight cursor-pointer group relative px-2">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 transition-all duration-300">
                            Portfolio
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                    </h1>
                </div>

                {/* Nav Links Section (Hidden on very small screens, scrollable or wrapped) */}
                <div className="hidden md:block">
                    <div className="flex justify-between items-center space-x-2 lg:space-x-5">
                        {["about", "skills", "projects", "training", "certificates","achievements","cv","education", "footer"].map((item) => (
                            <button 
                                key={item}
                                onClick={() => scrollToSection(item)} 
                                className="text-[15px] font-bold tracking-wide text-slate-700 hover:text-indigo-600 cursor-pointer group relative px-2 py-1 transition-colors duration-300"
                            >
                                <span className="relative z-10 capitalize">{item === 'footer' ? 'Contact' : item}</span>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Mobile Menu Icon (Placeholder for now) */}
                <div className="md:hidden flex items-center pr-2">
                    <button className="text-slate-800 focus:outline-none bg-white/50 p-2 rounded-xl border border-white/60 shadow-sm active:scale-95 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
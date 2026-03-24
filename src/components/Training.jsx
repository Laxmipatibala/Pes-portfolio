import TrainingCert from './Certificates/training-certi.pdf';

function Training() {
    return (
        <div id="training" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-12 relative z-20">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Training</span>
                </h2>
                
                {/* Main Training Card Container */}
                <div className="flex justify-center relative z-20 w-full">
                    {/* The Card */}
                    <div className="group/card relative w-full lg:max-w-4xl flex flex-col md:flex-row p-6 md:p-8 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(79,70,229,0.15)]">
                        
                        {/* Soft Colored Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/10 to-indigo-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
                        
                        <div className="flex-1 relative z-10 pr-0 md:pr-8">
                            {/* University / Organization Tag */}
                            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/60 border border-white/80 text-indigo-700 text-xs font-bold tracking-wide shadow-sm">
                                Lovely Professional University
                            </div>

                            {/* TITLE */}
                            <h3 className="text-3xl font-black text-gray-900 mb-3 leading-snug">
                                Data Structures & Algorithms using C++
                            </h3>
                            
                            {/* DATE WITH ICON */}
                            <div className="flex items-center text-sm font-semibold text-gray-600 mb-6 bg-white/50 backdrop-blur-sm inline-flex px-3 py-1.5 rounded-lg border border-white/60 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="w-4 h-4 mr-2 text-indigo-500" 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Jun 2025 – Jul 2025</span>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="text-base font-medium text-gray-700 leading-relaxed space-y-4 mb-6 md:mb-0">
                                <p>
                                    Completed a 6-week intensive training in Data Structures and Algorithms using C++. Gained hands-on experience with arrays, linked lists, stacks, queues, trees, recursion, and hashing for real-world problem-solving.
                                </p>
                                <p>
                                    Covered weekly modules on C++ basics, OOP concepts, advanced DSA topics, testing, debugging, and documentation. Strengthened algorithmic thinking and successfully developed a C++-based Library Management System using multiple data structures.
                                </p>
                            </div>
                        </div>

                        {/* Divider for Desktop */}
                        <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-4 opacity-70"></div>
                        {/* Divider for Mobile */}
                        <div className="md:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6 opacity-70"></div>

                        {/* Right Content / Button Area */}
                        <div className="flex flex-col justify-center items-center relative z-10 w-full md:w-64 pl-0 md:pl-6 shrink-0">
                            
                            {/* Visual Element / Certificate Preview Block */}
                            <div className="w-full aspect-[4/3] rounded-2xl bg-white/50 border border-white/80 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] mb-6 flex items-center justify-center relative overflow-hidden group/img transition-transform duration-500 group-hover/card:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 mix-blend-multiply"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-indigo-400 group-hover/img:scale-110 transition-transform duration-500 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>

                            {/* CERTIFICATE BUTTON */}
                            <a href={TrainingCert} target="_blank" rel="noopener noreferrer" className="w-full relative px-5 py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border border-transparent shadow-[0_8px_16px_0_rgba(79,70,229,0.3)] hover:shadow-[0_12px_24px_rgba(79,70,229,0.4)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group/btn text-sm text-center">
                                <span className="relative z-10 flex items-center">
                                    View Certificate
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Training;
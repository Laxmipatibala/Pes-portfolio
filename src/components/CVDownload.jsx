function CVDownload() {
    return (
        <div id="cv" className="relative z-10 px-4 md:px-16 py-12">
            <div className="relative w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-8 md:p-12 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <div className="relative z-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
                        Download My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CV</span>
                    </h2>
                    
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Get a detailed overview of my professional experience, skills, and qualifications. 
                        Feel free to download my CV for future reference.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="/Bala_CV.pdf" 
                            download="Bala_CV.pdf"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-6 h-6 mr-3" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                />
                            </svg>
                            Download CV
                        </a>
                        
                        <a 
                            href="/Bala_CV.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/60 text-gray-800 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg border border-white/80"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-6 h-6 mr-3" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                                />
                            </svg>
                            View CV
                        </a>
                    </div>
                    
                    <div className="mt-8 text-sm text-gray-600">
                        <p>📄 PDF Format • Updated Recently • Ready for Download</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CVDownload;

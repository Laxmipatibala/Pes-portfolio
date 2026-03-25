import { useState } from "react";

function Certificates() {
    const [expandedCert, setExpandedCert] = useState(null);

    const certii=[
        {
            id: 1, 
            img: "/certificates/1.png", 
            alt: "project1",
            title: "React Specialist",
            description: "Advanced concepts in React, Context API, Hooks, and modern state management techniques."
        },
        { 
            id: 2, 
            img: "/certificates/2.png", 
            alt: "project2",
            title: "Backend Master",
            description: "Building scalable and secure RESTful APIs using Node.js and Express."
        },
        { 
            id: 3, 
            img: "/certificates/3.png", 
            alt: "project3",
            title: "Database Admin",
            description: "Deep dive into MongoDB aggregations, schema design, and performance tuning."
        },
        { 
            id: 4, 
            img: "/certificates/4.png", 
            alt: "project4",
            title: "Laravel Essentials",
            description: "Mastering MVC architecture, Eloquent ORM, and rapid application development with Laravel."
        },
        {
            id: 5, 
            img: "/certificates/5.png", 
            alt: "project5",
            title: "Cloud Deployment",
            description: "Deploying full-stack applications on modern cloud infrastructure."
        },
        {
            id: 6, 
            img: "/certificates/6.png", 
            alt: "project6",
            title: "System Design",
            description: "Designing reliable, scalable, and maintainable systems for production scale."
        }
    ];
    return (
        <div id="certificates" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-12 relative z-20">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Certificates</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20 place-items-center">
                    {certii.map((cert) => (
                        <div key={cert.id} className="w-full max-w-sm group/card relative flex flex-col p-4 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]">
                            
                            {/* Soft Colored Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
                            
                            {/* IMAGE */}
                            <div 
                                className="overflow-hidden rounded-2xl mb-5 border border-white/60 shadow-inner relative shrink-0 aspect-video bg-white/60 flex items-center justify-center cursor-pointer group/img"
                                onClick={() => setExpandedCert(cert)}
                            >
                                <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-500 z-10 pointer-events-none flex items-center justify-center">
                                    {/* Enlarge icon on hover */}
                                    <div className="bg-white/80 backdrop-blur-md rounded-full p-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/img:translate-y-0 text-slate-800 shadow-lg border border-white/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                        </svg>
                                    </div>
                                </div>
                                <img 
                                    src={cert.img} 
                                    alt={cert.alt} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    onError={(e) => { e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Certificate"; }}
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="mb-2 relative z-20 px-2 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed font-medium">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal Overlay */}
            {expandedCert && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up" 
                    onClick={() => setExpandedCert(null)}
                >
                    <div 
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-[fade-in-up_0.3s_ease-out]" 
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-black p-2.5 rounded-full shadow-2xl hover:scale-110 hover:bg-red-50 transition-all duration-300 z-50 border border-slate-200" 
                            onClick={() => setExpandedCert(null)}
                            title="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-slate-800 hover:text-red-500 transition-colors">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-[2rem] border border-white/20 shadow-2xl w-full flex justify-center items-center">
                            <img 
                                src={expandedCert.img} 
                                alt={expandedCert.title} 
                                className="w-full max-h-[85vh] object-contain rounded-[1.5rem] shadow-2xl shadow-black/50" 
                                onError={(e) => { e.target.src = "https://placehold.co/1200x800/e2e8f0/475569?text=Certificate"; }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certificates;
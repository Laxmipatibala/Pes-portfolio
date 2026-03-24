function Projects() {
    const projectCards = [
        { 
            id: 1, 
            img: "src/components/Photos/img1.png", 
            alt: "project1",
            title: "Project Alpha",
            description: "A cutting-edge web application built with React and Tailwind CSS. It solves complex problems by providing an intuitive user interface, real-time data updates, and seamless integration with external APIs for a flawless experience.",
            githubLink: "https://github.com/Laxmipatibala/CPU-scheduler",
            demoLink: "https://cpu-scheduler-6rc4uqhvu-bala-sharmas-projects.vercel.app/"
        },
        { 
            id: 2, 
            img: "src/components/Photos/img2.png", 
            alt: "project2",
            title: "Project Beta",
            description: "An elegant solution for modern businesses, featuring dynamic dashboards and responsive design. This project focuses on performance optimization, maintaining 60fps animations while processing large datasets in the browser.",
            githubLink: "https://github.com/Laxmipatibala/Dice-game-suing-react",
            demoLink: "https://project2-wreact-a0g97fmj7-bala-sharmas-projects.vercel.app/"
        }
        // },
        // { 
        //     id: 3, 
        //     img: "src/components/Photos/img1.png", 
        //     alt: "project3",
        //     title: "Project Gamma",
        //     description: "A fully decentralized application leveraging blockchain technology. It ensures secure transactions, robust smart contract integration, and a transparent user history, all wrapped in a beautiful, glassy user interface.",
        //     githubLink: "https://github.com/yourusername/project-gamma",
        //     demoLink: "https://project-gamma-demo.com"
        // },
        // { 
        //     id: 4, 
        //     img: "src/components/Photos/img2.png", 
        //     alt: "project4",
        //     title: "Project Delta",
        //     description: "An AI-powered analytics tool that predicts market trends. With its robust backend infrastructure and sophisticated machine learning models, it delivers pinpoint accuracy and actionable insights to users in real time.",
        //     githubLink: "https://github.com/yourusername/project-delta",
        //     demoLink: "https://project-delta-demo.com"
        // }
    ];

    return (
        <div id="projects" className="relative w-full pb-32 px-4 md:px-16 flex flex-col items-center justify-center z-10 bg-transparent animate-fade-in-up">
            {/* Glassy Grid Container */}
            <div className="relative w-full max-w-6xl bg-white/40 backdrop-blur-[60px] saturate-[150%] rounded-[3rem] p-10 md:p-16 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.6)] overflow-hidden group">
                
                {/* Subtle Shine/Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
                {/* Inner gloss ring */}
                <div className="absolute inset-0 border-[2px] border-white/40 z-10 rounded-[3rem] pointer-events-none mix-blend-overlay"></div>
                
                <h2 className="flex justify-center text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-12 relative z-20">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-3">Projects</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20">
                    {projectCards.map((project) => (
                        <div key={project.id} className="group/card relative flex flex-col p-5 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(79,70,229,0.15)]">
                            
                            {/* Soft Colored Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
                            
                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-2xl mb-6 border border-white/60 shadow-inner relative shrink-0">
                                <div className="absolute inset-0 bg-black/5 group-hover/card:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                <img 
                                    src={project.img} 
                                    alt={project.alt} 
                                    className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="mb-8 relative z-20 px-3">
                                <h3 className="text-3xl font-black text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-base text-gray-700 leading-relaxed font-medium line-clamp-4">
                                    {project.description}
                                </p>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex space-x-4 mt-auto relative z-20 px-2">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 relative px-5 py-3 rounded-xl text-gray-800 font-bold bg-white/60 hover:bg-white backdrop-blur-md border border-white/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0 flex items-center justify-center">
                                    <span className="relative z-10">GitHub</span>
                                </a>
                                
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 relative px-5 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-[0_8px_16px_0_rgba(79,70,229,0.3)] hover:shadow-[0_12px_24px_rgba(79,70,229,0.4)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center">
                                    <span className="relative z-10 text-white">Live Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
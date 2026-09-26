import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Spotify Data Analytics using Python & MySQL",
    category: "Personal Project",
    description: "An end-to-end data analytics project processing Spotify track metadata to analyze popularity trends and track-level insights.",
    features: [
      "Collected Spotify track metadata using Spotify Web API.",
      "Cleaned and transformed track, artist, album and popularity data using Python.",
      "Stored processed datasets in MySQL.",
      "Developed SQL queries to analyze popularity trends and track-level insights.",
      "Created visualizations using Matplotlib and exported processed data to CSV."
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    tech: ["Python", "Spotify Web API", "MySQL", "Pandas", "Matplotlib", "SQL"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-green-400",
    accentBg: "bg-green-500/10",
    cardBg: "bg-gradient-to-br from-slate-900 to-green-950/30",
  },
  {
    title: "Human Resource Management System — Data Layer",
    category: "Data Engineering",
    description: "Designed and implemented the core database layer, ETL workflows, and REST APIs for a full-stack HRMS platform.",
    features: [
      "Designed database structures for employee, attendance, leave, department and finance data.",
      "Developed SQL queries and MongoDB aggregation pipelines for data processing.",
      "Implemented ETL workflows for attendance and leave analytics.",
      "Integrated REST APIs for data retrieval and CRUD operations."
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
    tech: ["Python", "MySQL", "MongoDB", "ETL", "REST API"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/10",
    cardBg: "bg-gradient-to-br from-slate-900 to-blue-950/30",
  },
  {
    title: "Automatic Question Paper Generation System",
    category: "AI / Full Stack",
    description: "Architected a full-stack platform that generates exam papers from syllabus and study material inputs, cutting manual question-paper drafting time.",
    features: [
      "AI/LLM-based question generation with configurable difficulty",
      "8+ REST API endpoints for syllabus, generation, and history",
      "Role-based access control for secure paper management",
      "Automated marks allocation across question categories"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    tech: ["Python", "Flask", "React.js", "MongoDB", "REST API", "AI/LLM"],
    github: null,
    live: "https://automatic-qs-generation-system.vercel.app/login",
    accentColor: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    cardBg: "bg-gradient-to-br from-slate-900 to-indigo-950/30",
  }
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <PageTransition>
      <section id="projects" className="relative min-h-screen pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Featured projects showcasing my skills in modern web development. 
              Scroll down to explore.
            </p>
          </motion.div>

          {/* Pure CSS Stacked Cards Container */}
          <div className="relative w-full flex flex-col gap-12 sm:gap-24 pb-[10vh]">
            <style>
              {`
                /* Hide scrollbar for clean internal scrolling on mobile */
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .no-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}
            </style>

            {projects.map((project, index) => {
              // Calculate the sticky top offset so each subsequent card 
              // stacks slightly lower, creating the "peeking header" effect.
              // We use a base offset plus an increment per card.
              const baseOffset = isMobile ? 80 : 100;
              const gapPerCard = isMobile ? 20 : 35;
              const topOffset = baseOffset + index * gapPerCard;
              
              return (
                <div 
                  key={index}
                  className="sticky flex items-center justify-center w-full"
                  style={{
                    top: `${topOffset}px`,
                  }}
                >
                  <div 
                    className={`w-full ${project.cardBg} backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[60vh] md:min-h-[70vh] max-h-[85vh]`}
                  >
                    {/* Content Side */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-10 lg:p-12 order-2 md:order-1 h-[55%] md:h-auto">
                      <div className="flex-1 overflow-y-auto no-scrollbar pr-2 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${project.accentBg} ${project.accentColor}`}>
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-50 mb-3 tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <ul className="mb-8 space-y-2.5">
                          {project.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-slate-300 font-medium text-xs sm:text-sm">
                              <CheckCircle2 className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${project.accentColor}`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIdx) => (
                            <span key={tIdx} className="bg-slate-800/80 text-slate-200 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.github && (
                        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10 shrink-0">
                          <Button 
                            variant="outline" 
                            onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                            className="border-white/20 text-slate-200 hover:bg-white/5 rounded-xl px-5 py-5 sm:py-6 font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                          >
                            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Source Code
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8 h-[45%] md:h-auto flex items-center justify-center order-1 md:order-2 shrink-0 bg-black/20">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                        {/* Live Demo Button Overlay */}
                        {project.live && project.live !== "#" && (
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                            <Button 
                              onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
                              className="bg-slate-50 text-slate-900 hover:bg-slate-200 rounded-xl px-4 py-1.5 font-bold shadow-xl transition-all hover:-translate-y-0.5 h-auto text-xs sm:text-sm"
                            >
                              <ExternalLink className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" /> Live Demo
                            </Button>
                          </div>
                        )}
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;


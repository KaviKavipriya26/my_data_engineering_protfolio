import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FolderGit2, Github, Linkedin, Mail, Database } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kavipriya-kaliyappan26/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kavipriyak262005@gmail.com", label: "Email" },

];

const roles = [
  "Data Engineer",
  "Data Analyst"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500); // Wait 3.5 seconds before changing
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="relative">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden"
        >
          <ParticleBackground />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] lg:gap-[100px]">
              {/* LEFT - Text */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-1 text-left flex flex-col items-start max-w-[520px] w-full mx-auto lg:mx-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 rounded-full px-4 py-1.5 text-slate-300 text-[14px] font-medium backdrop-blur-sm mb-6"
                >
                  <span>👋</span> Hello, I'm
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="leading-[1.1] tracking-tight flex flex-col items-start mb-6 w-full"
                >
                  <span className="flex text-[36px] md:text-[44px] lg:text-[52px] font-extrabold mb-3">
                    {"Kavipriya K".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 + (i * 0.12), ease: "easeOut" }}
                        className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: '1100% 100%',
                          backgroundPosition: `${i * 10}% 0`
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                  
                  {/* Animated Roles Container */}
                  <span className="block text-[18px] md:text-[24px] lg:text-[28px] font-medium text-blue-400 relative h-[30px] md:h-[36px] lg:h-[42px] w-full">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute left-0 top-0"
                      >
                        {roles[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>

                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mt-5 rounded-full"
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-400 max-w-[480px] font-light mb-8"
                >
                  Data Engineer with hands-on experience in Python, SQL, PySpark, MySQL, MongoDB, Hadoop, Hive, and AWS S3. 
                  Experienced in data processing, ETL workflows, SQL queries, data transformation, REST API integration, and analytics-ready datasets.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-[16px] mb-8 justify-start w-full"
                >
                  <Button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/Kavipriya_K_Data_Engineer_Resume.pdf";
                      link.download = "Kavipriya_K_Data_Engineer_Resume.pdf";
                      link.click();
                    }}
                    className="group w-full sm:w-[170px] h-[48px] bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 border-0"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollTo("projects")}
                    className="group w-full sm:w-[170px] h-[48px] border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
                  }}
                  className="flex gap-[16px] justify-start w-full"
                >
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ width: 44, height: 44 }}
                      className="rounded-full border border-slate-700 bg-transparent backdrop-blur-sm text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT - Image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="order-2 flex justify-center items-center w-full"
              >
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30"
                  />
                  <motion.div
                    animate={{ scale: [1.05, 1, 1.05], rotate: [0, -90, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-2xl opacity-20"
                  />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full rounded-full p-1 bg-slate-900/50 backdrop-blur-xl border border-white/5 shadow-2xl shadow-purple-500/20"
                  >
                    <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 animate-glow">
                      <img
                        src={profileImg}
                        alt="Kavipriya K - AI & Data Science Engineer"
                        width={420}
                        height={420}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="coding-profiles"><CodingProfiles /></div>
        <div id="contact"><Contact /></div>
      </div>
    </PageTransition>
  );
};

export default Hero;

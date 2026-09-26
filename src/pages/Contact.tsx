import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, ArrowUpRight, FileText } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";

const contactMethods = [
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/kavipriya-kaliyappan26",
    href: "https://www.linkedin.com/in/kavipriya-kaliyappan26/",
    icon: Linkedin,
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com/KaviKavipriya26",
    href: "https://github.com/KaviKavipriya26",
    icon: Github,
  },
  {
    id: "email",
    label: "EMAIL",
    value: "kavipriyak262005@gmail.com",
    href: "mailto:kavipriyak262005@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "MOBILE",
    value: "+91 8438842076",
    href: "tel:+918438842076",
    icon: Phone,
  },

  {
    id: "resume",
    label: "RESUME",
    value: "Download My Resume",
    href: "/Kavipriya_K_Data_Engineer_Resume.pdf",
    icon: FileText,
  }
];

const Contact = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-24 flex items-center justify-center">
        <ParticleBackground />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-14"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
              CONTACT
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-8">
              Let's build data-driven solutions together
            </p>
            <div className="h-[2px] w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative flex items-center p-5 md:p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl md:rounded-[24px] hover:bg-white/[0.05] hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-400 ease-out hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mr-4 md:mr-5 group-hover:scale-110 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-400 ease-out">
                  <method.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col min-w-0 flex-1 mr-4">
                  <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-widest mb-1 md:mb-1.5 uppercase">
                    {method.label}
                  </span>
                  <span className="text-slate-100 font-bold text-sm md:text-lg tracking-wide truncate">
                    {method.value}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/[0.1] flex items-center justify-center shrink-0 bg-slate-800/50 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-400 ease-out">
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;

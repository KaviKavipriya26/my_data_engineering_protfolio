import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import { Code2, Zap, Database, Repeat, Cloud, Wrench } from "lucide-react";

const skillCards = [
  {
    category: "Programming",
    icon: Code2,
    prominent: false,
    items: ["Python", "SQL", "Pandas", "NumPy"]
  },
  {
    category: "Big Data",
    icon: Zap,
    prominent: true,
    items: ["PySpark", "Apache Spark", "Hadoop", "Hive"]
  },
  {
    category: "Databases",
    icon: Database,
    prominent: false,
    items: ["MySQL", "MongoDB", "SQL", "Aggregation"]
  },
  {
    category: "Data Engineering",
    icon: Repeat,
    prominent: false,
    items: ["ETL", "Data Pipelines", "Airflow", "Data Cleaning", "Data Transformation"]
  },
  {
    category: "Cloud",
    icon: Cloud,
    prominent: false,
    items: ["AWS S3", "Cloud Storage"]
  },
  {
    category: "Tools",
    icon: Wrench,
    prominent: false,
    items: ["Git", "GitHub", "Postman", "VS Code"]
  }
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tools & technologies I use to build data solutions
            </p>
          </motion.div>
        </div>

        {/* Cards Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                    <card.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                    {card.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {card.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 border ${
                        card.prominent 
                          ? "bg-blue-500/20 text-blue-200 border-blue-500/40 group-hover:bg-blue-500/30 group-hover:border-blue-400/60 group-hover:text-white shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                          : "bg-slate-700/40 text-slate-300 border-white/5 group-hover:bg-slate-700/60 group-hover:text-slate-200 group-hover:border-blue-500/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </PageTransition>
  );
};

export default Skills;

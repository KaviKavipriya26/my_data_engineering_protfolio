import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Network, Server, Database, PieChart, Code2 } from "lucide-react";

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech AI & Data Science",
    sub: "Muthayammal Engineering College (2022–2026) · CGPA: 8.17/10",
    color: "from-blue-500 to-indigo-500",
    border: "border-blue-500/20",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Data Engineer Intern",
    sub: "ThinkInfo Expert Solutions Pvt. Ltd.",
    color: "from-purple-500 to-pink-500",
    border: "border-purple-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Salem, Tamil Nadu",
    sub: "India",
    color: "from-teal-500 to-cyan-500",
    border: "border-teal-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kavipriyak262005@gmail.com",
    sub: "Available for opportunities",
    color: "from-orange-500 to-amber-500",
    border: "border-orange-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8438842076",
    sub: "WhatsApp / Call",
    color: "from-green-500 to-emerald-500",
    border: "border-green-500/20",
  },
];

const whatIDo = [
  {
    icon: Network,
    title: "Data Engineering",
    desc: "Build reliable data workflows using Python, SQL, PySpark, and ETL, including data cleaning, transformation, and validation.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Server,
    title: "Big Data Processing",
    desc: "Work with Apache Spark, PySpark, Hadoop, HDFS, and Hive to process and analyze large datasets efficiently.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Database,
    title: "Database Engineering",
    desc: "Design and work with MySQL and MongoDB, writing optimized SQL queries, aggregation pipelines, and structured data models.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    icon: PieChart,
    title: "Data Analytics",
    desc: "Transform raw data into meaningful insights using Pandas, NumPy, SQL, and data visualization to identify trends and support data-driven decisions.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  }
];

const timeline = [
  {
    year: "2024–Present",
    title: "Data Engineer Intern",
    company: "ThinkInfo Expert Solutions Pvt. Ltd.",
    description:
      "Working on data processing, ETL workflows, SQL queries, aggregation pipelines, data transformation, and REST API integration using Python, SQL, and PySpark.",
    tag: "Internship",
    tagColor: "bg-blue-500",
  },
  {
    year: "2022–2026",
    title: "B.Tech — Artificial Intelligence & Data Science",
    company: "Muthayammal Engineering College, Salem",
    description:
      "B.Tech in Artificial Intelligence & Data Science with a CGPA of 8.17/10. Built a strong foundation in Python, Big Data, and Database Management through academic projects and practical development.",
    tag: "Education",
    tagColor: "bg-purple-500",
  },
  {
    year: "2022",
    title: "Higher Secondary (12th)",
    company: "Avvaiyar Government Girls Higher Secondary School, Dharmapuri",
    description:
      "Completed Higher Secondary Education (HSC) with 70%.",
    tag: "Education",
    tagColor: "bg-indigo-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-5">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Data Engineer · Python & SQL Developer · Data Analytics
            </p>
          </motion.div>

          {/* ── Professional Summary ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-2">
              <span className="w-1 h-7 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full inline-block" />
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-[16px]">
              I'm a Data Engineer with <span className="text-blue-400 font-medium">11 months of professional experience</span> working with
              Python, SQL, PySpark, MySQL, MongoDB, Hadoop, Hive, and AWS S3.
              I have experience working with data processing, ETL workflows, SQL queries, aggregation pipelines,
              data transformation, and REST API integration. Currently, I'm seeking opportunities as a{" "}
              <span className="text-white font-semibold">Data Engineer, Big Data Engineer, or SQL Developer</span>.
            </p>
          </motion.div>

          {/* ── Quick Facts ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
          >
            {quickFacts.map(({ icon: Icon, label, value, sub, color, border }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className={`bg-slate-800/40 backdrop-blur-sm rounded-xl p-5 border ${border} flex items-start gap-4 hover:bg-slate-800/60 transition-all duration-300`}
              >
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${color} bg-opacity-10 shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-slate-100 font-semibold text-[14px]">{value}</p>
                  <p className="text-slate-400 text-[12px] mt-0.5 leading-snug">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── What I Do ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold text-slate-50 text-center mb-10">
              What I <span className="gradient-text">Do</span>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {whatIDo.map(({ icon: Icon, title, desc, color, bg, border }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className={`${bg} backdrop-blur-sm rounded-xl p-6 border ${border} hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={22} className={color} />
                    <h3 className={`font-semibold text-[15px] ${color}`}>{title}</h3>
                  </div>
                  <p className="text-slate-300 text-[14px] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Currently Working On ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 border border-white/10 rounded-2xl p-8 mb-14"
          >
            <h2 className="text-2xl font-bold text-slate-50 mb-3 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              Currently Working On
            </h2>
            <p className="text-slate-300 leading-relaxed text-[16px]">
              Working on <span className="text-blue-400 font-medium">data processing</span> and{" "}
              <span className="text-purple-400 font-medium">ETL workflows</span>, building
              SQL queries and aggregation pipelines, and transforming data for{" "}
              <span className="text-teal-400 font-medium">REST API integration</span> in a <span className="text-white font-medium">Git/GitHub team workflow</span>.
            </p>
          </motion.div>

          {/* ── Journey Timeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-slate-50 text-center mb-10">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-indigo-500 pl-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <span className="absolute -left-[38px] top-6 w-4 h-4 rounded-full border-2 border-blue-400 bg-slate-900" />
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{item.year}</span>
                  </div>
                  <h4 className="text-[17px] font-semibold text-slate-50 mb-1">{item.title}</h4>
                  <p className="text-blue-400 text-sm mb-3 font-medium">{item.company}</p>
                  <p className="text-slate-300 text-[14px] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;


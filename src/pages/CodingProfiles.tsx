import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Target } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode (SQL + DSA)",
      username: "kavipriya",
      stats: {
        solved: "150+",
        ranking: "Active",
        streak: "10+ days"
      },
      color: "from-orange-500 to-yellow-500",
      icon: Code,
      link: "https://leetcode.com/u/kavipriya/"
    },
    {
      platform: "HackerRank (SQL)",
      username: "kavipriyak262005",
      stats: {
        solved: "50+",
        ranking: "Active",
        streak: "5+ days"
      },
      color: "from-green-600 to-green-400",
      icon: Code,
      link: "https://www.hackerrank.com/profile/kavipriyak262005"
    },
    {
      platform: "GeeksForGeeks",
      username: "kavipriyauh3x",
      stats: {
        score: "Active",
        problemsSolved: "Active",
        streak: "5+ days"
      },
      color: "from-green-500 to-emerald-500",
      icon: Target,
      link: "https://www.geeksforgeeks.org/profile/kavipriyauh3x?tab=activity"
    }
  ];



  const handleViewProfile = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-20 pb-12">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              Coding <span className="gradient-text">Profiles</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My journey in competitive programming and problem-solving across various platforms.
            </p>
          </motion.div>

          {/* Platform Profiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <profile.icon size={32} className="text-slate-50" />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleViewProfile(profile.link)}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-50 mb-2">{profile.platform}</h3>
                  <p className="text-blue-400 mb-4">@{profile.username}</p>

                  <div className="space-y-3">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-slate-50 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleViewProfile(profile.link)}
                    className={`w-full mt-4 bg-gradient-to-r ${profile.color} hover:opacity-90 text-slate-50 font-semibold`}
                  >
                    View Profile
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;

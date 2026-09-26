
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const allArticles = [
    {
      title: "Building Interactive 3D Experiences with React and Three.js",
      excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and modern web technologies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      link: "#"
    },
    {
      title: "The Future of Web Animations: Framer Motion Deep Dive",
      excerpt: "Explore advanced animation techniques and best practices for creating smooth, performant web animations.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      link: "#"
    },
    {
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt: "Essential TypeScript patterns and practices for building maintainable and scalable web applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500",
      link: "#"
    },
    {
      title: "Creating Responsive Design Systems with Tailwind CSS",
      excerpt: "Build consistent, maintainable design systems using Tailwind CSS and modern component architecture.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      link: "#"
    },
    {
      title: "Advanced React Patterns and Performance Optimization",
      excerpt: "Deep dive into React performance optimization techniques and advanced patterns for complex applications.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      link: "#"
    },
    {
      title: "Modern CSS Grid and Flexbox Techniques",
      excerpt: "Master modern layout techniques with CSS Grid and Flexbox for responsive web design.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      link: "#"
    },
    {
      title: "Building Scalable Node.js Applications",
      excerpt: "Learn best practices for building and deploying scalable Node.js applications in production.",
      date: "2023-12-10",
      readTime: "11 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
      link: "#"
    },
    {
      title: "GraphQL vs REST: Choosing the Right API",
      excerpt: "Compare GraphQL and REST APIs to make informed decisions for your next project.",
      date: "2023-12-05",
      readTime: "7 min read",
      category: "API",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500",
      link: "#"
    }
  ];

  const fetchNextPage = () => {
    if (isFetchingNextPage) return;
    
    setIsFetchingNextPage(true);
    
    // Simulate API call
    setTimeout(() => {
      const itemsPerPage = 2;
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newArticles = allArticles.slice(startIndex, endIndex);
      
      if (newArticles.length > 0) {
        setArticles(prev => [...prev, ...newArticles]);
        setPage(prev => prev + 1);
      }
      
      // Check if we've loaded all articles
      if (endIndex >= allArticles.length) {
        setHasNextPage(false);
      }
      
      setIsFetchingNextPage(false);
    }, 1000);
  };

  // Load initial articles
  useEffect(() => {
    fetchNextPage();
  }, []);

  const { isFetching } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  });

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
              Featured <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Sharing knowledge and insights about web development, design, and the latest technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={`${article.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-50 mb-3 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span className="mr-2">Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          <InfiniteScrollLoader 
            isLoading={isFetchingNextPage} 
            hasNextPage={hasNextPage} 
          />
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Helper hook for typewriter effect
const useTypewriter = (text: string, speed: number, delayStart: number = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let typingInterval: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
      let i = 0;
      typingInterval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);
    }, delayStart);

    return () => {
      clearTimeout(timeout);
      clearInterval(typingInterval);
    };
  }, [text, speed, delayStart]);

  return { displayedText, isTyping, hasStarted };
};

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            left: `${Math.random() * 100}%`,
            top: "110%",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 1.5 + 0.5,
          }}
          animate={{
            top: "-10%",
            left: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -15, // Start randomly across the timeline
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Typewriter timing
  // Title: "Hi, I'm Kavipriya" (17 chars). Starts at 400ms, ~45ms per char. Ends around 1.1s.
  const titleText = "Hi, I'm Kavipriya";
  const { displayedText: titleDisplayed, isTyping: titleTyping } = useTypewriter(titleText, 45, 400);

  // Split title to apply gradient to name
  const titlePrefix = titleDisplayed.slice(0, 8); // "Hi, I'm "
  const titleName = titleDisplayed.slice(8); // "Kavipriya"

  // Subtitle: "Welcome to my Data Engineering Portfolio" (40 chars). Starts at 1300ms, ~35ms per char. Ends around 2.7s.
  const subtitleText = "Welcome to my Data Engineering Portfolio";
  const { displayedText: subDisplayed, isTyping: subTyping, hasStarted: subStarted } = useTypewriter(subtitleText, 35, 1300);

  useEffect(() => {
    // Total animation timeline before fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds total to let the bar finish and breathe

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070B18] px-4 overflow-hidden"
        >
          {/* Floating Particles */}
          <Particles />

          {/* Pulsing Gradient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-full blur-[100px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
            {/* Step 1: Greeting + Waving Hand */}
            <div className="flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 min-h-[60px]">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
                className="inline-block origin-bottom-right"
              >
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 0.5,
                  }}
                  className="inline-block"
                >
                  👋
                </motion.span>
              </motion.span>

              <span className="text-slate-300 relative">
                {titlePrefix}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {titleName}
                </span>
                {/* Title Cursor */}
                {titleTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-[0.8em] bg-blue-400 ml-1 align-middle translate-y-[-10%]"
                  />
                )}
              </span>
            </div>

            {/* Step 2: Subtitle */}
            <div className="min-h-[40px] mb-10">
              {subStarted && (
                <p className="text-base md:text-lg lg:text-xl text-slate-400 font-medium tracking-wide">
                  {subDisplayed}
                  {/* Subtitle Cursor */}
                  {(subTyping || (!subTyping && subDisplayed.length > 0)) && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className={`inline-block w-[3px] h-[1em] ml-1 align-middle translate-y-[-10%] ${
                        subTyping ? "bg-slate-400" : "bg-transparent"
                      }`}
                    />
                  )}
                </p>
              )}
            </div>

            {/* Step 3: Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }} // Appears after typing mostly finishes
              className="w-56 md:w-72 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, delay: 2.9, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.6)]"
              >
                {/* Subtle shimmer moving across */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 3.0 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

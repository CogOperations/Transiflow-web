import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "96%", label: "Average travel confidence score" },
  { value: "50K+", label: "Trips monitored across workflows" },
  { value: "24/7", label: "Safety and route visibility support" },
  { value: "Smart", label: "Alert-driven travel decisions" },
];

export default function SafetyStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section ref={sectionRef} className="px-5 py-16 md:px-8 lg:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl md:rounded-[2rem] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #007C91 0%, #0D9DAF 100%)",
            boxShadow: "0 25px 50px -12px rgba(0,124,145,0.25)",
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="relative backdrop-blur-sm bg-white/5 px-6 py-10 md:px-10 lg:px-14 md:py-12">
            
            {/* Decorative blurred circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4 }}
                  className="inline-flex rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2"
                >
                  <span className="text-sm font-semibold text-white">Safety Stats</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl"
                >
                  Built around visibility, assurance, and safer mobility outcomes.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-base md:text-lg leading-relaxed md:leading-8 text-white/80"
                >
                  Stronger transport confidence starts with the right monitoring,
                  smarter data, and dependable trip coordination.
                </motion.p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mt-10 md:mt-12 grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
              >
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={cardVariants}
                    whileHover="hover"
                    className="rounded-2xl md:rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-5 md:p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                    style={{
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-white"
                    >
                      {item.value}
                    </motion.h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-white/70">
                      {item.label}
                    </p>
                    
                    {/* Decorative line on hover */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 h-0.5 rounded-full bg-white/30"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
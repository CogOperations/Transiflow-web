import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiZap } from "react-icons/fi";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3 } },
    hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const features = [
    "Real-time trip monitoring",
    "24/7 safety support",
    "Seamless coordination",
  ];

  return (
    <section ref={sectionRef} className="px-5 py-16 md:px-8 lg:px-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl md:rounded-[2rem] bg-[#0D2024]"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          <div className="relative px-6 py-12 md:px-12 lg:px-16 md:py-16">
            
            {/* Decorative circles - solid, no gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#007C91]/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#007C91]/5 pointer-events-none" />
            
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              {/* Badge */}
              <motion.div
                variants={badgeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/30 bg-[#007C91]/10 px-4 py-2"
              >
                <FiZap size={14} className="text-[#007C91]" />
                <span className="text-sm font-semibold text-[#007C91]">Get Started</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
              >
                Ready to build a smoother,{" "}
                <span className="text-[#007C91]">safer transport</span> experience?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base md:text-lg leading-relaxed text-white/60"
              >
                Start using Transiflow to improve travel coordination, monitor trips
                in real time, and move with more confidence.
              </motion.p>

              {/* Feature list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-4"
              >
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FiCheckCircle size={14} className="text-[#007C91]" />
                    <span className="text-sm text-white/50">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007C91] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#006b7d]"
                  >
                    Book a Demo
                    <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  >
                    Explore Platform
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 pt-4 border-t border-white/10"
              >
                <p className="text-xs text-white/30">
                  Trusted by operators across 38+ cities
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
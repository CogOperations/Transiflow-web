import { useState } from "react";
import {
  FiClock,
  FiDollarSign,
  FiGlobe,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "Unpredictable departures",
    text: "Delays and uncertainty disrupt travel plans, making it impossible to rely on transport schedules.",
    detail:
      "Missed connections, wasted time at terminals, and cascading delays affect millions of trips daily with no resolution in sight.",
    icon: FiClock,
  },
  {
    num: "02",
    title: "Inconsistent pricing",
    text: "Unclear or fluctuating fares leave passengers with no transparency or standard to hold operators to.",
    detail:
      "Surge pricing, hidden fees, and opaque cost structures erode trust and make budgeting for journeys unreliable.",
    icon: FiDollarSign,
  },
  {
    num: "03",
    title: "Lack of travel visibility",
    text: "No real-time data on routes, ETA, or journey status during trips leaves passengers completely in the dark.",
    detail:
      "Passengers rely on guesswork or outdated boards rather than live, accurate location and arrival data.",
    icon: FiGlobe,
  },
  {
    num: "04",
    title: "Safety concerns",
    text: "Weak monitoring and accountability systems leave passengers with little confidence in their security.",
    detail:
      "Unverified drivers, no emergency contact systems, and zero incident tracking make safety a guessing game.",
    icon: FiShield,
  },
];

export default function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white px-6 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header Section - Centered */}
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 bg-white"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#007C91]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#0D2024]">
              The problem
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-4xl font-medium leading-tight tracking-tight text-[#0D2024] md:text-5xl"
          >
            Transport today is fragmented, unpredictable, and hard to trust.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-neutral-500"
          >
            Travelers still face uncertainty, poor coordination, and limited
            safety visibility — every single trip.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 md:grid-cols-2 md:divide-y-0 xl:grid-cols-4"
        >
          {problems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            const isLast = index === problems.length - 1;

            return (
              <motion.button
                key={item.num}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={[
                  "group relative flex flex-col items-start p-8 text-left transition-all duration-300 focus:outline-none overflow-hidden",
                  !isLast && "md:border-r md:border-neutral-200",
                  isActive ? "bg-[#007C91]/5" : "bg-white hover:bg-[#007C91]/5",
                ].join(" ")}
              >
                {/* Subtle Arc Design - Top Right */}
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full border-2 border-[#007C91]/5 group-hover:border-[#007C91]/10 transition-all duration-300"></div>
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full border border-[#007C91]/5 group-hover:border-[#007C91]/10 transition-all duration-300"></div>
                
                {/* Subtle Arc Design - Bottom Left */}
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full border-2 border-[#007C91]/5 group-hover:border-[#007C91]/10 transition-all duration-300"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full border border-[#007C91]/5 group-hover:border-[#007C91]/10 transition-all duration-300"></div>

                {/* Number */}
                <span className="mb-8 text-xs font-medium tracking-[.1em] text-[#007C91] relative z-10">
                  {item.num}
                </span>

                {/* Icon - Bright Teal Background */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#007C91] transition-all duration-300 group-hover:bg-[#007C91] relative z-10"
                >
                  <Icon size={18} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-[15px] font-medium leading-snug text-[#0D2024] relative z-10">
                  {item.title}
                </h3>

                {/* Body */}
                <p className="text-sm leading-relaxed text-neutral-500 relative z-10">
                  {item.text}
                </p>

                {/* Expandable detail */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="mt-5 border-t border-neutral-200 pt-4 text-xs leading-relaxed text-[#0D2024]/70">
                        {item.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Arrow */}
                <div className="mt-auto pt-8 flex items-center gap-1.5 text-xs font-medium text-[#007C91] transition-colors group-hover:text-[#007C91] relative z-10">
                  <span>{isActive ? "Less" : "Why it matters"}</span>
                  <motion.div
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowRight size={12} />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Bottom bar - with background color */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 flex flex-col items-start justify-between gap-5 rounded-lg bg-[#0D2024] p-8 sm:flex-row sm:items-center md:p-10"
        >
          <div>
            <p className="text-[15px] font-medium text-white">
              Travel shouldn't feel uncertain.
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-white/60">
              It should be structured, transparent, and dependable — every time.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#006b7d" }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 rounded-lg bg-[#007C91] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#006b7d] whitespace-nowrap"
          >
            See the solution →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
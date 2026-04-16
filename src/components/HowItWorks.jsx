import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Plan the journey",
    text: "Set routes, travel details, and movement schedules in a structured and simple way.",
  },
  {
    title: "Track in real time",
    text: "Monitor active journeys with live visibility and confidence around trip progress.",
  },
  {
    title: "Improve safety and flow",
    text: "Use insights and oversight tools to strengthen coordination and travel reliability.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-6 py-20 md:px-10 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0D2024]/70"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex rounded-full bg-[#007C91] px-4 py-2 shadow-lg"
          >
            <span className="text-sm font-semibold text-white">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold leading-tight md:text-4xl"
          >
            <span className="text-white">A simple process built for </span>
            <span className="text-[#007C91]">smooth transport</span>
            <span className="text-white"> operations.</span>
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-xl"
              style={{
                backdropFilter: "blur(12px)",
              }}
            >
              <motion.div 
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007C91] text-lg font-bold text-white shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {index + 1}
              </motion.div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-white/70">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
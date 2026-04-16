import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const trustPoints = [
  {
    id: "monitor",
    title: "Trip Monitoring",
    text: "Every journey is tracked with real-time visibility to ensure better awareness and coordination across the entire route.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
      </svg>
    ),
  },
  {
    id: "safety",
    title: "Passenger Safety Layer",
    text: "Built-in safety systems provide continuous reassurance and human oversight throughout each trip.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "operator",
    title: "Operator Accountability",
    text: "Transport providers are continuously monitored to maintain consistency, quality, and full reliability.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "Reliable Support Access",
    text: "Users reach help instantly when needed. No friction, no delays — just immediate, dependable assistance.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const statusRows = [
  { label: "Trip Status", value: "Active", color: "#007C91", dot: "#22C55E" },
  { label: "Safety Level", value: "High", color: "#007C91", dot: "#007C91" },
  { label: "Monitoring", value: "Live", color: "#111827", dot: "#FBBF24" },
  { label: "Support", value: "Available", color: "#111827", dot: "#22C55E" },
];

const metrics = [
  { value: "99.7%", label: "Safety Record" },
  { value: "2.1M+", label: "Trips Monitored" },
  { value: "<30s", label: "Support Response" },
];

const recentActivities = [
  { time: "2 min ago", event: "Trip #4821 started monitoring", status: "active" },
  { time: "15 min ago", event: "Safety check completed on Route A", status: "completed" },
  { time: "32 min ago", event: "Support ticket #902 resolved", status: "resolved" },
];

export default function SafetyTrust() {
  const [activeMetric, setActiveMetric] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const t = setInterval(() => setActiveMetric((v) => (v + 1) % metrics.length), 2600);
    return () => clearInterval(t);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 md:px-6 lg:px-10 xl:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007C91]/10 px-3 py-1.5 md:px-4 md:py-2 mb-5 md:mb-6">
              <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#007C91]" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-[#007C91]">
                Safety & Trust
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0D2024] mb-3 md:mb-4">
              Built with safety,{" "}
              <span className="text-[#007C91]">accountability,</span>
              <br className="hidden sm:block" />
              and confidence at the core.
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed max-w-md mb-8 md:mb-10">
              Transiflow ensures every trip is backed by visibility, monitoring,
              and structured systems that make travel safer and more reliable for everyone.
            </p>

            {/* Trust Points */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3 md:space-y-4"
            >
              {trustPoints.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-[#007C91]/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex h-9 w-9 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-[#007C91]/10 text-[#007C91]">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm md:text-base text-[#111827] mb-0.5 md:mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 md:space-y-6 order-2"
          >
            {/* Main Card */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-[#0D2024] px-4 md:px-6 py-3 md:py-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" md:width="20" md:height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-white font-semibold text-xs md:text-sm">Live System Status</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-[10px] md:text-xs">Operational</span>
                </div>
              </div>

              {/* Status Rows */}
              <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                {statusRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full" style={{ background: row.dot }} />
                      <span className="text-xs md:text-sm text-[#6B7280]">{row.label}</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold" style={{ color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mx-4 md:mx-6" />

              {/* Metrics */}
              <div className="p-4 md:p-6">
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-3 md:mb-4">Platform Metrics</p>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      animate={{
                        borderColor: activeMetric === i ? "#007C91" : "#E5E7EB",
                        backgroundColor: activeMetric === i ? "#F0FAFA" : "white",
                        y: activeMetric === i ? -2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl border p-2 md:p-4 text-center cursor-pointer"
                    >
                      <p className="text-base md:text-xl font-bold text-[#007C91]">{m.value}</p>
                      <p className="text-[9px] md:text-xs text-[#9CA3AF] mt-0.5 md:mt-1">{m.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="border-t border-gray-100 bg-gray-50/50 px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="absolute inset-0 h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#9CA3AF]">System Status</p>
                    <p className="text-xs md:text-sm font-semibold text-[#111827]">All Systems Normal</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-[#007C91] border-2 border-white" />
                  <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-[#0D2024] border-2 border-white" />
                  <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-[#5B8FA8] border-2 border-white" />
                </div>
              </div>
            </div>

            {/* Recent Activity Feed with Teal Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#007C91" }}
            >
              <div className="px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-white/20">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" md:width="16" md:height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  <span className="text-sm md:text-base font-semibold text-white">Recent Activity</span>
                </div>
                <span className="text-[10px] md:text-xs text-white/70 font-medium">Live feed</span>
              </div>
              <div className="divide-y divide-white/10">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="px-4 md:px-6 py-3 md:py-3.5 flex flex-col xs:flex-row xs:items-center justify-between gap-2 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span className="text-xs md:text-sm text-white/80">{activity.event}</span>
                    </div>
                    <span className="text-[10px] md:text-xs text-white/50 ml-0 xs:ml-auto">{activity.time}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 md:px-6 py-3 md:py-3.5 border-t border-white/20 bg-white/5">
                <button className="text-xs md:text-sm text-white font-medium hover:text-white/80 transition-colors flex items-center gap-1">
                  View all activity
                  <svg width="10" height="10" md:width="12" md:height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Trust indicator badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 md:p-5 rounded-xl bg-[#0D2024] text-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#007C91] flex items-center justify-center text-[9px] md:text-[10px] font-bold">✓</div>
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#5B8FA8] flex items-center justify-center text-[9px] md:text-[10px] font-bold">✓</div>
                  <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-[#7aabb1] flex items-center justify-center text-[9px] md:text-[10px] font-bold">✓</div>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-white/60">Trust Score</p>
                  <p className="text-xs md:text-sm font-semibold">98.4% · Highest rating</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xl md:text-2xl font-bold text-[#007C91]">A+</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
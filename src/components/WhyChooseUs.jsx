import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Structured Travel Experience",
    text: "Transiflow brings order to transport by replacing uncertainty with a more organized and dependable journey flow.",
    stat: "3× more reliable",
    tag: "Departure Flow",
  },
  {
    num: "02",
    title: "Real-Time Visibility",
    text: "From departures to route progress, users get better insight into their trips instead of moving blindly.",
    stat: "Live tracking",
    tag: "Trip Experience",
  },
  {
    num: "03",
    title: "Safety-Driven System",
    text: "Every part of the experience is built around confidence, accountability, and safer movement.",
    stat: "Zero blind spots",
    tag: "System Design",
  },
  {
    num: "04",
    title: "Transparent Journey Process",
    text: "Clearer trip information, better coordination, and fewer surprises create a smoother user experience.",
    stat: "Full clarity",
    tag: "User Confidence",
  },
];

const stats = [
  { label: "On-time departures", value: 94, suffix: "%" },
  { label: "Rider satisfaction", value: 4.8, suffix: "/5" },
  { label: "Cities active", value: 38, suffix: "+" },
];

function useInViewCustom(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedNumber({ target, suffix, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1200;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setVal(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInViewCustom(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-20"
      style={{
        background: "#0D2023",
      }}
    >
      {/* Mobile: Single color background, Desktop: Gradient using pseudo-element */}
      <div className="absolute inset-0 hidden lg:block" style={{
        background: "linear-gradient(90deg, #0D2023 0%, #0D2023 50%, #0D9DAF 50%, #0D9DAF 100%)"
      }} />
      
      {/* Mobile gradient overlay - teal at bottom */}
      <div className="absolute inset-0 lg:hidden" style={{
        background: "linear-gradient(180deg, #0D2023 0%, #0D2023 60%, #0D9DAF 100%)"
      }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <span className="h-[6px] w-[6px] rounded-full bg-[#0D9DAF]" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                Why Transiflow
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white">
              More than transport,{" "}
              <span className="text-white/40">a smarter, safer way to move.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/50">
              Structure, visibility, and trust built into one modern transport experience.
            </p>

            {/* Reason list */}
            <div className="mt-10 space-y-2">
              {reasons.map((item, i) => (
                <motion.button
                  key={item.num}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                  className="group w-full rounded-xl border text-left transition-all duration-200 focus:outline-none"
                  style={{
                    borderColor: active === i ? "#0D9DAF" : "rgba(255,255,255,0.1)",
                    background: active === i ? "rgba(13, 157, 175, 0.15)" : "rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4">
                    <span
                      className="mt-0.5 shrink-0 text-xs font-medium tracking-widest"
                      style={{ color: active === i ? "#0D9DAF" : "rgba(255,255,255,0.3)" }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3
                          className="text-[14px] sm:text-[15px] font-medium transition-colors"
                          style={{ color: active === i ? "#0D9DAF" : "white" }}
                        >
                          {item.title}
                        </h3>
                        <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/50">
                          {item.tag}
                        </span>
                      </div>

                      {/* Expand body */}
                      <motion.div
                        initial={false}
                        animate={{
                          maxHeight: active === i ? "80px" : "0px",
                          opacity: active === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">
                          {item.text}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="order-2"
          >
            {/* Main card */}
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 sm:p-6">
              {/* Hero panel */}
              <div
                className="rounded-xl p-4 sm:p-6 text-white"
                style={{ background: "#0D2023" }}
              >
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                  Why riders trust Transiflow
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-medium leading-snug">
                  Built for confidence at every stage of the journey.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Better structure, better visibility, and true peace of mind.
                </p>

                {/* Active stat pill */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "#0D9DAF" }}
                  />
                  <span className="text-xs font-medium text-white/80">
                    {reasons[active].stat}
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                    className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-2 sm:p-4"
                  >
                    <p className="text-[9px] sm:text-[11px] text-white/60">{s.label}</p>
                    <p className="mt-1 text-base sm:text-xl font-medium text-white">
                      <AnimatedNumber target={s.value} suffix={s.suffix} inView={inView} />
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Detail grid — updates with active card */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                {reasons.map((item, i) => (
                  <button
                    key={item.num}
                    onClick={() => setActive(i)}
                    className="rounded-xl border p-2 sm:p-4 text-left transition-all duration-200 focus:outline-none"
                    style={{
                      borderColor: active === i ? "#0D9DAF" : "rgba(255,255,255,0.2)",
                      background: active === i ? "rgba(13, 157, 175, 0.2)" : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <p className="text-[9px] sm:text-[11px] text-white/60">{item.tag}</p>
                    <p
                      className="mt-1 text-[11px] sm:text-[13px] font-medium transition-colors"
                      style={{ color: active === i ? "#0D9DAF" : "white" }}
                    >
                      {item.title.split(" ").slice(-1)[0]}
                    </p>
                    <div
                      className="mt-1 h-0.5 rounded-full transition-all duration-300"
                      style={{
                        background: active === i ? "#0D9DAF" : "rgba(255,255,255,0.2)",
                        width: active === i ? "100%" : "30%",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-4"
            >
              <div>
                <p className="text-[10px] sm:text-xs text-white/60">Currently active in</p>
                <p className="text-xs sm:text-sm font-medium text-white">38 cities across 4 regions</p>
              </div>
              <div className="flex -space-x-2">
                {["#0D2023", "#FFFFFF", "#456066", "#7aabb1"].map((c, i) => (
                  <div
                    key={i}
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
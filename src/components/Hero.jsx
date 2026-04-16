import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShield,
  FiRadio,
  FiStar,
  FiMapPin,
  FiZap,
  FiUsers,
} from "react-icons/fi";
import { RiRouteLine } from "react-icons/ri";
import { motion } from "framer-motion";

const stats = [
  { value: "24/7", label: "Trip Visibility", icon: <FiRadio size={16} /> },
  { value: "99.9%", label: "Platform Reliability", icon: <FiZap size={16} /> },
  { value: "Real-Time", label: "Safety Monitoring", icon: <FiShield size={16} /> },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 + i * 0.1 },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b1e21] px-6 pb-20 pt-24 md:px-10 lg:px-20 lg:pb-28 lg:pt-28 -mt-20">
      
      {/* Background Image - Car Travel */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0b1e21]/85"></div>
      </div>

      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Radial glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute -top-40 -left-40 z-0 h-[600px] w-[600px] rounded-full bg-[#007C91]/10 blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[400px] w-[400px] rounded-full bg-[#007C91]/08 blur-[100px]" 
      />

      {/* Thin horizontal rule at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007C91]/40 to-transparent z-10" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">

        {/* ── LEFT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Pill badge */}
          <motion.div variants={itemVariants} className="inline-flex w-fit items-center gap-2 rounded-md border border-[#007C91]/25 bg-[#007C91]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#007C91] backdrop-blur-sm">
            <FiZap size={11} />
            Smart Transport Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="mt-7 max-w-[600px] text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-white">
            Travel{" "}
            <span
              className="relative inline-block"
              style={{
                color: "#007C91",
                textShadow: "0 0 60px rgba(0,124,145,0.35)",
              }}
            >
              Smooth,
            </span>{" "}
            Safe &amp; Secure{" "}
            <span className="text-white/40">with smarter transport coordination.</span>
          </motion.h1>

          {/* Body */}
          <motion.p variants={itemVariants} className="mt-6 max-w-[480px] text-[1.05rem] leading-[1.75] text-[#7a9ea3]">
            Transiflow helps you move with confidence through real-time trip
            safety, seamless transport management, and an experience designed
            for reliability from start to finish.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#007C91] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#006070] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,124,145,0.35)]"
            >
              Get Started
              <FiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-[#007C91]/50 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-3">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={itemVariants}
                className="group flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-[#007C91]/30 hover:bg-[#007C91]/08"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#007C91]/15 text-[#007C91]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold leading-none text-white">{item.value}</p>
                  <p className="mt-0.5 text-xs text-white/35 group-hover:text-white/55 transition-colors">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust row */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i}.jpg`}
                  alt="User"
                  className="h-7 w-7 rounded-full border-2 border-[#0b1e21] object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} size={11} className="fill-[#007C91] text-[#007C91]" />
                ))}
              </div>
              <span className="text-xs text-white/35">
                Trusted by <strong className="text-white/60">10,000+</strong> travelers
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — BENTO GRID ── */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:block"
        >
          {/* Subtle top-right accent dot */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#007C91]/10 blur-2xl" />

          <div
            className="grid gap-2.5"
            style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "220px 180px" }}
          >
            {/* Cell 1 — wide top-left */}
            <motion.div
              custom={0}
              variants={cellVariants}
              initial="hidden"
              animate="visible"
              className="group relative col-span-2 row-span-1 overflow-hidden rounded-xl"
              style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80"
                alt="Live route"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e21]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <FiMapPin size={12} className="text-white/70" />
                <span className="text-xs font-semibold text-white">Live Route Tracking</span>
              </div>
            </motion.div>

            {/* Cell 2 — tall right */}
            <motion.div
              custom={1}
              variants={cellVariants}
              initial="hidden"
              animate="visible"
              className="group relative overflow-hidden rounded-xl"
              style={{ gridColumn: "3 / 4", gridRow: "1 / 3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=500&q=80"
                alt="Travelers"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e21]/75 via-[#0b1e21]/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-1.5 rounded-md bg-[#007C91]/80 px-2.5 py-1.5 backdrop-blur-md">
                  <FiUsers size={12} className="text-white" />
                  <span className="text-xs font-semibold text-white">10,000+ Travelers</span>
                </div>
              </div>
            </motion.div>

            {/* Cell 3 — bottom-left */}
            <motion.div
              custom={2}
              variants={cellVariants}
              initial="hidden"
              animate="visible"
              className="group relative overflow-hidden rounded-xl"
              style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=500&q=80"
                alt="Secure"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e21]/80 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                <FiShield size={12} className="text-[#007C91]" />
                <span className="text-xs font-semibold text-white">Secure &amp; Verified</span>
              </div>
            </motion.div>

            {/* Cell 4 — bottom-center — stat card */}
            <motion.div
              custom={3}
              variants={cellVariants}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.06] bg-[#007C91]/10 p-4 backdrop-blur-sm"
              style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#007C91]/20 text-[#007C91]">
                <FiZap size={16} />
              </div>
              <div>
                <p
                  className="text-3xl font-bold leading-none text-white"
                  style={{ textShadow: "0 0 40px rgba(0,124,145,0.5)" }}
                >
                  99.9<span className="text-[#007C91]">%</span>
                </p>
                <p className="mt-1 text-xs font-medium text-white/40">Platform Reliability</p>
              </div>
              {/* Decorative ring */}
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-[#007C91]/20" />
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-[#007C91]/10" />
            </motion.div>
          </div>

          {/* Floating safety badge — overlaps bottom-left corner */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-4 -left-5 z-20 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f2a2e] px-4 py-3 shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#007C91]/20">
              <FiShield size={15} className="text-[#007C91]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">100% Secure</p>
              <p className="text-[10px] text-white/35">End-to-end protected</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/30" />
        </div>
      </motion.div>

    </section>
  );
}
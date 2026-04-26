import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiShield,
  FiEye,
  FiTarget,
  FiHeart,
  FiTrendingUp,
  FiUsers,
  FiGlobe,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  imgAjisegiri,
  imgAjumobi,
  imgAkanni,
  imgDavid,
  imgDimeji,
  imgDonotomi,
  imgEmmanuella,
  imgFrancis,
  imgGoodness,
  imgJesse,
  imgJessica,
  imgKennedy,
  imgKola,
  imgMerrybell,
  imgOlorunpomi,
  imgOtti,
  imgRehoboth,
  imgTonia,
  imgVanessa,
  imgVictor,
  imgWilliams,
} from "../assets/images";

const coreValues = [
  {
    icon: <FiShield size={28} />,
    title: "Safety",
    description:
      "Every journey is protected with real-time monitoring, emergency protocols, and continuous oversight.",
    number: "01",
  },
  {
    icon: <FiEye size={28} />,
    title: "Transparency",
    description:
      "Clear pricing, live tracking, and open communication — no hidden surprises.",
    number: "02",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Innovation",
    description:
      "Constantly evolving our technology to solve real mobility challenges in Africa.",
    number: "03",
  },
  {
    icon: <FiHeart size={28} />,
    title: "Trust",
    description:
      "Built through consistent reliability and a commitment to every person who uses Transiflow.",
    number: "04",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Accessibility",
    description:
      "Making safe, reliable transport available to everyone, everywhere.",
    number: "05",
  },
];

const teamMembers = [
  { name: "David Utenwojo Usman", role: "Project Manager", avatar: imgDavid },
  { name: "Ogweyibo Kennedy", role: "UI/UX Lead", avatar: imgKennedy },
  { name: "Jesse Aporah", role: "Tech Lead", avatar: imgJesse },
  { name: "Victor Abuka", role: "Fullstack Lead", avatar: imgVictor },
  {
    name: "Bunu Vanessa Gloria",
    role: "Social Media Manager",
    avatar: imgVanessa,
  },
  { name: "Dimeji Alatishe", role: "QA Team Lead", avatar: imgDimeji },
  {
    name: "Predise Jessica Nwakwuo",
    role: "UI/UX Designer",
    avatar: imgJessica,
  },
  { name: "Tonia Onyeka", role: "Web Developer", avatar: imgTonia },
  { name: "Francis Abigeal", role: "QA/Tester", avatar: imgFrancis },
  { name: "Ajisegiri Ni'imatullah", role: "QA/Tester", avatar: imgAjisegiri },
  { name: "Oke Merrybell", role: "Virtual Assistant", avatar: imgMerrybell },
  { name: "Otti Oluwapenni", role: "QA/Tester", avatar: imgOtti },
  
  { name: "Akanni Abdulmuiz", role: "Graphic Designer", avatar: imgAkanni },
  { name: "Akolawole Fawemimo", role: "Backend Developer", avatar: imgKola },
  {
    name: "Olorunpomi Temitope",
    role: "Graphic Designer",
    avatar: imgOlorunpomi,
  },
  { name: "Ajumobi Isaac", role: "Frontend Developer", avatar: imgAjumobi },
  {
    name: "Emmanuella Chinweuba",
    role: "Content Manager",
    avatar: imgEmmanuella,
  },
  {
    name: "Domotimi Matthew Okiakpe",
    role: "UI/UX Designer",
    avatar: imgDonotomi,
  },
  {
    name: "Goodness Chukwu",
    role: "Social Media Manager",
    avatar: imgGoodness,
  },
  { name: "Ebiowei Rehoboth", role: "Copywriter", avatar: imgRehoboth },
  { name: "Williams Pachuol", role: "Frontend Developer", avatar: imgWilliams },
];

export default function AboutPage() {
  const [showAllTeam, setShowAllTeam] = useState(false);
  const displayedTeam = showAllTeam ? teamMembers : teamMembers.slice(0, 5);

  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section - Spreads under navbar like homepage hero */}
        <section
          ref={heroRef}
          className="relative min-h-screen overflow-hidden bg-[#0D2024] px-5 pb-16 pt-24 sm:pb-20 md:px-10 lg:px-20 lg:pb-28 lg:pt-28 -mt-20"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format"
              alt="African cityscape"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0D2024]/85"></div>
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

          <div className="relative z-10 mx-auto max-w-4xl text-center px-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/30 bg-[#007C91]/10 px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#007C91] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#007C91]">
                Building the future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              We're building the future of{" "}
              <span className="text-[#007C91]">safe mobility</span>
              <br className="hidden sm:block" />
              in Africa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-2"
            >
              Transiflow was born from a simple idea: movement should never feel
              uncertain.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          >
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
              <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/30" />
            </div>
          </motion.div>
        </section>

        {/* The Problem Section */}
        <section className="bg-white px-5 py-16 sm:py-20 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 sm:px-4 sm:py-2 mb-4">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-red-600">
                    The Challenge
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D2024] mb-4 leading-tight">
                  Millions travel every day — yet safety, clarity, and trust are
                  still missing.
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  So we decided to solve that.
                </p>
                <div className="mt-5 sm:mt-6 p-4 sm:p-6 bg-[#0D2024] rounded-xl sm:rounded-2xl">
                  <p className="text-white/80 text-sm sm:text-base italic">
                    "We're designing a platform that gives travelers confidence,
                    families peace of mind, and transport providers a smarter
                    way to operate."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative mt-6 md:mt-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format"
                  alt="African transportation"
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-56 sm:h-64 md:h-80 object-cover"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-[#007C91] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                  <p className="text-white font-bold text-lg sm:text-2xl">
                    50K+
                  </p>
                  <p className="text-white/80 text-[10px] sm:text-xs">
                    Trips monitored
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Split Layout with Images */}
        <section
          ref={missionRef}
          className="px-5 py-16 sm:py-20 md:px-10 lg:px-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative group overflow-hidden min-h-[280px] sm:min-h-[320px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2071&auto=format"
                    alt="Mission"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#007C91]/85" />
                </div>
                <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center">
                  <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/20 text-white">
                    <FiTarget size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                    Our Mission
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
                    To simplify movement and make every journey safe,
                    predictable, and accessible for all.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group overflow-hidden min-h-[280px] sm:min-h-[320px] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2069&auto=format"
                    alt="Vision"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0D2024]/85" />
                </div>
                <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center">
                  <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/20 text-white">
                    <FiEye size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                    Our Vision
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
                    A continent where travel is transparent, secure, and
                    effortless — no matter where you're going.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values - Clean minimal grid with numbers */}
        <section
          ref={valuesRef}
          className="bg-gray-50 px-5 py-16 sm:py-20 md:px-10 lg:px-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold text-[#0D2024] mb-3 sm:mb-4"
              >
                Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-3"
              >
                The principles that guide everything we do
              </motion.p>
            </div>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-200 group-hover:text-[#007C91] transition-colors">
                        {value.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-[#007C91]">{value.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0D2024]">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="relative overflow-hidden bg-[#007C91] px-5 py-12 sm:py-16 md:px-10 lg:px-20">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format"
              alt="Background pattern"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="text-white">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  22+
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                  Team Members
                </p>
              </div>
              <div className="text-white">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  2022
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                  Year Founded
                </p>
              </div>
              <div className="text-white">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Africa
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                  Building for Africa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={teamRef}
          className="bg-white px-5 py-16 sm:py-20 md:px-10 lg:px-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D2024] mb-3 sm:mb-4"
              >
                Meet the team behind Transiflow
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-3"
              >
                A growing group of developers, designers, and problem-solvers
                building the future of mobility.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {displayedTeam.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="text-center group"
                >
                  <div className="relative mb-3 sm:mb-4 flex justify-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full object-cover border-3 sm:border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0D2024] leading-tight">
                    {member.name.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#007C91] font-medium mt-0.5 sm:mt-1">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {teamMembers.length > 5 && (
              <div className="text-center mt-10 sm:mt-12">
                <button
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#007C91] transition-all hover:border-[#007C91] hover:bg-[#007C91]/5"
                >
                  {showAllTeam ? (
                    <>
                      Show Less <FiChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Show All Team ({teamMembers.length} members){" "}
                      <FiChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D2024] px-5 py-16 sm:py-20 md:px-10 lg:px-20">
          <div className="mx-auto max-w-4xl text-center px-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Ready to experience smarter transport?
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
                Join the movement. Let's build a safer, more reliable transport
                future together.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#007C91] px-5 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-[#006b7d] hover:scale-[1.02]"
                >
                  Get Started Today{" "}
                  <FiArrowRight size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

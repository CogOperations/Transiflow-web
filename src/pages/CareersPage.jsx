import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Briefcase,
  CheckCircle2,
  Code,
  Database,
  Globe,
  Heart,
  Palette,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Card from "../components/common/Card";
import CardGrid from "../components/common/CardGrid";
import Section from "../components/common/Section";

const CareersPage = () => {
  const heroRef = useRef(null);

  const heroInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-[#0D2024] px-5 pb-16 pt-24 sm:pb-20 md:px-10 lg:px-20 lg:pb-28 lg:pt-28 -mt-20"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format"
              alt="Careers background"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0D2024]/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl text-center px-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/30 bg-[#007C91]/10 px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#007C91] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#007C91]">
                Careers at Transiflow
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Build the future of{" "}
              <span className="text-[#007C91]">safer transport</span>
              <br className="hidden sm:block" />
              across Africa.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto px-2"
            >
              We're looking for passionate builders, designers, and problem
              solvers who believe technology can transform mobility, safety, and
              transportation across Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("openings")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#007C91] hover:bg-[#006b7d] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                View Open Roles
              </button>

              <button
                onClick={() => {
                  window.location.href = "mailto:transiflow93@gmail.com";
                }}
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </section>

        {/* OPENINGS */}
        <Section
          id="openings"
          title="Current Openings"
          description="Volunteer Roles — Remote"
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <CardGrid>
            <JobCard
              icon={<Code size={32} />}
              title="React Native Mobile Developer"
              description="Build the mobile app that will transform how millions travel across Africa."
              skills={[
                "React Native",
                "TypeScript",
                "Mobile Development",
                "API Integration",
              ]}
            />

            <JobCard
              icon={<Database size={32} />}
              title="Backend Developer"
              description="Design and build robust APIs and server infrastructure."
              skills={[
                "Node.js or Django",
                "REST APIs",
                "Database Design",
                "Cloud Services",
              ]}
            />

            <JobCard
              icon={<Palette size={32} />}
              title="UI/UX Designer"
              description="Create beautiful, intuitive interfaces for modern mobility."
              skills={[
                "Figma",
                "User Research",
                "Prototyping",
                "Mobile Design",
              ]}
            />

            <JobCard
              icon={<CheckCircle2 size={32} />}
              title="QA / Tester"
              description="Ensure reliability and quality across all product experiences."
              skills={[
                "Testing",
                "Attention to Detail",
                "Bug Tracking",
                "User Perspective",
              ]}
            />
          </CardGrid>
        </Section>

        {/* BENEFITS SECTION */}
        <section className="relative overflow-hidden bg-white py-24 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#007C91]/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/20 bg-[#007C91]/5 px-4 py-2 mb-5"
              >
                <span className="h-2 w-2 rounded-full bg-[#007C91] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#007C91]">
                  Benefits & Growth
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-[#0D2024]"
              >
                What You <span className="text-[#007C91]">Get</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-8 text-gray-600"
              >
                More than just experience — join a mission-driven team building
                meaningful technology with real-world impact.
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              <BenefitCard
                icon={<Briefcase size={30} />}
                title="Real Project Experience"
                description="Work on a live product impacting thousands of people"
              />

              <BenefitCard
                icon={<Users size={30} />}
                title="Strong Portfolio"
                description="Build impressive work samples that stand out"
              />

              <BenefitCard
                icon={<Globe size={30} />}
                title="Fully Remote"
                description="Work from anywhere with flexible schedules"
              />

              <BenefitCard
                icon={<Heart size={30} />}
                title="Mission-Driven Team"
                description="Collaborate with passionate problem solvers"
              />
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="relative overflow-hidden bg-[#f8fafc] py-24 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#007C91]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-100 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/20 bg-[#007C91]/5 px-4 py-2 mb-5"
              >
                <span className="h-2 w-2 rounded-full bg-[#007C91] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#007C91]">
                  Our Culture
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-[#0D2024]"
              >
                Why Join <span className="text-[#007C91]">Transiflow?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-8"
              >
                Work with passionate builders solving real transportation
                challenges while growing your career in a collaborative
                environment.
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <CultureItem
                color="blue"
                title="Solve Real Problems"
                text="Transportation safety is a critical challenge across Africa. Your work will directly impact people's lives."
              />

              <CultureItem
                color="purple"
                title="Build Something Meaningful"
                text="Help shape the future of mobility and transportation technology in Africa."
              />

              <CultureItem
                color="green"
                title="Grow Your Skills"
                text="Gain hands-on experience with modern tools, systems, and collaborative development."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0D2024] relative">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#007C91]/20 blur-3xl" />

            <div className="relative z-10 px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to make an impact?
              </h2>

              <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                Send us your resume and a brief note about why you want to join
                Transiflow.
              </p>

              <button
                onClick={() => {
                  window.location.href = "mailto:transiflow93@gmail.com";
                }}
                className="mt-8 bg-[#007C91] hover:bg-[#006b7d] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Apply Now
              </button>

              <p className="mt-6 text-sm text-white/50">
                transiflow93@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/* =========================
   JOB CARD
========================= */

function JobCard({ icon, title, description, skills }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,124,145,0.18)]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#007C91]/10 blur-3xl transition-all duration-500 group-hover:bg-[#007C91]/20" />

      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#007C91] via-cyan-400 to-[#0D2024]" />

      <div className="relative p-8">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#007C91]/10 text-[#007C91] shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>

          <div className="rounded-full border border-[#007C91]/20 bg-[#007C91]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#007C91]">
            Remote
          </div>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-[#0D2024] transition-colors duration-300 group-hover:text-[#007C91]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Required Skills
          </p>

          <div className="flex flex-wrap gap-2">
            {skills?.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#007C91]/10 bg-[#007C91]/5 px-3 py-1 text-xs font-medium text-[#007C91] transition-all duration-300 hover:bg-[#007C91] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="my-6 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Commitment
            </p>
            <p className="text-sm font-semibold text-[#0D2024]">
              Volunteer • Flexible
            </p>
          </div>

          <button
            className="group/btn relative overflow-hidden rounded-xl bg-[#007C91] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b7d] hover:shadow-lg"
            onClick={() => {
              window.location.href = "mailto:transiflow93@gmail.com";
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply Now
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </span>

            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   BENEFIT CARD
========================= */

function BenefitCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#007C91]/20 hover:shadow-[0_20px_60px_rgba(0,124,145,0.12)]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#007C91]/10 blur-3xl transition-all duration-500 group-hover:bg-[#007C91]/20" />

      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#007C91] via-cyan-400 to-[#0D2024] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#007C91]/10 text-[#007C91] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-[#0D2024] transition-colors duration-300 group-hover:text-[#007C91]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

/* =========================
   CULTURE ITEM
========================= */

function CultureItem({ color, title, text }) {
  const styles = {
    blue: {
      iconBg: "bg-[#007C91]/10",
      iconColor: "text-[#007C91]",
      glow: "from-[#007C91]/15",
    },
    purple: {
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      glow: "from-purple-200/40",
    },
    green: {
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      glow: "from-green-200/40",
    },
  };

  const current = styles[color];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,124,145,0.12)]"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${current.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100/50 blur-2xl" />

      <div className="relative">
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${current.iconBg} ${current.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
        >
          <CheckCircle2 size={28} />
        </div>

        <h3 className="text-2xl font-bold text-[#0D2024] transition-colors duration-300 group-hover:text-[#007C91]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">{text}</p>

        <div className="mt-8 h-1 w-12 rounded-full bg-[#007C91]/20 transition-all duration-500 group-hover:w-24 group-hover:bg-[#007C91]" />
      </div>
    </motion.div>
  );
}

export default CareersPage;
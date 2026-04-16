import { useState, useEffect, useRef } from "react";
import { FiRadio, FiShield, FiLayout, FiZap } from "react-icons/fi";

const features = [
  {
    icon: FiRadio,
    title: "Real-Time Trip Monitoring",
    text: "Stay updated with live trip progress, ETA tracking, and better visibility across every movement.",
    tag: "Live",
    accent: "#0D9DAF",
  },
  {
    icon: FiShield,
    title: "Passenger Safety Layer",
    text: "Support safer journeys with monitoring tools, emergency visibility, and proactive transport oversight.",
    tag: "Safety",
    accent: "#5B8FA8",
  },
  {
    icon: FiLayout,
    title: "Centralized Transport Management",
    text: "Manage routes, schedules, movement, and travel coordination from one simple operating dashboard.",
    tag: "Control",
    accent: "#7aabb1",
  },
  {
    icon: FiZap,
    title: "Reliable Experience",
    text: "Built to reduce confusion, improve planning, and create a smoother travel experience for users and operators.",
    tag: "Speed",
    accent: "#456066",
  },
];

function useInView(ref, threshold = 0.15) {
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

function FeatureCard({ feature, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .55s ease ${index * 100 + 200}ms, transform .55s ease ${index * 100 + 200}ms`,
        position: "relative",
        paddingTop: "28px",
        height: "100%",
      }}
    >
      {/* Icon - half outside with bright teal background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20px",
          zIndex: 10,
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: hovered ? feature.accent : "#0D9DAF",
          border: `2px solid ${hovered ? feature.accent : "#0D9DAF"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .25s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 20px ${feature.accent}40` : "none",
        }}
      >
        <Icon size={20} color={hovered ? "#fff" : "#fff"} style={{ transition: "color .2s" }} />
      </div>

      {/* Card body - solid, no gradients */}
      <div
        style={{
          background: "#0D2024",
          border: `1px solid ${hovered ? feature.accent : "#2a3a3e"}`,
          borderRadius: "20px",
          padding: "48px 20px 24px 20px",
          position: "relative",
          transition: "all .25s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Tag */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-end" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: feature.accent,
              borderRadius: "20px",
              padding: "4px 10px",
              background: `${feature.accent}15`,
            }}
          >
            {feature.tag}
          </span>
        </div>

        <h3
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "16px",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#fff",
          }}
        >
          {feature.title}
        </h3>

        <p
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#9ca3af",
            flex: 1,
          }}
        >
          {feature.text}
        </p>

        {/* Bottom indicator - solid, no gradient */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "20px",
            height: "2px",
            borderRadius: "2px",
            background: hovered ? feature.accent : "#2a3a3e",
            width: hovered ? "100%" : "40px",
            transition: "all .35s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#E8F9FA" }}
      className="py-16 px-5 md:py-24 md:px-6 lg:px-10"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            maxWidth: "100%",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .5s ease, transform .5s ease",
          }}
          className="text-center md:text-left"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "999px",
              border: "1px solid #d1d5db",
              padding: "5px 12px",
              marginBottom: "20px",
              background: "white",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0D9DAF", display: "block" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "#6b7280" }}>
              Features
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0D2024",
              margin: 0,
            }}
          >
            Everything you need to move people with{" "}
            <span style={{ color: "#9ca3af" }}>more confidence.</span>
          </h2>

          <p style={{ marginTop: "14px", fontSize: "15px", lineHeight: 1.6, color: "#6b7280", maxWidth: "600px" }} className="md:mx-0 mx-auto">
            Designed for safer transport operations, better visibility, and more efficient movement management.
          </p>
        </div>

        {/* Cards - responsive grid */}
        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            borderTop: "1px solid #d1d5db",
            paddingTop: "28px",
            opacity: inView ? 1 : 0,
            transition: "opacity .5s ease .6s",
          }}
          className="flex-col sm:flex-row text-center sm:text-left"
        >
          <p style={{ fontSize: "13px", color: "#6b7280" }}>
            Trusted by operators across 38 cities and growing.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {features.map((f) => (
              <div key={f.tag} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: f.accent, display: "block" }} />
                <span style={{ fontSize: "12px", color: "#4b5563" }}>{f.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
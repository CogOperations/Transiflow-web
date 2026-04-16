import { useState, useEffect, useRef } from "react";

const appFeatures = [
  {
    id: "live",
    label: "Live Trip Updates",
    desc: "Real-time location and arrival tracking.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 12.728A9 9 0 0 0 5.636 5.636z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    id: "route",
    label: "Route Visibility",
    desc: "See every stop, turn, and milestone.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13V7m0 13 6-3m-6-10 6-3m0 16 5.447-2.724A1 1 0 0 0 21 16.382V5.618a1 1 0 0 0-1.447-.894L15 7" />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Quick Support",
    desc: "One tap to reach your operations team.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v.01M12 12a2 2 0 0 0-1.732-1.995A2 2 0 1 1 12 12z" />
      </svg>
    ),
  },
  {
    id: "activity",
    label: "Travel Overview",
    desc: "Full history and activity at a glance.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 10V7m0 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      </svg>
    ),
  },
];

const screens = [
  {
    id: "journey",
    title: "Your Journey",
    content: (eta) => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>Good Morning</p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: 0 }}>Your Journey</h3>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: "50%", background: "#007C91",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16
          }}>↗</div>
        </div>

        <div style={{
          background: "#0F172A", borderRadius: 20, padding: "18px 16px", color: "#fff", marginBottom: 14
        }}>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", margin: "0 0 4px" }}>Current Route</p>
          <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>City Express</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, background: "#22C55E", borderRadius: "50%", display: "inline-block" }} />
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>Active · On Schedule</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          {[
            { label: "ETA", value: `${eta} mins` },
            { label: "Status", value: "On Track" },
            { label: "Speed", value: "48 km/h" },
            { label: "Alerts", value: "Enabled" },
          ].map((item) => (
            <div key={item.label} style={{
              background: "#F8FAFC", borderRadius: 14, padding: "10px 12px"
            }}>
              <p style={{ fontSize: 10, color: "#9CA3AF", margin: "0 0 3px" }}>{item.label}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "auto", border: "1px solid #E5E7EB", borderRadius: 14, padding: "10px 12px"
        }}>
          <p style={{ fontSize: 10, color: "#9CA3AF", margin: "0 0 3px" }}>Safety Tip</p>
          <p style={{ fontSize: 11, color: "#374151", margin: 0, lineHeight: 1.6 }}>
            Share your trip status and stay updated throughout the journey.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "route",
    title: "Route Map",
    content: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>Live Route</p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: 0 }}>City Express</h3>
          </div>
          <div style={{
            background: "#FEF3C7", borderRadius: 10, padding: "4px 10px", fontSize: 11, fontWeight: 600, color: "#92400E"
          }}>3 stops left</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { stop: "Central Station", done: true, time: "09:12" },
            { stop: "Market Square", done: true, time: "09:28" },
            { stop: "University Ave", done: false, time: "09:44", active: true },
            { stop: "Tech Hub", done: false, time: "09:58" },
            { stop: "Airport Terminal", done: false, time: "10:15" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 18, position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: 14, height: 14, borderRadius: "50%", flexShrink: 0, marginTop: 2,
                  background: item.done ? "#007C91" : item.active ? "#0F172A" : "#E5E7EB",
                  border: item.active ? "3px solid #007C91" : "none",
                  boxSizing: "border-box"
                }} />
                {i < 4 && (
                  <div style={{
                    width: 2, height: 18, background: item.done ? "#007C91" : "#E5E7EB", marginTop: 3
                  }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: 13, fontWeight: item.active ? 700 : 500,
                  color: item.done ? "#9CA3AF" : "#111827", margin: "0 0 1px",
                  textDecoration: item.done ? "line-through" : "none"
                }}>{item.stop}</p>
                <p style={{ fontSize: 10, color: "#9CA3AF", margin: 0 }}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "activity",
    title: "Activity",
    content: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>This Week</p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: 0 }}>Travel Activity</h3>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[
            { label: "Trips", value: "14", icon: "🚌" },
            { label: "On-time", value: "92%", icon: "✅" },
            { label: "km Travelled", value: "318", icon: "📍" },
            { label: "Avg ETA Diff", value: "2 min", icon: "⏱" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#F8FAFC", borderRadius: 14, padding: "12px" }}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
              <p style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>{s.value}</p>
              <p style={{ fontSize: 10, color: "#9CA3AF", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#F8FAFC", borderRadius: 16, padding: 14 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#374151", margin: "0 0 10px" }}>Daily Trips</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
            {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{
                  width: "100%", height: `${h}%`, background: i === 4 ? "#007C91" : "#D1D5DB",
                  borderRadius: 4, transition: "height 0.4s ease"
                }} />
                <p style={{ fontSize: 8, color: "#9CA3AF", margin: 0 }}>
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function MobileApp() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [eta, setEta] = useState(18);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  // Countdown ETA
  useEffect(() => {
    const t = setInterval(() => setEta((v) => (v > 1 ? v - 1 : 18)), 3000);
    return () => clearInterval(t);
  }, []);

  // Section entrance
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Feature card stagger
  useEffect(() => {
    const observers = featureRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleFeatures((prev) => [...new Set([...prev, i])]);
            }, i * 120);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const phoneScreens = ["Journey", "Route", "Activity"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        .mobileapp-section * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }

        .mobileapp-section {
          background: #0A0F1A;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .mobileapp-section { padding: 96px 40px; }
        }
        @media (min-width: 1024px) {
          .mobileapp-section { padding: 96px 80px; }
        }

        /* subtle grid texture */
        .mobileapp-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .mobileapp-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .mobileapp-inner { grid-template-columns: 1fr 1fr; }
        }

        /* LEFT SIDE */
        .left-fade {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .left-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(0,124,145,0.4);
          background: rgba(0,124,145,0.12);
          color: #22D3EE;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 6px; height: 6px;
          background: #22D3EE;
          border-radius: 50%;
          animation: pulse-dot 1.5s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .heading {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          color: #F9FAFB;
          line-height: 1.18;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .heading span { color: #007C91; }

        .subtext {
          font-size: 16px;
          color: #9CA3AF;
          line-height: 1.75;
          max-width: 480px;
          margin: 0 0 36px;
        }

        /* Feature cards */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        @media (max-width: 420px) {
          .features-grid { grid-template-columns: 1fr; }
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s, background 0.2s;
          cursor: default;
        }

        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card:hover {
          background: rgba(0,124,145,0.1);
          border-color: rgba(0,124,145,0.3);
        }

        .feature-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(0,124,145,0.18);
          color: #22D3EE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-label {
          font-size: 13px;
          font-weight: 600;
          color: #F9FAFB;
          margin: 0 0 3px;
        }

        .feature-desc {
          font-size: 11px;
          color: #6B7280;
          margin: 0;
          line-height: 1.5;
        }

        /* Download buttons */
        .download-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .dl-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 11px 20px;
          color: #F9FAFB;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          font-family: 'DM Sans', sans-serif;
        }

        .dl-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }

        .dl-btn:active { transform: translateY(0); }

        .dl-btn-icon { width: 22px; height: 22px; flex-shrink: 0; }

        .dl-btn-sub {
          font-size: 9px;
          color: #9CA3AF;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1px;
        }

        .dl-btn-name {
          font-size: 14px;
          font-weight: 600;
          display: block;
        }

        /* RIGHT – PHONE */
        .phone-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }

        .phone-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tab switcher */
        .tab-row {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 4px;
        }

        .tab-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          background: transparent;
          border: none;
          padding: 7px 18px;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .tab-btn.active {
          background: #007C91;
          color: #fff;
          font-weight: 600;
        }

        /* Phone shell */
        .phone-outer {
          background: #1C1C1E;
          border-radius: 52px;
          padding: 12px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 40px 100px rgba(0,0,0,0.6),
            0 0 60px rgba(0,124,145,0.08);
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .phone-inner {
          width: 260px;
          height: 540px;
          border-radius: 42px;
          background: #fff;
          overflow: hidden;
          position: relative;
        }

        @media (max-width: 380px) {
          .phone-inner { width: 220px; height: 460px; }
        }

        /* Notch */
        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 26px;
          background: #1C1C1E;
          border-radius: 0 0 18px 18px;
          z-index: 10;
        }

        .phone-content {
          position: absolute;
          inset: 0;
          padding: 36px 16px 16px;
          overflow: hidden;
        }

        .screen-slide {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          height: 100%;
        }

        .screen-slide.active {
          opacity: 1;
          transform: translateX(0);
        }

        /* Floating status pill */
        .status-pill {
          position: absolute;
          bottom: 20px;
          right: -10px;
          background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #F9FAFB;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          animation: float-pill 3.5s ease-in-out infinite;
        }

        @keyframes float-pill {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .pill-dot {
          width: 7px; height: 7px;
          background: #22C55E;
          border-radius: 50%;
          animation: pulse-dot 1.2s infinite;
        }

        .rating-badge {
          position: absolute;
          top: 40px;
          left: -20px;
          background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #F9FAFB;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          animation: float-pill 4.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .star-row { color: #FBBF24; font-size: 10px; letter-spacing: 1px; }
      `}</style>

      <section className="mobileapp-section" ref={sectionRef}>
        <div className="mobileapp-inner">

          {/* LEFT */}
          <div className={`left-fade ${sectionVisible ? "visible" : ""}`}>
            <div className="badge">
              <span className="badge-dot" />
              Mobile App
            </div>

            <h2 className="heading">
              Transport visibility,{" "}
              <span>always in your pocket.</span>
            </h2>

            <p className="subtext">
              Transiflow gives travelers and operators real-time updates, smoother
              communication, and a more dependable journey experience — wherever they are.
            </p>

            <div className="features-grid">
              {appFeatures.map((f, i) => (
                <div
                  key={f.id}
                  ref={(el) => (featureRefs.current[i] = el)}
                  className={`feature-card ${visibleFeatures.includes(i) ? "visible" : ""}`}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <p className="feature-label">{f.label}</p>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="download-row">
              {/* Apple */}
              <button className="dl-btn">
                <svg className="dl-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <span className="dl-btn-sub">Download on the</span>
                  <span className="dl-btn-name">App Store</span>
                </div>
              </button>

              {/* Google */}
              <button className="dl-btn">
                <svg className="dl-btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.38.21.82.23 1.24.07l11.62-11.62-2.63-2.63L3.18 23.76z" fill="#EA4335"/>
                  <path d="M20.82 9.37 17.5 7.5l-2.96 2.96 2.96 2.96 3.35-1.87c.95-.54.95-1.65-.03-2.18z" fill="#FBBC04"/>
                  <path d="M4.42.17C4 .33 3.68.71 3.68 1.26v21.48l10.24-10.24L4.42.17z" fill="#4285F4"/>
                  <path d="M14.63 12 4.42 23.83c.43.15.93.1 1.34-.13l11.74-6.57L14.63 12z" fill="#34A853"/>
                </svg>
                <div>
                  <span className="dl-btn-sub">Get it on</span>
                  <span className="dl-btn-name">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT – PHONE */}
          <div className={`phone-wrap ${sectionVisible ? "visible" : ""}`}>
            {/* Tab switcher */}
            <div className="tab-row">
              {phoneScreens.map((s, i) => (
                <button
                  key={s}
                  className={`tab-btn ${activeScreen === i ? "active" : ""}`}
                  onClick={() => setActiveScreen(i)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Phone + floating badges */}
            <div style={{ position: "relative" }}>
              {/* Rating badge */}
              <div className="rating-badge">
                <div>
                  <div className="star-row">★★★★★</div>
                  <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 1 }}>4.9 App Rating</div>
                </div>
              </div>

              <div className="phone-outer">
                <div className="phone-inner">
                  <div className="phone-notch" />
                  <div className="phone-content">
                    {screens.map((screen, i) => (
                      <div
                        key={screen.id}
                        className={`screen-slide ${activeScreen === i ? "active" : ""}`}
                        style={{ display: activeScreen === i ? "block" : "none", height: "100%" }}
                      >
                        {screen.content(eta)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live status pill */}
              <div className="status-pill">
                <span className="pill-dot" />
                Live Tracking On
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
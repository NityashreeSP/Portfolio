import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [activeEdu, setActiveEdu] = useState(0);

  const stories = [
    {
      number: "01",
      label: "MINDSET",
      title: "Problem Solver",
      text: "I think about how real-world challenges can be digitalized and enjoy figuring out the right technology to turn ideas into practical solutions.",
    },
    {
      number: "02",
      label: "CRAFT",
      title: "Product Builder",
      text: "From full-stack web applications to AI and computer vision projects, I enjoy bringing ideas from concept to functional code.",
    },
    {
      number: "03",
      label: "DRIVE",
      title: "Self-Motivated",
      text: "I don't need grand motivation. Give me a laptop, an interesting problem, and enough time — that's all it takes to get building.",
    },
  ];

  const education = [
    {
      id: "uvce",
      period: "CURRENT (2023 — PRESENT)",
      institution: "University Visvesvaraya College of Engineering",
      shortName: "UVCE",
      location: "Bengaluru, India",
      degree: "B.Tech in Computer Science Engineering",
      score: "CGPA: 9.39",
      status: "6th Semester",
      active: true,
      highlights: ["Computer Science Major", "Active Hackathon Participant", "Core Dev Projects"],
    },
    {
      id: "pu",
      period: "2021 — 2023",
      institution: "Sri Vijaya PU College",
      shortName: "Sri Vijaya",
      location: "Karnataka, India",
      degree: "Pre-University (PCMC)",
      score: "Percentage: 96.5%",
      status: "Completed",
      active: false,
      highlights: ["Science Stream Focus", "Academic Excellence Award", "Top Percentile"],
    },
    {
      id: "school",
      period: "2020 — 2021",
      institution: "SVMES High School",
      shortName: "SVMES",
      location: "Karnataka, India",
      degree: "High School (SSLC)",
      score: "Percentage: 96.8%",
      status: "Completed",
      active: false,
      highlights: ["Distinction Grade", "Mathematics & Science Lead"],
    },
  ];

  return (
    <section id="about" className="ab-section">
      <div className="ab-glow ab-glow-1" />
      <div className="ab-glow ab-glow-2" />
      <div className="ab-grid-bg" />

      <div className="ab-container">
        {/* COMPACT SECTION HEADER */}
        <motion.div
          className="ab-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="ab-eyebrow">02 // ABOUT & BACKGROUND</span>
            <h2 className="ab-title">
              Engineered for <span>Impact.</span>
            </h2>
          </div>

          <div className="ab-status-pill">
            <span className="ab-dot" />
            <span>AVAILABLE FOR ROLES</span>
          </div>
        </motion.div>

        {/* 2-COLUMN MAIN LAYOUT */}
        <div className="ab-grid">
          {/* LEFT COLUMN: STORY CARDS */}
          <div className="ab-stories">
            <div className="ab-column-title">
              <span>01</span>
              <h3>Core Philosophy</h3>
            </div>

            <div className="ab-story-list">
              {stories.map((story, index) => (
                <motion.div
                  key={story.number}
                  className="ab-story-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="ab-story-header">
                    <span className="ab-story-num">{story.number}</span>
                    <span className="ab-story-tag">{story.label}</span>
                  </div>
                  <h4 className="ab-story-heading">{story.title}</h4>
                  <p className="ab-story-desc">{story.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: EDUCATION & TABS */}
          <div className="ab-education">
            <div className="ab-column-title">
              <span>02</span>
              <h3>Academic Background</h3>
            </div>

            <div className="ab-edu-card">
              {/* Institution Selector Tabs */}
              <div className="ab-edu-tabs">
                {education.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveEdu(idx)}
                    className={`ab-edu-tab ${activeEdu === idx ? "active" : ""}`}
                  >
                    <span>{item.shortName}</span>
                    {item.active && <b className="ab-tab-live" />}
                  </button>
                ))}
              </div>

              {/* Tab Details Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEdu}
                  className="ab-edu-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="ab-edu-top">
                    <span className="ab-edu-period">{education[activeEdu].period}</span>
                    <span className={`ab-edu-status ${education[activeEdu].active ? "active" : ""}`}>
                      {education[activeEdu].status}
                    </span>
                  </div>

                  <h4 className="ab-edu-inst">{education[activeEdu].institution}</h4>
                  <p className="ab-edu-degree">{education[activeEdu].degree}</p>

                  <div className="ab-edu-score-box">
                    <span>RECORD SCORE</span>
                    <strong>{education[activeEdu].score}</strong>
                  </div>

                  <div className="ab-edu-highlights">
                    {education[activeEdu].highlights.map((h, i) => (
                      <span key={i} className="ab-chip">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ab-section {
          position: relative;
          width: 100%;
          padding: 90px 5vw;
          background: #05070e;
          color: #f3f4f6;
          overflow: hidden;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .ab-grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .ab-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.2;
        }
        .ab-glow-1 { width: 400px; height: 400px; top: -50px; right: -50px; background: #4f46e5; }
        .ab-glow-2 { width: 350px; height: 350px; bottom: -50px; left: -50px; background: #9333ea; }

        .ab-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .ab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ab-eyebrow {
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #818cf8;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .ab-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .ab-title span {
          background: linear-gradient(135deg, #a5b4fc 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ab-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(114, 229, 187, 0.08);
          border: 1px solid rgba(114, 229, 187, 0.2);
          border-radius: 99px;
          font-family: monospace;
          font-size: 10px;
          color: #72e5bb;
          letter-spacing: 0.08em;
        }
        .ab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #72e5bb;
          box-shadow: 0 0 10px #72e5bb;
        }

        /* Columns Grid */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .ab-column-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          font-family: monospace;
        }
        .ab-column-title span {
          color: #818cf8;
          font-size: 12px;
        }
        .ab-column-title h3 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          margin: 0;
        }

        /* Stories */
        .ab-story-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ab-story-card {
          padding: 20px;
          background: rgba(18, 22, 38, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          backdrop-filter: blur(10px);
          transition: border-color 0.2s, transform 0.2s;
        }
        .ab-story-card:hover {
          border-color: rgba(129, 140, 248, 0.35);
          transform: translateX(4px);
        }
        .ab-story-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .ab-story-num {
          font-family: monospace;
          font-size: 10px;
          color: #818cf8;
        }
        .ab-story-tag {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          color: #6b7280;
        }
        .ab-story-heading {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #f3f4f6;
        }
        .ab-story-desc {
          font-size: 13px;
          line-height: 1.5;
          color: #9ca3af;
          margin: 0;
        }

        /* Education Card & Tabs */
        .ab-edu-card {
          background: rgba(18, 22, 38, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(10px);
        }
        .ab-edu-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }
        .ab-edu-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: #9ca3af;
          font-family: monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ab-edu-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }
        .ab-edu-tab.active {
          color: #ffffff;
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .ab-tab-live {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #72e5bb;
        }

        .ab-edu-content {
          display: flex;
          flex-direction: column;
        }
        .ab-edu-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .ab-edu-period {
          font-family: monospace;
          font-size: 10px;
          color: #818cf8;
          letter-spacing: 0.08em;
        }
        .ab-edu-status {
          font-family: monospace;
          font-size: 9px;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.05);
          color: #9ca3af;
        }
        .ab-edu-status.active {
          background: rgba(114, 229, 187, 0.1);
          color: #72e5bb;
        }
        .ab-edu-inst {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #f3f4f6;
          line-height: 1.3;
        }
        .ab-edu-degree {
          font-size: 13px;
          color: #9ca3af;
          margin: 0 0 16px 0;
        }

        .ab-edu-score-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          margin-bottom: 16px;
        }
        .ab-edu-score-box span {
          font-family: monospace;
          font-size: 9px;
          color: #6b7280;
          letter-spacing: 0.1em;
        }
        .ab-edu-score-box strong {
          font-family: monospace;
          font-size: 14px;
          color: #a5b4fc;
        }

        .ab-edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ab-chip {
          font-family: monospace;
          font-size: 10px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          color: #d1d5db;
        }

        @media (max-width: 900px) {
          .ab-grid { grid-template-columns: 1fr; gap: 24px; }
          .ab-header { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>
    </section>
  );
}

export default About;
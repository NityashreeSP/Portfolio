import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "01",
    key: "languages",
    label: "Languages",
    tag: "LANG",
    title: "The languages I build with.",
    desc: "Core programming and markup languages behind everything I ship.",
    items: ["Python", "C", "C++", "HTML5", "CSS3"],
  },
  {
    id: "02",
    key: "web",
    label: "Web Development",
    tag: "WEB",
    title: "Building for the web.",
    desc: "Frontend and backend tools for full-stack applications.",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    id: "03",
    key: "ai",
    label: "AI / Machine Learning",
    tag: "AI",
    title: "Exploring artificial intelligence.",
    desc: "Models, frameworks and techniques across vision and generative AI.",
    items: [
      "Scikit-Learn",
      "CNN",
      "LSTM",
      "ResNet18",
      "OpenCV",
      "PyTorch",
      "Transformers",
      "RAG",
    ],
    focus: ["Computer Vision", "Generative AI", "RAG"],
  },
  {
    id: "04",
    key: "core",
    label: "Core CS",
    tag: "CORE",
    title: "Strong foundations.",
    desc: "The computer science fundamentals every system rests on.",
    items: [
      "OOPS",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    id: "05",
    key: "database",
    label: "Database",
    tag: "DB",
    title: "Working with data.",
    desc: "Working with relational data and databases.",
    items: ["MySQL"],
  },
];

const totalSkills = categories.reduce((n, c) => n + c.items.length, 0);

function Skills() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active);

  return (
    <section id="skills" className="sk-section">
      <div className="sk-orb sk-orb-1"></div>
      <div className="sk-orb sk-orb-2"></div>
      <div className="sk-grid-bg"></div>

      {/* HEADER */}
      <motion.div
        className="sk-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="sk-eyebrow">03 / SKILLS</p>
          <h1>
            WHAT I <span>BUILD WITH.</span>
          </h1>
        </div>

        <div className="sk-stats">
          <div className="sk-stat">
            <strong>{String(categories.length).padStart(2, "0")}</strong>
            <span>CATEGORIES</span>
          </div>
          <div className="sk-stat">
            <strong>{String(totalSkills).padStart(2, "0")}</strong>
            <span>TECHNOLOGIES</span>
          </div>
          <div className="sk-stat live">
            <strong>
              <i></i>
            </strong>
            <span>CURRENTLY LEARNING</span>
          </div>
        </div>
      </motion.div>

      {/* MAIN LAYOUT */}
      <motion.div
        className="sk-layout"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* INDEX */}
        <aside className="sk-index">
          <p className="sk-index-title">INDEX</p>

          <div className="sk-index-list">
            {categories.map((c) => (
              <button
                key={c.key}
                className={`sk-index-item ${active === c.key ? "active" : ""}`}
                onClick={() => setActive(c.key)}
              >
                <span className="sk-index-num">{c.id}</span>
                <span className="sk-index-label">{c.label}</span>
                <span className="sk-index-count">
                  {String(c.items.length).padStart(2, "0")}
                </span>
                {active === c.key && (
                  <motion.span
                    layoutId="sk-active-bar"
                    className="sk-index-bar"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="sk-index-foot">
            <span>SELECT A CATEGORY</span>
            <i>↗</i>
          </div>
        </aside>

        {/* DETAIL */}
        <div className="sk-detail">
          <div className="sk-detail-glow"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="sk-detail-inner"
            >
              <div className="sk-detail-top">
                <span>{current.id}</span>
                <span>{current.label.toUpperCase()}</span>
                <span>{current.tag}_{current.id}</span>
              </div>

              <h2>{current.title}</h2>
              <p className="sk-detail-desc">{current.desc}</p>

              <div className="sk-divider">
                <span>TECHNOLOGIES</span>
                <i></i>
                <span>{String(current.items.length).padStart(2, "0")}</span>
              </div>

              <div className="sk-cards">
                {current.items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="sk-card"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="sk-card-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="sk-card-name">{skill}</span>
                    <span className="sk-card-arrow">→</span>
                  </motion.div>
                ))}
              </div>

              {current.focus && (
                <div className="sk-focus">
                  <span className="sk-focus-label">FOCUS AREAS</span>
                  {current.focus.map((f) => (
                    <span key={f} className="sk-focus-item">
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.div
        className="sk-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>LEARN</span>
        <i>→</i>
        <span>BUILD</span>
        <i>→</i>
        <span>EXPERIMENT</span>
        <i>→</i>
        <span className="active-word">IMPROVE</span>
      </motion.div>

      <style>{`
        .sk-section {
          position: relative;
          min-height: 100vh;
          padding: 150px 5vw 110px;
          overflow: hidden;
          background: #07091a;
          color: #f5f4ff;
        }

        /* BACKGROUND */
        .sk-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(rgba(130,120,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(130,120,255,0.05) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: radial-gradient(circle at center, black, transparent 75%);
        }
        .sk-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.13;
        }
        .sk-orb-1 { width: 400px; height: 400px; top: 5%; left: -200px; background: #5146ff; }
        .sk-orb-2 { width: 350px; height: 350px; bottom: 5%; right: -180px; background: #c44dff; }

        /* HEADER */
        .sk-header {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto 60px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(132,119,230,0.22);
        }
        .sk-eyebrow {
          margin: 0 0 22px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #8b7cff;
        }
        .sk-header h1 {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(44px, 6.5vw, 100px);
          line-height: 0.9;
          letter-spacing: -0.06em;
          font-weight: 750;
        }
        .sk-header h1 span {
          background: linear-gradient(90deg, #9ed7ff, #9d8bff, #df70e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .sk-stats { display: flex; gap: 14px; }
        .sk-stat {
          min-width: 110px;
          padding: 16px 18px;
          border: 1px solid rgba(132,119,230,0.25);
          border-radius: 14px;
          background: rgba(25,28,62,0.5);
        }
        .sk-stat strong {
          display: flex;
          align-items: center;
          height: 34px;
          font-size: 30px;
          letter-spacing: -0.04em;
          font-weight: 700;
          color: #e9e5ff;
        }
        .sk-stat span {
          display: block;
          margin-top: 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.14em;
          color: rgba(220,215,242,0.45);
        }
        .sk-stat.live span { color: #72e5bb; }
        .sk-stat.live i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #72e5bb;
          box-shadow: 0 0 14px #72e5bb;
          animation: skPulse 2s ease-in-out infinite;
        }
        @keyframes skPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* LAYOUT */
        .sk-layout {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 18px;
          align-items: start;
        }

        /* INDEX */
        .sk-index {
          position: sticky;
          top: 100px;
          padding: 26px;
          border: 1px solid rgba(132,119,230,0.28);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(25,28,62,0.88), rgba(9,12,30,0.9));
          box-shadow: inset 0 1px rgba(255,255,255,0.04), 0 25px 80px rgba(0,0,0,0.15);
          backdrop-filter: blur(20px);
        }
        .sk-index-title {
          margin: 0 0 18px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          color: #8879ff;
        }
        .sk-index-list { display: flex; flex-direction: column; gap: 6px; }
        .sk-index-item {
          position: relative;
          display: grid;
          grid-template-columns: 34px 1fr auto;
          align-items: center;
          padding: 16px 14px;
          border: 1px solid transparent;
          border-radius: 12px;
          background: transparent;
          color: rgba(235,232,250,0.55);
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.3s, background 0.3s, border-color 0.3s;
        }
        .sk-index-item:hover {
          color: #f5f4ff;
          background: rgba(105,89,220,0.07);
        }
        .sk-index-item.active {
          color: #f5f4ff;
          background: rgba(105,89,220,0.12);
          border-color: rgba(145,128,255,0.3);
        }
        .sk-index-num {
          font-family: monospace;
          font-size: 10px;
          color: #8879ff;
        }
        .sk-index-label {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .sk-index-count {
          font-family: monospace;
          font-size: 10px;
          color: rgba(220,215,242,0.4);
        }
        .sk-index-bar {
          position: absolute;
          left: 0;
          top: 18%;
          bottom: 18%;
          width: 3px;
          border-radius: 3px;
          background: linear-gradient(180deg, #9ed7ff, #9d8bff, #df70e9);
        }
        .sk-index-foot {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(132,119,230,0.18);
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.14em;
          color: rgba(220,216,240,0.35);
        }
        .sk-index-foot i { font-style: normal; color: #8879ff; }

        /* DETAIL */
        .sk-detail {
          position: relative;
          min-height: 560px;
          padding: 40px;
          overflow: hidden;
          border: 1px solid rgba(132,119,230,0.28);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(25,28,62,0.88), rgba(9,12,30,0.9));
          box-shadow: inset 0 1px rgba(255,255,255,0.04), 0 25px 80px rgba(0,0,0,0.15);
          backdrop-filter: blur(20px);
        }
        .sk-detail-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          right: -110px;
          top: -110px;
          border-radius: 50%;
          background: #744cff;
          filter: blur(100px);
          opacity: 0.14;
          pointer-events: none;
        }
        .sk-detail-inner { position: relative; }
        .sk-detail-top {
          display: flex;
          justify-content: space-between;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          color: rgba(220,215,242,0.4);
        }
        .sk-detail-top span:first-child { color: #8879ff; }

        .sk-detail h2 {
          margin: 50px 0 14px;
          max-width: 700px;
          font-size: clamp(34px, 4.2vw, 60px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 700;
        }
        .sk-detail-desc {
          margin: 0;
          max-width: 480px;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.8;
          color: rgba(220,217,238,0.55);
        }

        .sk-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 44px 0 22px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          color: #8b7cff;
        }
        .sk-divider i {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(139,124,255,0.5), transparent);
        }

        .sk-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 10px;
        }
        .sk-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          padding: 18px 18px;
          border: 1px solid rgba(144,129,242,0.28);
          border-radius: 12px;
          background: rgba(105,89,220,0.07);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .sk-card:hover {
          transform: translateY(-4px);
          border-color: rgba(165,149,255,0.55);
          background: linear-gradient(135deg, rgba(106,145,255,0.16), rgba(190,95,255,0.16));
        }
        .sk-card-num {
          font-family: monospace;
          font-size: 9px;
          color: #8879ff;
        }
        .sk-card-name {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #e9e5ff;
        }
        .sk-card-arrow {
          font-size: 13px;
          color: rgba(165,149,255,0.5);
          transition: transform 0.3s, color 0.3s;
        }
        .sk-card:hover .sk-card-arrow {
          transform: translateX(4px);
          color: #a595ff;
        }

        .sk-focus {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 36px;
          padding-top: 22px;
          border-top: 1px solid rgba(132,119,230,0.18);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
        }
        .sk-focus-label { color: rgba(220,216,240,0.35); margin-right: 6px; }
        .sk-focus-item { color: rgba(220,216,240,0.65); }
        .sk-focus-item::before {
          content: "◆";
          margin-right: 7px;
          color: #8272ff;
        }

        /* FOOTER */
        .sk-footer {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 60px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(220,216,238,0.35);
        }
        .sk-footer i { color: #8879ff; font-style: normal; }
        .sk-footer .active-word { color: #a595ff; }

        /* TABLET */
        @media (max-width: 1000px) {
          .sk-header { flex-direction: column; align-items: flex-start; }
          .sk-layout { grid-template-columns: 1fr; }
          .sk-index { position: static; padding: 18px; }
          .sk-index-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .sk-index-item { min-width: 190px; }
          .sk-index-bar { display: none; }
          .sk-index-foot { display: none; }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .sk-section { padding: 100px 20px 80px; }
          .sk-stats { width: 100%; }
          .sk-stat { flex: 1; min-width: 0; padding: 14px; }
          .sk-detail { padding: 24px; min-height: auto; }
          .sk-detail h2 { margin-top: 36px; }
          .sk-cards { grid-template-columns: 1fr 1fr; }
          .sk-footer { flex-wrap: wrap; gap: 12px; font-size: 8px; }
        }
      `}</style>
    </section>
  );
}

export default Skills;
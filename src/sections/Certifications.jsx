import { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const certificates = [
  { id: 1, name: "Campus Champ — Summer Internship I", issuer: "Campus Champ · UVCE", file: "/certificates/cer1.jpg", category: "Internships" },
  { id: 2, name: "Samsung Innovation Campus — Coding & Programming", issuer: "Samsung Innovation Campus", file: "/certificates/cer2.jpg", category: "Courses" },
  { id: 3, name: "FCI Tech Fest 5.0 — 2nd Runner-up", issuer: "Fund a Child in India", file: "/certificates/cer3.jpg", category: "Competitions" },
  { id: 4, name: "LearnTube — Introduction to Full Stack Development", issuer: "LearnTube.ai", file: "/certificates/cer4.jpg", category: "Courses" },
  { id: 5, name: "IMPETUS 25.0 — Volunteer", issuer: "IEEE UVCE", file: "/certificates/cer5.jpg", category: "Volunteering" },
  { id: 6, name: "FCI — Draw Your Dreams 2024 — Volunteer", issuer: "Fund a Child in India", file: "/certificates/cer6.jpg", category: "Volunteering" },
  { id: 7, name: "UTSAV 2025 — Maunchakra Participation", issuer: "B.M.S. College of Engineering", file: "/certificates/cer7.jpg", category: "Competitions" },
  { id: 8, name: "Akashotsav 2024 — SKIT Winner", issuer: "Akash Group of Institutions", file: "/certificates/cer8.jpg", category: "Competitions" },
  { id: 9, name: "CodeFury 8.0 — Hackathon Participation", issuer: "IEEE UVCE Computer Society", file: "/certificates/cer9.jpg", category: "Competitions" },
  { id: 10, name: "BIT N Build Around the World 2025 — Internal Round", issuer: "Unstop · BIT N Build", file: "/certificates/cer10.jpg", category: "Competitions" },
  { id: 11, name: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy", file: "/certificates/cer11.jpg", category: "Courses" },
  { id: 12, name: "IIM Mumbai — Summer Internship 2026", issuer: "Indian Institute of Management Mumbai", file: "/certificates/cer12.jpeg", category: "Internships" },
];

const categories = ["All", "Internships", "Courses", "Competitions", "Volunteering"];

export default function Certifications() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? certificates
        : certificates.filter((c) => c.category === filter),
    [filter]
  );

  const selectedIndex = visible.findIndex((c) => c.id === selectedId);
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null;

  const go = useCallback(
    (dir) => {
      if (!selected) return;
      const next = (selectedIndex + dir + visible.length) % visible.length;
      setSelectedId(visible[next].id);
    },
    [selected, selectedIndex, visible]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, go]);

  const countFor = (cat) =>
    cat === "All"
      ? certificates.length
      : certificates.filter((c) => c.category === cat).length;

  return (
    <section id="certifications" className="cert-section">
      <div className="cert-glow cert-glow-1" />
      <div className="cert-glow cert-glow-2" />
      <div className="cert-bg-grid" />

      <div className="cert-container">
        {/* HEADER */}
        <div className="cert-header">
          <div>
            <span className="cert-badge">07 // CREDENTIALS & ACCOMPLISHMENTS</span>
            <h2 className="cert-title">
              Certificates <span>& Learning</span>
            </h2>
          </div>

          <div className="cert-stats">
            <span className="cert-stat-num">
              {String(certificates.length).padStart(2, "0")}
            </span>
            <span className="cert-stat-label">
              VERIFIED<br />CREDENTIALS
            </span>
          </div>
        </div>

        {/* FILTERS */}
        <div className="cert-filters">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cert-filter-btn ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="cert-active-pill"
                    className="cert-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="cert-filter-label">
                  {cat}
                  <span className="cert-count">{String(countFor(cat)).padStart(2, "0")}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* CARDS GRID */}
        <motion.div layout className="cert-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                onClick={() => setSelectedId(item.id)}
                className="cert-card"
              >
                {/* Header (Always aligned at top) */}
                <div className="cert-card-header">
                  <span className="cert-card-id">#{String(item.id).padStart(2, "0")}</span>
                  <span className="cert-card-tag">{item.category}</span>
                </div>

                {/* Body (Fixed height area with title + issuer) */}
                <div className="cert-card-body">
                  <h3 className="cert-card-title">{item.name}</h3>
                  <p className="cert-card-issuer">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    <span>{item.issuer}</span>
                  </p>
                </div>

                {/* Footer (Always pinned at exact bottom) */}
                <div className="cert-card-footer">
                  <span>INSPECT DOCUMENT</span>
                  <svg className="cert-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <span className="cert-modal-meta">
                    {String(selectedIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")} • {selected.category}
                  </span>
                  <h3 className="cert-modal-title">{selected.name}</h3>
                  <p className="cert-modal-issuer">{selected.issuer}</p>
                </div>
                <button
                  className="cert-modal-close"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="cert-modal-body">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selected.id}
                    src={selected.file}
                    alt={selected.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>

              {visible.length > 1 && (
                <div className="cert-modal-footer">
                  <button onClick={() => go(-1)} className="cert-nav-btn">
                    ← PREVIOUS
                  </button>
                  <span className="cert-nav-hint">USE ← → KEYS TO NAVIGATE</span>
                  <button onClick={() => go(1)} className="cert-nav-btn">
                    NEXT →
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .cert-section {
          position: relative;
          width: 100%;
          padding: 100px 5vw;
          background: #05070e;
          color: #f3f4f6;
          overflow: hidden;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .cert-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .cert-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.22;
        }
        .cert-glow-1 { width: 450px; height: 450px; top: -100px; left: -100px; background: #4f46e5; }
        .cert-glow-2 { width: 400px; height: 400px; bottom: -100px; right: -100px; background: #9333ea; }

        .cert-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* HEADER */
        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 36px;
        }
        .cert-badge {
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #818cf8;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }
        .cert-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .cert-title span {
          background: linear-gradient(135deg, #a5b4fc 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cert-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          backdrop-filter: blur(8px);
        }
        .cert-stat-num {
          font-size: 32px;
          font-weight: 800;
          color: #818cf8;
          line-height: 1;
        }
        .cert-stat-label {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          color: #9ca3af;
          line-height: 1.3;
        }

        /* FILTERS */
        .cert-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .cert-filter-btn {
          position: relative;
          padding: 9px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 99px;
          color: #9ca3af;
          font-family: monospace;
          font-size: 11px;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .cert-filter-btn:hover { color: #ffffff; }
        .cert-filter-btn.active { color: #ffffff; border-color: transparent; }
        .cert-active-pill {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border-radius: 99px;
          z-index: 0;
        }
        .cert-filter-label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cert-count {
          font-size: 9px;
          opacity: 0.65;
          background: rgba(0, 0, 0, 0.25);
          padding: 2px 6px;
          border-radius: 10px;
        }

        /* GRID FIXES FOR PERFECT ALIGNMENT */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 220px; /* Locked fixed card height for perfect grid symmetry */
          padding: 20px 22px;
          background: rgba(18, 22, 38, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-sizing: border-box;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .cert-card:hover {
          background: rgba(26, 32, 56, 0.8);
          border-color: rgba(129, 140, 248, 0.45);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -10px rgba(79, 70, 229, 0.25);
        }

        .cert-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 24px;
        }

        .cert-card-id {
          font-family: monospace;
          font-size: 11px;
          color: #818cf8;
          font-weight: 600;
        }

        .cert-card-tag {
          font-family: monospace;
          font-size: 9px;
          padding: 3px 8px;
          background: rgba(99, 102, 241, 0.12);
          color: #a5b4fc;
          border-radius: 6px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cert-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 12px 0;
        }

        .cert-card-title {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          margin: 0 0 6px 0;
          color: #f3f4f6;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* Strict 2 line clamping prevents height push */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cert-card-issuer {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #9ca3af;
          margin: 0;
        }

        .cert-card-issuer span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 28px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: monospace;
          font-size: 10px;
          color: #6b7280;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }

        .cert-card:hover .cert-card-footer {
          color: #a5b4fc;
        }

        .cert-arrow {
          transition: transform 0.2s ease;
        }

        .cert-card:hover .cert-arrow {
          transform: translate(2px, -2px);
        }

        /* MODAL LIGHTBOX */
        .cert-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(5, 7, 14, 0.88);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .cert-modal {
          background: #0b0f19;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          width: min(900px, 100%);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .cert-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cert-modal-meta {
          font-family: monospace;
          font-size: 10px;
          color: #818cf8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cert-modal-title {
          font-size: 18px;
          font-weight: 700;
          margin: 4px 0 2px 0;
        }

        .cert-modal-issuer {
          font-size: 12px;
          color: #9ca3af;
          margin: 0;
        }

        .cert-modal-close {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .cert-modal-close:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .cert-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
        }

        .cert-modal-body img {
          max-width: 100%;
          max-height: 55vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .cert-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.01);
        }

        .cert-nav-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #f3f4f6;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 11px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cert-nav-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .cert-nav-hint {
          font-family: monospace;
          font-size: 10px;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .cert-header { flex-direction: column; align-items: flex-start; }
          .cert-stats { display: none; }
          .cert-nav-hint { display: none; }
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
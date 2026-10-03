import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SUBJECT_CHIPS = [
  "Project idea",
  "Collaboration",
  "Internship",
  "Just saying hi",
];

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("idle");
  const [subject, setSubject] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_vhcg38p",
        "template_z8rtz4c",
        form.current,
        {
          publicKey: "Rxu_jXyHUA5dCh_bx",
        }
      )
      .then(
        () => {
          setStatus("success");
          setSubject("");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <style>{`
        /* =========================
           SECTION + BACKGROUND
           ========================= */

        .contact-section {
          position: relative;
          width: 100%;
          min-height: 90vh;
          padding: 120px 6vw 140px;
          background:
            radial-gradient(circle at 12% 25%, rgba(99, 102, 241, 0.16), transparent 32%),
            radial-gradient(circle at 88% 65%, rgba(236, 72, 153, 0.13), transparent 32%),
            radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.12), transparent 40%),
            #070910;
          color: #f8fafc;
          overflow: hidden;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .contact-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.14);
          filter: blur(120px);
          left: 55%;
          top: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* faint orbit rings, like the hero */
        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(129, 140, 248, 0.13);
          pointer-events: none;
        }

        .orbit-one { width: 760px; height: 760px; right: -280px; top: 80px; }
        .orbit-two { width: 520px; height: 520px; left: -220px; bottom: -120px; border-color: rgba(236, 72, 153, 0.12); }

        .contact-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* =========================
           HEADER
           ========================= */

        .contact-label {
          margin: 0 0 20px;
          color: #818cf8;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
        }

        .contact-heading {
          margin: 0;
          max-width: 900px;
          font-size: clamp(50px, 8vw, 105px);
          line-height: 0.9;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .contact-heading .line-one {
          display: block;
          background: linear-gradient(90deg, #e0f2fe 0%, #c4b5fd 45%, #f0abfc 78%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .contact-heading .line-two {
          display: block;
          background: linear-gradient(90deg, #a78bfa, #c084fc 60%, #d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .contact-description {
          max-width: 560px;
          margin: 30px 0 0;
          color: #94a3b8;
          font-family: monospace;
          font-size: 14px;
          line-height: 1.9;
        }

        .contact-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .contact-badge {
          padding: 12px 18px;
          border: 1px solid rgba(129, 140, 248, 0.4);
          border-radius: 8px;
          background: rgba(99, 102, 241, 0.08);
          color: #c7d2fe;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        /* =========================
           MAIN GRID
           ========================= */

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
          margin-top: 60px;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* =========================
           HUD CARD (shared)
           ========================= */

        .hud-card {
          position: relative;
          border: 1px solid rgba(129, 140, 248, 0.22);
          border-radius: 18px;
          background: linear-gradient(160deg, rgba(16, 18, 40, 0.82), rgba(10, 11, 26, 0.82));
          backdrop-filter: blur(14px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 26px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .hud-title {
          margin: 0;
          color: #cbd5e1;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
        }

        .hud-dots {
          display: flex;
          gap: 5px;
        }

        .hud-dots i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6366f1;
          opacity: 0.8;
        }

        .hud-dots i:nth-child(2) { opacity: 0.55; }
        .hud-dots i:nth-child(3) { opacity: 0.3; }

        /* =========================
           INFO ROWS
           ========================= */

        .info-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .info-icon {
          width: 16px;
          text-align: center;
          font-size: 15px;
          color: #a78bfa;
        }

        .info-icon.pink { color: #f472b6; }
        .info-icon.violet { color: #c084fc; }

        .info-label {
          display: block;
          margin-bottom: 6px;
          color: #64748b;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .info-value {
          color: #e2e8f0;
          font-family: monospace;
          font-size: 13px;
          text-decoration: none;
          word-break: break-word;
          transition: color 0.2s ease;
        }

        a.info-value:hover { color: #c4b5fd; }

        .info-status {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 18px 22px 22px;
          padding: 16px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.12);
          color: #94a3b8;
          font-family: monospace;
          font-size: 11px;
          line-height: 1.7;
        }

        .live-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          margin-top: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.9);
          animation: livePulse 2s ease-in-out infinite;
        }

        /* =========================
           TERMINAL
           ========================= */

        .terminal-body {
          padding: 22px 26px 26px;
        }

        .terminal-prompt {
          margin: 0 0 16px;
          color: #67e8f9;
          font-family: monospace;
          font-size: 12px;
        }

        .terminal-lines {
          padding: 18px 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
        }

        .terminal-line {
          display: flex;
          gap: 16px;
          margin: 0;
          padding: 5px 0;
          color: #cbd5e1;
          font-family: monospace;
          font-size: 12px;
        }

        .terminal-line::before {
          content: ">";
          color: #818cf8;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 13px;
          margin-left: 3px;
          vertical-align: -2px;
          background: #a78bfa;
          animation: cursorBlink 1s steps(1) infinite;
        }

        /* =========================
           SOCIAL BUTTONS
           ========================= */

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .square-btn,
        .resume-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(129, 140, 248, 0.28);
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.06);
          color: #cbd5e1;
          text-decoration: none;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          transition: all 0.25s ease;
        }

        .square-btn {
          width: 54px;
          height: 52px;
        }

        .resume-btn {
          gap: 12px;
          padding: 0 26px;
          height: 52px;
          border-color: rgba(129, 140, 248, 0.55);
          color: #f8fafc;
        }

        .square-btn:hover,
        .resume-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(196, 181, 253, 0.85);
          background: rgba(99, 102, 241, 0.2);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.18);
        }

        /* =========================
           FORM CARD
           ========================= */

        .form-wrap {
          position: relative;
        }

        .floating-orb {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(196, 181, 253, 0.35);
          background: rgba(139, 92, 246, 0.35);
          backdrop-filter: blur(8px);
          color: #ede9fe;
          font-family: monospace;
          font-size: 13px;
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.35);
          animation: orbFloat 5s ease-in-out infinite;
        }

        .orb-one { top: -22px; right: 28px; }
        .orb-two { bottom: 80px; left: -26px; width: 46px; height: 46px; animation-delay: 1.5s; background: rgba(236, 72, 153, 0.28); border-color: rgba(244, 114, 182, 0.4); }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 26px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          color: #64748b;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          outline: none;
          background: rgba(255, 255, 255, 0.03);
          color: #f8fafc;
          font-family: monospace;
          font-size: 13px;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input {
          height: 50px;
          padding: 0 16px;
        }

        .form-textarea {
          min-height: 150px;
          padding: 16px;
          resize: vertical;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #475569;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(167, 139, 250, 0.7);
          background: rgba(99, 102, 241, 0.06);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
        }

        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
          padding: 8px 13px;
          border: 1px solid rgba(129, 140, 248, 0.25);
          border-radius: 999px;
          background: transparent;
          color: #94a3b8;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chip:hover,
        .chip.active {
          border-color: rgba(196, 181, 253, 0.8);
          background: rgba(139, 92, 246, 0.18);
          color: #ede9fe;
        }

        .send-button {
          align-self: flex-start;
          margin-top: 4px;
          padding: 16px 28px;
          border: 1px solid rgba(167, 139, 250, 0.6);
          border-radius: 10px;
          background: linear-gradient(90deg, rgba(99, 102, 241, 0.28), rgba(217, 70, 239, 0.22));
          color: #f8fafc;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-3px);
          border-color: rgba(221, 214, 254, 0.9);
          box-shadow: 0 12px 34px rgba(139, 92, 246, 0.3);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-status {
          min-height: 18px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .status-success { color: #6ee7b7; }
        .status-error { color: #fda4af; }
        .status-sending { color: #94a3b8; }

        /* =========================
           FOOTER
           ========================= */

        .contact-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 90px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          color: #475569;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
        }

        /* =========================
           ANIMATIONS
           ========================= */

        @keyframes orbFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes livePulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-orb, .live-dot, .cursor { animation: none; }
        }

        /* =========================
           RESPONSIVE
           ========================= */

        @media (max-width: 950px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 90px 20px 120px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .send-button {
            width: 100%;
          }

          .floating-orb {
            display: none;
          }

          .contact-footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <div className="contact-glow" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="contact-container">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact-label">
            08 / CONTACT
          </p>

          <h2 className="contact-heading">
            <span className="line-one">LET'S BUILD</span>
            <span className="line-two">SOMETHING.</span>
          </h2>

          <p className="contact-description">
            Have an idea, opportunity, project, or just want
            to talk about technology? Send me a message.
          </p>

          <div className="contact-badges">
            <span className="contact-badge">&lt;/&gt; DEVELOPER</span>
            <span className="contact-badge">✦ AI / ML</span>
            <span className="contact-badge">◆ BUILDER</span>
          </div>
        </motion.div>

        {/* GRID */}

        <div className="contact-grid">

          {/* LEFT */}

          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            {/* Info card */}

            <div className="hud-card">
              <div className="hud-header">
                <p className="hud-title">CONTACT.EXE</p>
                <div className="hud-dots"><i /><i /><i /></div>
              </div>

              <div className="info-row">
                <span className="info-icon pink">◉</span>
                <div>
                  <span className="info-label">LOCATION</span>
                  <span className="info-value">Bengaluru, India</span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon">◇</span>
                <div>
                  <span className="info-label">DIRECT EMAIL</span>
                  <a
                    href="mailto:nityashreesp02@gmail.com"
                    className="info-value"
                  >
                    nityashreesp02@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon violet">♡</span>
                <div>
                  <span className="info-label">OPEN TO</span>
                  <span className="info-value">
                    Ideas, opportunities & projects
                  </span>
                </div>
              </div>

              <div className="info-status">
                <span className="live-dot" />
                <span>
                  Currently exploring
                  <br />
                  AI, Full Stack & more...
                </span>
              </div>
            </div>

            {/* Terminal card */}

            <div className="hud-card">
              <div className="terminal-body">
                <p className="terminal-prompt">NITYA@contact:~$</p>

                <div className="terminal-lines">
                  <p className="terminal-line">Got an idea?</p>
                  <p className="terminal-line">Let's talk about it</p>
                  <p className="terminal-line">Building something together</p>
                  <p className="terminal-line">
                    <span>
                      Say hello...<span className="cursor" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social buttons */}

            <div className="contact-actions">
              <a
                href="https://github.com/NityashreeSP"
                target="_blank"
                rel="noreferrer"
                className="square-btn"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/in/nityashreesp"
                target="_blank"
                rel="noreferrer"
                className="square-btn"
                aria-label="LinkedIn"
              >
                IN
              </a>

              <a
                href="mailto:nityashreesp02@gmail.com"
                className="square-btn"
                aria-label="Email"
              >
                @
              </a>

              <a
                href="/Nityashree%20S%20P_U25UV23T029064_CSE_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
              >
                VIEW RESUME
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            className="form-wrap"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="floating-orb orb-one">&lt;/&gt;</div>
            <div className="floating-orb orb-two">✦</div>

            <div className="hud-card">
              <div className="hud-header">
                <p className="hud-title">MESSAGE.EXE</p>
                <div className="hud-dots"><i /><i /><i /></div>
              </div>

              <form
                ref={form}
                className="contact-form"
                onSubmit={sendEmail}
              >

                <div className="form-row">

                  <div className="form-field">
                    <label className="form-label" htmlFor="user_name">
                      YOUR NAME
                    </label>

                    <input
                      id="user_name"
                      className="form-input"
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="user_email">
                      YOUR EMAIL
                    </label>

                    <input
                      id="user_email"
                      className="form-input"
                      type="email"
                      name="user_email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="subject">
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />

                  <div className="chip-row">
                    {SUBJECT_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className={`chip ${subject === chip ? "active" : ""}`}
                        onClick={() => setSubject(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me a little about it..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="send-button"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "SENDING..."
                    : "SEND MESSAGE ↗"}
                </button>

                <div className="form-status">
                  {status === "success" && (
                    <span className="status-success">
                      ✓ MESSAGE SENT SUCCESSFULLY
                    </span>
                  )}

                  {status === "error" && (
                    <span className="status-error">
                      × SOMETHING WENT WRONG. PLEASE TRY AGAIN.
                    </span>
                  )}

                  {status === "sending" && (
                    <span className="status-sending">
                      TRANSMITTING MESSAGE...
                    </span>
                  )}
                </div>

              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}

        <div className="contact-footer">
          <span>NITYA.OS</span>
          <span>BUILT WITH CURIOSITY + CODE</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;

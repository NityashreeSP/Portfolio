import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* BACKGROUND EFFECTS */}

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>
      <div className="hero-grid"></div>


      {/* MAIN CONTENT */}

      <div className="hero-content">

        {/* LEFT */}

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            HI, I'M
          </p>

          <h1>
  <span className="name-main">NITYASHREE</span>
  <br />
  <span className="name-last">SP</span>
</h1>

          <p className="hero-description">
            Computer Science Student
            <br />
            building digital solutions
            <br />
            for real-world problems.
          </p>


          {/* TAGS */}

          <div className="hero-tags">

            <span>
              <i>&lt;/&gt;</i>
              DEVELOPER
            </span>

            <span>
              <i>✦</i>
              AI / ML
            </span>

            <span>
              <i>◆</i>
              BUILDER
            </span>

          </div>


          {/* TERMINAL */}

          <div className="hero-terminal">

            <div className="terminal-header">

              <span>
                NITYA@developing:~$
              </span>

              <div className="terminal-dots">
                <b></b>
                <b></b>
                <b></b>
              </div>

            </div>

            <div className="terminal-body">

              <p>
                <span>&gt;</span> Turning ideas into impact
              </p>

              <p>
                <span>&gt;</span> Learning new things
              </p>

              <p>
                <span>&gt;</span> Building real solutions
              </p>

              <p>
                <span>&gt;</span> Always a work in progress...
                <strong>_</strong>
              </p>

            </div>

          </div>


          {/* SOCIAL / RESUME */}

          <div className="hero-actions">

            <a
              href="https://github.com/NityashreeSP"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/nityashreesp"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              IN
            </a>

            <a
              href="mailto:nityashreesp02@gmail.com"
              aria-label="Email"
            >
              @
            </a>

            <a
              href="Nityashree S P_U25UV23T029064_CSE_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-button"
            >
              VIEW RESUME
              <span>→</span>
            </a>

          </div>

        </motion.div>


        {/* CENTER — YOUR PHOTO */}

        <motion.div
          className="hero-portrait-area"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >

          <div className="portrait-glow"></div>

          <div className="portrait-orbit orbit-one"></div>
          <div className="portrait-orbit orbit-two"></div>

          <div className="portrait-frame">

            <div className="portrait-label">
              <span>01</span>
              <span>NITYA.EXE</span>
            </div>

            <img
              src="/images/image.png"
              alt="Nityashree"
              className="hero-portrait"
            />

            <div className="portrait-status">
              <span></span>
              CURRENTLY BUILDING
            </div>

          </div>

          {/* FLOATING SYMBOLS */}

          <div className="floating-symbol symbol-one">
            &lt;/&gt;
          </div>

          <div className="floating-symbol symbol-two">
            ✦
          </div>

          <div className="floating-symbol symbol-three">
            ◇
          </div>

        </motion.div>


        {/* RIGHT PROFILE */}

        <motion.div
          className="hero-side"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >

          {/* PROFILE CARD */}

          <div className="hero-profile-card">

            <div className="profile-card-header">

              <span>NITYA.EXE</span>

              <span className="profile-menu">
                •••
              </span>

            </div>


            <div className="profile-row">

              <span className="profile-icon">
                ◉
              </span>

              <div>
                <small>LOCATION</small>
                <p>Bengaluru, India</p>
              </div>

            </div>


            <div className="profile-row">

              <span className="profile-icon">
                ◈
              </span>

              <div>
                <small>STUDYING</small>
                <p>Computer Science Engineering</p>
              </div>

            </div>


            <div className="profile-row">

              <span className="profile-icon">
                ♡
              </span>

              <div>
                <small>FOCUS</small>
                <p>Turning ideas into impact</p>
              </div>

            </div>


            <div className="profile-status">

              <span></span>

              Currently exploring
              <br />
              AI, Full Stack & more...

            </div>

          </div>


          {/* STATS */}

          <div className="hero-stats">

            <div className="stats-header">
              <span>MY UNIVERSE</span>
              <span>✦</span>
            </div>

            <div className="stats-grid">

              <div>
                <strong>08</strong>
                <small>PROJECTS</small>
              </div>

              <div>
                <strong>04</strong>
                <small>AI / ML</small>
              </div>

              <div>
                <strong>06</strong>
                <small>FULL STACK</small>
              </div>

            </div>

          </div>


          {/* EXPLORING */}

          <div className="hero-exploring">

            <div className="exploring-header">

              <span>⌕</span>

              <p>CURRENTLY EXPLORING</p>

              <span>→</span>

            </div>

            <div className="exploring-tags">

              <span>AI / ML</span>
              <span>LLMs</span>
              <span>RAG</span>
              <span>FULL STACK</span>
              <span>AWS</span>
              <span>COMPUTER VISION</span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* SCROLL */}

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
      >

        <div className="scroll-mouse">
          <span></span>
        </div>

        <p>SCROLL TO EXPLORE</p>

      </motion.div>


      {/* INTERNAL CSS */}

      <style>{`

        /* =========================================
           HERO
        ========================================= */

        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          padding: 130px 0 80px;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(93, 73, 190, 0.12),
              transparent 32%
            ),
            #070b19;

          color: #f5f1ff;
        }


        /* =========================================
           BACKGROUND
        ========================================= */

        .hero-grid {
          position: absolute;
          inset: 0;

          opacity: 0.14;

          background-image:
            linear-gradient(
              rgba(125, 211, 252, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(125, 211, 252, 0.08) 1px,
              transparent 1px
            );

          background-size: 80px 80px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 85%
            );

          pointer-events: none;
        }


        .hero-orb {
          position: absolute;

          border-radius: 50%;

          filter: blur(80px);

          pointer-events: none;
        }


        .hero-orb-one {
          width: 350px;
          height: 350px;

          top: 15%;
          left: 35%;

          background: rgba(139, 92, 246, 0.16);
        }


        .hero-orb-two {
          width: 300px;
          height: 300px;

          right: 5%;
          bottom: 5%;

          background: rgba(59, 130, 246, 0.12);
        }


        /* =========================================
           CONTENT
        ========================================= */

        .hero-content {
          position: relative;
          z-index: 2;

          width: min(1450px, 92%);

          margin: auto;

          display: grid;

          grid-template-columns:
            minmax(300px, 1fr)
            minmax(380px, 0.9fr)
            minmax(300px, 1fr);

          align-items: center;

          gap: 35px;
        }


        /* =========================================
           LEFT
        ========================================= */

        .hero-intro {
          position: relative;
          z-index: 3;
        }


        .hero-greeting {
          margin: 0 0 15px;

          color: #9ca3c7;

          font-family: "Courier New", monospace;

          font-size: 14px;

          letter-spacing: 3px;
        }


        .hero-intro h1 {
  margin: 0;

  font-family: Arial, sans-serif;
  font-size: clamp(55px, 6vw, 95px);
  line-height: 0.88;
  letter-spacing: -6px;

  color: #e5f4ff;
}

.hero-intro h1 .name-main {
  background:
    linear-gradient(
      100deg,
      #e5f4ff,
      #b9d8ff 35%,
      #d69cff 70%,
      #ff74d4
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.hero-intro h1 .name-last {
  color: #b88cff;
}


        .hero-intro h1 span {
          color: #b88cff;
        }


        .hero-description {
          margin: 30px 0;

          color: #aeb6d1;

          font-family: "Courier New", monospace;

          font-size: 15px;

          line-height: 1.7;
        }


        /* =========================================
           TAGS
        ========================================= */

        .hero-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-bottom: 30px;
        }


        .hero-tags span {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 10px 14px;

          border: 1px solid rgba(129, 140, 248, 0.55);

          border-radius: 9px;

          color: #d9d5ff;

          background:
            rgba(84, 61, 160, 0.12);

          font-family: "Courier New", monospace;

          font-size: 10px;

          letter-spacing: 1px;

          transition: 0.3s ease;
        }


        .hero-tags span:hover {
          transform: translateY(-3px);

          border-color: #c084fc;

          background:
            rgba(192, 132, 252, 0.14);

          box-shadow:
            0 0 25px rgba(168, 85, 247, 0.18);
        }


        .hero-tags i {
          color: #8bdcff;

          font-style: normal;
        }


        /* =========================================
           TERMINAL
        ========================================= */

        .hero-terminal {
          width: min(100%, 470px);

          padding: 18px;

          border: 1px solid rgba(129, 140, 248, 0.4);

          border-radius: 14px;

          background:
            rgba(7, 11, 30, 0.7);

          backdrop-filter: blur(15px);

          box-shadow:
            0 0 35px rgba(79, 70, 229, 0.08);
        }


        .terminal-header {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 15px;

          color: #64dfff;

          font-family: "Courier New", monospace;

          font-size: 11px;
        }


        .terminal-dots {
          display: flex;

          gap: 5px;
        }


        .terminal-dots b {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #7c83aa;
        }


        .terminal-body {
          padding: 13px;

          border: 1px solid rgba(129, 140, 248, 0.12);

          border-radius: 9px;

          color: #aeb6d1;

          font-family: "Courier New", monospace;

          font-size: 11px;

          line-height: 1.9;
        }


        .terminal-body p {
          margin: 0;
        }


        .terminal-body p span {
          color: #c084fc;

          margin-right: 8px;
        }


        .terminal-body strong {
          color: #f472d0;

          animation: cursorBlink 1s infinite;
        }


        @keyframes cursorBlink {
          50% {
            opacity: 0;
          }
        }


        /* =========================================
           ACTIONS
        ========================================= */

        .hero-actions {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 25px;
        }


        .hero-actions a {
          display: flex;

          align-items: center;

          justify-content: center;

          min-width: 45px;
          height: 42px;

          padding: 0 12px;

          border: 1px solid rgba(129, 140, 248, 0.3);

          border-radius: 9px;

          color: #c7c5e5;

          text-decoration: none;

          font-family: "Courier New", monospace;

          font-size: 11px;

          transition: 0.3s ease;
        }


        .hero-actions a:hover {
          color: #fff;

          border-color: #a78bfa;

          background: rgba(167, 139, 250, 0.1);

          transform: translateY(-3px);
        }


        .hero-actions .resume-button {
          gap: 15px;

          padding: 0 18px;

          color: #b9eaff;

          border-color: rgba(125, 211, 252, 0.45);
        }


        /* =========================================
           PORTRAIT
        ========================================= */

        .hero-portrait-area {
          position: relative;

          min-height: 650px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .portrait-frame {
          position: relative;

          width: min(100%, 500px);

          border: 1px solid rgba(139, 92, 246, 0.45);

          border-radius: 35px;

          padding: 12px;

          background:
            linear-gradient(
              145deg,
              rgba(75, 63, 145, 0.18),
              rgba(11, 16, 40, 0.65)
            );

          backdrop-filter: blur(15px);

          box-shadow:
            0 0 60px rgba(79, 70, 229, 0.18);

          transform: rotate(-1.5deg);

          transition: 0.5s ease;
        }


        .portrait-frame:hover {
          transform:
            rotate(0deg)
            translateY(-8px);

          box-shadow:
            0 0 80px rgba(168, 85, 247, 0.25);
        }


        .portrait-label {
          position: absolute;

          top: 25px;
          left: 25px;
          right: 25px;

          z-index: 3;

          display: flex;

          justify-content: space-between;

          color: #d2caff;

          font-family: "Courier New", monospace;

          font-size: 10px;

          letter-spacing: 2px;
        }


        .hero-portrait {
          display: block;

          width: 100%;

          aspect-ratio: 4 / 5;

          object-fit: cover;

          object-position: center top;

          border-radius: 27px;

          filter:
            saturate(1.05)
            contrast(1.04);

          animation: portraitFloat 5s ease-in-out infinite;
        }


        @keyframes portraitFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }

        }


        .portrait-status {
          position: absolute;

          left: 25px;
          bottom: 22px;

          display: flex;

          align-items: center;

          gap: 8px;

          padding: 8px 12px;

          border-radius: 20px;

          background: rgba(5, 8, 22, 0.8);

          border: 1px solid rgba(103, 232, 181, 0.25);

          color: #aeb6d1;

          font-family: "Courier New", monospace;

          font-size: 9px;

          letter-spacing: 1px;
        }


        .portrait-status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #67e8b5;

          box-shadow:
            0 0 10px #67e8b5;
        }


        .portrait-glow {
          position: absolute;

          width: 430px;
          height: 430px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(168, 85, 247, 0.35),
              rgba(59, 130, 246, 0.12),
              transparent 70%
            );

          filter: blur(20px);

          animation: glowPulse 4s ease-in-out infinite;
        }


        @keyframes glowPulse {

          0%,
          100% {
            transform: scale(1);

            opacity: 0.65;
          }

          50% {
            transform: scale(1.12);

            opacity: 1;
          }

        }


        .portrait-orbit {
          position: absolute;

          border: 1px solid rgba(129, 140, 248, 0.18);

          border-radius: 50%;

          pointer-events: none;
        }


        .orbit-one {
          width: 560px;
          height: 220px;

          transform: rotate(-25deg);
        }


        .orbit-two {
          width: 500px;
          height: 190px;

          transform: rotate(35deg);
        }


        /* =========================================
           FLOATING SYMBOLS
        ========================================= */

        .floating-symbol {
          position: absolute;

          z-index: 5;

          display: flex;

          align-items: center;

          justify-content: center;

          width: 45px;
          height: 45px;

          border: 1px solid rgba(192, 132, 252, 0.4);

          border-radius: 50%;

          color: #d8a4ff;

          background: rgba(20, 14, 45, 0.65);

          backdrop-filter: blur(8px);

          box-shadow:
            0 0 20px rgba(168, 85, 247, 0.12);

          font-family: "Courier New", monospace;

          font-size: 11px;

          animation: symbolFloat 4s ease-in-out infinite;
        }


        .symbol-one {
          top: 16%;
          left: 3%;
        }


        .symbol-two {
          top: 30%;
          right: 2%;

          animation-delay: 1s;
        }


        .symbol-three {
          bottom: 17%;
          left: 7%;

          animation-delay: 2s;
        }


        @keyframes symbolFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }


        /* =========================================
           RIGHT SIDE
        ========================================= */

        .hero-side {
          display: flex;

          flex-direction: column;

          gap: 18px;

          position: relative;

          z-index: 3;
        }


        .hero-profile-card,
        .hero-stats,
        .hero-exploring {
          border: 1px solid rgba(129, 140, 248, 0.35);

          border-radius: 18px;

          background:
            rgba(10, 14, 35, 0.72);

          backdrop-filter: blur(18px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.03),
            0 15px 50px rgba(0, 0, 0, 0.2);
        }


        /* PROFILE */

        .hero-profile-card {
          padding: 22px;
        }


        .profile-card-header {
          display: flex;

          justify-content: space-between;

          margin-bottom: 20px;

          color: #d6c7ff;

          font-family: "Courier New", monospace;

          font-size: 11px;

          letter-spacing: 2px;
        }


        .profile-menu {
          color: #a78bfa;
        }


        .profile-row {
          display: flex;

          gap: 14px;

          align-items: center;

          padding: 15px 0;

          border-top: 1px solid rgba(129, 140, 248, 0.1);
        }


        .profile-icon {
          color: #e879f9;

          font-size: 18px;
        }


        .profile-row small {
          display: block;

          margin-bottom: 5px;

          color: #666f94;

          font-family: "Courier New", monospace;

          font-size: 8px;

          letter-spacing: 1px;
        }


        .profile-row p {
          margin: 0;

          color: #d0d4e7;

          font-family: "Courier New", monospace;

          font-size: 11px;

          line-height: 1.5;
        }


        .profile-status {
          margin-top: 10px;

          padding: 12px;

          border-radius: 10px;

          background: rgba(103, 232, 181, 0.04);

          color: #aeb6d1;

          font-family: "Courier New", monospace;

          font-size: 9px;

          line-height: 1.7;
        }


        .profile-status span {
          display: inline-block;

          width: 6px;
          height: 6px;

          margin-right: 7px;

          border-radius: 50%;

          background: #67e8b5;

          box-shadow: 0 0 10px #67e8b5;
        }


        /* STATS */

        .hero-stats {
          padding: 20px;
        }


        .stats-header {
          display: flex;

          justify-content: space-between;

          margin-bottom: 18px;

          color: #b8a5ff;

          font-family: "Courier New", monospace;

          font-size: 10px;

          letter-spacing: 2px;
        }


        .stats-grid {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          border: 1px solid rgba(129, 140, 248, 0.15);

          border-radius: 10px;

          overflow: hidden;
        }


        .stats-grid div {
          padding: 20px 8px;

          text-align: center;

          border-right: 1px solid rgba(129, 140, 248, 0.15);
        }


        .stats-grid div:last-child {
          border-right: none;
        }


        .stats-grid strong {
          display: block;

          margin-bottom: 7px;

          color: #d49cff;

          font-family: Arial, sans-serif;

          font-size: 28px;
        }


        .stats-grid small {
          color: #777fa2;

          font-family: "Courier New", monospace;

          font-size: 8px;

          letter-spacing: 1px;
        }


        /* EXPLORING */

        .hero-exploring {
          padding: 20px;
        }


        .exploring-header {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 15px;

          color: #82ddff;

          font-family: "Courier New", monospace;

          font-size: 10px;
        }


        .exploring-header p {
          flex: 1;

          margin: 0;

          letter-spacing: 1px;
        }


        .exploring-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }


        .exploring-tags span {
          padding: 7px 9px;

          border: 1px solid rgba(125, 211, 252, 0.18);

          border-radius: 20px;

          color: #9ca8c7;

          font-family: "Courier New", monospace;

          font-size: 8px;

          transition: 0.3s ease;
        }


        .exploring-tags span:hover {
          color: #bfeeff;

          border-color: #7dd3fc;

          background: rgba(125, 211, 252, 0.05);
        }


        /* =========================================
           SCROLL
        ========================================= */

        .hero-scroll {
          position: absolute;

          z-index: 5;

          bottom: 25px;

          left: 50%;

          transform: translateX(-50%);

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 8px;

          color: #687092;

          font-family: "Courier New", monospace;

          font-size: 8px;

          letter-spacing: 3px;
        }


        .scroll-mouse {
          width: 20px;
          height: 30px;

          border: 1px solid rgba(192, 132, 252, 0.55);

          border-radius: 12px;

          display: flex;

          justify-content: center;

          padding-top: 6px;
        }


        .scroll-mouse span {
          width: 3px;
          height: 6px;

          border-radius: 5px;

          background: #c084fc;

          animation: scrollDot 1.5s infinite;
        }


        @keyframes scrollDot {

          0% {
            transform: translateY(0);

            opacity: 1;
          }

          100% {
            transform: translateY(9px);

            opacity: 0;
          }

        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {

          .hero-content {
            grid-template-columns:
              1fr
              1fr;

            gap: 25px;
          }


          .hero-intro {
            order: 1;
          }


          .hero-portrait-area {
            order: 2;

            min-height: 600px;
          }


          .hero-side {
            order: 3;

            grid-column: 1 / -1;

            display: grid;

            grid-template-columns:
              1fr 1fr 1fr;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .hero-section {
            padding-top: 110px;

            padding-bottom: 100px;
          }


          .hero-content {
            width: 90%;

            grid-template-columns: 1fr;
          }


          .hero-intro {
            text-align: left;
          }


          .hero-intro h1 {
            font-size: clamp(48px, 15vw, 75px);

            letter-spacing: -4px;
          }


          .hero-description {
            font-size: 12px;
          }


          .hero-portrait-area {
            min-height: 480px;
          }


          .portrait-frame {
            width: min(100%, 380px);
          }


          .portrait-orbit {
            display: none;
          }


          .hero-side {
            display: flex;

            grid-column: auto;
          }


          .hero-actions {
            margin-bottom: 10px;
          }


          .hero-scroll {
            display: none;
          }


          .symbol-one,
          .symbol-two,
          .symbol-three {
            display: none;
          }

        }

      `}</style>

    </section>
  );
}

export default Hero;
import { useEffect, useRef, useState } from "react";

/* =========================================================
   STATIC DATA (kept outside the component so it isn't
   re-created on every render)
   ========================================================= */

const SECTION_IDS = [
  "home",
  "about",
  "work",
  "skills",
  "experience",
  "achievements",
  "certifications",
  "contact",
];

const GAP = 3400; // ms between lines in a conversation

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 5) return "Wow, you're up late! 🌙 Night owls are my favorite people.";
  if (hour < 12) return "Good morning! ☀️ Coffee in hand? Perfect time to explore.";
  if (hour < 17) return "Good afternoon! 🌸 Perfect time for a little portfolio tour.";
  if (hour < 21) return "Good evening! 🌆 Cozy time to look around, isn't it?";
  return "Heyy, night-time browsing! 🌙 Best vibes, honestly.";
};

const conversations = {
  home: [
    "Heyy! I'm Nitya AI 👋 Welcome to Nitya's little corner of the internet!",
    "You're probably wondering what Nitya actually builds... 👀",
    "Don't worryyy, I'll show you around. Just scroll and explore!",
    "Tip: click on me anytime and I'll keep chatting 💜",
  ],

  about: [
    "So you wanna know about Nitya? 👀",
    "She's a Computer Science student at UVCE who really likes turning ideas into digital things.",
    "She loves building things that are useful AND a little bit fun. ✨",
    "And yes... that laptop is basically her favorite thing. 😂💻",
  ],

  work: [
    "Okayyy, now THIS is my favorite part 😌✨",
    "There are quite a few things Nitya has been building.",
    "Deepfake detection, a placement prep assistant, trade-resilience research... quite a range, right? 👀",
    "Go ahead... click around. Some of these projects are actually pretty interesting!",
    "Don't just look at the screenshots — check out what problem each project tries to solve! 🔍",
  ],

  skills: [
    "Psst... we're entering the skill zone 👀",
    "She's been exploring both full-stack development and AI/ML.",
    "React, Node, Python, PyTorch, OpenCV, Transformers... quite a collection already 😌",
    "Frontend that looks good, models that actually work. That's the goal! 🎯",
    "But she's still learning. We don't pretend to know everything here! 😂",
  ],

  experience: [
    "Okay, here's where things get a little more serious. 👀",
    "Nitya got to work on research problems during her internship at IIM Mumbai.",
    "The work focused on economic resilience and supply-chain risk analysis in India.",
    "Basically... real data, real research, and a LOT of analysis. 📊",
    "Turns out the messy datasets teach you the most. 😅",
  ],

  achievements: [
    "A little flex section? Maybe. 😌✨",
    "These are some of the things Nitya has worked towards.",
    "Hackathons, competitions, volunteering, leadership... quite a few little wins!",
    "Behind every win there were probably a few late nights and a lot of chai ☕",
    "Small wins eventually become a pretty nice collection. 💜",
  ],

  certifications: [
    "And yes... there is paperwork to prove she actually learned things. 😂",
    "Courses, simulations and certifications — all part of the learning process.",
    "Because apparently just saying 'I know it' isn't enough. 😭",
    "Every certificate here started with 'let me just try this one course'... 😌",
    "So here's the evidence. 📜✨",
  ],

  contact: [
    "Aaaand you've reached the end! 🥹💜",
    "So... did you like what you saw?",
    "If you did, you know where to find Nitya.",
    "Whether it's a project idea, an internship, or just a hello — she'd love to hear it. 💌",
    "Maybe this little portfolio tour could turn into an actual conversation. 👀",
  ],
};

const revisitConversations = {
  home: [
    "Ohh you're back already? 👀",
    "I knew you weren't done exploring!",
    "Go on... there's still more to discover. ✨",
  ],

  about: [
    "Back to the About section? 😌",
    "I see you're actually trying to understand the person behind the projects.",
    "I respect that. 💜",
  ],

  work: [
    "You're back at the projects?! 👀",
    "Okay okay, I knew one visit wouldn't be enough.",
    "Which one caught your attention? 😏",
  ],

  skills: [
    "Checking the skills again? 👀",
    "Trying to figure out what Nitya actually knows?",
    "Fair enough... the list is getting longer. 😂",
  ],

  experience: [
    "Back to the experience section!",
    "Still curious about the research work? 👀",
    "There's definitely a lot that happened behind those few lines.",
  ],

  achievements: [
    "Back to the little flex section? 😂",
    "Okay, I'll allow it.",
    "A few more accomplishments never hurt anyone. ✨",
  ],

  certifications: [
    "You came back to inspect the certificates? 😂",
    "I promise they're real!",
    "Well... at least the certificates are. 😭📜",
  ],

  contact: [
    "You're back here again... 👀",
    "Sooo... are you actually thinking of saying hi?",
    "Don't leave me hanging now. 😂💜",
  ],
};

const sectionReactions = {
  home: "wave",
  about: "curious",
  work: "excited",
  skills: "impressed",
  experience: "focused",
  achievements: "celebrate",
  certifications: "proud",
  contact: "goodbye",
};

/* Random comments when the visitor lingers on a section */
const personalityComments = [
  "Okay, you're definitely exploring everything. 😌",
  "Still here? I like your curiosity 😂",
  "Okaaay, someone is actually reading the portfolio. 👀",
  "You're taking your time... I respect that. ✨",
  "Psst... don't scroll too fast! 😭",
  "Hmm... interesting choice of section. 👀",
  "Okayyy, I see what you're doing. 😂",
  "Fun fact: I live entirely in a React component. Tiny apartment, great rent. 🏠",
  "I never get tired, but I DO get a little dramatic. 🎭",
  "If you need me, I'm just chilling down here. 💜",
  "Nitya hand-coded my hair. Please appreciate the bangs. 💅",
  "Don't mind me, just vibing in the corner. 🎧",
  "You have great taste in portfolios, by the way. 😌",
  "Plot twist: I'm made of CSS and good intentions. ✨",
  "Hydration check! 💧 Have you had water today?",
  "Posture check! 🪑 Sit up straight, future collaborator.",
];

/* Shown when someone clicks after a conversation has finished */
const clickSurprises = [
  "Hehe, that tickles! 🥹",
  "Boop! 👉 You found the boop button.",
  "Okay but did you see the projects section yet? 👀",
  "I'd wave, but I'm already waving in spirit. 👋",
  "Fun fact: Nitya's favorite place to debug is anywhere with good snacks 🍪",
  "Stop clicking meee... actually, don't. I like it. 😳💜",
  "Ten out of ten would recommend scrolling further. ✨",
  "I run on pure curiosity and 0 bytes of sleep. 😴",
  "Shhh... between us, the best project is the one she builds next. 🤫",
  "You're officially my favorite visitor today. 🌟",
  "Want a secret? The 'N' on my hoodie stands for Nitya. Shocking, I know. 😂",
  "Beep boop. Just kidding, I'm way too cute to be a robot. 🤖💖",
];

const skipMessages = [
  "Wait... you skipped something 👀",
  "Whoa, slow down! You're scrolling at light speed 😭",
  "Hey! I wasn't done talking yet 😤",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* =========================================================
   COMPONENT
   ========================================================= */

function NityaAI() {
  /* ---------------- STATE ---------------- */

  const [activeSection, setActiveSection] = useState("home");
  const [messages, setMessages] = useState([getGreeting(), ...conversations.home]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [reaction, setReaction] = useState("wave");
  const [poked, setPoked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  /* ---------------- REFS ---------------- */

  const activeSectionRef = useRef("home");
  const seenSections = useRef(new Set(["home"]));
  const timers = useRef([]);
  const lastSectionChange = useRef(Date.now());
  const spontaneousTimer = useRef(null);
  const pokeTimer = useRef(null);

  /* ---------------- TIMER HELPERS ---------------- */

  const schedule = (fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (spontaneousTimer.current) {
      clearTimeout(spontaneousTimer.current);
      spontaneousTimer.current = null;
    }
  };

  /* ---------------- PLAY A LIST OF MESSAGES ---------------- */

  const playMessages = (list, { firstDelay = 650, hide = true } = {}) => {
    setMessages(list);
    setMessageIndex(0);
    setShowBubble(true);
    setIsTyping(true);

    schedule(() => setIsTyping(false), firstDelay);

    for (let i = 1; i < list.length; i++) {
      const at = firstDelay + i * GAP;

      schedule(() => setIsTyping(true), at - 650);

      schedule(() => {
        setMessageIndex(i);
        setIsTyping(false);
      }, at);
    }

    if (hide) {
      schedule(
        () => setShowBubble(false),
        firstDelay + (list.length - 1) * GAP + 4500
      );
    }
  };

  /* ---------------- SPONTANEOUS COMMENTS ---------------- */

  const showPersonalityComment = () => {
    clearTimers();
    playMessages([pick(personalityComments)], { firstDelay: 550 });
    startPersonalityTimer(activeSectionRef.current);
  };

  const startPersonalityTimer = (section) => {
    if (spontaneousTimer.current) {
      clearTimeout(spontaneousTimer.current);
    }

    /* Wait a while so Nitya AI doesn't talk constantly */
    const delay = 18000 + Math.random() * 10000;

    spontaneousTimer.current = setTimeout(() => {
      if (activeSectionRef.current === section) {
        showPersonalityComment();
      }
    }, delay);
  };

  /* ---------------- SECTION CONVERSATION ---------------- */

  const startConversation = (section) => {
    if (activeSectionRef.current === section) return;

    const now = Date.now();
    const skippedSomething = now - lastSectionChange.current < 2200;

    lastSectionChange.current = now;
    activeSectionRef.current = section;

    clearTimers();

    const isReturning = seenSections.current.has(section);
    const selectedMessages = isReturning
      ? revisitConversations[section]
      : conversations[section];

    seenSections.current.add(section);

    setActiveSection(section);
    setReaction(sectionReactions[section] || "wave");

    if (skippedSomething) {
      /* Quick comment first, then continue with the real conversation */
      playMessages([pick(skipMessages)], { firstDelay: 550, hide: false });

      schedule(() => playMessages(selectedMessages), 2800);
    } else {
      playMessages(selectedMessages);
    }

    startPersonalityTimer(section);
  };

  /* ---------------- INTERSECTION OBSERVER ---------------- */

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    let observer;

    if (sections.length) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (!visible.length) return;

          const newSection = visible[0].target.id;

          /* Don't restart if we're still inside the same section */
          if (activeSectionRef.current === newSection) return;

          startConversation(newSection);
        },
        {
          threshold: [0.2, 0.35, 0.5, 0.65],
          rootMargin: "-10% 0px -25% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));
    }

    /* Intro conversation (with a time-aware greeting) */
    const intro = [getGreeting(), ...conversations.home];
    playMessages(intro);
    startPersonalityTimer("home");

    return () => {
      if (observer) observer.disconnect();
      clearTimers();
      if (pokeTimer.current) clearTimeout(pokeTimer.current);
    };

    /* Empty dependency array on purpose: the observer must not be
       recreated every time state changes. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------------- CHARACTER CLICK ---------------- */

  const handleCharacterClick = () => {
    clearTimers();

    /* Cute little squish */
    setPoked(true);
    if (pokeTimer.current) clearTimeout(pokeTimer.current);
    pokeTimer.current = setTimeout(() => setPoked(false), 550);

    setShowBubble(true);

    /* Currently showing a one-liner (spontaneous comment or surprise):
       go back to the real conversation for this section. */
    if (messages.length === 1) {
      const normal = conversations[activeSection] || conversations.home;
      setMessages(normal);
      setMessageIndex(0);
      setIsTyping(true);
      schedule(() => setIsTyping(false), 450);
      schedule(() => setShowBubble(false), 9000);
      startPersonalityTimer(activeSectionRef.current);
      return;
    }

    /* Next line of the current conversation */
    if (messageIndex < messages.length - 1) {
      setIsTyping(true);
      schedule(() => {
        setMessageIndex((prev) => prev + 1);
        setIsTyping(false);
      }, 450);
    } else {
      /* Conversation finished: reward the click with a surprise */
      setIsTyping(true);
      schedule(() => {
        setMessages([pick(clickSurprises)]);
        setMessageIndex(0);
        setIsTyping(false);
      }, 450);
    }

    schedule(() => setShowBubble(false), 7000);
    startPersonalityTimer(activeSectionRef.current);
  };

  /* ---------------- AI TOGGLE ---------------- */

  const handleToggle = () => {
    if (isOpen) {
      // CLOSE AI
      clearTimers();
      setShowBubble(false);
      setPoked(false);
      setIsOpen(false);
      return;
    }

    // OPEN AI
    setIsOpen(true);
    setShowBubble(true);
    setIsTyping(true);

    schedule(() => {
      setIsTyping(false);
    }, 500);

    startPersonalityTimer(activeSectionRef.current);
  };

  /* ---------------- CURRENT MESSAGE ---------------- */

  const currentMessage = messages[messageIndex];

  /* =========================================================
     UI
     ========================================================= */

  return (
    <>
      <div
        className={`nitya-ai-container ${
          showBubble ? "is-talking" : ""
        } ${!isOpen ? "is-closed" : ""}`}
      >
        {/* ---------- AI TOGGLE ---------- */}

        <button
          className={`nitya-ai-toggle ${
            isOpen ? "toggle-open" : "toggle-closed"
          }`}
          onClick={handleToggle}
          aria-label={isOpen ? "Hide Nitya AI" : "Show Nitya AI"}
          title={isOpen ? "Hide Nitya AI" : "Show Nitya AI"}
        >
          {isOpen ? "×" : "N"}
        </button>

        {isOpen && (
          <>
            {/* ---------- SPEECH BUBBLE ---------- */}

            {showBubble && (
              <div className="nitya-ai-bubble">
                <div className="bubble-header">
  <div className="header-left">
    <span className="status-dot"></span>
    <span>NITYA.AI</span>
  </div>
  <button
    className="bubble-close-btn"
    onClick={handleToggle}
    aria-label="Hide Nitya AI"
    title="Hide Nitya AI"
  >
    ×
  </button>
</div>

                <div className="bubble-message">
                  {isTyping ? (
                    <div className="typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    currentMessage
                  )}
                </div>

                {!isTyping && (
                  <div className="conversation-hint">
                    {messages.length > 1 ? "click me ✨" : "click for more 💜"}
                  </div>
                )}

                <div className="bubble-tail"></div>
              </div>
            )}

            {/* ---------- CHARACTER ---------- */}

            <button
              className={`nitya-ai-character reaction-${reaction} ${
                poked ? "poked" : ""
              }`}
              onClick={handleCharacterClick}
              aria-label="Talk to Nitya AI"
            >
              <div className="character-glow"></div>

              {/* Sparkles */}
              <div className="sparkle sparkle-one">✦</div>
              <div className="sparkle sparkle-two">✧</div>
              <div className="sparkle sparkle-three">✦</div>

              {/* Floating heart */}
              <div className="floating-heart">♥</div>

              {/* ---------- THE DOLL ---------- */}

              {/* Legs & shoes */}
              <div className="leg left-leg"></div>
              <div className="leg right-leg"></div>

              {/* Body (hoodie) */}
              <div className="doll-body">
                <div className="hoodie-hood"></div>
                <div className="hoodie-string left-string"></div>
                <div className="hoodie-string right-string"></div>
                <div className="hoodie-badge">N</div>
                <div className="hoodie-pocket"></div>

                <div className="arm left-arm"></div>
                <div className="arm right-arm"></div>
              </div>

              {/* Head group (tilts as one piece) */}
              <div className="head-group">
                <div className="hair-back"></div>

                {/* Buns with scrunchies */}
                <div className="bun bun-left">
                  <span className="scrunchie"></span>
                </div>
                <div className="bun bun-right">
                  <span className="scrunchie"></span>
                </div>

                <div className="head">
                  <div className="ear left-ear"></div>
                  <div className="ear right-ear"></div>

                  {/* Eyes */}
                  <div className="eye left-eye">
                    <span className="pupil">
                      <i className="shine shine-big"></i>
                      <i className="shine shine-small"></i>
                    </span>
                  </div>
                  <div className="eye right-eye">
                    <span className="pupil">
                      <i className="shine shine-big"></i>
                      <i className="shine shine-small"></i>
                    </span>
                  </div>

                  <div className="eyebrow left-eyebrow"></div>
                  <div className="eyebrow right-eyebrow"></div>

                  <div className="blush left-blush"></div>
                  <div className="blush right-blush"></div>

                  <div className="nose"></div>
                  <div className="mouth"></div>

                  {/* Bangs */}
                  <div className="bangs">
                    <i className="strand strand-1"></i>
                    <i className="strand strand-2"></i>
                    <i className="strand strand-3"></i>
                    <i className="strand strand-4"></i>
                    <div className="hair-highlight"></div>
                  </div>
                </div>

                {/* Accessories */}
                <div className="bow">
                  <i className="bow-wing bow-left"></i>
                  <i className="bow-wing bow-right"></i>
                  <i className="bow-knot"></i>
                </div>

                <div className="hair-star">★</div>
              </div>
            </button>

            {/* ---------- LABEL ---------- */}

            <div className="ai-label">
              <span></span>
              NITYA.AI
            </div>
          </>
        )}
      </div>

      {/* =======================================================
          INTERNAL CSS
          ======================================================= */}

      <style>{`

        /* ---------- CONTAINER ---------- */

        .nitya-ai-container {
          position: fixed;
          right: 28px;
          bottom: 24px;
          z-index: 9999;
          width: 250px;
          pointer-events: none;
          font-family: Arial, sans-serif;
        }

        /* =====================================================
           AI TOGGLE BUTTON
           ===================================================== */

        .nitya-ai-toggle {
          position: absolute;
          right: 0;
          top: -8px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(178, 145, 255, 0.5);
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            rgba(31, 22, 68, 0.98),
            rgba(15, 11, 35, 0.98)
          );
          color: #d9c6ff;
          font-size: 23px;
          font-weight: 500;
          cursor: pointer;
          pointer-events: auto;
          box-shadow:
            0 8px 22px rgba(0, 0, 0, 0.35),
            0 0 18px rgba(145, 91, 255, 0.18);
          backdrop-filter: blur(12px);
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .nitya-ai-toggle:hover {
          transform: scale(1.08);
          background: linear-gradient(
            145deg,
            rgba(52, 35, 102, 0.98),
            rgba(22, 14, 48, 0.98)
          );
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.4),
            0 0 25px rgba(145, 91, 255, 0.35);
        }

        /* OPEN STATE */

        .nitya-ai-toggle.toggle-open {
          top: -5px;
          color: rgba(231, 224, 255, 0.9);
          font-size: 24px;
        }

        .bubble-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #a98cff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.bubble-close-btn {
  background: transparent;
  border: none;
  color: rgba(231, 224, 255, 0.6);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 0 2px;
  transition: color 0.2s ease, transform 0.2s ease;
}

.bubble-close-btn:hover {
  color: #ffffff;
  transform: scale(1.15);
}

        /* CLOSED STATE */

        .nitya-ai-toggle.toggle-closed {
          position: fixed;
          right: 28px;
          bottom: 28px;
          top: auto;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            #9b76ff,
            #6d49d8
          );
          color: white;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.5px;
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.4),
            0 0 28px rgba(139, 91, 255, 0.42);
          animation: togglePulse 2.5s ease-in-out infinite;
        }

        /* When AI is hidden */

        .nitya-ai-container.is-closed {
          width: 52px;
          height: 52px;
        }

        /* ---------- SPEECH BUBBLE ---------- */

        .nitya-ai-bubble {
          position: absolute;
          right: 5px;
          bottom: 190px;
          width: 245px;
          min-height: 100px;
          padding: 16px 18px 15px;
          background: linear-gradient(145deg, rgba(15, 24, 52, 0.97), rgba(25, 12, 48, 0.97));
          border: 1px solid rgba(157, 112, 255, 0.45);
          border-radius: 18px;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.45),
            0 0 35px rgba(132, 86, 255, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          color: #e9edff;
          animation: bubbleIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: auto;
        }

        .bubble-header {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
          color: #a98cff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8dffcf;
          box-shadow: 0 0 8px rgba(141, 255, 207, 0.9);
          animation: statusPulse 1.8s infinite;
        }

        .bubble-message {
          min-height: 40px;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 500;
          color: #e7eaff;
        }

        .conversation-hint {
          margin-top: 10px;
          font-size: 9px;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          color: rgba(187, 165, 255, 0.6);
          animation: hintPulse 2s infinite;
        }

        .bubble-tail {
          position: absolute;
          right: 55px;
          bottom: -8px;
          width: 16px;
          height: 16px;
          background: #17122e;
          border-right: 1px solid rgba(157, 112, 255, 0.45);
          border-bottom: 1px solid rgba(157, 112, 255, 0.45);
          transform: rotate(45deg);
        }

        /* ---------- TYPING ---------- */

        .typing {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 30px;
        }

        .typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b995ff;
          animation: typingDot 1.1s infinite;
        }

        .typing span:nth-child(2) { animation-delay: 0.15s; }
        .typing span:nth-child(3) { animation-delay: 0.3s; }

        /* ---------- CHARACTER ---------- */

        .nitya-ai-character {
          position: relative;
          display: block;
          width: 140px;
          height: 170px;
          margin-left: auto;
          padding: 0;
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
          pointer-events: auto;
          transform-origin: bottom center;
          animation: characterFloat 4s ease-in-out infinite;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .nitya-ai-character:hover {
          transform: scale(1.06) translateY(-4px);
          filter: brightness(1.06);
        }

        .nitya-ai-character:focus-visible {
          outline: 2px solid #c9b0ff;
          outline-offset: 6px;
          border-radius: 20px;
        }

        .nitya-ai-container.is-talking .nitya-ai-character {
          animation:
            characterFloat 4s ease-in-out infinite,
            talkingBounce 0.7s ease-in-out infinite;
        }

        .nitya-ai-character.poked {
          animation: pokeSquish 0.5s ease-out !important;
        }

        .character-glow {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 110px;
          height: 24px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(145, 91, 255, 0.45), transparent 70%);
          filter: blur(8px);
        }

        /* ---------- HEAD GROUP ---------- */

        .head-group {
          position: absolute;
          left: 0;
          top: 0;
          width: 140px;
          height: 116px;
          z-index: 4;
          transform-origin: 50% 92%;
        }

        .hair-back {
          position: absolute;
          left: 50%;
          top: 16px;
          width: 108px;
          height: 94px;
          margin-left: -54px;
          background: linear-gradient(150deg, #3a2a66 0%, #2a1d4d 50%, #1c1336 100%);
          border-radius: 50% 50% 42% 42% / 48% 48% 52% 52%;
          box-shadow: 0 8px 14px rgba(0, 0, 0, 0.25);
        }

        /* Buns */

        .bun {
          position: absolute;
          top: 3px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #4d3a85, #2a1d4d 70%);
          box-shadow: inset -3px -3px 6px rgba(0, 0, 0, 0.25);
          animation: bunBob 3.2s ease-in-out infinite;
        }

        .bun-left { left: 10px; transform-origin: 70% 90%; }
        .bun-right { right: 10px; transform-origin: 30% 90%; animation-delay: 0.4s; }

        .scrunchie {
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 18px;
          height: 8px;
          margin-left: -9px;
          border-radius: 50%;
          background: linear-gradient(180deg, #ff9bd2, #ff6fb5);
          box-shadow: 0 0 6px rgba(255, 111, 181, 0.6);
        }

        /* ---------- HEAD / FACE ---------- */

        .head {
          position: absolute;
          left: 50%;
          top: 22px;
          width: 94px;
          height: 82px;
          margin-left: -47px;
          background: linear-gradient(160deg, #ffe3d6, #ffcfc4);
          border-radius: 50% 50% 46% 46% / 54% 54% 46% 46%;
          box-shadow:
            inset -5px -6px 10px rgba(231, 140, 140, 0.14),
            0 4px 8px rgba(0, 0, 0, 0.18);
        }

        .ear {
          position: absolute;
          top: 42px;
          width: 10px;
          height: 14px;
          background: #ffd3c6;
          border-radius: 50%;
          z-index: -1;
        }

        .left-ear { left: -4px; }
        .right-ear { right: -4px; }

        /* Bangs */

        .bangs {
          position: absolute;
          left: -4px;
          top: -3px;
          width: 102px;
          height: 38px;
          z-index: 5;
        }

        .bangs::before {
          content: "";
          position: absolute;
          inset: 0 0 8px 0;
          background: linear-gradient(150deg, #3d2c6b, #261a47);
          border-radius: 50% 50% 18% 18% / 90% 90% 30% 30%;
        }

        .strand {
          position: absolute;
          top: 14px;
          background: linear-gradient(180deg, #2f2257, #261a47);
          border-radius: 0 0 60% 60%;
        }

        .strand-1 { left: 0; width: 20px; height: 38px; transform: rotate(6deg); }
        .strand-2 { left: 24px; width: 22px; height: 28px; transform: rotate(-4deg); }
        .strand-3 { left: 50px; width: 24px; height: 26px; transform: rotate(5deg); }
        .strand-4 { right: 0; width: 20px; height: 38px; transform: rotate(-6deg); }

        .hair-highlight {
          position: absolute;
          top: 6px;
          left: 20px;
          width: 32px;
          height: 8px;
          border-radius: 50%;
          background: rgba(200, 165, 255, 0.35);
          filter: blur(2px);
          transform: rotate(-12deg);
        }

        /* Eyes */

        .eye {
          position: absolute;
          top: 40px;
          width: 18px;
          height: 22px;
          z-index: 2;
          transform-origin: center 60%;
          animation: blink 5s infinite;
        }

        .left-eye { left: 20px; }
        .right-eye { right: 20px; animation-delay: 0.02s; }

        .pupil {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 35%, #6b3fa0 0%, #3a1f66 55%, #1d0e38 100%);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .shine {
          position: absolute;
          border-radius: 50%;
          background: #fff;
        }

        .shine-big { top: 3px; right: 3px; width: 7px; height: 7px; }
        .shine-small { bottom: 4px; left: 3px; width: 3.5px; height: 3.5px; opacity: 0.9; }

        .eyebrow {
          position: absolute;
          top: 33px;
          width: 14px;
          height: 3px;
          border-radius: 50%;
          background: #4a3566;
          opacity: 0.85;
          z-index: 2;
        }

        .left-eyebrow { left: 19px; transform: rotate(-6deg); }
        .right-eyebrow { right: 19px; transform: rotate(6deg); }

        .blush {
          position: absolute;
          top: 62px;
          width: 15px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 105, 150, 0.4);
          filter: blur(1.2px);
        }

        .left-blush { left: 8px; }
        .right-blush { right: 8px; }

        .nose {
          position: absolute;
          left: 50%;
          top: 60px;
          width: 4px;
          height: 3px;
          margin-left: -2px;
          border-radius: 50%;
          background: rgba(214, 120, 120, 0.5);
        }

        .mouth {
          position: absolute;
          left: 50%;
          top: 66px;
          width: 12px;
          height: 6px;
          margin-left: -6px;
          border-bottom: 2.5px solid #c2506f;
          border-radius: 0 0 50% 50%;
          transition: all 0.25s ease;
        }

        /* Accessories */

        .bow {
          position: absolute;
          left: 22px;
          top: 30px;
          width: 28px;
          height: 18px;
          z-index: 6;
          transform: rotate(-18deg);
          animation: bowWiggle 3s ease-in-out infinite;
        }

        .bow-wing {
          position: absolute;
          top: 1px;
          width: 14px;
          height: 16px;
          background: linear-gradient(145deg, #ff9fd6, #ff6fb8);
          border-radius: 50% 40% 40% 50%;
          box-shadow: 0 0 6px rgba(255, 111, 184, 0.5);
        }

        .bow-left { left: 0; border-radius: 40% 60% 60% 40%; transform: rotate(-12deg); }
        .bow-right { right: 0; border-radius: 60% 40% 40% 60%; transform: rotate(12deg); }

        .bow-knot {
          position: absolute;
          left: 50%;
          top: 4px;
          width: 8px;
          height: 10px;
          margin-left: -4px;
          border-radius: 50%;
          background: #ff5fae;
          z-index: 2;
        }

        .hair-star {
          position: absolute;
          right: 22px;
          top: 44px;
          z-index: 6;
          font-size: 13px;
          color: #ffe27a;
          text-shadow: 0 0 8px rgba(255, 226, 122, 0.9);
          animation: starTwinkle 2.4s ease-in-out infinite;
        }

        /* ---------- BODY ---------- */

        .doll-body {
          position: absolute;
          left: 50%;
          top: 104px;
          width: 62px;
          height: 50px;
          margin-left: -31px;
          z-index: 2;
          background: linear-gradient(160deg, #b99bff, #8a66f0);
          border-radius: 24px 24px 14px 14px;
          box-shadow:
            inset 0 2px 0 rgba(255, 255, 255, 0.25),
            0 8px 14px rgba(0, 0, 0, 0.28);
        }

        .hoodie-hood {
          position: absolute;
          left: 50%;
          top: -4px;
          width: 38px;
          height: 16px;
          margin-left: -19px;
          border-radius: 0 0 50% 50%;
          background: #a283f5;
          box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.1);
        }

        .hoodie-string {
          position: absolute;
          top: 10px;
          width: 3px;
          height: 14px;
          border-radius: 3px;
          background: #fff;
          opacity: 0.9;
        }

        .left-string { left: 22px; }
        .right-string { right: 22px; }

        .hoodie-badge {
          position: absolute;
          left: 50%;
          top: 22px;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          border-radius: 50%;
          background: #fff;
          color: #7a52e0;
          font-size: 11px;
          font-weight: 900;
          line-height: 18px;
          text-align: center;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }

        .hoodie-pocket { display: none; }

        .arm {
          position: absolute;
          top: 8px;
          width: 14px;
          height: 32px;
          background: linear-gradient(180deg, #a98aff, #8a66f0);
          border-radius: 8px;
          transform-origin: top center;
        }

        .arm::after {
          content: "";
          position: absolute;
          left: 1px;
          bottom: -5px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffd3c6;
          box-shadow: inset -1px -2px 2px rgba(231, 140, 140, 0.2);
        }

        .left-arm { left: -9px; transform: rotate(12deg); }
        .right-arm { right: -9px; transform: rotate(-12deg); }

        /* Legs & shoes */

        .leg {
          position: absolute;
          bottom: 4px;
          width: 14px;
          height: 14px;
          z-index: 1;
          background: #ffd3c6;
          border-radius: 6px 6px 0 0;
        }

        .leg::after {
          content: "";
          position: absolute;
          left: -3px;
          bottom: -3px;
          width: 20px;
          height: 9px;
          border-radius: 50% 50% 40% 40%;
          background: linear-gradient(180deg, #fff, #e6dcff);
          box-shadow: 0 2px 0 #ff8fc8;
        }

        .left-leg { left: 50%; margin-left: -22px; }
        .right-leg { left: 50%; margin-left: 8px; }

        /* ---------- FLOATING ELEMENTS ---------- */

        .floating-heart {
          position: absolute;
          right: -2px;
          top: 6px;
          font-size: 17px;
          color: #ff79cf;
          text-shadow: 0 0 12px rgba(255, 121, 207, 0.75);
          animation: heartFloat 2.8s ease-in-out infinite;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          color: #c5a5ff;
          font-size: 10px;
          pointer-events: none;
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .sparkle-one { left: 2px; top: 40px; }
        .sparkle-two { right: -2px; top: 82px; animation-delay: 0.7s; }
        .sparkle-three { left: 6px; bottom: 26px; animation-delay: 1.4s; }

        /* ---------- LABEL ---------- */

        .ai-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: -2px;
          color: rgba(195, 179, 255, 0.7);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .ai-label span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #a98cff;
          box-shadow: 0 0 7px rgba(169, 140, 255, 0.9);
        }

        /* =====================================================
           REACTIONS
           ===================================================== */

        /* HOME — wave */
        .reaction-wave .right-arm { animation: waveArm 0.65s ease-in-out infinite; }

        /* ABOUT — curious */
        .reaction-curious .head-group { animation: curiousLook 2.5s ease-in-out infinite; }
        .reaction-curious .pupil { animation: eyeLook 2.4s ease-in-out infinite; }
        .reaction-curious .right-eyebrow { animation: eyebrowCurious 2s ease-in-out infinite; }

        /* WORK — excited */
        .reaction-excited { animation: excitedBounce 1.2s ease-in-out infinite !important; }
        .reaction-excited .floating-heart { animation: excitedHeart 1s ease-in-out infinite; }
        .reaction-excited .sparkle { animation: sparkleBurst 1.1s ease-in-out infinite; }
        .reaction-excited .mouth {
          width: 14px;
          height: 9px;
          margin-left: -7px;
          border: none;
          background: #d9456b;
          border-radius: 0 0 14px 14px;
        }

        /* SKILLS — impressed */
        .reaction-impressed .head-group { animation: impressedLook 2s ease-in-out infinite; }
        .reaction-impressed .sparkle { animation: sparkleBright 1.3s ease-in-out infinite; }
        .reaction-impressed .mouth { width: 8px; height: 8px; margin-left: -4px; border: 2.5px solid #c2506f; border-radius: 50%; }

        /* EXPERIENCE — focused */
        .reaction-focused .head-group { animation: focusedLook 3s ease-in-out infinite; }
        .reaction-focused .eyebrow { transform: translateY(2px) rotate(0deg); }
        .reaction-focused .mouth { width: 9px; border-radius: 0; height: 0; border-bottom: 2.5px solid #c2506f; }

        /* ACHIEVEMENTS — celebrate */
        .reaction-celebrate .left-arm { animation: celebrateLeft 0.8s ease-in-out infinite; }
        .reaction-celebrate .right-arm { animation: celebrateRight 0.8s ease-in-out infinite; }
        .reaction-celebrate .sparkle { animation: celebrationSparkle 1s ease-in-out infinite; }
        .reaction-celebrate .mouth {
          width: 14px;
          height: 9px;
          margin-left: -7px;
          border: none;
          background: #d9456b;
          border-radius: 0 0 14px 14px;
        }

        /* CERTIFICATIONS — proud */
        .reaction-proud .head-group { animation: proudNod 2.2s ease-in-out infinite; }
        .reaction-proud .mouth { width: 16px; }

        /* CONTACT — goodbye */
        .reaction-goodbye .right-arm { animation: goodbyeWave 0.7s ease-in-out infinite; }
        .reaction-goodbye .floating-heart { animation: goodbyeHeart 2s ease-in-out infinite; }

        /* =====================================================
           KEYFRAMES
           ===================================================== */

        @keyframes togglePulse {
          0%, 100% {
            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.4),
              0 0 20px rgba(139, 91, 255, 0.25);
          }
          50% {
            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.4),
              0 0 32px rgba(139, 91, 255, 0.5);
          }
        }

        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(12px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes characterFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes talkingBounce {
          0%, 100% { rotate: 0deg; }
          50% { rotate: -1.5deg; }
        }

        @keyframes pokeSquish {
          0% { transform: scale(1, 1); }
          25% { transform: scale(1.12, 0.86); }
          55% { transform: scale(0.94, 1.1) translateY(-8px); }
          100% { transform: scale(1, 1); }
        }

        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
          30% { transform: translateY(-4px); opacity: 1; }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes hintPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.9; }
        }

        @keyframes heartFloat {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-9px) rotate(8deg); }
        }

        @keyframes sparkleFloat {
          0%, 100% { opacity: 0.2; transform: scale(0.7) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(90deg); }
        }

        @keyframes blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.08); }
        }

        @keyframes bunBob {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(4deg); }
        }

        @keyframes bowWiggle {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-12deg); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0.7; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.25) rotate(20deg); }
        }

        /* Home */
        @keyframes waveArm {
          0%, 100% { transform: rotate(-75deg); }
          50% { transform: rotate(-110deg); }
        }

        /* About */
        @keyframes curiousLook {
          0%, 100% { transform: rotate(0deg); }
          35% { transform: rotate(-6deg); }
          70% { transform: rotate(5deg); }
        }

        @keyframes eyeLook {
          0%, 100% { transform: translateX(0); }
          35% { transform: translateX(-2px); }
          70% { transform: translateX(2px); }
        }

        @keyframes eyebrowCurious {
          0%, 100% { transform: rotate(6deg); }
          50% { transform: translateY(-3px) rotate(12deg); }
        }

        /* Work */
        @keyframes excitedBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-11px) scale(1.02); }
          50% { transform: translateY(0) scale(1); }
          75% { transform: translateY(-6px) scale(1.01); }
        }

        @keyframes excitedHeart {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.3); }
        }

        @keyframes sparkleBurst {
          0%, 100% { opacity: 0.4; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Skills */
        @keyframes impressedLook {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(4deg); }
        }

        @keyframes sparkleBright {
          0%, 100% { opacity: 0.3; transform: scale(0.7) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        }

        /* Experience */
        @keyframes focusedLook {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(2px); }
        }

        /* Achievements */
        @keyframes celebrateLeft {
          0%, 100% { transform: rotate(60deg); }
          50% { transform: rotate(130deg); }
        }

        @keyframes celebrateRight {
          0%, 100% { transform: rotate(-60deg); }
          50% { transform: rotate(-130deg); }
        }

        @keyframes celebrationSparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.6) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.6) rotate(180deg); }
        }

        /* Certifications */
        @keyframes proudNod {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-3deg) translateY(1px); }
        }

        /* Contact */
        @keyframes goodbyeWave {
          0%, 100% { transform: rotate(-75deg); }
          50% { transform: rotate(-115deg); }
        }

        @keyframes goodbyeHeart {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.2); }
        }

        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 700px) {
          .nitya-ai-container {
            right: 12px;
            bottom: 12px;
            width: 190px;
            transform: scale(0.82);
            transform-origin: bottom right;
          }

          .nitya-ai-bubble {
            right: 0;
            bottom: 178px;
            width: 220px;
          }

          .nitya-ai-toggle.toggle-closed {
            right: 12px;
            bottom: 12px;
          }
        }

        @media (max-width: 450px) {
          .nitya-ai-container {
            transform: scale(0.72);
            right: 5px;
            bottom: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nitya-ai-character,
          .nitya-ai-character *,
          .nitya-ai-bubble,
          .nitya-ai-toggle {
            animation: none !important;
          }
        }

      `}</style>
    </>
  );
}

export default NityaAI;
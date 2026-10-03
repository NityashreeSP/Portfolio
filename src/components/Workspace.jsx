import { useState } from "react";
import { motion } from "framer-motion";
import NityaAI from "./NityaAI";
import Navbar from "./Navbar";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

function Workspace() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      className="workspace"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* =========================================
          TOGGLEABLE SIDEBAR
      ========================================= */}

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="workspace-content">

        {/* HOME */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />

        {/* PROJECTS */}
        <Projects />

        {/* EXPERIENCE */}
        <Experience />

        {/* ACHIEVEMENTS */}
        <Achievements />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* CONTACT */}
        <Contact />

      </main>
      <NityaAI />


      {/* =========================================
          WORKSPACE STYLES
      ========================================= */}

      <style>{`

        /* =========================================
           GLOBAL
        ========================================= */

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;

          overflow-x: hidden;
          overflow-y: auto;

          background: #050814;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }


        /* =========================================
           WORKSPACE
        ========================================= */

        .workspace {
          position: relative;

          width: 100%;
          min-height: 100vh;

          background: #050814;

          overflow: visible;
        }


        /* =========================================
           MAIN CONTENT

           Sidebar is OVERLAYED on top of the page,
           so content always gets 100% width.
        ========================================= */

        .workspace-content {
          position: relative;

          width: 100%;
          min-height: 100vh;

          margin: 0;
          padding: 0;

          overflow: visible;
        }


        /* =========================================
           SECTION SCROLL POSITION
        ========================================= */

        .workspace-content > section {
          scroll-margin-top: 30px;
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 900px) {

          .workspace-content {
            width: 100%;
            margin: 0;
            padding: 0;
          }

        }


        /* =========================================
           SMALL SCREENS
        ========================================= */

        @media (max-width: 600px) {

          .workspace-content {
            width: 100%;
          }

        }

      `}</style>

    </motion.div>
  );
}

export default Workspace;
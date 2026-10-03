import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        {/* SECTION HEADER */}
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">05 / EXPERIENCE</p>

            <h1>
              RESEARCH &
              <br />
              <span>EXPERIENCE.</span>
            </h1>
          </div>

          <p className="heading-description">
            A research internship focused on economic resilience,
            MSMEs and India's supply-chain vulnerability during
            and after COVID-19.
          </p>
        </motion.div>


        {/* MAIN EXPERIENCE CARD */}
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* TOP */}
          <div className="experience-top">

            <div className="company-info">

              <span className="experience-type">
                RESEARCH INTERNSHIP
              </span>

              <h2>
                IIM Mumbai
              </h2>

              <p>
                Research Intern
              </p>

            </div>

            <div className="experience-date">
              MAY 2026
              <span>—</span>
              JUNE 2026
            </div>

          </div>


          {/* SHORT DESCRIPTION */}
          <div className="experience-summary">

            <p>
              Worked on an integrated research study of
              <strong> economic resilience in India</strong>,
              combining MSME resilience, government support,
              financial credit, trade disruptions and
              post-COVID recovery.
            </p>

          </div>


          {/* RESEARCH TAGS */}
          <div className="experience-tags">

            <span>MSME RESILIENCE</span>
            <span>SUPPLY CHAIN</span>
            <span>TRADE ANALYSIS</span>
            <span>REGRESSION</span>
            <span>PYTHON</span>

          </div>


          {/* FOOTER */}
          <div className="experience-card-footer">

            <div className="research-label">
              <span className="status-dot"></span>
              ECONOMIC RESILIENCE & SUPPLY CHAIN RISK
            </div>

            <button
              className="details-button"
              onClick={() => setShowDetails(true)}
            >
              VIEW DETAILS
              <span>↗</span>
            </button>

          </div>

        </motion.div>

      </div>



      {/* DETAILS MODAL */}

      <AnimatePresence>

        {showDetails && (

          <motion.div
            className="experience-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          >

            <motion.div
              className="experience-modal"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* MODAL HEADER */}

              <div className="modal-header">

                <div>

                  <p className="modal-label">
                    05 / EXPERIENCE
                  </p>

                  <h2>
                    IIM Mumbai
                  </h2>

                  <p className="modal-role">
                    Research Intern · May 2026 — June 2026
                  </p>

                </div>

                <button
                  className="close-button"
                  onClick={() => setShowDetails(false)}
                >
                  ×
                </button>

              </div>



              {/* MAIN RESEARCH */}

              <div className="modal-section">

                <p className="modal-section-label">
                  MAIN WORK
                </p>

                <h3>
                  Economic Resilience &
                  <br />
                  <span>Supply Chain Risk Analysis</span>
                </h3>

                <p className="modal-text">
                  The main work of the internship was a research
                  study examining India's resilience during and
                  after the COVID-19 pandemic.
                </p>

                <p className="modal-text">
                  The study combined domestic and international
                  perspectives by analysing MSME resilience,
                  government support, employment conditions,
                  RBI credit, international trade and
                  supply-chain vulnerability.
                </p>

              </div>



              {/* WHAT WAS ANALYSED */}

              <div className="modal-section">

                <p className="modal-section-label">
                  RESEARCH AREAS
                </p>

                <div className="research-list">

                  <div className="research-item">

                    <span>01</span>

                    <div>
                      <h4>MSME RESILIENCE</h4>

                      <p>
                        Analysed resilience across Indian states
                        using MSME concentration, government
                        support and labour-market indicators.
                      </p>
                    </div>

                  </div>


                  <div className="research-item">

                    <span>02</span>

                    <div>
                      <h4>RBI CREDIT ANALYSIS</h4>

                      <p>
                        Studied sector-wise credit support and
                        financial assistance during the pandemic.
                      </p>
                    </div>

                  </div>


                  <div className="research-item">

                    <span>03</span>

                    <div>
                      <h4>TRADE & SUPPLY CHAINS</h4>

                      <p>
                        Examined India's imports across major
                        trading partners and commodity groups.
                      </p>
                    </div>

                  </div>


                  <div className="research-item">

                    <span>04</span>

                    <div>
                      <h4>COVID EXPOSURE</h4>

                      <p>
                        Constructed a COVID Exposure measure
                        using supply shock and country dependence
                        to study supply-chain vulnerability.
                      </p>
                    </div>

                  </div>


                  <div className="research-item">

                    <span>05</span>

                    <div>
                      <h4>POST-COVID RECOVERY</h4>

                      <p>
                        Studied differences in recovery across
                        trading countries and commodity groups.
                      </p>
                    </div>

                  </div>


                  <div className="research-item">

                    <span>06</span>

                    <div>
                      <h4>REGRESSION ANALYSIS</h4>

                      <p>
                        Used regression models to examine
                        determinants of resilience, trade value
                        and COVID Exposure.
                      </p>
                    </div>

                  </div>

                </div>

              </div>



              {/* RESEARCH FOUNDATION */}

              <div className="modal-section">

                <p className="modal-section-label">
                  RESEARCH FOUNDATION
                </p>

                <div className="paper-card">

                  <div>

                    <span className="paper-type">
                      ACADEMIC PAPER
                    </span>

                    <h3>
                      Firm Resiliency:
                      <br />
                      <span>The Role of Spillovers</span>
                    </h3>

                    <p>
                      Research examining firm resilience and
                      spillover effects during COVID-19. The
                      internship work applied the resilience
                      perspective to the Indian context.
                    </p>

                  </div>

                  <a
                    href="/documents/firm-resiliency-role-of-spillovers.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    READ PAPER ↗
                  </a>

                </div>

              </div>



              {/* AI SIDE WORK */}

              <div className="modal-section side-work">

                <p className="modal-section-label">
                  SIDE WORK
                </p>

                <h3>
                  FirmIndia AI
                </h3>

                <p className="modal-text">
                  An AI-assisted extension built around the
                  research work, exploring how the research
                  insights could be supported through prediction,
                  research assistance and decision-support tools.
                </p>

                <div className="side-tags">
                  <span>RAG</span>
                  <span>FAISS</span>
                  <span>MACHINE LEARNING</span>
                  <span>AI</span>
                </div>

              </div>



              {/* DOCUMENTS */}

              <div className="modal-section">

                <p className="modal-section-label">
                  DOCUMENTS
                </p>

                <div className="documents">

                  <a
                    href="documents/Final_FirmIndia_Report.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="document-link"
                  >

                    <div>

                      <span>PDF</span>

                      <h4>
                        IIM Mumbai Internship Report
                      </h4>

                      <p>
                        Full research report
                      </p>

                    </div>

                    <strong>↗</strong>

                  </a>


                  <a
                    href="/documents/firm-resiliency-the-role-of-spillovers.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="document-link"
                  >

                    <div>

                      <span>PAPER</span>

                      <h4>
                        Firm Resiliency: The Role of Spillovers
                      </h4>

                      <p>
                        Research paper
                      </p>

                    </div>

                    <strong>↗</strong>

                  </a>

                </div>

              </div>



              {/* MODAL FOOTER */}

              <div className="modal-footer">

                <span>
                  IIM MUMBAI · RESEARCH INTERNSHIP
                </span>

                <button
                  onClick={() => setShowDetails(false)}
                >
                  CLOSE
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>



      {/* INTERNAL CSS */}

      <style>{`

        .experience-section {
          position: relative;
          width: 100%;
          padding: 110px 5vw 100px;
          box-sizing: border-box;
          background: #07091a;
          color: #f4f2ff;
          overflow: hidden;
        }


        .experience-section::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          top: 10%;
          right: -250px;
          border-radius: 50%;
          background: rgba(115, 91, 255, 0.08);
          filter: blur(100px);
          pointer-events: none;
        }


        .experience-container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: auto;
        }


        /* HEADER */

        .experience-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
          margin-bottom: 55px;
        }


        .section-label {
          margin: 0 0 18px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #9384ff;
        }


        .experience-heading h1 {
          margin: 0;
          font-size: clamp(55px, 7vw, 90px);
          line-height: 0.85;
          letter-spacing: -0.07em;
        }


        .experience-heading h1 span {
          background:
            linear-gradient(
              90deg,
              #a7dcff,
              #9b87ff,
              #db71e8
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }


        .heading-description {
          max-width: 340px;
          margin: 0 0 5px;
          font-family: monospace;
          font-size: 11px;
          line-height: 1.8;
          color: rgba(225, 220, 245, 0.48);
        }


        /* CARD */

        .experience-card {
          border: 1px solid rgba(139, 123, 240, 0.25);
          border-radius: 22px;
          padding: 34px;
          background:
            linear-gradient(
              135deg,
              rgba(25, 28, 65, 0.78),
              rgba(9, 12, 29, 0.88)
            );
          box-shadow:
            0 30px 80px rgba(0,0,0,0.2),
            inset 0 1px rgba(255,255,255,0.035);
          backdrop-filter: blur(18px);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }


        .experience-card:hover {
          transform: translateY(-5px);
          border-color: rgba(145, 128, 247, 0.42);
        }


        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }


        .experience-type {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.13em;
          color: #9384ff;
        }


        .company-info h2 {
          margin: 12px 0 5px;
          font-size: clamp(35px, 5vw, 60px);
          letter-spacing: -0.06em;
        }


        .company-info p {
          margin: 0;
          font-family: monospace;
          font-size: 11px;
          color: rgba(225,220,245,0.45);
        }


        .experience-date {
          display: flex;
          gap: 8px;
          align-items: center;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          color: rgba(225,220,245,0.4);
        }


        .experience-date span {
          color: #9384ff;
        }


        /* SUMMARY */

        .experience-summary {
          max-width: 850px;
          padding: 30px 0 25px;
        }


        .experience-summary p {
          margin: 0;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.9;
          color: rgba(235,232,249,0.62);
        }


        .experience-summary strong {
          color: #aaa0ff;
          font-weight: 500;
        }


        /* TAGS */

        .experience-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-bottom: 30px;
        }


        .experience-tags span,
        .side-tags span {
          padding: 7px 10px;
          border: 1px solid rgba(140,124,240,0.2);
          border-radius: 6px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.06em;
          color: rgba(225,220,245,0.48);
          background: rgba(100,80,220,0.04);
        }


        /* CARD FOOTER */

        .experience-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }


        .research-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.08em;
          color: rgba(225,220,245,0.3);
        }


        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #71dfb5;
          box-shadow: 0 0 10px rgba(113,223,181,0.7);
        }


        .details-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(143,127,246,0.32);
          border-radius: 7px;
          background: rgba(110,90,220,0.05);
          color: #a79aff;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }


        .details-button:hover {
          background: rgba(110,90,220,0.12);
          transform: translateY(-2px);
        }


        .details-button span {
          font-size: 15px;
        }


        /* OVERLAY */

        .experience-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          box-sizing: border-box;
          background: rgba(3, 4, 12, 0.82);
          backdrop-filter: blur(14px);
          overflow-y: auto;
        }


        /* MODAL */

        .experience-modal {
          width: min(900px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          padding: 38px;
          box-sizing: border-box;
          border: 1px solid rgba(143,127,246,0.3);
          border-radius: 22px;
          background:
            linear-gradient(
              145deg,
              #11142d,
              #080a1b
            );
          box-shadow:
            0 40px 120px rgba(0,0,0,0.55);
        }


        .experience-modal::-webkit-scrollbar {
          width: 4px;
        }


        .experience-modal::-webkit-scrollbar-thumb {
          background: rgba(145,128,247,0.35);
          border-radius: 10px;
        }


        /* MODAL HEADER */

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }


        .modal-label {
          margin: 0 0 12px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: #9384ff;
        }


        .modal-header h2 {
          margin: 0;
          font-size: 42px;
          letter-spacing: -0.05em;
        }


        .modal-role {
          margin: 8px 0 0;
          font-family: monospace;
          font-size: 10px;
          color: rgba(225,220,245,0.4);
        }


        .close-button {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          background: transparent;
          color: rgba(255,255,255,0.65);
          font-size: 22px;
          cursor: pointer;
        }


        .close-button:hover {
          background: rgba(255,255,255,0.06);
        }


        /* MODAL SECTIONS */

        .modal-section {
          padding: 32px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }


        .modal-section-label {
          margin: 0 0 18px;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;
          color: #9384ff;
        }


        .modal-section h3 {
          margin: 0 0 17px;
          font-size: 27px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }


        .modal-section h3 span {
          background:
            linear-gradient(
              90deg,
              #a7dcff,
              #9b87ff,
              #db71e8
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }


        .modal-text {
          max-width: 750px;
          margin: 0 0 12px;
          font-family: monospace;
          font-size: 10px;
          line-height: 1.9;
          color: rgba(225,220,245,0.5);
        }


        /* RESEARCH LIST */

        .research-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
        }


        .research-item {
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 10px;
          padding: 20px;
          background: #0d1025;
        }


        .research-item > span {
          font-family: monospace;
          font-size: 8px;
          color: #9384ff;
        }


        .research-item h4 {
          margin: 0 0 8px;
          font-size: 11px;
          letter-spacing: 0.03em;
        }


        .research-item p {
          margin: 0;
          font-family: monospace;
          font-size: 9px;
          line-height: 1.7;
          color: rgba(225,220,245,0.4);
        }


        /* PAPER */

        .paper-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 23px;
          border: 1px solid rgba(143,127,246,0.2);
          border-radius: 12px;
          background: rgba(100,80,220,0.035);
        }


        .paper-type {
          font-family: monospace;
          font-size: 7px;
          letter-spacing: 0.12em;
          color: #9384ff;
        }


        .paper-card h3 {
          margin: 9px 0;
          font-size: 21px;
        }


        .paper-card p {
          max-width: 600px;
          margin: 0;
          font-family: monospace;
          font-size: 9px;
          line-height: 1.7;
          color: rgba(225,220,245,0.4);
        }


        .paper-card a {
          flex-shrink: 0;
          padding: 11px 13px;
          border: 1px solid rgba(143,127,246,0.3);
          border-radius: 7px;
          color: #a79aff;
          text-decoration: none;
          font-family: monospace;
          font-size: 8px;
        }


        /* SIDE WORK */

        .side-work {
          background: rgba(115,80,180,0.025);
        }


        .side-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 18px;
        }


        /* DOCUMENTS */

        .documents {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }


        .document-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          text-decoration: none;
          background: rgba(255,255,255,0.015);
          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }


        .document-link:hover {
          background: rgba(110,90,220,0.07);
          border-color: rgba(143,127,246,0.3);
        }


        .document-link span {
          font-family: monospace;
          font-size: 7px;
          color: #9384ff;
        }


        .document-link h4 {
          margin: 7px 0 3px;
          font-size: 11px;
          color: #eeeaff;
        }


        .document-link p {
          margin: 0;
          font-family: monospace;
          font-size: 8px;
          color: rgba(225,220,245,0.3);
        }


        .document-link strong {
          font-size: 17px;
          font-weight: 400;
          color: #a79aff;
        }


        /* FOOTER */

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 25px;
        }


        .modal-footer span {
          font-family: monospace;
          font-size: 8px;
          color: rgba(225,220,245,0.25);
        }


        .modal-footer button {
          border: none;
          background: transparent;
          color: #a79aff;
          font-family: monospace;
          font-size: 8px;
          cursor: pointer;
        }


        /* RESPONSIVE */

        @media (max-width: 800px) {

          .experience-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }


          .heading-description {
            max-width: 500px;
          }


          .experience-top {
            flex-direction: column;
          }


          .experience-date {
            margin-top: 5px;
          }


          .research-list {
            grid-template-columns: 1fr;
          }


          .documents {
            grid-template-columns: 1fr;
          }


          .paper-card {
            flex-direction: column;
            align-items: flex-start;
          }

        }


        @media (max-width: 600px) {

          .experience-section {
            padding: 90px 20px 80px;
          }


          .experience-card {
            padding: 23px;
            border-radius: 17px;
          }


          .experience-heading h1 {
            font-size: 55px;
          }


          .experience-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }


          .details-button {
            width: 100%;
            justify-content: space-between;
          }


          .experience-overlay {
            padding: 12px;
          }


          .experience-modal {
            padding: 23px;
            max-height: 94vh;
            border-radius: 17px;
          }


          .modal-header h2 {
            font-size: 32px;
          }


          .modal-section h3 {
            font-size: 23px;
          }


          .modal-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

        }

      `}</style>

    </section>
  );
}

export default Experience;
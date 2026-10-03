import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Achievements() {
  const [selectedItem, setSelectedItem] = useState(null);

  const achievements = [
    {
      id: "cr",
      number: "01",
      type: "LEADERSHIP",
      title: "Class Representative",
      organization: "UVCE · CSE",
      short:
        "Representing the class and coordinating communication between students and faculty.",
      details: [
        "Acted as a communication bridge between students and faculty.",
        "Shared important academic announcements and updates with the class.",
        "Helped coordinate class activities, requirements, and academic matters.",
        "Represented student concerns and communicated them to the appropriate faculty members.",
        "Took responsibility for maintaining smooth communication within the class.",
      ],
    },
    {
      id: "tatva",
      number: "02",
      type: "CULTURAL · LEADERSHIP",
      title: "Event Coordinator",
      organization: 'Tatva · UVCE Acting Club',
      short:
        "Former Event Coordinator of Tatva, contributing to the planning and coordination of acting and cultural activities.",
      details: [
        "Worked with students and club members to coordinate events and activities.",
        "Helped organize and manage cultural and acting-related events.",
        "Coordinated with participants and team members during event preparation.",
        "Contributed to the smooth execution of club activities and performances.",
        "Developed experience in teamwork, coordination, communication, and event management.",
      ],
      photos: [
        "/images/tatva/tatva-1.jpeg",
        "/images/tatva/tatva-2.jpeg",
        "/images/tatva/tatva-3.jpeg",
        "/images/tatva/tatva-4.jpeg",
      ],
    },
    {
      id: "fci",
      number: "03",
      type: "COMMUNITY · VOLUNTEERING",
      title: "FCI Member",
      organization: "FCI · UVCE",
      short:
        "Participating in FCI activities and contributing to student-led initiatives and volunteering efforts.",
      details: [
        "Participated as a member of FCI and its student-led activities.",
        "Contributed to volunteering initiatives and community-oriented activities.",
        "Worked with other members as part of a collaborative team.",
        "Participated in events and activities organized by the club.",
        "Gained experience through teamwork, responsibility, and active participation.",
      ],
      photos: [
        "/images/fci/fci-1.jpeg",
        "/images/fci/fci-2.jpeg",
        "/images/fci/fci-3.jpeg",
        "/images/fci/fci-4.jpeg",
      ],
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <style>{`
        .achievements-section {
          position: relative;
          width: 100%;
          padding: 110px 6vw 120px;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(79, 70, 229, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(236, 72, 153, 0.07),
              transparent 30%
            ),
            #070910;
          color: #f8fafc;
          overflow: hidden;
        }

        .achievements-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .achievements-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .achievements-header {
          margin-bottom: 60px;
        }

        .achievements-label {
          margin: 0 0 16px;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #818cf8;
          font-family: monospace;
        }

        .achievements-header h2 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 700;
        }

        .achievements-header h2 span {
          display: block;
          color: #64748b;
        }

        .achievements-intro {
          max-width: 560px;
          margin-top: 24px;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.8;
        }

        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .achievement-card {
          position: relative;
          min-height: 320px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(14px);
          overflow: hidden;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .achievement-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -90px;
          top: -90px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.12);
          filter: blur(25px);
          pointer-events: none;
        }

        .achievement-card:hover {
          transform: translateY(-6px);
          border-color: rgba(129, 140, 248, 0.35);
          background: rgba(255, 255, 255, 0.04);
        }

        .achievement-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .achievement-number {
          font-family: monospace;
          font-size: 12px;
          color: #64748b;
          letter-spacing: 0.08em;
        }

        .achievement-type {
          font-size: 9px;
          letter-spacing: 0.16em;
          color: #818cf8;
          text-align: right;
        }

        .achievement-main {
          position: relative;
          z-index: 1;
          margin-top: 40px;
        }

        .achievement-main h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .achievement-organization {
          margin-top: 8px;
          color: #a5b4fc;
          font-size: 12px;
          letter-spacing: 0.05em;
        }

        .achievement-description {
          margin: 20px 0 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.7;
        }

        .achievement-footer {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .achievement-tag {
          font-family: monospace;
          font-size: 10px;
          color: #64748b;
        }

        .view-button {
          border: 0;
          background: transparent;
          color: #e2e8f0;
          font-size: 10px;
          letter-spacing: 0.12em;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .view-button:hover {
          color: #a5b4fc;
        }

        /* =========================
           DETAIL OVERLAY
           ========================= */

        .achievement-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: rgba(2, 4, 10, 0.82);
          backdrop-filter: blur(12px);
        }

        .achievement-modal {
          width: min(900px, 100%);
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          background: #0b0e17;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5);
        }

        .achievement-modal::-webkit-scrollbar {
          width: 5px;
        }

        .achievement-modal::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.25);
          border-radius: 10px;
        }

        .modal-header {
          padding: 30px 32px 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          position: sticky;
          top: 0;
          z-index: 3;
          background: rgba(11, 14, 23, 0.94);
          backdrop-filter: blur(12px);
        }

        .modal-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .modal-label {
          margin: 0 0 10px;
          color: #818cf8;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .modal-header h3 {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: -0.04em;
        }

        .modal-organization {
          margin: 8px 0 0;
          color: #94a3b8;
          font-size: 13px;
        }

        .close-button {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          background: transparent;
          color: #cbd5e1;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close-button:hover {
          border-color: rgba(129, 140, 248, 0.5);
          color: white;
          transform: rotate(90deg);
        }

        .modal-content {
          padding: 30px 32px 35px;
        }

        .modal-section {
          margin-bottom: 34px;
        }

        .modal-section:last-child {
          margin-bottom: 0;
        }

        .modal-section-label {
          margin: 0 0 16px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: #64748b;
        }

        .details-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .details-list li {
          position: relative;
          padding: 11px 0 11px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
        }

        .details-list li:last-child {
          border-bottom: 0;
        }

        .details-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #818cf8;
        }

        /* =========================
           PHOTO GALLERY
           ========================= */

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .photo-wrapper {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #111522;
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-wrapper:hover img {
          transform: scale(1.04);
        }

        .modal-footer {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          justify-content: flex-end;
        }

        .modal-close-text {
          border: 0;
          background: transparent;
          color: #64748b;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .modal-close-text:hover {
          color: #e2e8f0;
        }

        /* =========================
           RESPONSIVE
           ========================= */

        @media (max-width: 900px) {
          .achievement-grid {
            grid-template-columns: 1fr;
          }

          .achievement-card {
            min-height: 270px;
          }
        }

        @media (max-width: 600px) {
          .achievements-section {
            padding: 85px 20px 90px;
          }

          .achievements-header {
            margin-bottom: 40px;
          }

          .achievement-card {
            padding: 23px;
          }

          .achievement-main {
            margin-top: 30px;
          }

          .achievement-main h3 {
            font-size: 22px;
          }

          .achievement-overlay {
            padding: 12px;
          }

          .modal-header,
          .modal-content {
            padding-left: 22px;
            padding-right: 22px;
          }

          .photo-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="achievements-container">

        {/* HEADER */}
        <motion.div
          className="achievements-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="achievements-label">06 / ACHIEVEMENTS</p>

          <h2>
            LEADERSHIP
            <span>& ACTIVITIES.</span>
          </h2>

          <p className="achievements-intro">
            Experiences beyond academics — taking responsibility,
            coordinating with people, and being actively involved
            in the college community.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <motion.article
              key={item.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="achievement-top">
                <span className="achievement-number">
                  {item.number}
                </span>

                <span className="achievement-type">
                  {item.type}
                </span>
              </div>

              <div className="achievement-main">
                <h3>{item.title}</h3>

                <p className="achievement-organization">
                  {item.organization}
                </p>

                <p className="achievement-description">
                  {item.short}
                </p>
              </div>

              <div className="achievement-footer">
                <span className="achievement-tag">
                  {item.photos ? "PHOTO ARCHIVE" : "LEADERSHIP"}
                </span>

                <button
                  className="view-button"
                  onClick={() => setSelectedItem(item)}
                >
                  VIEW DETAILS ↗
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =========================
          DETAIL MODAL
          ========================= */}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="achievement-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="achievement-modal"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* MODAL HEADER */}
              <div className="modal-header">
                <div className="modal-header-top">
                  <div>
                    <p className="modal-label">
                      {selectedItem.type}
                    </p>

                    <h3>{selectedItem.title}</h3>

                    <p className="modal-organization">
                      {selectedItem.organization}
                    </p>
                  </div>

                  <button
                    className="close-button"
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* MODAL CONTENT */}
              <div className="modal-content">

                <section className="modal-section">
                  <p className="modal-section-label">
                    ROLE & CONTRIBUTION
                  </p>

                  <ul className="details-list">
                    {selectedItem.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </section>

                {/* PHOTO GALLERY */}
                {selectedItem.photos && (
                  <section className="modal-section">
                    <p className="modal-section-label">
                      MOMENTS / ARCHIVE
                    </p>

                    <div className="photo-grid">
                      {selectedItem.photos.map((photo, index) => (
                        <motion.div
                          className="photo-wrapper"
                          key={photo}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.08,
                          }}
                        >
                          <img
                            src={photo}
                            alt={`${selectedItem.title} ${index + 1}`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                <div className="modal-footer">
                  <button
                    className="modal-close-text"
                    onClick={() => setSelectedItem(null)}
                  >
                    CLOSE DETAILS ×
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
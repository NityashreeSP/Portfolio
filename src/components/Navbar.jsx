import { useEffect } from "react";
import {
  Home,
  User,
  FolderGit2,
  Brain,
  BriefcaseBusiness,
  Trophy,
  Award,
  Mail,
  FileText,
  ChevronRight,
  X,
} from "lucide-react";

function Navbar({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) {
  const links = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT", icon: User },
    
    { id: "skills", label: "SKILLS", icon: Brain },
    { id: "work", label: "WORK", icon: FolderGit2 },
    { id: "experience", label: "EXPERIENCE", icon: BriefcaseBusiness },
    { id: "achievements", label: "ACHIEVEMENTS", icon: Trophy },
    { id: "certifications", label: "CERTIFICATIONS", icon: Award },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  /* Track active section */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);

  /* Navigation */
  const handleNavigation = (id) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setSidebarOpen(false);
  };

  /* Escape key */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSidebarOpen]);

  return (
    <>
      {/* =========================
          MENU BUTTON
      ========================= */}

      <button
        className={`menu-toggle ${
          sidebarOpen ? "menu-open" : ""
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        {sidebarOpen ? (
          <X size={20} />
        ) : (
          <span className="hamburger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        )}
      </button>

      {/* =========================
          BACKDROP
      ========================= */}

      <div
        className={`sidebar-backdrop ${
          sidebarOpen ? "visible" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside
        className={`sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >

        {/* BRAND */}

        <div className="brand">

          <button
            onClick={() => handleNavigation("home")}
            className="brand-button"
          >
            <div className="brand-logo">N</div>

            <div>
              <strong>
                NITYA<span>.OS</span>
              </strong>

              <small>
                DEVELOPER PROFILE
              </small>
            </div>
          </button>

          <button
            className="close-button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>

        </div>


        {/* PROFILE */}

        <div className="profile">

          <div className="avatar-wrapper">
            <img
              src="/images/image.png"
              alt="Nityashree"
            />

            <span className="online"></span>
          </div>

          <div className="profile-text">
            <strong>Nityashree SP</strong>
            <span>@NityashreeSP</span>
          </div>

        </div>


        {/* NAVIGATION */}

        <div className="section-title">
          NAVIGATION
        </div>

        <nav className="navigation">

          {links.map((link) => {
            const Icon = link.icon;
            const active = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() =>
                  handleNavigation(link.id)
                }
                className={`nav-item ${
                  active ? "active" : ""
                }`}
              >

                {active && (
                  <span className="active-line"></span>
                )}

                <Icon size={17} />

                <span>{link.label}</span>

                {active && (
                  <ChevronRight
                    size={14}
                    className="arrow"
                  />
                )}

              </button>
            );
          })}

        </nav>


        {/* CONNECT */}

        <div className="connect">

          <div className="section-title">
            CONNECT
          </div>

          <a
            href="https://github.com/NityashreeSP"
            target="_blank"
            rel="noreferrer"
            className="external"
          >
            <span className="brand-badge">GH</span>
            <span>GitHub</span>
            <span className="external-arrow">↗</span>
          </a>

          <a
            href="https://linkedin.com/in/nityashreesp"
            target="_blank"
            rel="noreferrer"
            className="external"
          >
            <span className="brand-badge linkedin">in</span>
            <span>LinkedIn</span>
            <span className="external-arrow">↗</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="external"
          >
            <span className="resume-icon">
              <FileText size={15} />
            </span>

            <span>Resume</span>

            <span className="external-arrow">↗</span>
          </a>

        </div>


        {/* FOOTER */}

        <div className="sidebar-footer">

          <div className="system">

            <span className="status-dot"></span>

            <span>SYSTEM ONLINE</span>

            <small>v1.0.0</small>

          </div>

        </div>

      </aside>


      {/* =========================
          STYLES
      ========================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* MENU */

        .menu-toggle {
          position: fixed;

          top: 22px;
          left: 22px;

          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;

          background: rgba(8,12,28,0.8);

          backdrop-filter: blur(12px);

          color: #c4b5fd;

          cursor: pointer;

          z-index: 1300;

          transition: 0.25s ease;
        }

        .menu-toggle:hover {
          background: rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.4);
        }

        .menu-open {
          left: 274px;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hamburger i {
          display: block;
          width: 17px;
          height: 2px;

          border-radius: 2px;

          background: #c4b5fd;
        }

        .hamburger i:nth-child(2) {
          width: 12px;
        }


        /* BACKDROP */

        .sidebar-backdrop {
          position: fixed;
          inset: 0;

          background: rgba(0,0,0,0.4);

          opacity: 0;
          visibility: hidden;

          z-index: 1000;

          transition: 0.25s ease;
        }

        .sidebar-backdrop.visible {
          opacity: 1;
          visibility: visible;
        }


        /* SIDEBAR */

        .sidebar {
          position: fixed;

          top: 0;
          left: 0;

          width: 260px;
          height: 100vh;

          padding: 20px 14px;

          display: flex;
          flex-direction: column;

          background: #080c1c;

          border-right: 1px solid
            rgba(255,255,255,0.08);

          z-index: 1200;

          transform: translateX(-100%);

          transition:
            transform 0.3s
            cubic-bezier(0.4,0,0.2,1);

          overflow-y: auto;
        }

        .sidebar.open {
          transform: translateX(0);
        }


        /* BRAND */

        .brand {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 18px;

          border-bottom: 1px solid
            rgba(255,255,255,0.07);
        }

        .brand-button {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 0;

          border: none;
          background: none;

          color: white;

          cursor: pointer;

          text-align: left;
        }

        .brand-logo {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed,
              #ec4899
            );

          font-size: 15px;
          font-weight: 800;
        }

        .brand strong {
          display: block;

          font-size: 15px;
          letter-spacing: 1px;
        }

        .brand strong span {
          color: #a78bfa;
        }

        .brand small {
          display: block;

          margin-top: 3px;

          color: #475569;

          font-size: 7px;
          letter-spacing: 1.4px;
        }

        .close-button {
          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          border-radius: 7px;

          background: rgba(255,255,255,0.04);

          color: #64748b;

          cursor: pointer;
        }

        .close-button:hover {
          color: #f87171;
        }


        /* PROFILE */

        .profile {
          display: flex;
          align-items: center;

          gap: 11px;

          padding: 20px 7px;
        }

        .avatar-wrapper {
          position: relative;

          width: 42px;
          height: 42px;
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          border-radius: 50%;

          border: 1px solid
            rgba(139,92,246,0.4);
        }

        .online {
          position: absolute;

          right: 0;
          bottom: 1px;

          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #22c55e;

          border: 2px solid #080c1c;
        }

        .profile-text {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .profile-text strong {
          color: #e2e8f0;

          font-size: 12px;
        }

        .profile-text span {
          color: #475569;

          font-size: 10px;
        }


        /* SECTION TITLE */

        .section-title {
          display: flex;
          align-items: center;

          gap: 8px;

          padding: 0 8px 8px;

          color: #475569;

          font-size: 8px;
          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .section-title::after {
          content: "";

          flex: 1;

          height: 1px;

          background:
            rgba(255,255,255,0.05);
        }


        /* NAVIGATION */

        .navigation {
          display: flex;
          flex-direction: column;

          gap: 2px;
        }

        .nav-item {
          position: relative;

          width: 100%;
          min-height: 40px;

          display: flex;
          align-items: center;

          gap: 11px;

          padding: 8px 10px;

          border: 1px solid transparent;
          border-radius: 7px;

          background: transparent;

          color: #64748b;

          cursor: pointer;

          text-align: left;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.6px;

          transition: 0.2s ease;
        }

        .nav-item:hover {
          color: #cbd5e1;

          background:
            rgba(255,255,255,0.035);
        }

        .nav-item.active {
          color: #c4b5fd;

          background:
            rgba(124,58,237,0.1);

          border-color:
            rgba(139,92,246,0.15);
        }

        .active-line {
          position: absolute;

          left: -1px;
          top: 8px;
          bottom: 8px;

          width: 2px;

          border-radius: 2px;

          background:
            linear-gradient(
              #6366f1,
              #ec4899
            );
        }

        .nav-item.active svg {
          color: #a78bfa;
        }

        .arrow {
          margin-left: auto;
          color: #8b5cf6;
        }


        /* CONNECT */

        .connect {
          margin-top: 22px;
        }

        .external {
          display: flex;
          align-items: center;

          gap: 10px;

          min-height: 37px;

          padding: 7px 10px;

          border-radius: 7px;

          color: #64748b;

          text-decoration: none;

          font-size: 10px;

          transition: 0.2s ease;
        }

        .external:hover {
          color: #cbd5e1;

          background:
            rgba(255,255,255,0.035);
        }

        .brand-badge,
        .resume-icon {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 6px;

          background:
            rgba(255,255,255,0.05);

          color: #94a3b8;
        }

        .brand-badge {
          font-size: 9px;
          font-weight: 800;
        }

        .brand-badge.linkedin {
          font-size: 11px;
        }

        .external-arrow {
          margin-left: auto;

          color: #475569;
        }

        .external:hover .external-arrow {
          color: #a78bfa;
        }


        /* FOOTER */

        .sidebar-footer {
          margin-top: auto;

          padding-top: 16px;
        }

        .system {
          display: flex;
          align-items: center;

          gap: 7px;

          padding: 9px 8px;

          color: #475569;

          font-size: 7px;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #22c55e;

          box-shadow:
            0 0 7px
            rgba(34,197,94,0.7);
        }

        .system small {
          margin-left: auto;

          color: #334155;
        }


        /* MOBILE */

        @media (max-width: 600px) {

          .sidebar {
            width: 280px;
          }

          .menu-toggle {
            top: 16px;
            left: 16px;
          }

          .menu-open {
            left: 294px;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;
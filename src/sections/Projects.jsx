import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "FULL STACK / AIML",
  
    title: "ClickSafe",
    subtitle: "Cyber Safety & Awareness Platform",
    image: "/projects/clicksafe.png",

    description:
      "ClickSafe is an interactive cyber-safety platform designed to help users understand online threats, identify scams, and develop safer digital habits through awareness content, quizzes, phishing simulations, and intelligent assistance.",

    problem:
      "Many users interact with suspicious links, messages, and online platforms without having enough practical knowledge to recognize cyber threats. Traditional cybersecurity awareness is often passive and difficult to engage with.",

    solution:
      "ClickSafe transforms cybersecurity awareness into an interactive experience. The platform combines educational content, quizzes, phishing simulations, and an intelligent cybersecurity chatbot to help users understand threats through practical interaction.",

    features: [
      "Interactive phishing simulations",
      "Cybersecurity awareness content for different user groups",
      "Cybersecurity quizzes and assessments",
      "Multilingual chatbot support",
      "Real-time communication and alert functionality",
      "AI-assisted cybersecurity guidance",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "NLP",
      "TF-IDF",
      "Stream Chat",
    ],

    github: "https://github.com/NityashreeSP/ByteFusion",
    featured: true,
  },

  {
    number: "02",
    category: "FULL STACK",
   
    title: "MakeEasy",
    subtitle: "Intelligent Travel Companion",
    image: "/projects/makeeasy.png",

    description:
      "MakeEasy is a full-stack travel planning platform that helps users create personalized trips based on destination, duration, number of travellers, budget, interests, and transportation preferences.",

    problem:
      "Planning a trip often requires switching between multiple platforms for destinations, weather, maps, nearby places, accommodation, transportation, and itinerary planning.",

    solution:
      "MakeEasy brings these travel-planning requirements together into one platform. Users can enter their preferences and receive a structured travel plan while exploring nearby places, weather information, maps, hotels, and transportation options.",

    features: [
      "Personalized trip planning",
      "Budget-based trip categorization",
      "Interest and traveller-based recommendations",
      "Nearby place discovery",
      "Weather information",
      "Interactive maps",
      "Hotel and vehicle search",
      "Save and revisit trips",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Leaflet",
      "Geoapify",
      "Open-Meteo",
      "Vercel",
    ],

    github: "https://github.com/NityashreeSP/MakeEasy",
    live: "https://make-easy-xi.vercel.app/",
    featured: true,
  },

  {
    number: "03",
    category: "AIML",
    
    title: "FaceGuard Vision",
    subtitle: "AI-Powered DeepFake Detection",
    image: "/projects/deepfake.png",

    description:
      "FaceGuard Vision is an AI-powered deepfake detection system designed to identify manipulated visual media. It includes image-based detection and a video analysis pipeline for identifying potential manipulation patterns.",

    problem:
      "AI-generated and manipulated media can make it increasingly difficult to distinguish authentic content from synthetic or altered content using visual inspection alone.",

    solution:
      "The project applies deep learning-based computer vision techniques to analyze visual features. Image detection uses a fine-tuned ResNet18 model, while the video pipeline combines frame-level feature extraction with temporal modeling using a CNN-LSTM architecture.",

    features: [
      "Image deepfake detection",
      "Video deepfake detection pipeline",
      "Real/Fake classification",
      "ResNet18-based image model",
      "Frame sampling for video analysis",
      "CNN feature extraction",
      "LSTM-based temporal analysis",
      "Streamlit-based interface",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "ResNet18",
      "CNN",
      "LSTM",
      "OpenCV",
      "Streamlit",
    ],

    github: "https://github.com/NityashreeSP/DeepFakeDetection",
  },

  {
    number: "04",
    category: "AIML",
    
    title: "Sentinel AI",
    subtitle: "AI-Powered Intrusion Detection System",
    image: "/projects/sentialai.png",

    description:
      "Sentinel AI is an AI-powered network intrusion detection system that monitors network traffic, extracts packet-level behavioral features, detects suspicious activity, and presents security information through a real-time dashboard.",

    problem:
      "Network attacks can generate large amounts of traffic and logs, making manual monitoring difficult. Security systems need to identify suspicious patterns quickly and surface meaningful information to the user.",

    solution:
      "The system captures network packets using Scapy, constructs behavioral features for IP addresses, and uses a machine-learning classifier to distinguish normal activity from potential attacks. Detected threats are presented through a live Flask-SocketIO dashboard.",

    features: [
      "Live packet monitoring",
      "Network traffic feature extraction",
      "IP-level behavioral analysis",
      "Attack classification",
      "Real-time security dashboard",
      "Threat logging",
      "Security analytics",
      "AI security assistant",
    ],

    technologies: [
      "Python",
      "Scapy",
      "Random Forest",
      "Flask",
      "Flask-SocketIO",
      "FAISS",
      "Ollama",
      "RAG",
    ],

    github: "https://github.com/NityashreeSP/SentialAI",
  },

  {
    number: "05",
    category: "AIML",
    
    title: "License Plate Detection",
    subtitle: "Fake / True License Plate Classification",
    image: "/projects/license-detection.png",

    description:
      "A computer vision classification system that uses a fine-tuned EfficientNet-B0 model to classify license plate images as FAKE or TRUE.",

    problem:
      "Manually verifying license plate authenticity from images can be difficult and inconsistent, especially when dealing with a large number of images.",

    solution:
      "The project fine-tunes an EfficientNet-B0 architecture for binary classification. Uploaded license plate images are resized using aspect-ratio-preserving letterboxing and passed through the trained model to obtain FAKE and TRUE probabilities.",

    features: [
      "Fake / True license plate classification",
      "EfficientNet-B0 based model",
      "Image preprocessing with letterboxing",
      "Probability-based prediction",
      "Confidence display",
      "Streamlit user interface",
      "Command-line model testing",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "EfficientNet-B0",
      "Timm",
      "NumPy",
      "Streamlit",
    ],

    github: "https://github.com/NityashreeSP/LicenseDetection",
  },

  {
    number: "06",
    category: "AIML / FULL STACK",
    
    title: "ClassVision AI",
    subtitle: "AI-Powered Attendance Management System",
    image: "/projects/classvision.png",

    description:
      "ClassVision AI is a classroom attendance management system that combines real-time face recognition with a full-stack web application for student registration, class management, sessions, attendance tracking, and reporting.",

    problem:
      "Traditional attendance systems can be time-consuming and require manual recording. They also make it difficult to maintain structured attendance records across different classes and sessions.",

    solution:
      "ClassVision AI combines InsightFace-based facial recognition with a React and Node.js platform. Registered students have facial embeddings stored for recognition, while the backend manages classes, subjects, sessions, and attendance records.",

    features: [
      "Student registration",
      "Face embedding generation",
      "Real-time face recognition",
      "Class group management",
      "Subject and class-subject management",
      "Attendance session management",
      "Automatic attendance marking",
      "Attendance reports",
      "JWT authentication",
    ],

    technologies: [
      "Python",
      "InsightFace",
      "OpenCV",
      "React",
      "Node.js",
      "Express.js",
      "SQLite",
      "Sequelize",
      "JWT",
    ],

    github: "https://github.com/NityashreeSP/ClassVision_AI",
    featured: true,
  },

  {
    number: "07",
    category: "AIML",
   
    title: "PrepAI",
    subtitle: "AI Placement Preparation Assistant",
    image: "/projects/prepai.png",

    description:
      "PrepAI is an AI-powered placement preparation platform that helps students prepare for company-specific recruitment processes by analyzing job descriptions, resumes, assessments, performance, and preparation requirements.",

    problem:
      "Placement preparation often involves switching between job descriptions, resumes, study resources, assessments, coding practice, and preparation schedules without a unified workflow.",

    solution:
      "PrepAI brings these activities together into a single placement preparation assistant. It analyzes job descriptions and resumes, identifies relevant skills and topics, generates assessments, tracks performance, and creates personalized study roadmaps.",

    features: [
      "Job description analysis",
      "Resume matching",
      "Skill and technology extraction",
      "MCQ assessments",
      "Coding preparation",
      "Weak-topic identification",
      "Personalized study roadmap",
      "AI chat assistant",
      "Company-specific preparation tracking",
    ],

    technologies: [
      "Python",
      "Flask",
      "Groq",
      "Llama 3.3",
      "NLP",
      "FAISS",
      "PDF Parsing",
    ],

    github: "https://github.com/NityashreeSP/AI_interview_prep",
  },

  {
    number: "08",
    category: "AIML",
   
    title: "Spam Detection",
    subtitle: "SMS Spam Classifier",
    image: "/projects/spam-detection.jpeg",

    description:
      "A machine-learning based text classification system that identifies whether a message is spam or legitimate using text preprocessing, CountVectorizer, and Multinomial Naive Bayes.",

    problem:
      "Users receive large numbers of promotional and potentially malicious messages, making automatic classification useful for filtering unwanted communication.",

    solution:
      "The project preprocesses message text, converts it into numerical features using CountVectorizer, and applies a Multinomial Naive Bayes classifier to predict whether a message is spam or not spam.",

    features: [
      "Text preprocessing",
      "Message classification",
      "CountVectorizer-based feature extraction",
      "Multinomial Naive Bayes model",
      "Spam / Not Spam prediction",
      "Streamlit interface",
      "Model accuracy display",
    ],

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "CountVectorizer",
      "Naive Bayes",
      "Streamlit",
    ],

    github: "https://github.com/NityashreeSP/Spam-detection",
  },
];



function Projects() {
  
  const [selectedProject, setSelectedProject] = useState(null);

 

  return (
    <section className="work" id="work">
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">
          <div className="projects-heading-wrap">
            <span className="projects-eyebrow">
              04 — SELECTED WORK
            </span>

            <h2>
              Things I&apos;ve
              <span> built.</span>
            </h2>
          </div>

          <p className="projects-intro">
            An archive of projects where I explore artificial intelligence,
            full-stack development, machine learning, computer vision, and
            cybersecurity.
          </p>
        </div>

        
       

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card ${
                project.featured ? "featured-card" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />

                <div className="card-image-shade"></div>

                <div className="card-badge">
                  {project.category}
                </div>

                {project.featured && (
                  <span className="featured-pill">
                    FEATURED
                  </span>
                )}

                <div className="card-hover-overlay">
                  <span>EXPLORE PROJECT</span>
                  <span className="overlay-arrow">↗</span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <span className="card-number">
                    {project.number}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <p className="card-subtitle">
                  {project.subtitle}
                </p>

                <div className="card-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span className="tech-more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div
                  className="card-links"
                  onClick={(event) => event.stopPropagation()}
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn primary"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn secondary"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ✕
              </button>

              {/* MODAL IMAGE */}
              <div className="modal-media">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />

                <div className="modal-media-overlay">
                  <span>{selectedProject.number}</span>
                  <span>{selectedProject.category}</span>
                </div>
              </div>

              {/* MODAL INFORMATION */}
              <div className="modal-info">

                <div className="modal-heading">
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>

                  <h2>{selectedProject.title}</h2>

                  <h4>{selectedProject.subtitle}</h4>
                </div>

                {/* OVERVIEW */}
                <div className="modal-section">
                  <span className="modal-section-label">
                    01 / OVERVIEW
                  </span>

                  <p className="modal-large-description">
                    {selectedProject.description}
                  </p>
                </div>

                {/* PROBLEM + SOLUTION */}
                <div className="modal-two-column">

                  <div className="modal-section">
                    <span className="modal-section-label">
                      02 / THE PROBLEM
                    </span>

                    <p>
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="modal-section">
                    <span className="modal-section-label">
                      03 / THE SOLUTION
                    </span>

                    <p>
                      {selectedProject.solution}
                    </p>
                  </div>

                </div>

                {/* FEATURES */}
                <div className="modal-section">
                  <span className="modal-section-label">
                    04 / KEY FEATURES
                  </span>

                  <div className="feature-list">
                    {selectedProject.features.map((feature, index) => (
                      <div className="feature-item" key={feature}>
                        <span className="feature-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGIES */}
                <div className="modal-section">
                  <span className="modal-section-label">
                    05 / TECHNOLOGIES
                  </span>

                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="modal-actions">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      Open Live Project ↗
                    </a>
                  )}

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    View Source Code ↗
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="projects-footer">
          <span>08 PROJECTS</span>

          <div className="footer-line"></div>

          <span>ALWAYS BUILDING</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;
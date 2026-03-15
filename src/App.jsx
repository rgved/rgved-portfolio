import React from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Project from "./components/Project.jsx";
import "./App.css";

function App() {
  const projects = [
    {
      title: "FinFin",
      tech: "Python, React, Machine Learning",
      description: "App that determines the best investment domain based on user personality and risk-taking factors. It advises when to invest using moving averages and current market trends.",
      link: "#"
    },
    {
      title: "AI Grader + Study Companion",
      tech: "Streamlit, Python, PyMuPDF, LLMs",
      description: "AI tool that grades academic answers and provides semantic feedback using LLMs. Supports PDF/DOCX/JSON input and combines keyword and context-based evaluation.",
      link: "https://drive.google.com/drive/folders/1a2r7alAgO9QKO7J29rnb9xfogv8FlvTj?usp=drive_link"
    },
    {
      title: "Sentiment Analysis Model",
      tech: "Python, TensorFlow, scikit-learn",
      description: "Developed an NLP-based sentiment classifier using tokenization, TF-IDF, and neural networks. Achieved 92% accuracy and deployed as a Flask API.",
      link: "https://github.com/rgved/SIH_SENTIMENT"
    },
    {
      title: "Xamino ChatBot",
      tech: "Python, TensorFlow, Keras, NLTK",
      description: "Built an intelligent chatbot for student support—offering motivation, writing help, and study assistance. Integrated TensorFlow & Keras for intent recognition and contextual response generation.",
      link: "https://github.com/rgved/Xamino_Chatbot"
    },
    {
      title: "Kindwell Platform",
      tech: "MongoDB, Express.js, Node.js",
      description: "Full-stack platform for NGOs to manage donations, volunteers, and campaigns with secure API endpoints and real-time data handling.",
      link: "https://github.com/rgved/Kindwell-SE-MERN"
    },
    {
      title: "DeMasque",
      tech: "JavaScript",
      description: "Developed a browser extension that detects unsafe or phishing URLs using algorithmic analysis. Provides real-time link safety alerts and proactive threat detection.",
      link: "#"
    },
    {
      title: "DeMasque ML",
      tech: "Python, JavaScript, Random Forest",
      description: "Browser extension detecting phishing URLs using hybrid ML + heuristic models, improving accuracy over static blacklists.",
      link: "#"
    },
    {
      title: "Java Student Portal",
      tech: "Java, MySQL",
      description: "Academic management system integrating student records, results, and faculty data through a MySQL-backed Java architecture.",
      link: "#"
    },
    {
      title: "MilesHigh",
      tech: "Django REST Framework, HTML, CSS",
      description: "Developed a full-stack airplane e-commerce platform with RESTful APIs for aircraft data, categories, and user operations. Designed custom HTML/CSS interfaces.",
      link: "https://github.com/rgved/djangoRest_MilesHigh"
    },
    {
      title: "Medit",
      tech: "HTML, CSS, JavaScript, MySQL",
      description: "Website connecting doctors, pharmacists, and labs with an integrated roulette-based discount system.",
      link: "#"
    },
    {
      title: "MyEve",
      tech: "HTML, CSS, JavaScript",
      description: "Dynamic event booking website with interactive UI, real-time availability, and secure booking management.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-blue-500/30 relative overflow-hidden">
      <div className="stars-container"></div>
      
      {/* Background glowing blobs */}
      <div className="gradient-blob bg-blue-600 w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="gradient-blob bg-purple-600 w-[400px] h-[400px] top-1/2 right-0 translate-x-1/3"></div>
      <div className="gradient-blob bg-blue-400 w-[600px] h-[600px] pb-24 bottom-0 left-1/4 translate-y-1/3"></div>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <Header />
        
        <div className="mt-12 space-y-24">
          <Section title="Education" delay={0.1}>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white m-0">MPSTME, NMIMS, Mumbai</h3>
                <span className="text-blue-400 font-medium text-sm mt-2 md:mt-0 bg-blue-500/10 px-3 py-1 rounded-full w-fit">Graduating June 2027</span>
              </div>
              <p className="text-gray-300 mb-4 font-medium">B.Tech in Information Technology | Current Year: 3rd (Penultimate)</p>
              <div>
                <strong className="text-gray-200 block mb-2">Relevant Coursework:</strong>
                <div className="flex flex-wrap gap-2">
                  {["Probability & Statistics", "Linear Algebra", "Machine Learning", "Deep Learning", "Artificial Intelligence", "NLP", "Computer Vision", "Data Science", "Pattern Recognition"].map(course => (
                    <span key={course} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Research" delay={0.2}>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Published Paper</h3>
                <p className="text-lg text-blue-300 font-medium mb-4">Intelligent Reinforcement Based Deep Learning for CPU Scheduling: A Proximal Policy Optimization Approach</p>
                <ul className="space-y-3 mb-6 list-none p-0">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">✦</span>
                    <span className="text-gray-300"><strong>Description:</strong> Proposed an ML-based method for improving time quantum prediction in CPU scheduling.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">✦</span>
                    <span className="text-gray-300"><strong>Conference:</strong> ICAIN-2025, BITS Pilani Dubai, in association with IIIT Allahabad. Published in Springer Lecture Notes.</span>
                  </li>
                </ul>
                <a 
                  href="https://drive.google.com/file/d/1DUz2xQdH2TD_mQxHkb0Ngv5SWqQF_6B-/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                >
                  View Certificate
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Implemented & Improved Research Work</h3>
                <p className="text-gray-300 mb-4">
                  Replicated and enhanced “Improvised Round Robin Scheduling Algorithm with the Calculated Time Quantum” by Mohanesh BM, Kumar AP, Rajur SP (IITCEE 2023, IEEE).
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Implemented the algorithm in C, analyzed performance, and introduced adaptive quantum time calculation using standard deviation and process aging.
                </p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/10"
                >
                  View Implementation
                </a>
              </div>
            </div>
          </Section>

          <Section title="Projects" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {projects.map((proj, index) => (
                <Project key={index} title={proj.title} description={proj.description} tech={proj.tech} link={proj.link} />
              ))}
            </div>
          </Section>

          <Section title="Experience" delay={0.4}>
            <div className="grid grid-cols-1 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white relative z-10 m-0">Founder & Developer — DeMasque URLs</h3>
                  <span className="text-blue-400 font-medium text-sm mt-2 md:mt-0 bg-blue-500/10 px-3 py-1 rounded-full w-fit relative z-10">Chrome Web Store</span>
                </div>
                <ul className="space-y-2 mt-4 text-gray-400 relative z-10 list-inside list-disc">
                  <li>Built and deployed a browser extension for real-time phishing and unsafe URL detection.</li>
                  <li>Designed algorithmic and ML-based detection outperforming static blacklist systems.</li>
                  <li>Owned the full lifecycle: ideation, development, testing, deployment, and iteration.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white relative z-10 m-0">Software Engineering Intern</h3>
                  <span className="text-green-400 font-medium text-sm mt-2 md:mt-0 bg-green-500/10 px-3 py-1 rounded-full w-fit relative z-10">CollegeStreet.tech</span>
                </div>
                <ul className="space-y-2 mt-4 text-gray-400 relative z-10 list-inside list-disc">
                  <li>Worked on production-level web features in a startup environment.</li>
                  <li>Assisted in debugging, feature development, and performance improvements.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                <h3 className="text-xl font-bold text-white relative z-10">IBM SkillsBuild Internship</h3>
                <p className="text-gray-400 mt-2 mb-4 relative z-10">Developed an AI Study Companion for intelligent learning assistance using cloud and AI tools.</p>
                <a href="https://ibm-project-h6xorwgg7qbdyvlxwzkun3.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 relative z-10">
                  View Demo →
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between">
                 <div>
                   <h3 className="text-xl font-bold text-white m-0">Student Committees</h3>
                   <p className="text-blue-400 text-sm mt-1">Entrepreneurship & Tech Initiatives</p>
                   <p className="text-gray-400 text-sm mt-2">Led student-driven tech and entrepreneurship clubs; collaborated with startups and mentors; managed digital events using Notion, Discord, and Trello.</p>
                 </div>
                 <span className="mt-4 md:mt-0 text-gray-500 text-sm whitespace-nowrap">2024 – Present</span>
              </div>

            </div>
          </Section>

          <Section title="Competitions & Achievements" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-white relative z-10">Google Developers Group Hackathon</h3>
                  <p className="text-gray-400 mt-2 mb-4 relative z-10 text-sm">Participated in the hackathon to build innovative technical solutions.</p>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20 relative z-10 w-fit">
                  Participant
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-white relative z-10">Data Mavericks Hackathon</h3>
                  <p className="text-gray-400 mt-2 mb-4 relative z-10 text-sm">Built an algorithm to generate buy and sell signals for NSE 5500 stocks.</p>
                </div>
                <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm font-medium rounded-full border border-yellow-500/20 relative z-10 w-fit">
                  2nd Place
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-white relative z-10">OpenAI × NxtWave Hackathon</h3>
                  <p className="text-gray-400 mt-2 mb-4 relative z-10 text-sm">Developed an AI-powered academic evaluation system.</p>
                </div>
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20 relative z-10 w-fit">
                  State Level Shortlist
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                <div>
                  <h3 className="text-lg font-bold text-white relative z-10">Zindi — AI Summarizer Challenge</h3>
                  <p className="text-gray-400 mt-2 mb-4 relative z-10 text-sm">Healthcare AI Challenge. Benchmarked NLP models against GPT-4 and LLaMA.</p>
                </div>
                <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20 relative z-10 w-fit">
                  Global Top 20% (299 / 1643)
                </span>
              </div>
            </div>
          </Section>

          <Section title="Skills" delay={0.6}>
            <div className="flex flex-wrap gap-4">
              {[
                { category: "Languages", items: ["Python", "C++", "JavaScript", "C", "Java", "SQL", "R"] },
                { category: "Frameworks & Libs", items: ["TensorFlow", "Keras", "Flask", "Node.js", "Express.js", "Django", "ReactJS"] },
                { category: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
                { category: "Tools", items: ["Git", "VS Code", "Postman", "Render", "Firebase", "AntiGravity"] },
                { category: "AI Tools", items: ["Claude Code", "Codex", "Antigravity"] }
              ].map((group, idx) => (
                <div key={idx} className="flex-1 min-w-[250px] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-sm text-gray-300 border border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-2">
                  <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Core Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "OOP", "OS", "DBMS", "Computer Networks", "AI", "ML", "NLP", "DL"].map(item => (
                      <span key={item} className="px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 transition-colors rounded-lg text-sm text-blue-200 border border-blue-500/20">
                        {item}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          </Section>
        </div>
        
        <footer className="mt-32 pb-8 text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rgved Kulkarni. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';
import profilePic from './assets/profile.jpg';

const projects = {
  ai: [
    {
      title: 'AI Grader + Study Companion',
      desc: 'AI tool that grades academic answers and provides semantic feedback using LLMs. Supports PDF/DOCX/JSON inputs.',
      link: 'https://drive.google.com/drive/folders/1a2r7alAgO9QKO7J29rnb9xfogv8FlvTj?usp=drive_link'
    },
    {
      title: 'Sentiment Analysis Model',
      desc: 'NLP pipeline with tokenization, TF-IDF and neural fine-tuning; deployed as a Flask API.',
      link: 'https://github.com/rgved/SIH_SENTIMENT'
    },
    {
      title: 'Xamino ChatBot',
      desc: 'Student-focused chatbot using TensorFlow/Keras and NLTK for intent recognition and contextual replies.',
      link: 'https://github.com/rgved/Xamino_Chatbot'
    }
  ],
  browserExtension: [
    {
      title: 'DeMasque (Browser Extension)',
      desc: 'Algorithm + hybrid ML system to detect unsafe or phishing URLs; real-time link safety analysis.',
      link: 'https://chromewebstore.google.com/detail/demasque-safe-url-detecto/ebeaopafeieobjbhjfkpnjbkbhdfmkao?hl=en-US&utm_source=ext_sidebar'
    },
    {
      title: 'DeMasque ML (Random Forest)',
      desc: 'Random Forest model that complements heuristics for higher detection recall and precision.',
      link: 'https://chromewebstore.google.com/detail/demasque-safe-url-detecto/ebeaopafeieobjbhjfkpnjbkbhdfmkao?hl=en-US&utm_source=ext_sidebar'
    }
  ],
  web: [
    {
      title: 'MilesHigh',
      desc: 'Django REST Framework-based airplane e-commerce site with category + model pages and custom front-end.',
      link: 'https://github.com/rgved/djangoRest_MilesHigh'
    },
    {
      title: 'Kindwell',
      desc: 'MERN platform for NGOs to manage volunteers, campaigns, and donations (secure APIs + real-time flows).',
      link: 'https://github.com/rgved/Kindwell-SE-MERN'
    },
    {
      title: 'Medit',
      desc: 'Healthcare portal connecting doctors, pharmacists, labs — includes roulette discount mechanic.',
      link: 'https://github.com/rgved/medit_project_website'
    },
    {
      title: 'MyEve',
      desc: 'Event booking platform with interactive UI and booking management.',
      link: 'https://github.com/rgved/capstoneproject-main'
    }
  ],
  other: [
    {
      title: 'Java Student Portal',
      desc: 'Academic management system with MySQL-backed Java backend.',
      link: 'https://github.com/rgved/examAppJava'
    }
  ]
};

export default function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-left">
          <h1>Rgved Kulkarni</h1>
          <p>AI Researcher · Full-stack Developer · Systems</p>
        </div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Designing practical AI systems that scale — research-driven, production-ready.</h2>
          <p>I build ML models, web platforms, and research prototypes that solve real problems. Currently focused on safe web security, efficient systems, and intelligent educational tools.</p>
          <div className="hero-buttons">
            <a href="#projects" className="primary">See Work</a>
            <a href="mailto:rgvedk@gmail.com" className="secondary">Contact</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/rgved"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rgved-kulkarni-b36a34259"><FaLinkedin /></a>
            <a href="mailto:rgvedk@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
        <div className="profile-card">
          <img src={profilePic} alt="Rgved Kulkarni" />
          <h3>Rgved Kulkarni</h3>
          <p>B.Tech IT, NMIMS — Class of 2027</p>
          <a href="/Rgved_Kulkarni_Resume.pdf">Download Résumé</a>
        </div>
      </section>

      {/* Research Section */}
      <section id="research">
        <h3>Research & Publications</h3>
        <div className="card-grid">
          <div className="card">
            <h5>Intelligent Reinforcement Based Deep Learning for CPU Scheduling</h5>
            <p>Proximal Policy Optimization approach to predict efficient time quantum for CPU scheduling.</p>
            <ul>
              <li>Conference: ICAIN-2025 (BITS Pilani Dubai) — Springer Lecture Notes</li>
              <li>Certificate: <a href="https://drive.google.com/file/d/1DUz2xQdH2TD_mQxHkb0Ngv5SWqQF_6B-/view?usp=sharing">View Certificate</a></li>
              <li>Code: <a href="https://github.com/rgved/RR_ResPaper_Implementation">View Implementation</a></li>
            </ul>
          </div>
          <div className="card">
            <h5>Improvised Round Robin Scheduling (IITCEE 2023)</h5>
            <p>Enhanced algorithm using adaptive quantum calculation with standard deviation & process aging. Implemented in C.</p>
            <a href="https://github.com/rgved/RR_ResPaper_Implementation">View Implementation</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h3>Projects</h3>

        <h4>AI & ML</h4>
        <div className="card-grid">
          {projects.ai.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>

        <h4>Browser Extensions</h4>
        <div className="card-grid">
          {projects.browserExtension.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>

        <h4>Web & Platforms</h4>
        <div className="card-grid">
          {projects.web.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>

        <h4>Other</h4>
        <div className="card-grid">
          {projects.other.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>

        {/* Competitions */}
        <h4>Competitions</h4>
        <div className="card-grid">

          <div className="card highlight">
            <h5>MPSTME Ideathon – Smart India Hackathon (Internal Round)</h5>
            <p>
              Secured <strong>2nd place</strong> in the internal college round of the MPSTME Ideathon — 
              a qualifier for the national <em>Smart India Hackathon (SIH 2025)</em>. 
              Presented an innovative full-stack solution under the team <strong>“MacroHard.”</strong>
            </p>
            <a 
              href="https://www.linkedin.com/posts/rgved-kulkarni-b36a34259_smartindiahackathon-sih2025-macrohard-activity-7378761848290041856-iWaB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-w3FoBLlC-TxGEo_iAcOtsrCsVG2j5M0U"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Post →
            </a>
          </div>

          <div className="card">
            <h5>Zindi — Kenya Clinical Reasoning Challenge</h5>
            <p>
              Ranked Top 20% (299/1643). Built summarization models benchmarked against GPT-4 & LLaMA.
            </p>
            <a 
              href="https://zindi.africa/competitions/kenya-clinical-reasoning-challenge"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Competition Link
            </a>
          </div>

          <div className="card">
            <h5>OpenAI — NXT Wave Buildathon</h5>
            <p>
              Built an AI-powered evaluation system to grade student responses and provide study guidance.
            </p>
            <a 
              href="https://openai-buildathon.nxtwave.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Buildathon Link
            </a>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h3>Experience</h3>
        <div className="experience-card">
          <h4>IBM SkillsBuild Internship — Sept 2025</h4>
          <p>Worked on cloud-native AI applications. Developed an AI Study Companion processing text & PDF/DOC inputs.</p>
          <a href="https://ibm-project-h6xorwgg7qbdyvlxwzkun3.streamlit.app/">Demo Link</a>
        </div>
        <div className="experience-card">
          <h4>Student Committees — Entrepreneurship & Tech Initiatives</h4>
          <p>Led multiple tech clubs, organized hackathons, and onboarded industry mentors. Improved workflows using Notion, Discord, Trello.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h3>Skills</h3>
        <div className="card-grid">
          <div className="card"><h5>Programming</h5><p>Python, C++, JavaScript, Java, C, SQL</p></div>
          <div className="card"><h5>Frameworks</h5><p>TensorFlow, Keras, PyTorch, Flask, Django, Node.js, React</p></div>
          <div className="card"><h5>Tools & DB</h5><p>Git, VSCode, Postman, MongoDB, MySQL, Firebase</p></div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact">
        <h4>Get in touch</h4>
        <p>rgvedk@gmail.com • Mumbai, India</p>
        <div className="social-icons">
          <a href="https://github.com/rgved"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rgved-kulkarni-b36a34259"><FaLinkedin /></a>
          <a
  href="mailto:rgvedk@gmail.com?subject=JOB%2FINTERN%20CONTACT"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

        </div>
        <p>Built with React & CSS — Modern Portfolio</p>
      </footer>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h5>{project.title}</h5>
      <p>{project.desc}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View →</a>
    </div>
  );
}

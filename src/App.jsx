import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import "./App.css";

function App() {
  const projects = [
    {
      title: "AI Grader + Study Companion",
      tech: "Streamlit, Python, PyMuPDF, LLMs",
      link: "https://drive.google.com/drive/folders/1a2r7alAgO9QKO7J29rnb9xfogv8FlvTj?usp=drive_link"
    },
    {
      title: "Sentiment Analysis Model",
      tech: "Python, TensorFlow, scikit-learn",
      link: "https://github.com/rgved/SIH_SENTIMENT"
    },
    {
      title: "Xamino ChatBot",
      tech: "Python, TensorFlow, Keras, nltk",
      link: "https://github.com/rgved/Xamino_Chatbot"
    },
    {
      title: "Kindwell Platform",
      tech: "MongoDB, Express.js, Node.js",
      link: "https://github.com/rgved/Kindwell-SE-MERN"
    },
    {
      title: "MilesHigh",
      tech: "Django REST Framework, HTML, CSS",
      link: "https://github.com/rgved/djangoRest_MilesHigh"
    }
    // Add more projects here
  ];

  return (
    <div className="App">
      <div className="animated-bg"></div>
      <div className="container">
        <Header />
        <Section title="Education">
          <h3>MPSTME, NMIMS, Mumbai</h3>
          <p>B.Tech in Information Technology | Graduation: June 2027 | Current Year: 3rd (Penultimate)</p>
          <p><strong>Relevant Coursework:</strong> Probability & Statistics, Linear Algebra, Machine Learning, Deep Learning, AI, NLP, Computer Vision, Data Science, Pattern Recognition</p>
        </Section>

        <Section title="Research">
          <h3>Published Paper</h3>
          <ul>
            <li><strong>Title:</strong> Intelligent Reinforcement Based Deep Learning for CPU Scheduling: A Proximal Policy Optimization Approach</li>
            <li><strong>Description:</strong> Proposed ML-based method for improving time quantum prediction in CPU scheduling.</li>
            <li><strong>Conference:</strong> ICAIN-2025, BITS Pilani Dubai, in association with IIIT Allahabad</li>
            <li><strong>Certificate:</strong> <a href="https://drive.google.com/file/d/1DUz2xQdH2TD_mQxHkb0Ngv5SWqQF_6B-/view?usp=sharing">View</a></li>
          </ul>
        </Section>

        <Section title="Projects">
          {projects.map((proj, index) => (
            <Project key={index} title={proj.title} tech={proj.tech} link={proj.link} />
          ))}
        </Section>

        <Section title="Experience">
          <h3>IBM SkillsBuild Internship</h3>
          <p>Developed an AI Study Companion processing text and PDFs.</p>
          <p><a href="https://ibm-project-h6xorwgg7qbdyvlxwzkun3.streamlit.app/">Demo Link</a></p>
        </Section>

        <Section title="Competitions">
          <h3>Zindi – AI Summarizer Challenge</h3>
          <p>Ranked Top 20% globally; developed NLP models for medical text summarization.</p>
        </Section>

        <Section title="Skills">
          <p><strong>Languages:</strong> Python, C++, JavaScript, C, Java, SQL</p>
          <p><strong>Frameworks:</strong> TensorFlow, Keras, Flask, Node.js, Express.js, Django, ReactJS</p>
          <p><strong>Databases:</strong> MongoDB, MySQL</p>
          <p><strong>Tools:</strong> Git, VS Code, Postman, Render, Firebase</p>
          <p><strong>Concepts:</strong> Data Structures, OOP, OS, DBMS, Computer Networks, AI, ML, NLP, DL</p>
        </Section>
      </div>
    </div>
  );
}

export default App;

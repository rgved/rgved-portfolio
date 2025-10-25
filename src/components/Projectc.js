import React from "react";

const Project = ({ title, tech, link }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{tech} — <a href={link}>Link</a></p>
    </div>
  );
};

export default Project;

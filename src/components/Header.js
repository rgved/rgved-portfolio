import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src="/profile.jpg" alt="Rgved Kulkarni" className="profile-pic" />
      <div className="header-info">
        <h1>Rgved Kulkarni</h1>
        <p>Mumbai, India | <a href="mailto:rgvedk@gmail.com">rgvedk@gmail.com</a> | +91 7738023228</p>
        <p><a href="https://www.linkedin.com/in/rgved-kulkarni-b36a34259">LinkedIn</a> | <a href="https://github.com/rgved">GitHub</a></p>
        <p>Desired Role: E3 intern | EPFL (Graduating 2027)</p>
      </div>
    </header>
  );
};

export default Header;

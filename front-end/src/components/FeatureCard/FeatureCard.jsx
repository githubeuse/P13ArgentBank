import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;

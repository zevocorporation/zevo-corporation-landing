import React from "react";

//importing styles
import "../styles/patterns/serviceCard.css";

const ServiceCard = ({ name, src, type, details }) => {

  return (
    <div
      className="service-card"
      style={{
        flexDirection: type === "inverse" ? "column-reverse" : "column",
      }}
    >
      <div>
        <p className="card-title">{name}</p>
        <p>{details}</p>
      </div>
      <div className="image">
        <img src={src} alt="dev" />
      </div>
    </div>
  );
};

export default ServiceCard;

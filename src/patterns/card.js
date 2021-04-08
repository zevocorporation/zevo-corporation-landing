import React from "react";

//importing styles
import "../styles/patterns/card.css";

//importing media assets
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import leftarrow from "../assets/icons/left-arrow.svg";
import rightarrow from "../assets/icons/right-arrow.svg";
import mobrightarrow from "../assets/icons/mobrightarrow.svg";

export const Card = ({ name, src, description }) => {
  return (
    <div className="card">
      <p className="card-title">{name}</p>
      <p style={{ color: "#f7f7f7", lineHeight: "25px" }}>{description}</p>
      <img src={src} alt="card" className="card-image" />
    </div>
  );
};

export const CareerCard = ({ title, src, detail }) => {
  return (
    <div className="careerCard">
      <img src={src} alt="card" />
      <p className="card-title">{title}</p>
      <p style={{ color: "#f7f7f7", lineHeight: "25px" }}>{detail}</p>
    </div>
  );
};

export const PersonCard = ({ title, src, work }) => {
  return (
    <div className="PersonCard">
      <div className="block-top">
        <img src={src} alt="person" />
      </div>
      <div className="block-bottom">
        <p className="card-title">{title}</p>
        <p style={{ color: "#f7f7f7" }}>{work}</p>
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export const StaffCard = ({ title, src, work }) => {
  return (
    <div className="PersonCard">
      <div className="block-top">
        <img src={src} alt="person" />
      </div>
      <div className="block-bottom">
        <p className="card-title">{title}</p>
        <p style={{ color: "#f7f7f7" }}>{work}</p>
      </div>
    </div>
  );
};

export const ProcessCard = ({ title, num, img, detail, extra }) => {
  return (
    <div className="process-card">
      <div className="block-left">
        <span className="number">{num}</span>
        <p className="card-title">{title}</p>
        <p style={{ color: "#f7f7f7", lineHeight: "25px" }} className="text">
          {detail}
        </p>
        <img src={img} alt="process" className="process-img" />
      </div>
      <div className="block-right">
        <p style={{ color: "#f7f7f7", lineHeight: "25px" }}>{extra}</p>
      </div>
      <img src={rightarrow} alt="rightarrow" className="right-arrow" />
      <img src={mobrightarrow} alt="rightarrow" className="mob-right-arrow" />
    </div>
  );
};

export const ProcessCardRight = ({ title, num, img, detail, extra }) => {
  return (
    <div className="process-card-two">
      <div className="block-left">
        <p style={{ color: "#f7f7f7", lineHeight: "25px" }}>{detail}</p>
      </div>
      <div className="block-right">
        <span className="number">{num}</span>
        <p className="card-title">{title}</p>
        <p className="text">{extra}</p>
        <img src={img} alt="process" className="process-img" />
      </div>
      <img src={leftarrow} alt="leftarrow" className="left-arrow" />
      <img src={mobrightarrow} alt="rightarrow" className="mob-left-arrow" />
    </div>
  );
};

export const WorkCard = ({
  title,
  work,
  src,
  bgcolor,
  fcolor,
  dot,
  pdf,
  details,
}) => {
  return (
    <div className="work-card">
      <p style={{ color: "#f7f7f7", lineHeight: "25px" }}>{details}</p>
      <p
        className="card-link"
        style={{ background: `${bgcolor}`, color: `${fcolor}` }}
      >
        <a
          href={pdf}
          style={{ color: `${fcolor}` }}
          download
          target="_blank"
          rel="noreferrer"
        >
          Case study
        </a>
      </p>
      <div className="workcard-image">
        <img src={src} alt="brand" className="project-image" />
        {dot ? <img src={dot} alt="dots" className="rightdot" /> : null}
        {dot ? <img src={dot} alt="dots" className="leftdot" /> : null}
      </div>
      <p className="title">{title}</p>
      <p style={{ fontSize: 14, color: "#f7f7f7" }}>{work}</p>
    </div>
  );
};

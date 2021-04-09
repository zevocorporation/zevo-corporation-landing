import React from "react";
import { Link } from "react-router-dom";

//importing styles
import "../styles/patterns/hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="layer-one">
        <span>Design</span>
        <span>Build</span>
        <span>Decentralize</span>
      </div>
      <p className="title">
        Building the Globe's first decentralized information technology network
      </p>
      <p className="text">
        We are zealous and art driven community, towards creating the finest and
        most sound solution decentralized applications, architechture and design
        experience to solve all your business problems. We ensure that we tackle
        all our tasks with professionalism and a sense of social responsibility.
        Our clients are our strength and we guarantee their utmost comfort and
        satisfaction during their journey with us.
      </p>
      <div className="layer-two">
        <a href="/contactus"><button>Let's discuss</button></a>
        <a href="/our_work">See our work</a>
      </div>
    </div>
  );
};

export const HeroCenter = ({ title, page }) => {
  return (
    <div className="hero-center">
      <p className="hero-title">{title}</p>
      <p>
        We are zealous and art driven community, towards creating the finest and
        most sound solution decentralized applications, architechture and design
        experience to solve all your business problems. We ensure that we tackle
        all our tasks with professionalism and a sense of social responsibility.
        Our stories are the inspirations and throttle for the community.
      </p>
      <div>
        <a href="/contactus"><button>Got a product idea ? Let's discuss</button></a>
        {page === "about" ? <Link to="/our_work">See our Work</Link> : null}
      </div>
    </div>
  );
};

export const HeroCareer = () => {
  return (
    <div className="hero-career">
      <p className="hero-title">We at zevo Navigate Further, Together</p>
      <p>
        We are zealous and art driven community, towards creating the finest and
        most sound solution decentralized applications, architechture and design
        experience to solve all your business problems. We ensure that we tackle
        all our tasks with professionalism and a sense of social responsibility.
        Our working partners are our core strength and we guarantee their utmost
        comfort and satisfaction during their journey with us.
      </p>
      {/* <div className="block-input">
        <div>
          <p>Job title</p>
          <input type="text" placeholder="Enter title" />
        </div>
        <div>
          <p>Skill</p>
          <input type="text" placeholder="Enter Skill" />
        </div>
        <button>Search jobs</button>
      </div> */}
    </div>
  );
};

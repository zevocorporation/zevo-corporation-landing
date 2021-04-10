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
        We are an art-driven community aspiring to create the finest business
        solutions. How ? Through decentralized technologies and frameworks. It
        doesn't end there. We provide the necessary architecture and design
        experience to cater to your needs. Zevo Corporation understands how
        important it is to give back. Thus, social responsibility and
        professionalism are our driving forces. Moreover, our clients are our
        strength. We guarantee them the utmost comfort and satisfaction during
        their journey with us.
      </p>
      <div className="layer-two">
        <a href="/contactus">
          <button>Let's discuss</button>
        </a>
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
        At Zevo, we are always brainstorming and coming up with new ideas. Our
        zeal for creation never dies down. The projects we have taken up are a
        reflection of this very fact. We maintain a standard when it comes to
        product development that never fails to please our clients. Our work
        speaks for us and is the most accurate representation of the Zevo
        spirit.
      </p>
      <div>
        <a href="/contactus">
          <button>Got a product idea ? Let's discuss</button>
        </a>
        {page === "about" ? <Link to="/our_work">See our Work</Link> : null}
      </div>
    </div>
  );
};

export const HeroCareer = () => {
  return (
    <div className="hero-career">
      <p className="hero-title">We At Zevo Navigate Further, Together</p>
      <p>
        We, at Zevo, believe that unity is the bridge to success. Giving
        everyone their due credit and lifting each other up is something we
        pride ourselves on. Our crew is our strength. We strive for employee
        satisfaction just as much as we do for customer satisfaction. A healthy
        and happy workforce is a synonym of efficiency. Maintaining efficiency
        is one of our primary goals at Zevo.
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

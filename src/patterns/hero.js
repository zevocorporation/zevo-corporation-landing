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
        <button>Let's discuss</button>
        <Link to="/our_work">See our work</Link>
      </div>
    </div>
  );
};

export const HeroCenter = ({ title, page }) => {
  return (
    <div className="hero-center">
      <p className="hero-title">{title}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sociis at
        augue id consequat nec. Scelerisque quis tortor malesuada mattis. At
        sapien ipsum blandit ornare sit fames viverra. Proin sed malesuada
        ornare eu sagittis eu. Commodo morbi sed augue dui ornare varius
        dignissim. Neque mauris.
      </p>
      <div>
        <button>Got a product idea ? Let's discuss</button>
        {page === "about" ? <Link>See our Work</Link> : null}
      </div>
    </div>
  );
};

export const HeroCareer = () => {
  return (
    <div className="hero-career">
      <p className="hero-title">We at zevo Navigate Further, Together</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ullamcorper tincidunt mauris dignissim malesuada mollis purus ac. At mi
        massa imperdiet scelerisque morbi vel. Eget in et vitae consectetur
        arcu, felis ipsum semper venenatis. Sed proin nec libero ut dis
        dictumst. Lobortis.
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

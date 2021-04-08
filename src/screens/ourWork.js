import React from "react";
import { Link } from "react-router-dom";

import Header from "../patterns/header";
import { HeroCenter } from "../patterns/hero";
import { WorkCard } from "../patterns/card";
import Footer from "../patterns/footer";

//importing styles
import "../styles/screens/ourwork.css";

//importing media assets
import ourworkImg from "../assets/images/ourwork.png";
import idea from "../assets/images/idea.svg";
import imac from "../assets/cards/imac.jpg";
import macbook from "../assets/cards/macbook.svg";
import auli from "../assets/cards/auli.svg";
import imac2 from "../assets/cards/imac2.svg";
import bluedot from "../assets/images/bluedot.svg";
import greendot from "../assets/images/greendot.svg";
import yellowdot from "../assets/images/yellowdot.svg";
import metrono from "../assets/pdf/metrono.pdf";
import thenftway from "../assets/pdf/thenftway.pdf";
import preet from "../assets/pdf/preet.pdf";
import ngauge from "../assets/pdf/ngauge.pdf";

const OurWork = () => {
  return (
    <>
      <div className="ourwork">
        <div className="ourwork-landing">
          <img src={ourworkImg} alt="ourwork" className="bg-img" />
          <Header />
          <HeroCenter title="Our Work" />
        </div>

        <div className="image-container">
          <div className="block-one" data-aos="zoom-in">
            <WorkCard
              details="As a leading interior designer, the folks at Preet Interior Design aimed provide exceptional customer service. They offer clients a unique and innovative approach to tackling all their design needs. Our goal was to provide their customers with an application that was easy to use as well as elegant to look on to."
              title="Preet interior design"
              work="UI UX Design & Development"
              src={macbook}
              bgcolor="#EFCD3D"
            />
            <WorkCard
              title="BENA credit app"
              work="UI UX Design"
              src={imac}
              bgcolor="#3079AF"
            />
          </div>
          <div className="block-two" data-aos="zoom-out">
            <WorkCard
              title="N gauge app"
              details="nGauge labour app helps you interact with all your employees from a single unified platform and provide an enriched experience"
              work="UI UX Design & Development"
              src={imac}
              bgcolor="#1AC1A3"
            />
            <WorkCard
              title="X Trek "
              work="UI UX Design & Development"
              src={auli}
              bgcolor="#fff"
              fcolor="black"
            />
          </div>
          <div className="block-one" data-aos="zoom-in">
            <WorkCard
              title="KODO AI Website"
              work="UI UX Design & Development"
              src={imac}
              bgcolor="#3079AF"
            />
            <WorkCard
              title="Metrono apps"
              details="Metrono is a mealbox subscription model for bachelors where students, working officials and people who stay away from won't have to go to restarunts to have meals, instead they can subscribe to a mealbox to get breakfast,lunch and dinner delivered straight to your door step"
              work="UI UX Design"
              src={imac2}
              bgcolor="#EFCD3D"
            />
          </div>

          <div className="work-block" data-aos="flip-down">
            <div className="block-left">
              <p className="block-title">Like</p>
              <p className="block-title">What</p>
              <p className="block-title">You See?</p>
              <p
                style={{
                  margin: "2em 0",
                  color: "#f7f7f7",
                  lineHeight: "25px",
                }}
              >
                Strategized workflows, multidirectional communication channels
                and effective build approaches is our core principle. Our
                probabilistic quality assessments, tests to understand the
                market, product and audience is what makes us stand out of crowd
                in the market, and entitles us to be the success probabiliy
                finders for your product. Smooth workflows, zero
                miscommunications, ontime updates, and deliveries are the key
                indicators for our success in the market
              </p>
              <button className="primary-btn">Tell us your project idea</button>
            </div>
            <div className="block-right">
              <img src={idea} alt="idea" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurWork;

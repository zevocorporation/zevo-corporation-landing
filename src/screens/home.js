import React, { useEffect } from "react";

//Importing animation
import Aos from "aos";
import "aos/dist/aos.css";

//Importing styles
import "../styles/screens/home.css";

//Importing patterns
import Header from "../patterns/header";
import { Hero } from "../patterns/hero";
import { Card, WorkCard } from "../patterns/card";
import Contact from "../patterns/contact";
import Footer from "../patterns/footer";
import ServiceCard from "../patterns/serviceCard";

//Importing media assets
import landing from "../assets/images/home.jpg";
import google from "../assets/partners/google.svg";
import microsoft from "../assets/partners/microsoft.svg";
import airbnb from "../assets/partners/airbnb.svg";
import hubspot from "../assets/partners/hubspot.svg";
import fedex from "../assets/partners/fedex.svg";
import walmart from "../assets/partners/walmart.svg";
import map from "../assets/images/map.svg";
import imac from "../assets/cards/imac.jpg";
import macbook from "../assets/cards/macbook.svg";
import iphone from "../assets/cards/iphone.svg";
import auli from "../assets/cards/auli.svg";
import card1 from "../assets/cards/card1.svg";
import card2 from "../assets/cards/card2.svg";
import card3 from "../assets/cards/card3.svg";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";
import mobile from "../assets/cards/mobile.svg";
import laptop from "../assets/cards/laptop.svg";
import system from "../assets/cards/system.svg";
import bot from "../assets/cards/robo.svg";
import leftarrow from "../assets/icons/leftarrow.svg";
import SliderCard from "../patterns/slider";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="home">
        <div className="landing">
          <img src={landing} alt="landing" className="bg-img" />
          <Header />
          <Hero />
        </div>

        <div className="partners">
          <img src={airbnb} alt="airbnb" data-aos="fade-up"></img>
          <img src={hubspot} alt="hubspot" data-aos="fade-up"></img>
          <img src={google} alt="google" data-aos="fade-up"></img>
          <img src={microsoft} alt="microsoft" data-aos="fade-up"></img>
          <img src={walmart} alt="walmart" data-aos="fade-up"></img>
          <img src={fedex} alt="fedex" data-aos="fade-up"></img>
        </div>

        <div className="who-we-are">
          <div className="block-left" data-aos="fade-right">
            <p className="block-title">WHO WE ARE</p>
            <p>
              We are the decentralized, autonomous, and passionate conglomerate
              of agile crews of UI.UX designers, backend, frontend, engineers,
              dapp, smart contract, layer 2, core blockchain developers, product
              developers, managers, SME's, and artists with professional
              expertise, and understandings in decentralized market for more
              than 4+ years.
            </p>
            <span className="span">Got a product idea ? Let's discuss</span>
          </div>
          <div className="block-right" data-aos="fade-left">
            <div className="map-image">
              <img src={map} alt="map" />
            </div>
          </div>
        </div>

        <div className="card-container">
          <Card
            name="Mission"
            src={card1}
            description="To achieve 40%-60% gross economic growth for the stability of our techno-artists community, rendering and expanding various decentralized technical services and contribute 25% net economy for the rural growth, in the form of liberal arts, and literatures, for in this fiscal year."
          />
          <Card
            name="Vision"
            src={card2}
            description="Establishing a novel, Decentralized Information Technology (DIT) network accross the globe, with 
            autonomous workflows, exploitation free, independent, freewill workculture, otherwise establishing a futuristic decentralized techno-artists community."
          />
          <Card name="Values" src={card3} description="" />
        </div>

        <div className="experience">
          <p className="block-title">Experience you can count on </p>
          <p>Our achievement in the journey depicted in numbers</p>
          <div className="block">
            <div>
              <h1>
                50<span>+</span>
              </h1>
              <p>Happy Clients</p>
            </div>
            <div>
              <h1>
                54<span>+</span>
              </h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1>
                8<span>+</span>
              </h1>
              <p>Techno-artists</p>
            </div>
            <div>
              <h1>
                4<span>+</span>
              </h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>

        <div className="work">
          <p className="block-title">Our Work</p>
          <p>
            Find our latest works, for expertise validation and professional
            asessments.
          </p>
          <button>
            <span>See all works</span>
            <img src={leftarrow} alt="leftarrow" />
          </button>
          <div className="block-image-one" data-aos="zoom-out">
            <WorkCard
              title="Preet interior design"
              work="UI UX Design & Development"
              src={macbook}
              bgcolor="#EFCD3D"
            />
            <WorkCard
              title="BENA credit app"
              work="UI UX Design"
              src={iphone}
              bgcolor="#3079AF"
            />
          </div>
          <div className="block-image-two" data-aos="zoom-out">
            <WorkCard
              title="N gauge app"
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
        </div>

        <div className="services" id="services">
          <div className="block-header">
            <div>
              <p className="block-title">
                Our services would be your best benefit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada tristique id facilisi metus rhoncus, nunc est. Cras
                pulvinar.
              </p>
            </div>
            <div>
              <img src={left} alt="left" style={{ marginRight: 16 }} />
              <img src={right} alt="right" />
            </div>
          </div>
          <div className="block-card">
            <ServiceCard
              name="UI & UX Designing"
              src={mobile}
              details="Elegant UI designs with trending A/B tested design patterns"
            />
            <ServiceCard
              name="Decentralized Development"
              src={laptop}
              type="inverse"
            />
            <ServiceCard name="Application Development" src={system} />
            <ServiceCard name="Bot Development" src={bot} type="inverse" />
          </div>
        </div>

        <div className="slider-block">
          <p className="block-title">Trying is Believing</p>
          <p>
            See what our clients are saying about our unique and effective
            formulas.
          </p>
          <SliderCard />
        </div>

        <div style={{ background: "#000" }}>
          <Contact />
        </div>

        <div className="line">
          <p></p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

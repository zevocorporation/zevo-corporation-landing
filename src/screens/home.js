import React from "react";
import { Link } from "react-router-dom";

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
import map from "../assets/images/map.svg";
import imac from "../assets/cards/imac.jpg";
import macbook from "../assets/cards/macbook.jpg";
import card1 from "../assets/cards/card1.svg";
import card2 from "../assets/cards/card2.svg";
import card3 from "../assets/cards/card3.svg";
import mobile from "../assets/cards/mobile.svg";
import laptop from "../assets/cards/laptop.svg";
import system from "../assets/cards/system.svg";
import bot from "../assets/cards/robo.svg";
import leftarrow from "../assets/icons/leftarrow.svg";
import imac2 from "../assets/cards/imac2.svg";
import bluedot from "../assets/images/bluedot.svg";
import metrono from "../assets/pdf/metrono.pdf";
import greendot from "../assets/images/greendot.svg";
import yellowdot from "../assets/images/yellowdot.svg";
import nftway from "../assets/images/nftway.jpg";
import preet from "../assets/pdf/preet.pdf";
import ngauge from "../assets/pdf/ngauge.pdf";
import thenftway from "../assets/pdf/thenftway.pdf";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="landing">
          <img src={landing} alt="landing" className="bg-img" />
          <Header />
          <Hero />
        </div>

        {/* <div className="partners">
          <img src={airbnb} alt="airbnb"></img>
          <img src={hubspot} alt="hubspot"></img>
          <img src={google} alt="google"></img>
          <img src={microsoft} alt="microsoft"></img>
          <img src={walmart} alt="walmart"></img>
          <img src={fedex} alt="fedex"></img>
        </div> */}

        <div className="who-we-are">
          <div className="block-left">
            <p className="block-title">WHO WE ARE</p>
            <p>
              We are the decentralized, autonomous, and passionate conglomerate
              of agile crews of UI.UX designers, backend, frontend, engineers,
              dapp, smart contract, layer 2, core blockchain developers, product
              developers, managers, SME's, and artists with professional
              expertise, and understandings in decentralized market for years.
            </p>
            <Link to="/contactus" className="span">
              Got a product idea ? Let's discuss
            </Link>
          </div>
          <div className="block-right">
            <div className="map-image">
              <img src={map} alt="map" />
            </div>
          </div>
        </div>

        <div className="card-container">
          <Card
            name="Mission"
            src={card1}
            description="To achieve 40%-60% gross economic growth for the stability of our techno-artists community, rendering and expanding various decentralized technical services and contribute 25% net economy for the rural growth, in the form of liberal arts, and literatures, in this fiscal year."
          />
          <Card
            name="Vision"
            src={card2}
            description="Establishing a novel, Decentralized Information Technology (DIT) network accross the globe, with 
            autonomous workflows, exploitation free, independent, freewill workculture, otherwise establishing a futuristic decentralized techno-artists community."
          />
          <Card
            name="Values"
            src={card3}
            description="We, strategize our mission based on sustainable economy, impacts on the culture, natural resources and collectively, the humanity in long term thus preceeding technovations without giving up the humanity, nature, emotions, and racing bluntly with capital obsessions."
          />
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
            Our works speak for us. Explore updates on our latest works with
            global alliances to understand and percieve our efforts and vision
            with one leap ahead of commencing the journey with us.
          </p>
          <button>
            <Link to="/our_work">See all works</Link>
            <img src={leftarrow} alt="leftarrow" />
          </button>
          <div className="block-image-one">
            <WorkCard
              title="Preet interior design"
              work="UI UX Design & Development"
              src={macbook}
              dot={yellowdot}
              pdf={preet}
              prototype="https://www.figma.com/proto/F1dHWKwWoEjmz13r2hHwHN/ZEVO-DESIGNS-PORTFOLIO?node-id=1%3A6&scaling=min-zoom"
              bgcolor="#EFCD3D"
              fcolor="#000"
              details="As a leading interior designer, the folks at Preet Interior Design aimed provide exceptional customer service. They offer clients a unique and innovative approach to tackling all their design needs. Our goal was to provide their customers with an application that was easy to use as well as elegant to look on to."
            />
            <WorkCard
              title="Metrono apps"
              work="UI UX Design"
              src={imac2}
              dot={bluedot}
              pdf={metrono}
              prototype="https://www.figma.com/proto/F1dHWKwWoEjmz13r2hHwHN/ZEVO-DESIGNS-PORTFOLIO?node-id=1%3A2&scaling=min-zoom"
              bgcolor="#2025EE"
              details="Metrono is a mealbox subscription model for bachelors where students, working 
              officials and people who stay away from won't have to go to restarunts to have meals, 
              instead they can subscribe to a mealbox to get breakfast,lunch and dinner delivered 
              straight to your door step"
            />
          </div>
          <div className="block-image-two">
            <WorkCard
              title="N gauge app"
              work="UI UX Design & Development"
              src={imac}
              dot={greendot}
              pdf={ngauge}
              prototype="https://www.figma.com/proto/ezjEiW1CXmsBpmdRuk90du/Labour-Webapp?node-id=359%3A1441&scaling=fit-width"
              bgcolor="#1AC1A3"
              details="nGauge labour app helps you interact with all
              your employees from a single unified platform and
              provide an enriched experience"
            />
            <WorkCard
              title="The NFT way "
              work="UI UX Design & Development"
              src={nftway}
              pdf={thenftway}
              prototype="https://www.figma.com/proto/WJJgvBe4Z6AGrllMSPj9GF/thNFTway-ZEVO?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1"
              bgcolor="#fff"
              fcolor="black"
              details="theNFTway helps techno creatives to sell their craft through the platform. This helps them to get reach for their craft and earn money as well."
            />
          </div>
        </div>

        <div className="services" id="services">
          <div className="block-header">
            <div>
              <p className="block-title">Our services</p>
              <p>
                We add life to your ideas and soul to your value propositions,
                so your clients and we stay forever with futuristic
                understanding about the product ahead of time in the market,
                thus pioneering forever as leaders in our respective industries
                sustainably
              </p>
            </div>
            {/* <div>
              <img src={left} alt="left" style={{ marginRight: 16 }} />
              <img src={right} alt="right" />
            </div> */}
          </div>
          <div className="block-card">
            <ServiceCard
              name="UI & UX Designing"
              src={mobile}
              details="Rich user experience built with industry standard designs, A/B tested patterns, smooth user flows and customer personas helps you understand the market trend and customer traits."
            />
            <ServiceCard
              name="Decentralized Development"
              details="Access seamless smart contract developer crews implementating NFT, AMM, DeFi and novel Dapp ideas in the vast horizons of decentralized market and economy"
              src={laptop}
              type="inverse"
            />
            <ServiceCard
              name="Application Development"
              src={system}
              details="Finding reliable team is one of the most challenging tasks in a
            business , we ensure quality solutions to such problems
            through our application development, architecting crews to build your ideas"
            />
            <ServiceCard
              name="Bot Development"
              src={bot}
              type="inverse"
              details="Bot culture, is an inevitable automation industrial revolution easing the business processes and our crews specialize at it with industry standard expertise"
            />
          </div>
        </div>

        {/* <div className="slider-block">
          <p className="block-title">Trying is Believing</p>
          <p>
            See what our clients are saying about our unique and effective
            formulas.
          </p>
          <SliderCard />
        </div> */}

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

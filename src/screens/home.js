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
            <p className="block-title">WHO WE ARE ?</p>
            <p>
              We are a autonomous, and passionate set of decentralized
              designers, engineers, and product developers. Our professional
              expertise spans over years along with our understanding of the
              decentralized market.
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
            description="To achieve 40%-60% gross economic growth and achieve stability, expanding our various decentralized services with an intention of contributing 25% of the net income towards rural growth, through liberal arts and literature."
          />
          <Card
            name="Vision"
            src={card2}
            description="Establishing a novel, Decentralized Information Technology (DIT) network across the globe. One which promotes autonomous workflows and exploitation-free  workculture. In other words, establishing a futuristic decentralized community of techno-artists."
          />
          <Card
            name="Values"
            src={card3}
            description="We believe in sustainability. Hence, we value natural resources and the socio-economic conditions of society, as well. Zevo cares about the good of mankind. Everything we do is powered by this."
          />
        </div>

        <div className="experience">
          <p className="block-title">Experience you can count on </p>
          <p>Our achievement in numbers.</p>
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
            Our work speak for us. Explore updates on our latest works to get a
            sneak peek of our efforts and vision. Get with one step forward on
            your journey with us.
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
              details="Preet Interior Design, a leading interior designer, aimed to improve their customer service. They offer clients unique and innovative solutions for all their design needs. Our goal was to provide their customers with an application that was easy to use as well as visually pleasing."
            />
            <WorkCard
              title="Metrono apps"
              work="UI UX Design"
              src={imac2}
              dot={bluedot}
              pdf={metrono}
              prototype="https://www.figma.com/proto/F1dHWKwWoEjmz13r2hHwHN/ZEVO-DESIGNS-PORTFOLIO?node-id=1%3A2&scaling=min-zoom"
              bgcolor="#2025EE"
              details="Metrono is a meal box subscription model. It aimed to provide meals to students and working officials who stay away from home. Metrono facilitated their ease in acquiring daily meals. All one had to do was subscribe to a meal box. This ensured that breakfast, lunch, and dinner would get delivered straight to their doorstep."
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
              details="nGauge is a labor app. It helps you interact with all your employees from a single unified platform. This provides an enriched experience for all those using it."
            />
            <WorkCard
              title="The NFT way "
              work="UI UX Design & Development"
              src={nftway}
              pdf={thenftway}
              prototype="https://www.figma.com/proto/WJJgvBe4Z6AGrllMSPj9GF/thNFTway-ZEVO?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1"
              bgcolor="#fff"
              fcolor="black"
              details="theNFTway provides techno creatives a platform to sell their craft. This helps them to reach a larger audience with their craft and earn money as well."
            />
          </div>
        </div>

        <div className="services" id="services">
          <div className="block-header">
            <div>
              <p className="block-title">Our services</p>
              <p>
                We give life to your ideas. Through a futuristic approach, we
                make sure that your product stays ahead of time. Thus ensuring
                both yours and our sustainability in the market.
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
              details="Rich user experience built with industry grade designs. A/B tested patterns, smooth work flows and customer personas helps you understand the market trend and customer traits."
            />
            <ServiceCard
              name="Decentralized Development"
              details="Access seamless and smart contract developer groups that help you to implement NFT, AMM, DeFi and novel Dapp ideas in the vast horizon of the decentralized marketplace."
              src={laptop}
              type="inverse"
            />
            <ServiceCard
              name="Application Development"
              src={system}
              details="Your ideas are our launchpad. We seamlessly develop applications that suit your needs. Thereby helping you to boost business. Our highly professional application development team can be relied on to develop the best applications as per your requirement."
            />
            <ServiceCard
              name="Bot Development"
              src={bot}
              type="inverse"
              details="Bot culture is a novel and efficient industrial revolution. It has eased its way into the business processes. Our professionals specialize in it with high quality expertise."
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

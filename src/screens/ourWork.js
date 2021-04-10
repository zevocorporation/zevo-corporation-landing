import React from "react";

import Header from "../patterns/header";
import { HeroCenter } from "../patterns/hero";
import { WorkCard } from "../patterns/card";
import Footer from "../patterns/footer";

//importing styles
import "../styles/screens/ourwork.css";

//importing media assets
import ourworkImg from "../assets/images/ourwork.jpg";
import idea from "../assets/images/idea.png";
import imac from "../assets/cards/imac.jpg";
import macbook from "../assets/cards/macbook.jpg";
import nftway from "../assets/images/nftway.jpg";
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
          <div className="block-one">
            <WorkCard
              details="Preet Interior Design, a leading interior designer, aimed to improve their customer service. They offer clients unique and innovative solutions for all their design needs. Our goal was to provide their customers with an application that was easy to use as well as visually pleasing."
              title="Preet interior design"
              work="UI UX Design & Development"
              src={macbook}
              dot={yellowdot}
              prototype="https://www.figma.com/proto/F1dHWKwWoEjmz13r2hHwHN/ZEVO-DESIGNS-PORTFOLIO?node-id=1%3A6&scaling=min-zoom"
              pdf={preet}
              bgcolor="#EFCD3D"
            />
            <WorkCard
              title="Metrono apps"
              details="Metrono is a meal box subscription model. It aimed to provide meals to students and working officials who stay away from home. Metrono facilitated their ease in acquiring daily meals. All one had to do was subscribe to a meal box. This ensured that breakfast, lunch, and dinner would get delivered straight to their doorstep."
              work="UI UX Design"
              src={imac2}
              dot={bluedot}
              prototype="https://www.figma.com/proto/F1dHWKwWoEjmz13r2hHwHN/ZEVO-DESIGNS-PORTFOLIO?node-id=1%3A2&scaling=min-zoom"
              pdf={metrono}
              bgcolor="#EFCD3D"
            />
          </div>
          <div className="block-two">
            <WorkCard
              title="N gauge app"
              details="nGauge is a labor app. It helps you interact with all your employees from a single unified platform. This provides an enriched experience for all those using it."
              work="UI UX Design & Development"
              src={imac}
              dot={greendot}
              pdf={ngauge}
              prototype="https://www.figma.com/proto/ezjEiW1CXmsBpmdRuk90du/Labour-Webapp?node-id=359%3A1441&scaling=fit-width"
              bgcolor="#1AC1A3"
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
          {/* <div className="block-one">
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
          </div> */}

          <div className="work-block">
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
                Our strategized workflows, multidirectional communications
                channels, and effective build approach aid our success. Our
                probabilistic quality assessments, tests to understand the
                market, product and audience is what makes us stand out of crowd
                in the market, and entitles us to be the success probabiliy
                finders for your product. Smooth workflows, on-time updates, and
                deliveries are our key performance indicators.
              </p>
              <a href="/contactus">
                <button className="primary-btn">
                  Tell us your project idea
                </button>
              </a>
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

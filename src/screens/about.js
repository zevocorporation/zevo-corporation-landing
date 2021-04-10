import React from "react";

import Header from "../patterns/header";
import Footer from "../patterns/footer";
import { HeroCenter } from "../patterns/hero";
import {
  PersonCard,
  StaffCard,
  ProcessCard,
  ProcessCardRight,
} from "../patterns/card";

//importing styles
import "../styles/screens/about.css";

//importing media assets
import aboutImg from "../assets/images/about.jpg";
import person1 from "../assets/cards/chairman.jpg";
import person2 from "../assets/cards/ceo.jpg";
import person3 from "../assets/cards/cto.jpg";
import person4 from "../assets/cards/uiux.jpeg";
import person5 from "../assets/cards/chairman.jpg";
import person6 from "../assets/cards/arun.jpg";
import person7 from "../assets/cards/cto.jpg";
import person8 from "../assets/cards/arunachalam.jpg";
import person9 from "../assets/cards/vimal.jpg";
import person10 from "../assets/cards/Jaisurya.jpg";
import person11 from "../assets/cards/ceo.jpg";
import process1 from "../assets/cards/process1.svg";
import story from "../assets/images/story.png";
import processtwo from "../assets/images/two.png";
import processthree from "../assets/images/three.png";
import processfour from "../assets/images/four.png";
import processfive from "../assets/images/five.png";
import processsix from "../assets/images/six.png";
import processseven from "../assets/images/seven.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-landing">
          <img src={aboutImg} alt="about" className="bg-img" />
          <Header />
          <HeroCenter
            title="A CREW OF INDEPENDENT TECHNO-ARTISTS"
            page="about"
          />
        </div>

        <div className="story">
          <div>
            <p className="block-title">and this is our story.</p>
            <p>
              In 2017, three friends came together with a dream. They wanted to
              kickstart their careers as entrepreneurs in the Information
              Technology industry. This dream faced many obstacles, including
              but not limited to the global pandemic. The trio had to tackle
              many challenges both in their personal and professional lives.
              Yet, their spirits were not dulled. Their experiences and failures
              had made them tougher. One day, the three decided that they
              wouldn’t wait around any longer. Hence, Zevo was born. Not from
              scratch, but as a resurrection from their past failures. It was
              their phoenix that arose from the ashes. As time passed, the Zevo
              family grew. Before they knew it, they clocked a seven-figure
              revenue in three months. The story of Zevo is a story of dreams. A
              story of the light at the end of the tunnel. The story of us all.
            </p>
            <a href="/contactus">
              <button>Have a project idea? Get in touch</button>
            </a>
          </div>
          <div className="video">
            <img src={story} alt="story" />
          </div>
        </div>

        <div className="process">
          <p className="block-title">The process we follow</p>
          <p>Understand how we understand you</p>
          <div className="process-card-container">
            <ProcessCard
              num="01"
              title="Requirements"
              img={process1}
              detail="First, we analyze tasks by determining the demands and conditions. We do so to plan the workflows. This helps in improving the efficiency and effectiveness of product development. Further, we take into account the possible conflicts that may arise among the stakeholder decisions, on the product as well.
              "
              extra="Strategized workflows, multidirectional communication channels, and effective build approaches are our core principles."
            />
            <ProcessCardRight
              num="02"
              title="DOCUMENTATION"
              img={processtwo}
              extra="Documentation commences from the architecting phase. This continues throughout the design, development, and delivery cycle. It also becomes a prerequisite during case studies and analyses of the cycle."
              detail="It is needless to say that documentation is an asset when it comes to understanding the product"
            />
            <ProcessCard
              num="03"
              title="UI & UX Design"
              img={processthree}
              extra="Visual designs play vital role, psychologically to understand the product, market and connect to the people with right buying power, access their comforts and establish a seamless userflow"
              detail="Seeing is believing. Hence, we take you through a visual journey of our product development process. We do this with our wireframes and High Fidelity prototypes. This helps to understand the product while solidifying the idea and mission."
            />
            <ProcessCardRight
              num="04"
              title="handoff & development"
              detail="We provide deliverables at each milestone accomplishment. This is to ensure that all teams carry out their workflows without dependencies."
              extra="At Zevo, we understand that dependencies, miscommunications, and opaque workflows are the barriers to an effective work cycle.
              "
              img={processfour}
            />
            <ProcessCard
              num="05"
              title="ACCEPTANCE & TESTING"
              img={processfive}
              extra="Our probabilistic quality assessments and tests help us to understand the market, product, and audience. This is what makes us stand out. Thus, you rest assured of your success when choosing us."
              detail="Revisions are natural. We constantly revise and retest the products to achieve the best version of them."
            />
            <ProcessCardRight
              num="06"
              title="Delivery"
              img={processsix}
              extra="Punctuality is our promise. We deliver the products as provisional product versions as and when the work takes place. Further, we deliver the complete package with work files, source codes, and licenses as agreed while the closure takes place. We make sure that we provide these on time, without any hassles."
              detail="Smooth workflows, no miscommunications, and punctuality are the key indicators of our success."
            />
            <ProcessCard
              num="07"
              title="Support and Maintenance"
              detail="We power you and your products forever. That's the promise we make."
              extra="Some businesses let go of their clients after the completion of payment, but not Zevo. These businesses lack vision and will fail at being sustainable. At Zevo, we are always approachable for any assistance you need on your product. We guarantee you."
              img={processseven}
            />
          </div>
        </div>

        <div className="team">
          <p className="block-title">meet our crew</p>
          <p>
            Our core crew is the backbone of our success. Our stability in the
            market is solely accredited to them. Herein are their designations
            in line with their contributions. We ensure that our crew strives
            towards excellence and customer satisfaction. At Zevo, we are not
            only a crew, we are a family.
          </p>
          <div className="person-card">
            <PersonCard
              title="Zero aka Sam"
              work="Founder, Chairman"
              src={person1}
              link="https://www.linkedin.com/in/zeroakasam/"
              tweet="https://twitter.com/zeroakasam"
            />
            <PersonCard
              title="Harsh Vardhan Singh"
              work="Founder, Chief Executive Officer"
              src={person2}
              link="https://www.linkedin.com/in/harsh2569/"
              tweet="https://twitter.com/Harsh2569"
            />
            <PersonCard
              title="Bharat Raj"
              work="Founder, Chief Technical Officer"
              src={person3}
            />
          </div>
          <div className="staff-card">
            <StaffCard
              title="Hansraj"
              work="Senior UI.UX Designer"
              src={person4}
            />
            <StaffCard
              title="Sam Raj"
              work="Principal architect & strategist"
              src={person5}
            />
            <StaffCard
              title="N Arunachalam"
              work="Senior frontend engineer"
              src={person6}
            />
            <StaffCard
              title="Bharat Raj"
              work="Senior Blockchain architect"
              src={person7}
            />
            <StaffCard
              title="J Arunachalam"
              work="Senior Blockchain engineer"
              src={person8}
            />
            <StaffCard
              title="Vimal Raj"
              work="Senior Backend Engineer"
              src={person9}
            />
            <StaffCard
              title="Jaisurya Narayanan"
              work="Senior Backend Engineer"
              src={person10}
            />
            <StaffCard
              title="Harsh Vardhan Singh"
              work="Product Developer & Manager"
              src={person11}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

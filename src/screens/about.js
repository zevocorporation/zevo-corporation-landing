import React from "react";
import { Link } from "react-router-dom";

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
import story from "../assets/images/story.svg";
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
            title="We are independent Techno-artists crew"
            page="about"
          />
        </div>

        <div className="story">
          <div>
            <p className="block-title">and this is our story...</p>
            <p>
              Crew Zevo's story commenced, from it's inception in 2017, when two
              colleagues from Madras Christian College, Chennai and a colleague
              from American college, madurai intercepted with similar aligned
              mission of kickstarting their careers as entrepreneurs in the
              Information Technology Industry. Unfortunately, the trio with high
              skills had less demand as of the crowd and blind rush in the
              centralized space, and they were at the verge of giving up the
              mission for their economic survival. Post, attending various
              campus interviews, the aptitudes, and quantitative assessments
              failed them, in getting a job as well. Meanwhile, failing in
              various other attempts of establishing a startup parallelly in
              various industries, finally they had a blackbook of secrets which
              comprised of their experiences and failures. A day, they decided
              to sit together and analyse where things went wrong. They barely
              had any idea, but to their suprise something revoke their spirits
              to start up 'ZEVO', meaning a new experience, again. But, this
              time it wasn't from scratch but of from the experiences they
              gained of past failures, and the demand they figured out in
              decentralized space which became the secret ingredient of crew
              zevo's success, which your eyes are witnessing now, in the moment.
              And that's how we grew from a crew, otherwise a family of three to
              eight within a clocking revenue of 12 Lakh in 3 months, since the
              crew's reappearance in January, 2021.
            </p>
            <Link to="/contactus">
              <button>Have a project idea? Get in touch</button>
            </Link>
          </div>
          <div className="video">
            <img src={story} alt="story" />
          </div>
        </div>

        <div className="process">
          <p className="block-title">The process we follow</p>
          <p>
            Understand how we understand you and that's where the trust and
            power to succeed mutually comes in.
          </p>
          <div className="process-card-container">
            <ProcessCard
              num="01"
              title="Requirements"
              img={process1}
              detail="We analyse and encompass tasks determining 
              the demands and conditions to strategize the workflows, reduce cost, timefreames for new or altered product, taking 
              account of the possibly conflicts of the various stakeholder decisions and amendments"
              extra="Strategized workflows, multidirectional communication channels and effective build approaches is our core principle"
            />
            <ProcessCardRight
              num="02"
              title="DOCUMENTATION"
              img={processtwo}
              extra="Documentation commences sincethe architechting phase and continues throughout the design, development cycles and delivery which become the pre-requisites for case studies and post analysis of the cycle"
              detail="Documentations, becomes the asset of understanding about the product and it's value propositions, for a sustainable penetration"
            />
            <ProcessCard
              num="03"
              title="UI & UX Design"
              img={processthree}
              extra="Visual designs play vital role, psychologically to understand the product, market and connect to the people with right buying power, access their comforts and establish a seamless userflow"
              detail="We take you through a visual journey with our wireframes, High Fidelity prototypes to understand the product in a visual approach and solidify the idea and mission"
            />
            <ProcessCardRight
              num="04"
              title="handoff & development"
              detail="Dependencies, miscommunications and opaque workflows are the barrier for an effective design and development cycle."
              extra="We deliver artifacts on each milestone accomplishment, seamlessly for the development teams, marketing teams and product teams to carry their workflows without dependencies"
              img={processfour}
            />
            <ProcessCard
              num="05"
              title="ACCEPTANCE & TESTING"
              img={processfive}
              extra="Our probabilistic quality assessments, tests to understand the market, product and audience is what makes us stand out of crowd in the market, and entitles us to be the success probabiliy finders for your product"
              detail="Revisions are natural, and we consistently revise and test the products to achieve the best version of it until the acceptance is arrived, and the package is delivered"
            />
            <ProcessCardRight
              num="06"
              title="Delivery"
              img={processsix}
              extra="Punctuality is our promise and we deliver the demands ontime, as interim product versions on the go and complete package with workfiles, source codes and license as agreed, while the closure"
              detail="Smooth workflows, zero miscommunications, ontime updates, and deliveries are the key indicators for our success in the market"
            />
            <ProcessCard
              num="07"
              title="Support and Maintenance"
              detail="We power you and your products forever and that's the promise we make at a cost of our understandings and alignment in the journey"
              extra="Businesses letting their clients, midway, post the payment lack vision and barely they become sustainable in time"
              img={processseven}
            />
          </div>
        </div>

        <div className="team">
          <p className="block-title">meet our crew</p>
          <p>
            Our core crew, is the backbone of our success and stability in the
            market and client satisfactions and hence we accredit them with
            designations herein, as of their active contributions and well
            conducts abiding with the community's policies and standards.
          </p>
          <div className="person-card">
            <PersonCard
              title="Zero aka Sam"
              work="Founder, Chairman"
              src={person1}
            />
            <PersonCard
              title="Harsh Vardhan Singh"
              work="Founder, Chief Executive Officer"
              src={person2}
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

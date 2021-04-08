import React from "react";
import { Link } from 'react-router-dom'

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
import aboutImg from "../assets/images/about.png";
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
import processtwo from '../assets/images/two.png'
import processthree from '../assets/images/three.png'
import processfour from '../assets/images/four.png'
import processfive from '../assets/images/five.png'
import processsix from '../assets/images/six.png'
import processseven from '../assets/images/seven.png'

const About = () => {

  return (
    <>
      <div className="about">
        <div className="about-landing">
          <img src={aboutImg} alt="about" className="bg-img" />
          <Header />
          <HeroCenter title="We are digital storytellers" page="about" />
        </div>

        <div className="story">
          <div>
            <p className="block-title">and this is our story...</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              purus fermentum, turpis eget sapien. Mauris est etiam enim
              pulvinar purus id. Libero iaculis nisi diam fusce eget. Pretium,
              erat quis vitae, orci interdum ante. Phasellus est leo congue
              purus tempus aliquam morbi. Libero ornare arcu diam iaculis
              vulputate vel facilisis aliquam faucibus.
            </p>
           <Link to="/contactus"><button>Have a project idea? Get in touch</button></Link>
          </div>
          <div className="video" >
            <img src={story} alt="story" />
          </div>
        </div>

        <div className="process">
          <p className="block-title">The process we follow</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            purus fermentum, turpis eget sapien. Mauris est etiam enim pulvinar
            purus id. Libero iaculis nisi diam fuss.
          </p>
          <div className="process-card-container">
            <ProcessCard num="01" title="Requirements" img={process1} />
            <ProcessCardRight num="02" title="DOCUMENTATION" img={processtwo} />
            <ProcessCard num="03" title="UI & UX Design" img={processthree} />
            <ProcessCardRight
              num="04"
              title="handoff & development"
              img={processfour}
            />
            <ProcessCard num="05" title="ACCEPTANCE & TESTING" img={processfive} />
            <ProcessCardRight num="06" title="Delivery" img={processsix} />
            <ProcessCard
              num="07"
              title="Support and Maintenance"
              img={processseven}
            />
          </div>
        </div>

        <div className="team">
          <p className="block-title">meet our team</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            purus fermentum, turpis eget sapien. Mauris est etiam enim pulvinar
            purus id. Libero iaculis nisi diam fuss.
          </p>
          <div className="person-card">
            <PersonCard
              title="Sam Raj"
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
              work="Senior FrontEnd Developer"
              src={person5}
            />
            <StaffCard
              title="N Arunachalam"
              work="Senior FrontEnd Developer"
              src={person6}
            />
            <StaffCard
              title="Bharat Raj"
              work="Senior BlockChain Developer"
              src={person7}
            />
            <StaffCard
              title="J Arunachalam"
              work="Senior BlockChain Developer"
              src={person8}
            />
            <StaffCard
              title="Vimal Raj"
              work="Senior BackEnd Developer"
              src={person9}
            />
            <StaffCard
              title="Jaisurya Narayanan"
              work="Senior BackEnd Developer"
              src={person10}
            />
            <StaffCard
              title="Harsh Vardhan Singh"
              work="HR Head"
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

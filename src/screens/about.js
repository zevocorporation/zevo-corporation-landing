import React,{ useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from '../patterns/header'
import Footer from '../patterns/footer'
import { HeroCenter } from '../patterns/hero'
import { PersonCard, StaffCard, ProcessCard, ProcessCardRight } from '../patterns/card'

//importing styles
import '../styles/screens/about.css'

//importing media assets
import aboutImg from '../assets/images/about.png'
import person1 from '../assets/cards/person1.svg'
import person2 from '../assets/cards/person2.svg'
import person3 from '../assets/cards/person3.svg'
import process1 from '../assets/cards/process1.svg'
import story from '../assets/images/story.svg'

const About = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    return (
        <>
            <div className="about">
                <div className="about-landing">
                    <img src={aboutImg} alt="about" className="bg-img" />
                    <Header />
                    <HeroCenter title="We are digital storytellers" page="about" />
                </div>

                <div className="story" >
                    <div data-aos="zoom-out">
                        <p className="block-title">and this is our story...</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mattis purus fermentum, turpis eget sapien. Mauris est 
                            etiam enim pulvinar purus id. Libero iaculis nisi diam 
                            fusce eget. Pretium, erat quis vitae, orci interdum ante.
                            Phasellus est leo congue purus tempus aliquam morbi.
                            Libero ornare arcu diam iaculis vulputate vel facilisis 
                            aliquam faucibus.
                        </p>
                        <button>Have a project idea?  Get in touch</button>
                    </div>
                    <div className="video" data-aos="zoom-in">
                        <img src={story} alt="story" />
                    </div>
                </div>

                <div className="process">
                    <p className="block-title">The process we follow</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Mattis purus fermentum, turpis eget sapien. Mauris est 
                       etiam enim pulvinar purus id. Libero iaculis nisi diam fuss. 
                    </p>
                    <div className="process-card-container">
                        <ProcessCard num="01" title="Requirements" img={process1} />
                        <ProcessCardRight  num="02" title="DOCUMENTATION"  img={process1} />
                        <ProcessCard num="03" title="UI & UX Design"  img={process1} />
                        <ProcessCardRight  num="04" title="handoff & development"  img={process1}  />
                        <ProcessCard num="05" title="ACCEPTANCE & TESTING"  img={process1} />
                        <ProcessCardRight  num="06" title="Delivery"  img={process1} />
                        <ProcessCard num="07" title="Support and Maintenance"  img={process1} />
                    </div>
                </div>

                <div className="team">
                    <p className="block-title">meet our team</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Mattis purus fermentum, turpis eget sapien. Mauris est 
                       etiam enim pulvinar purus id. Libero iaculis nisi diam fuss.
                    </p>
                    <div className="person-card">
                        <PersonCard title="Courtney Henry" work="Founder, Chief Executive Officer" src={person1} />
                        <PersonCard title="Kathryn Murphy" work="Chief Technical Officer" src={person2} />
                        <PersonCard title="Darrell Steward" work="Cheif Design Officer" src={person3} />
                    </div>
                    <div className="staff-card">
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                        <StaffCard title="Darlene Robertson" work="Senior Developer" src={person1} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About

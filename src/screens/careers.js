import React ,{ useEffect } from 'react'

//Importing animation
import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from '../patterns/header'
import { HeroCareer } from '../patterns/hero'
import { CareerCard } from '../patterns/card'
import Footer from '../patterns/footer'

import { jobs } from '../data/job'

//importing styles
import '../styles/screens/careers.css'

//importing media assets
import down from '../assets/icons/down.svg'
import careerImg from '../assets/images/careers.png'
import frame1 from '../assets/cards/careercard1.svg'
import frame2 from '../assets/cards/careercard2.svg'
import frame3 from '../assets/cards/careercard3.svg'
import frame4 from '../assets/cards/careercard4.svg'
import workplace from '../assets/cards/workplace.svg'
import workmatters from '../assets/cards/workmatters.svg'
import vacation from '../assets/cards/vacation.svg'
import meals from '../assets/cards/meals.svg'
import health from '../assets/cards/health.svg'
import community from '../assets/cards/community.svg'

const Careers = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    return (
        <>
            <div className="career">
                <div className="career-landing">
                    <img src={careerImg} alt="career" className="bg-img" />
                    <Header />
                    <HeroCareer />
                </div>

                <div className="life">
                    <div className="block-left" data-aos="fade-up-left">
                        <p className="block-title">Life At Zevo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Mattis purus fermentum, turpis eget sapien. 
                           Mauris est etiam enim pulvinar purus id. Libero 
                           iaculis nisi diam fusce eget. Pretium, erat quis
                           vitae, orci interdum ante. Phasellus est leo congue
                           purus tempus aliquam morbi. Libero ornare arcu diam
                           iaculis vulputate vel facilisis aliquam faucibus. 
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Mattis purus fermentum, turpis eget sapien. 
                           Mauris est etiam enim pulvinar purus id. Libero 
                           iaculis nisi diam fusce eget. Pretium, erat quis
                           vitae, orci interdum ante. Phasellus est leo congue
                           purus tempus aliquam morbi. Libero ornare arcu diam
                           iaculis vulputate vel facilisis aliquam faucibus. 
                        </p>
                        <button className="secondary-btn">See open roles</button>
                    </div>
                    <div className="block-right" data-aos="zoom-in-right">
                        <div className="image-block-one">
                            <div>
                                <img src={frame1} alt="frame1" />
                            </div>
                            <div>
                                <img src={frame2} alt="frame2"  />
                            </div>
                        </div>
                        <div className="image-block-two">
                            <div>
                                <img src={frame3} alt="frame3"  />
                            </div>
                            <div>
                                <img src={frame4} alt="frame4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="values">
                    <p className="block-title">Our Values</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Mattis purus fermentum, turpis eget sapien. Mauris est 
                       etiam enim pulvinar purus id. Libero iaculis nisi diam fuss. 
                    </p>
                    <div className="wrapper">
                        <CareerCard title="Your work matters" src={workmatters} />
                        <CareerCard title="Flexible vacation policy" src={vacation} />
                        <CareerCard title="health & wellness" src={health} />
                        <CareerCard title="beautiful workplace" src={workplace} />
                        <CareerCard title="catered meals" src={meals} />
                        <CareerCard title="strong community" src={community} />
                    </div>
                </div>

                <div className="job">
                    <p className="block-title">explore job openings</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu lorem.</p>
                    <table data-aos="zoom-out">
                        <tr>
                            <th>Job title</th>
                            <th>Department</th>
                            <th>Experience</th>
                            <th>Location</th>
                        </tr>
                        {
                            jobs.map((job) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{job.title}</td>
                                            <td>{job.dep}</td>
                                            <td>{job.exp}</td>
                                            <td>{job.location}</td>
                                            <td style={{display:'flex',alignItems:'center'}}><span>APPLY NOW </span><img src={down} alt="down-arr" /></td>
                                        </tr>
                                    </>
                                 )
                            })
                        }
                    </table>
                </div>

            </div>
            <div className="line"><p></p></div>
            <Footer />
        </>
    )
}

export default Careers

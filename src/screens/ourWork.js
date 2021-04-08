import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../patterns/header'
import { HeroCenter } from '../patterns/hero'
import { WorkCard } from '../patterns/card'
import Footer from '../patterns/footer'

//importing styles
import '../styles/screens/ourwork.css'

//importing media assets
import ourworkImg from '../assets/images/ourwork.png'
import idea from '../assets/images/idea.svg'
import imac from '../assets/cards/imac.jpg'
import macbook from '../assets/cards/macbook.svg'
import auli from '../assets/cards/auli.svg'
import imac2 from '../assets/cards/imac2.svg'
import bluedot from "../assets/images/bluedot.svg";
import greendot from "../assets/images/greendot.svg";
import yellowdot from "../assets/images/yellowdot.svg";
import metrono from '../assets/pdf/metrono.pdf'
import thenftway from '../assets/pdf/thenftway.pdf'
import preet from '../assets/pdf/preet.pdf'
import ngauge from '../assets/pdf/ngauge.pdf'

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
                        title="Preet interior design" 
                        work="UI UX Design & Development" 
                        src={macbook} 
                        dot={yellowdot}
                        pdf={preet}
                        bgcolor="#EFCD3D" 
                    />
                   <WorkCard 
                        title="Metrono apps" 
                        work="UI UX Design" 
                        src={imac2} 
                        dot={bluedot}
                        pdf={metrono}
                        bgcolor="#EFCD3D" 
                    />
                    </div>
                    <div className="block-two">
                    <WorkCard 
                        title="N gauge app" 
                        work="UI UX Design & Development" 
                        src={imac} 
                        dot={greendot}
                        pdf={ngauge}
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
                    {/* <div className="block-one">
                    <WorkCard 
                        title="KODO AI Website" 
                        work="UI UX Design & Development" 
                        src={kodoai}
                        dot={bluedot} 
                        bgcolor="#3079AF" 
                    />
                   <WorkCard 
                        title="Metrono apps" 
                        work="UI UX Design" 
                        src={imac2} 
                        dot={yellowdot}
                        pdf={metrono}
                        bgcolor="#EFCD3D" 
                    />
                    </div> */}

                    <div className="work-block">
                        <div className="block-left">
                            <p className="block-title">Like</p>
                            <p className="block-title">What</p>
                            <p className="block-title">You See?</p>
                            <p style={{margin:'2em 0',color:'#f7f7f7',lineHeight:'25px'}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                               justo morbi turpis ultricies velit sit. At euismod velit
                               congue eget molestie. Dui mattis nunc varius facilisi 
                               tempus sed sit ultricies. Purus vel neque dolor at. 
                            </p>
                            <Link to="/contactus"><button className="primary-btn">Tell us your project idea</button></Link>
                        </div>
                        <div className="block-right">
                            <img src={idea} alt="idea" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OurWork

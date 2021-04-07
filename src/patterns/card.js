import React,{ useEffect } from 'react'

//Importing animation
import Aos from 'aos'
import 'aos/dist/aos.css'

//importing styles
import '../styles/patterns/card.css'

//importing media assets
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import leftarrow from '../assets/icons/left-arrow.svg'
import rightarrow from '../assets/icons/right-arrow.svg'
import mobrightarrow from '../assets/icons/mobrightarrow.svg'

import { Link } from 'react-router-dom'

export const Card = ({name,src}) => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    return (
        <div className="card" data-aos="fade-up">
            <p className="card-title">{name}</p>
            <p style={{color:'#f7f7f7',lineHeight:'25px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Viverra netus consectetur donec diam, 
                et volutpat fames enim. 
            </p>
            <img src={src} alt="card" className="card-image" />
        </div>
    )
}

export const CareerCard = ({ title, src }) => {
    return (
        <div className="careerCard" data-aos="fade-up">
            <img src={src} alt="card" />
            <p className="card-title">{title}</p>
            <p style={{color:'#f7f7f7',lineHeight:'25px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices in amet lacus, venenatis, sit eget placerat.
                Ac sit viverra in.
            </p>
        </div>
    )
}

export const PersonCard = ({ title, src, work}) => {
    return (
        <div className="PersonCard">
            <div className="block-top">
                <img src={src} alt="person"  />
            </div>
            <div className="block-bottom">
                <p className="card-title">{title}</p>
                <p style={{color:'#f7f7f7'}}>{work}</p>
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    )
}

export const StaffCard = ({ title, src, work}) => {
    return (
        <div className="PersonCard">
            <div className="block-top">
                <img src={src} alt="person"  />
            </div>
            <div className="block-bottom">
                <p className="card-title">{title}</p>
                <p style={{color:'#f7f7f7'}}>{work}</p>
            </div>
        </div>
    )
}

export const ProcessCard = ({ title, num, img }) => {
    return (
        <div className="process-card" data-aos="fade-up">
            <div className="block-left">
                <span className="number">{num}</span>
                <p className="card-title">{title}</p>
                <p style={{color:'#f7f7f7',lineHeight:'25px'}} className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Viverra netus consectetur donec diam, et 
                    volutpat fames enim. 
                </p>
                <img src={img} alt="process" className="process-img" />
            </div>
            <div className="block-right">
                <p style={{color:'#f7f7f7',lineHeight:'25px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mattis purus fermentum, turpis eget sapien. Mauris est 
                    etiam enim pulvinar purus id. Libero iaculis nisi diam fuss. 
                </p>
            </div>
           <img src={rightarrow} alt="rightarrow" className="right-arrow" />
           <img src={mobrightarrow} alt="rightarrow" className="mob-right-arrow" />
        </div>
        
    )
}

export const ProcessCardRight = ({ title, num, img }) => {
    return (
        <div className="process-card-two" data-aos="fade-up">
            <div className="block-left">
                <p style={{color:'#f7f7f7',lineHeight:'25px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mattis purus fermentum, turpis eget sapien. Mauris est 
                    etiam enim pulvinar purus id. Libero iaculis nisi diam fuss. 
                </p>
            </div>
            <div className="block-right">
                <span className="number">{num}</span>
                <p className="card-title">{title}</p>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Viverra netus consectetur donec diam, et 
                    volutpat fames enim. 
                </p>
                <img src={img} alt="process" className="process-img" />
            </div>
            <img src={leftarrow} alt="leftarrow" className="left-arrow" />
            <img src={mobrightarrow} alt="rightarrow" className="mob-left-arrow" />
        </div>
        
    )
}

export const WorkCard = ({ title, work, src, bgcolor, fcolor}) => {
    return (
        <div className="work-card">
            <p style={{color:'#f7f7f7',lineHeight:'25px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellentesque ipsum et commodo aliquet imperdiet 
                amet.  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit.
            </p>
           <p 
                className="card-link" 
                style={{background:`${bgcolor}`,color:`${fcolor}`}}
            >
                <Link to="/" style={{color:`${fcolor}`}}>
                    Case study
                </Link>
            </p>
            <div className="workcard-image">
                <img src={src} alt="brand" />
            </div>
            <p className="title">{title}</p>
            <p style={{fontSize:14,color:'#f7f7f7'}}>{work}</p>
        </div>
    )
}
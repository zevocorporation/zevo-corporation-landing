import React from 'react'
import { Link } from 'react-router-dom'

//importing styles
import '../styles/patterns/hero.css'

export const Hero = () => {
    return (
        <div className="hero">
            <div className="layer-one">
                <span>Thing</span>
                <span>Design</span>
                <span>Build</span>
            </div>
            <p className="title">Bring your amazing ideas to life.</p>
            <p className="text">Zevo Corporation is an experienced and passionate group of
                designers, developers, project managers, writers and artists.
                The general purpose of Zevo Corporation is to develop and
                promote advanced information technologies for multi-user operation.
            </p>
            <div className="layer-two">
                <button>Get in touch</button>
                <Link to="/our_work">See our work</Link>
            </div>
        </div>
    )
}

export const HeroCenter = ({ title, page }) => {
    return (
        <div className="hero-center">
            <p className="hero-title">{title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut eu sociis at augue id consequat nec. Scelerisque 
                quis tortor malesuada mattis. At sapien ipsum blandit 
                ornare sit fames viverra. Proin sed malesuada ornare eu 
                sagittis eu. Commodo morbi sed augue dui ornare varius 
                dignissim. Neque mauris.
            </p>
            <div>
                <button>Have a project idea?  Get in touch</button>
               {
                   page==="about" ? ( <Link>See our Work</Link>):null
               }
            </div>
        </div>
    )
}

export const HeroCareer = () => {
    return (
        <div className="hero-career">
             <p className="hero-title">We at zevo Navigate Further, Together</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ullamcorper tincidunt mauris dignissim 
                  malesuada mollis purus ac. At mi massa imperdiet 
                  scelerisque morbi vel. Eget in et vitae consectetur 
                  arcu, felis ipsum semper venenatis. Sed proin nec
                 libero ut dis dictumst. Lobortis.
            </p>
            <div className="block-input">
                <div>
                    <p>Job title</p>
                    <input type="text" placeholder="Enter title" />
                </div>
                <div>
                    <p>Skill</p>
                    <input type="text" placeholder="Enter Skill" />
                </div>
                <button>Search jobs</button>
            </div>
        </div>
    )
}
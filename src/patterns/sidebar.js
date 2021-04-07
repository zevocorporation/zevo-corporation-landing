import React from 'react'

import { Link } from 'react-router-dom'

//importing styles
import '../styles/patterns/sidebar.css'

//Importing logo
import logo from '../assets/images/logo.png'
import hire from '../assets/icons/hire.svg'
import close from '../assets/icons/close.svg'

const Sidebar = ({ toggleSidebar }) => {
    return (
        <div className="sidebar">
            <span className="close" onClick={toggleSidebar}>
                <img src={close} alt="close" style={{width:24}} />
            </span>

            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>

            <div className="navbar">
               <Link to="/">Home</Link>
               <Link to="/about">About us</Link>
               <Link to="/our_work">Our work</Link>
               <Link to="/careers" style={{display:'flex',alignItems:'center'}}>
                   <span style={{marginRight:10}}>Careers</span>
                   <img src={hire} alt="we are hiring" />
                </Link>
               <Link to="/contactus">Contact us</Link>
            </div>

            <div className="sidebar-footer">
                <div>
                    <Link to="/">Terms & condition</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Disclaimer</Link>
                </div>
                <p>© 2020 ZEVO CORPORATION. All rights reserved</p>
            </div>
        </div>  
    )
}

export default Sidebar

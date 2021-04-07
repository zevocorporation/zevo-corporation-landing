import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Sidebar from './sidebar'

//importing styles
import '../styles/patterns/header.css'

//importing media assets
import logo from '../assets/images/logo.png'
import menu from '../assets/icons/menu.svg'

const Header = () => {

    const [sidebarActive,setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive)
    }

    return (
        <>
        <div className="header">
           <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
           <nav>
               <Link to="/about">About us</Link>
               <Link to="/our_work">Our work</Link>
               <Link to="/careers">Careers</Link>
               <Link to="/contactus">Contact us</Link>
           </nav>
           <div className="menu" onClick={toggleSidebar}>
               <img src={menu} alt="menu" />
            </div>
            {
                sidebarActive ? <Sidebar toggleSidebar={toggleSidebar} /> : null
            }
        </div>
        </>
    )
}

export default Header

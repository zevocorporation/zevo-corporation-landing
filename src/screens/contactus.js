import React from 'react'

import Contact from '../patterns/contact'
import Footer from '../patterns/footer'
import Header from '../patterns/header'

//importing styles
import '../styles/screens/contactus.css'

const Contactus = () => {
    return (
        <>
        <div style={{background:'#141414'}} className="contactus">
            <div className="contact-header">
                <Header />
            </div>
            <Contact />
        </div>
        <Footer />
        </>
    )
}

export default Contactus

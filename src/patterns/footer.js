import React,{ useEffect } from 'react'

//Importing animation
import Aos from 'aos'
import 'aos/dist/aos.css'

//importing styles
import '../styles/patterns/footer.css'

//importing media assets
import logo from '../assets/images/logo.png'
import mail from '../assets/icons/mail.svg'
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/location.svg'

//importing social media icons
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    return (
        <div className="footer">
            <div className="footer-block">
                <div className="block-one">
                    <img  
                        src={logo} alt="logo" 
                        className="logo" 
                        style={{marginBottom:'1em'}} 
                        data-aos="flip-right" 
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Condimentum vitae elit blandit massa, habitasse ornare.
                       Penatibus eget volutpat facilisi cursus nunc, feugiat id at. 
                    </p>
                    <div className="social-icons" data-aos="fade-up">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
                <div className="block-two">
                    <p>Quick links</p>
                    <ul>
                        <li>About us</li>
                        <li>Blogs</li>
                        <li>Our work</li>
                        <li>FAQs</li>
                        <li>Careers 
                            <span 
                                style={{color:'#6E7DFF',fontSize:14,marginLeft:10}}
                            > 
                                We are hiring
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="block-three">
                    <p>Services</p>
                    <ul>
                        <li>UI & UX Designing</li>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>Bot Development</li>
                    </ul>
                </div>
                <div className="block-four">
                    <p>Reach us</p>
                    <ul>
                        <li>
                            <img src={mail} alt="mail" />
                            <span>hello@zevocorp.in</span>
                        </li>
                        <li>
                            <img src={phone} alt="phone" />
                            <span>+91 8879654123</span>
                        </li>
                        <li>
                            <img src={location} alt="location" />
                            <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-end">
                <p style={{textAlign:'center'}}>© 2020 ZEVO CORPORATION. All rights reserved</p>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Disclaimer</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

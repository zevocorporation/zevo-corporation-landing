import React from "react";
import { Link } from "react-router-dom";

//importing styles
import "../styles/patterns/footer.css";

//importing media assets
import logo from "../assets/images/logo.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";

//importing social media icons
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-block">
        <div className="block-one">
          <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ marginBottom: "1em" }}
          /></Link>
          <p>
            F2 Plot 14, Vignesh Athreya Apartment, santhamma street, CST Nagar,
            East Tambaram, Chennai, INDIA - 600 059.
          </p>
          <div className="social-icons">
            <img 
              src={facebook} 
              alt="facebook" 
              onClick={
                () => window.location.replace("https://www.facebook.com/Zevo-Corporation-349706043090666/")} 
            />
            <img 
              src={instagram} 
              alt="instagram"
              onClick={
                () => window.location.replace("https://www.instagram.com/zevo_corporation/")} 
            />
            <img 
              src={twitter} 
              alt="twitter" 
              onClick={
                () => window.location.replace("https://twitter.com/ZevoUx?s=08")} 
            />
            <img 
              src={linkedin} 
              alt="linkedin"
              onClick={() => window.location.replace("https://www.linkedin.com/company/zevo-corporation")} 
            />
          </div>
        </div>
        <div className="block-two">
          <p>Quick links</p>
          <ul>
            <li><Link to="about">About us</Link></li>
            {/* <li>Blogs</li> */}
            <li><Link to="/our_work">Our work</Link></li>
            {/* <li>FAQs</li> */}
            <li>
              <Link to="careers">
              Careers
              <span style={{ color: "#6E7DFF", fontSize: 14, marginLeft: 10 }}>
                We are hiring
              </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="block-three">
          <p>Services</p>
          <ul>
            <li>Product development</li>
            <li>Scaling and architecting</li>
            <li>Designing & Revamping</li>
            <li>Application development</li>
          </ul>
        </div>
        <div className="block-four">
          <p>Reach us</p>
          <ul>
            <li>
              <img src={mail} alt="mail" />
              <span>business@zevocorp.in</span>
            </li>
            <li>
              <img src={phone} alt="phone" />
              <span>+91 9696485604</span>
            </li>
            <li>
              <img src={location} alt="location" />
              <span>Chennai, INDIA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p style={{ textAlign: "center" }}>
          © 2020 ZEVO CORPORATION. All rights reserved
        </p>
        <div>
          <Link to="/terms_and_condition">Terms & Conditions</Link>
          <Link to="/privacy_policy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

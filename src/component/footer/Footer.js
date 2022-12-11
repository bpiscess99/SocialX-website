import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer id='footer'>

      <div className="footer container">
       
       <div className="footer-box" data-aos="fade-right">
        <h4>Useful Links</h4>
        <div className="footer-links">
         <a href="#">&bull; Support</a>
         <a href="#">&bull; About</a>
         <a href="#">&bull; Learn</a>
         <a href="#">&bull; Hosting</a>
         <a href="#">&bull; Messenger</a>
        </div>
       </div>

       <div className="footer-box" data-aos="fade-up">
       <h4>Support</h4>
        <div className="footer-links">
         <a href="#">&bull; Support</a>
         <a href="#">&bull; About</a>
         <a href="#">&bull; Learn</a>
         <a href="#">&bull; Hosting</a>
         <a href="#">&bull; Messenger</a>
        </div>
       </div>

       <div className="footer-box" data-aos="fade-down">
          <h4>Contact</h4>
        <div className="footer-contact">
        
        <p>
          <FaMapMarkerAlt/> &nbsp; Address: United States
        </p>
        
        <p>
          <FaPhoneAlt/> &nbsp; Phone: +0015 155
        </p>

        <p>
         <FaFax/> &nbsp; Fax: +1364 565655   
        </p>

        <p>
         <FaEnvelope/> &nbsp; Email: www.socialx.com
        </p>
   
        <p>
          <FaGlobe/> &nbsp; Website: www.socialx.com
        </p>

        </div>
       </div>
       
       <div className="footer-box" data-aos="fade-left">
        <img src={logo} alt="logo"/>
        <p className='u-small-text'>
        &copy; Copyright 2022. SocialX.com
        </p>
       </div>
      
      </div>
      
    </footer>
  )
}

export default Footer

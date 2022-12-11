import React from 'react';
import './Subscribe.css';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Subscribe = () => {
  return (
    <section id='subscribe'>
      <div className="container subscribe" data-aos="fade-down">
        <h2>Subscribe Now!</h2>
        
        <form action="">
          <div className="form-control">
            <input type="text" placeholder='Enter your Email...' />
            <button>Subscribe</button>
          </div>
        </form>
        
        <div className="social-icons">
          
          <div className="social-icon">
          <TiSocialGooglePlus/>
          </div>

          <div className="social-icon">
          <FaFacebook/>
          </div>

          <div className="social-icon">
          <FaTwitter/>
          </div>
          
          <div className="social-icon">
          <FaInstagram/>
          </div>

          </div>       
      
      </div>
      
    </section>
  )
}

export default Subscribe

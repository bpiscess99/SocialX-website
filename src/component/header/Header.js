import React, { useEffect } from 'react';
import './Header.css';
import phoneHeader from '../../assets/phone-header-bg.png'
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import { BsMouse} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })  
  }, [])

  return (
    <section id='header'>
      <div className="header container">
        
        <div className="header-left" data-aos="fade-right">
         
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className='u-text-small u-text-light'>SocialX is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at architecto. Non in inventore possimus.</p>
        
        <div className="header-ct">
          <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
          <Button text={"How It Works"} btnClass={"btn-orange"} href={"#faq"}/>
        </div>

        </div>
        
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      
      </div>
      
      <div className="floating-icon">
        <a href="#features">
        <BsMouse color='#fff' size={25} className='mouse'/>
        </a>
      </div>
      
    </section>
  )
}

export default Header;

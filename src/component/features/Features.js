import React from 'react';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import './Features.css';
import phoneFeatures from '../../assets/phone-features.png';
import Feature from './Feature';
import { featureList } from './data.js';

const Features = () => {
  return (
    <section id='features'> 
    <div className="container features">
      
      <div className="u-title" data-aos="fade-down">
        <BsFillBookmarkStarFill color='orangered' size={30}/>
        <h2>Core Features</h2>
        <p className="u-text-small u-text-dark">
        SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod. Deserunt quam sequi molestias rerum non ducimus, sint quidem modi?
        </p>
      </div>

    <div className="features-content">
      
      <div className="features-left" data-aos="fade-right">
        <img src={phoneFeatures} alt="phone" />
      </div>

      <div className="features-right" data-aos="fade-left">
        {
          featureList.map((feature)=>(
            <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>

          ))
        }
      </div>

    </div>

    </div>
      
    </section>
  )
}

export default Features

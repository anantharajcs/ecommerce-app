import React from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import mainhero_img from '../../assets/mainhero.png'
import './Hero.css'
const Hero = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
        <div className="hero-container">
            <div className="hero-content">
            <h1>FASHION HUB</h1>
                <img src={mainhero_img} alt="" className="hero-img"/>
            </div>
            <div className="up-page" onClick={scrollToTop}><FaRegArrowAltCircleUp /></div>
        </div>
    </div>
  )
}

export default Hero

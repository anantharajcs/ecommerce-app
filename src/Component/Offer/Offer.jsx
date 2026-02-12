import React from 'react'
import offim_img from '../../assets/offim.jpeg'
import './Offer.css'

const Offer = () => {
  return (
    <div className='off-container'>
      <div className='off-content'>
          <div className="iamge-content"> 
          <img src={offim_img} alt="" className="offer-image"/>
          </div>
         <div className="left-content">
          <h1>30%</h1>
          <h3>Flat 30% OFF on New Arrivals</h3>
          <p>check your unique collection</p>
        </div>
      </div>
    </div>
  )
}

export default Offer;
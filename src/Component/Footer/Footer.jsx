import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import {BsInstagram, BsTwitterX  } from 'react-icons/bs'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-name">
            <h2>AIARA COLLECTIONS</h2>
          </div>
          <div className="footer-socials">
            <FaFacebook  className="footer-icons"/>
            <BsInstagram className="footer-icons"/>
            <BsTwitterX  className="footer-icons"/>
          </div>
        </div>
        <div className="copy">
          <p> Copyright © AIARA COLLECTION 2026. All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

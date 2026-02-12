import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import './Nabvar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../ShopContext/ShopContext';

const Navbar = () => {
  const {quantity} = useContext(ShopContext)
  return (
    <div>
      <div className="navbar">

          <div className="link">
              <ul>
                  <li>
                    <Link to="/"> HOME </Link>
                  </li>
                  <li>
                    <Link to="/productlist"> CLOTH </Link>
                  </li>
              </ul>
          </div>
          <div className="logo">
              <h2>AIRA COLLECTION</h2>
          </div>
          <Link to="/cart">
         <div className="nav-icon-wrapper">
         <BiCart className="nav-icon"/>
         <p className="nav-qyt">{quantity}</p>
         </div>
         </Link>
      </div>
    </div>
  )
}

export default Navbar

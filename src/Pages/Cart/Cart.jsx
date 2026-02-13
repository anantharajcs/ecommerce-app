import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Component/ShopContext/ShopContext'
import {FiTrash2} from 'react-icons/fi'
import CartDetails from './CartDetails'
import './cart.css'

const Cart = () => {
  const {cart,total,clearCart,quantity} = useContext(ShopContext)
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h1>items({quantity})</h1>
            <FiTrash2 onClick  = {clearCart} className="delete-btn"/>
          </div>
          <div className="cart-header">
              <span>Product</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
          </div>
          <div className="cart-detail">
            {
              cart.length > 0 ? (
                cart.map((item) => (
                  <CartDetails item={item} key={item.id}/>
                ))
              ):(
                <p>Cart is Empty</p>
              )
            }
          </div>
        </div>

        <div className="cart-right">
          <h1> Cart Summary </h1>
          <div className="summary-item">
            <span>Items</span>
            <span>{quantity}</span>
          </div>
          <div className="summary-item">
            <span>SubTotal</span>
            <span>{total}</span>
          </div>
          <div className="summary-item">
            <span>shipping free</span>
            <span>free</span>
          </div>
          <div className="summary-item">
            <span>Total Cost</span>
            <span>{total}</span>
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart

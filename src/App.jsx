import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Routes, Route  } from 'react-router-dom'
import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import ProductList from './Component/ProductList/ProductList'


const App = () => {
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

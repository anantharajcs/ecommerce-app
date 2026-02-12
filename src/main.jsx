import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './Component/ShopContext/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ecommerce-app/">
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

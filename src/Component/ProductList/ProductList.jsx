import React, { useContext, useState } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'
import './ProductList.css'

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext)
  const [category, setCategory] = useState('all')

  const filteredProducts = category === 'all' ? products : products.filter(item => item.category === category)

  return (
    <div className="product-list">
      <h2>OUR UNIQUE COLLECTION</h2>

      <div className="filter-buttons">
        <button onClick={() => setCategory ('all')}>All</button>
        <button onClick={() => setCategory('boys')}>Mens</button>
        <button onClick={() => setCategory('ladies')}>Womens</button>
        <button onClick={() => setCategory('baby boy')}>Boy Kids</button>
        <button onClick={() => setCategory('baby girl')}>Girl Kids</button>
      </div>

      <div className="product-display">
        {filteredProducts.map(product => (

          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image"/>
            </Link>
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            </div>
            <button className="add-button" onClick={() => addToCart(product, product.id)}>Add To Cart</button>
          </div>
          ))}
      </div>
    </div>
  )
}

export default ProductList

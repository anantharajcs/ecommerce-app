import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../Component/ShopContext/ShopContext'
import './ProductDetails.css'

const ProductDetails = () => {
  const { products, addToCart } = useContext(ShopContext)
  const { id } = useParams()

  const product = products.find(
    (item) => String(item.id) === String(id)
  )

  if (!product) {
    return <h2 style={{ textAlign: 'center' }}>Product not found</h2>
  }

  return (
    <div className="product-detail">
      <div className="details-left">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-right">
        <h3>{product.name}</h3>
        <p className="p-price">${product.price}</p>
        <p className="p-desc">{product.description}</p>

        <button onClick={() => addToCart(product, product.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails

import React from 'react'
import '../../assets/css/Product/CardProducts.css'
import Bread1 from './../../images/bread1.png'
import Bread2 from './../../images/Bread2.png'
import Bread3 from './../../images/Bread3.png'


const CardProducts = ({product}) => {
  return (
    <div className='CardProducts'>
      <img className='img-Product' src={`http://127.0.0.1:8000/products/${product.img}`} alt='image-product' />
      <h3 className='titre-products'> {product.name} </h3>
      <h2 className='price-products'> {product.price}£ </h2>
      <div className='line-products'>  </div>
      <button className='btn-products'> Add To Cart </button>
    </div>

  )
}

export default CardProducts
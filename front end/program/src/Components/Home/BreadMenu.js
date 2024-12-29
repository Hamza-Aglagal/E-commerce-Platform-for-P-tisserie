import React from 'react'
import '../../assets/css/home/BreadMenu.css'
import croissant1 from '../../images/croissant1.png'
import CardProducts from '../Products/CardProducts'

import { Link } from 'react-router-dom'
import GetProductHomeHook from '../../Hook/Products/get-product-home-hook'


const BreadMenu = () => {

  const [DataProductHome] = GetProductHomeHook()

  return (
    <div className='BreadMenu'>

      <div className='titre'>
        <img src={croissant1} alt='img' />
        <h1> Bread Menu </h1>
      </div>

      <div className='Product-Container'>
        {
          DataProductHome ? (
            DataProductHome.slice(0,4).map((item, index) =>
              <CardProducts key={index} product={item} />
            )
          ) : <h3 className='text-danger'>  There are no product ^_^  </h3>
        }

      </div>

      <div className='btn-moreProducts'>
        <Link to='products'>
          <button> See more </button>
        </Link>
      </div>

    </div>
  )
}

export default BreadMenu
import React from 'react'
import '../../assets/css/Product/SecondCardProduct.css'
import img from '../../images/Bread2.png'

import { BsFillCartFill } from 'react-icons/bs';
import AddToCartHook from '../../Hook/Cart/add-to-cart-hook';



const SecondCardProduct = ({product}) => {


    const [AddToCartHandel] = AddToCartHook(product.id)

    return (
        // <div className='SecondCardProduct'>
        //     <img className='img-Product' src={img} alt='image-product' />
        //     <h3 className='titre-products'> Homemade French </h3>
        //     <h2 className='price-products'> 3£ </h2>
        //     <div className='line-products'>  </div>
        //     <button className='btn-products'> Buy Now </button>
        // </div>
        <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={`http://127.0.0.1:8000/products/${product.img}`} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                           {product.name}
                        </h5>
                        <p>
                            {product.desc}
                        </p>
                        <div className="options">
                            <h6>
                                ${product.price}
                            </h6>
                            <a href="">
                                <BsFillCartFill onClick={AddToCartHandel} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondCardProduct
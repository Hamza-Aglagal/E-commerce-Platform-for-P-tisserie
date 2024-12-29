import React, { useEffect, useState } from 'react'
import RemoveCartHook from '../../Hook/Cart/remove-cart-hook'
import { useDispatch, useSelector } from 'react-redux'
import { AddQntToCart, UpdateQnt } from '../../Redux/Actions/CartAction'
import CreateLigneOrderHook from '../../Hook/order/creat-ligne-order-hook'
import { NewLigneOrder } from '../../Redux/Actions/LigneOrderAction'

const CardCart = ({ Product, setPriceTotale }) => {

    const dispatch = useDispatch()

    //  hooks 
    const [RemoveCartHandel] = RemoveCartHook(Product.id)


    const [Qnt, setQnt] = useState(Product.product_Qnt)

    useEffect(() => {
        setPriceTotale(prev => prev + (Qnt * Product.product.price))
    }, [])

    // useEffect(() => {
    //     setPriceTotale(prev => prev +  Product.product.price)
    // }, [Qnt])


    // ------------------------------

    const OnPlus = (card_id) => {
        dispatch(UpdateQnt(card_id, { scope: 'inc' }))
        setQnt(state => state + 1)
        setPriceTotale(prev => prev +  Product.product.price)

    }

    const OnMoins = (card_id) => {
        dispatch(UpdateQnt(card_id, { scope: 'dec' }))
        setQnt(state => state - 1)
        setPriceTotale(prev => prev - Product.product.price)

    }

    // ------------------------------








    return (
        <div>
            <hr className="my-4" />
            <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={`http://127.0.0.1:8000/products/${Product.product.img}`} className="img-fluid rounded-3" alt="gateau" />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted"> {Product.product.name} </h6>
                    <h6 className="text-black mb-0"> {Product.product.category} </h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button onClick={() => OnMoins(Product.id)} className="btn btn-link px-2">
                        <i className="fas fa-minus"></i>
                    </button>

                    <input value={Qnt} onChange={(e) => console.log()} id="form1" min="0" name="quantity" type="number" className="form-control" style={{ width: '50px' }} />

                    <button onClick={() => OnPlus(Product.id)} className="btn btn-link px-2"  >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0">€ {Qnt * Product.product.price} </h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a onClick={RemoveCartHandel} href="" className="text-muted">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardCart
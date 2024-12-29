import React, { useEffect, useState } from 'react'
import '../../assets/css/cart/Cart.css'
import CardCart from '../../Components/Cart/CardCart'

import img from '../../images/bread1.png'
import ShowCartHook from '../../Hook/Cart/show-cart-hook'
import { useDispatch, useSelector } from 'react-redux'


const CartPage = () => {



    const [Loading, Cart ,Delivery ,setDelivery, GoBack, setTotalPriceAllPro, handelSubmit] = ShowCartHook()

    const ReloadNav = useSelector(state => state.CartRed.Reload)
    const [PriceTotale, setPriceTotale] = useState(0)


    useEffect(() => {
        setPriceTotale(0)
        setTotalPriceAllPro(PriceTotale)
    }, [ReloadNav])

    useEffect(() => {
        setTotalPriceAllPro(PriceTotale)
    }, [PriceTotale])


 

    return (
        <div>
            <section className="h-100 h-custom CartPage">
                <div className="container py-5 h-100" style={{ opacity: '.9' }}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{Cart ? Cart.cart.length : 0} items</h6>
                                                </div>

                                                {
                                                    // Cart ?
                                                    !Loading ? (
                                                        Cart.cart.map((item, index) =>
                                                            <CardCart key={index} Product={item} setPriceTotale={setPriceTotale} />
                                                        )
                                                    ) :
                                                        <div className="spinner-border" role="status" >
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    // :
                                                    //         <div className="spinner-border" role="status" >
                                                    //             <span className="sr-only">Loading...</span>
                                                    //         </div>
                                                }



                                                <div className="pt-5">
                                                    <h6 onClick={GoBack} className="mb-0"><a href="" className="text-body">
                                                        <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {Cart ? Cart.cart.length : 0} </h5>
                                                    <h5>€  {PriceTotale} </h5>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Shipping</h5>

                                                <div className="mb-4 pb-2">
                                                    <select value={Delivery} onChange={(e)=> setDelivery(e.target.value)} className="select">
                                                        <option value="Standard" >Standard-Delivery- MAD 5.00</option>
                                                        <option value="free">free shipping</option>
                                                    </select>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Give code</h5>

                                                <div className="mb-5">
                                                    <div className="">
                                                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                    </div>
                                                </div>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>€ {PriceTotale} </h5>
                                                </div>

                                                <button onClick={handelSubmit} type="button" className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Register</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartPage
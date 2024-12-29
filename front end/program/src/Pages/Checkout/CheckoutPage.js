import React, { useState } from 'react'
import CheckoutHook from '../../Hook/Checkout/checkout-hook'

const CheckoutPage = () => {


    const [userData, TotalPrice, firstname, lastname, phone, adresse, email, Loading, Errors,setOnClickChekbox,OnClickChekbox,
        onFirstNameChange, onLastNameChange, onPhoneChange, onEmailChange, onAdresseChange, handelSubmit
    ] = CheckoutHook()



    return (
        <div className='' style={{ background: 'linear-gradient(to right, #222831 45%, #222831bd , #222831bd' }} >
            <section className='container pt-3  '>
                <div className="row ">
                    <div className="col-md-8 mb-4">
                        <div className="card mb-4" style={{ background: '#EEEBEB' }}>
                            <div className="card-header py-3">
                                <h5 className="mb-0">Biling details</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="">
                                                <label className="form-label" for="form6Example1">First name</label>
                                                <input value={firstname} disabled={firstname ? true : false} onChange={onFirstNameChange} type="text" id="form6Example1" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="">
                                                <label className="form-label" for="form6Example2">Last name</label>
                                                <input value={lastname} disabled={lastname ? true : false} onChange={onLastNameChange} type="text" id="form6Example2" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Text input -->
                                    <div className=" mb-4">
                                        <label className="form-label" for="form6Example3">Company name</label>
                                        <input type="text" id="form6Example3" className="form-control" />
                                    </div> */}

                                    {/* <!-- Text input --> */}
                                    <div className=" mb-4">
                                        <label className="form-label" for="form6Example4">Address</label>
                                        <input value={adresse} onChange={onAdresseChange} placeholder="zipcode / city / street / BuildingNum" type="text" id="form6Example4" className="form-control" />
                                        <p className='text-danger'> {Errors ? Errors.adresseErr : null} </p>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className=" mb-4">
                                        <label className="form-label" for="form6Example5">Email</label>
                                        <input value={email} disabled={email ? true : false} onChange={onEmailChange} type="email" id="form6Example5" className="form-control" />
                                    </div>

                                    {/* <!-- Number input --> */}
                                    <div className=" mb-4">
                                        <label className="form-label" for="form6Example6">Phone</label>
                                        <input value={phone}  onChange={onPhoneChange} type="number" id="form6Example6" className="form-control" />
                                        <p className='text-danger'> {Errors ? Errors.phoneErr : null} </p>
                                    </div>

                                    <hr className="my-4" />

                                    {/* <div className="form-check">
                                        <label className="form-check-label" for="checkoutForm1">
                                            Shipping address is the same as my billing address
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="checkoutForm1" />

                                    </div> */}

                                    <div className="form-check mb-4">
                                        <label className="form-check-label" for="checkoutForm2">
                                            Save this information for next time
                                        </label>
                                        <input className="form-check-input" type="checkbox" value="" id="checkoutForm2" checked />

                                    </div>

                                    <hr className="my-4" />

                                    <h5 className="mb-4">Payment</h5>

                                    <div className="form-check">
                                        <label className="form-check-label" for="checkoutForm3">
                                            Credit card
                                        </label>
                                        <input onClick={()=> setOnClickChekbox(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3" />

                                    </div>

                                    <div className="form-check mb-3">
                                        <label className="form-check-label" for="checkoutForm4">
                                            cash on delivery
                                        </label>
                                        <input onClick={()=> setOnClickChekbox(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" checked />

                                    </div>
{/* 
                                    <div className="form-check mb-4">
                                        <label className="form-check-label" for="checkoutForm5">
                                            Paypal
                                        </label>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" />
                                    </div> */}

                                    <div className="row mb-4" style={{display: OnClickChekbox? 'block':'none' , transition:'7s'}}>
                                        <div className="col">
                                            <div className="">
                                                <label className="form-label" for="formNameOnCard">Name on card</label>
                                                <input type="text" id="formNameOnCard" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="">
                                                <label className="form-label" for="formCardNumber">Credit card number</label>
                                                <input type="text" id="formCardNumber" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4" style={{display: OnClickChekbox? 'block':'none' , transition:'3s'}}>
                                        <div className="col-3">
                                            <div className="">
                                                <label className="form-label" for="formExpiration">Expiration</label>
                                                <input type="text" id="formExpiration" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="">
                                                <label className="form-label" for="formCVV">CVV</label>
                                                <input type="text" id="formCVV" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={handelSubmit} className="btn btn-primary btn-lg btn-block" type="submit">
                                        Continue to checkout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card mb-4 " style={{ color: '#E28B15' }}>
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li style={{ color: '#E28B15' }} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$ {TotalPrice ? TotalPrice : 0} </span>
                                    </li>
                                    <li style={{ color: '#E28B15' }} className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>$ {TotalPrice ? TotalPrice : 0} </strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckoutPage
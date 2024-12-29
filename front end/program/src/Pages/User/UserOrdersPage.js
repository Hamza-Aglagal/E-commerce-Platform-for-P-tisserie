import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/utility/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { ALlOrder } from '../../Redux/Actions/OrderAction'
import CardOrderLine from '../../Components/OrderLine/CardOrderLine'
import { ALlOrdersLine } from '../../Redux/Actions/LigneOrderAction'

const UserOrdersPage = () => {


    const dispatch = useDispatch()

    const [TotalPrice, setTotalPrice] = useState(0)

    // get dat user in localStorage 
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))


    useEffect(() => {
        dispatch(ALlOrder(userData.id))
    }, [])

    //  get all orders
    const AllOrders = useSelector(state => state.OrderRed.AllOrderClient)
    // console.log('AllOrder :', AllOrders ? AllOrders : null)


    useEffect(() => {
        if (AllOrders.length != 0) {
            dispatch(ALlOrdersLine(AllOrders[0].id))
        }
    }, [AllOrders])


    const AllOrdersLine = useSelector(state => state.LignOrderRed.AllOrdersLine)
    // console.log('All_Order_Line :', AllOrdersLine ? AllOrdersLine : null)

    return (
        <div>
            <NavBar  bg={'linear-gradient(to right, #222831 45%, #222831bd , #222831bd )'} />

            <div className='' style={{ background: 'linear-gradient(to right, #a8728a 35%, #a8725a , #a8725a )' }}>

                {
                    AllOrders ?
                        AllOrders.map((item) =>

                            <section class="h-100 gradient-custom">
                                <div class="container py-5 h-100">
                                    <div class="row d-flex justify-content-center align-items-center h-100">
                                        <div class="col-lg-10 col-xl-8">
                                            <div class="card" style={{ borderRadius: '10px' }}>
                                                <div class="card-header px-4 py-5">
                                                    <h5 class="text-muted mb-0">Thanks for your Order, <span style={{ color: '#a8729a' }}> {item.firstname} </span>!</h5>
                                                </div>
                                                <div class="card-body p-4">

                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <p class="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Receipt</p>
                                                        {/* <p class="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p> */}
                                                    </div>


                                                    {/* -------------order line------------------ */}
                                                    {
                                                        AllOrdersLine.length != 0 ?
                                                            (AllOrdersLine.map((item) =>
                                                                <CardOrderLine setTotalPrice={setTotalPrice} item={item} />
                                                            )) : ''
                                                    }

                                                    {/* -----------------end order line----------------- */}




                                                    <div class="d-flex justify-content-between pt-2">
                                                        <p class="fw-bold mb-0">Order Details</p>
                                                        <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> MAD {TotalPrice} </p>
                                                    </div>

                                                    <div class="d-flex justify-content-between pt-2">
                                                        <p class="text-muted mb-0">Invoice Number : {item.id} </p>
                                                        {/* <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p> */}
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                        <p class="text-muted mb-0">Invoice Date : {item.created_at} </p>
                                                        {/* <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p> */}
                                                    </div>

                                                    <div class="d-flex justify-content-between mb-5">
                                                        {/* <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p> */}
                                                        <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
                                                    </div>
                                                </div>
                                                <div class="card-footer border-0 px-4 py-5"
                                                    style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                                    <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                                        paid: <span class="h2 mb-0 ms-2">MAD {TotalPrice} </span></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        ) : 'null'
                }


            </div>

        </div>
    )
}

export default UserOrdersPage
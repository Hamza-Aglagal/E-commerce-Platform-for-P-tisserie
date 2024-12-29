import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALlOrdersLine } from '../../Redux/Actions/LigneOrderAction'


const CardOrderLine = ({ item, setTotalPrice }) => {

    // const dispatch = useDispatch()

    useEffect(() => {
        setTotalPrice(prev => prev + (item.Qnt * item.price) )
    }, [])
    


    return (
        <div class="card shadow-0 border mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <img src={`http://127.0.0.1:8000/products/${item.product && item.product.img}`}
                            class="img-fluid" alt="Phone" />
                    </div>
                    <div class="col-md-3 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0"> {item.product&& item.product.name} </p>
                    </div>
                    {/* <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">White</p>
                    </div> */}
                    {/* <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">Capacity: 64GB</p>
                    </div> */}
                    <div class="col-md-3 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">Qty:  {item.Qnt} </p>
                    </div>
                    <div class="col-md-3  text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">MAD {item.Qnt * item.price} </p>
                    </div>
                </div>
                <hr class="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: '1' }} />
                <div class="row d-flex align-items-center">
                    <div class="col-md-2">
                        <p class="text-muted mb-0 small">Track Order</p>
                    </div>
                    <div class="col-md-10">
                        <div class="progress" style={{ height: '6px', borderRadius: '16px' }}>
                            <div class="progress-bar" role="progressbar"
                                style={{ width: '65%', borderRadius: '16px', backgroundColor: '#a8729a' }} aria-valuenow="65"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-around mb-1">
                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                            <p class="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardOrderLine
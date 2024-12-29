import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../Redux/Actions/CartAction'
import { RELOAD_NAV } from '../../Redux/types'
import { Alert } from 'react-bootstrap'

const AddToCartHook = (id_Product) => {

    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)
    const [Client, setClient] = useState()


    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            setClient(JSON.parse(localStorage.getItem("user")))
        }
    }, [])


    // get info Cart 
    const Cart = useSelector(state => state.CartRed.AddToCart)
    console.log('Cart : ', Cart)

    // Add to cart  handel 
    const AddToCartHandel = async (e) => {
        e.preventDefault()
        setLoading(true)


        await dispatch(AddToCart({
            "product_id": id_Product,
            "client_id": Client.id
        }))

        // await localStorage.setItem('Cart', JSON.stringify(Client.data))

        setLoading(false)

    }

    useEffect(() => {
        if (Loading === false) {
            if (Cart) {
                if (Cart.message === "Product added to cart.") {
                    // console.log('is added to cart....',Cart)
                    localStorage.setItem('NumofcartItems', Cart.NumofcartItems)
                    dispatch({ type: RELOAD_NAV })
                }
            }
            // setTimeout(() => setIspress(false), 1000)
        }
    }, [Loading])

    return [AddToCartHandel]

}

export default AddToCartHook
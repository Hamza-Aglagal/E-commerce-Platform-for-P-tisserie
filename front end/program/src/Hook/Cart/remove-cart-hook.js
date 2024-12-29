import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart, ShowCart } from '../../Redux/Actions/CartAction'
import { RELOAD_NAV } from '../../Redux/types'


const RemoveCartHook = (cart_id) => {



    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)
    const [Client, setClient] = useState()





    // get data user 
    useEffect(() => {

        // get data user in localStorage 
        if (localStorage.getItem("user") != null) {
            setClient(JSON.parse(localStorage.getItem("user")))
        }

    }, [])


    //  get info Cart 
    const Cart_Remove = useSelector(state => state.CartRed.RemoveFromCart)
    // console.log('Cart_Remove :', Cart_Remove)

    // handel remove 
    const RemoveCartHandel = async (e) => {
        e.preventDefault()

        setLoading(true)

        await dispatch(RemoveFromCart({
            "cart_id": cart_id,
            "Client_id": Client.id
        }))

        setLoading(false)

    }


    useEffect(() => {
        if (Loading === false) {
            if (Cart_Remove) {
                if (Cart_Remove.message === "Product removed from cart.") {
                    console.log('is removed from cart....')
                    localStorage.setItem('NumofcartItems', Cart_Remove.NumofcartItems)
                    setTimeout(() => {
                        dispatch({ type: RELOAD_NAV })
                    }, 1000);
                }
            }
        }
    }, [Loading])


    return [RemoveCartHandel]
}

export default RemoveCartHook
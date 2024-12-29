import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowCart } from '../../Redux/Actions/CartAction'
import { useNavigate } from 'react-router-dom'
import { SUBMIT } from '../../Redux/types'



const ShowCartHook = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)
    const [Client, setClient] = useState()

    const [Delivery, setDelivery] = useState('Standard')

    const [Cart, setCart] = useState()
    const [TotalPriceAllPro, setTotalPriceAllPro] = useState()

    // get info Cart 
    const data = useSelector(state => state.CartRed.ShowCart)

    useEffect(() => {
        setCart(data)
    }, [data])

    // console.log('Carts : ', Cart)

    const ReloadItemsCart = useSelector(state => state.CartRed.Reload)



    // get data user 
    useEffect(() => {

        // get data user in localStorage 
        if (localStorage.getItem("user") != null) {
            setClient(JSON.parse(localStorage.getItem("user")))
        }

    }, [])


    // on Get Info Cart Client in database 
    useEffect(() => {
        if (Client) {
            // Add to cart  handel 
            const ShowCartHandel = async () => {
                setLoading(true)

                await dispatch(ShowCart({
                    "client_id": Client.id
                }))

                setLoading(false)

            }
            ShowCartHandel()
        }
    }, [Client])


    // Reload Data
    useEffect(() => {
        if (Client) {
            // Add to cart  handel 
            const ShowCartHandel = async () => {
                setLoading(true)

                await dispatch(ShowCart({
                    "client_id": Client.id
                }))
                setLoading(false)
            }
            ShowCartHandel()
        }
    }, [ReloadItemsCart])




    // Handel Submit 
    const handelSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        if (Cart.cart.length != 0) {
            localStorage.setItem('TotalPrice', TotalPriceAllPro)
            localStorage.setItem('Delivery', Delivery)
            dispatch({ type: SUBMIT })
            setTimeout(() => {
                navigate('/order/paymethod')
            }, 1000);
        } else {
            console.log('your Cart is Vide !!!')
        }
        setLoading(false)
    }


    // go back 
    const GoBack = () => {
        navigate('/')
    }



    // useEffect(() => {
    //     if (Loading === false) {
    //         if (Cart) {
    //             console.log('Items cart....', Cart.cart)
    //             // if (Cart.message === "Product added to cart.") {
    //             //     console.log('is added to cart....')
    //             // }
    //         }
    //         // setTimeout(() => setIspress(false), 1000)
    //     }
    // }, [Loading])

    return [Loading, Cart ,Delivery ,setDelivery, GoBack, setTotalPriceAllPro, handelSubmit]

}

export default ShowCartHook
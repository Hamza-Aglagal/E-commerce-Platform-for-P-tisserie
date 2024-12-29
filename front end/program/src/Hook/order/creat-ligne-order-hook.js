import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NewLigneOrder } from '../../Redux/Actions/LigneOrderAction'

const CreateLigneOrderHook = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)


    const [Client, setClient] = useState()
    const [QntProductItem, setQntProductItem] = useState()
    const [TotalPriceProItem, setTotalPriceProItem] = useState()
    const [id_Product, setidProduct] = useState()


    // get data user 
    useEffect(() => {

        // get data user in localStorage 
        if (localStorage.getItem("user") != null) {
            setClient(JSON.parse(localStorage.getItem("user")))
        }

    }, [])




    //  get info Ligne_Order 
    const NewLignOrder = useSelector(state => state.LignOrderRed.NewLigneOrder)
    const OnSubmit = useSelector(state => state.LignOrderRed.onSubmit)
    console.log('OnSubmit :', OnSubmit)
    console.log('NewLignOrder :', NewLignOrder)



    // Send Data 
    if (OnSubmit === true) {
        const sentData = async () => {
            setLoading(true)
            console.log( "product_id", id_Product)
            console.log("client_id", Client.id )
            console.log("Qnt", QntProductItem)
            console.log("totalPrice", TotalPriceProItem)

            // await dispatch(NewLigneOrder({
            //     "product_id": id_Product,
            //     "client_id": Client.id ,
            //     "Qnt": QntProductItem,
            //     "totalPrice": TotalPriceProItem
            // }))

            setLoading(false)
        }

        sentData()
        return
    }


    // useEffect(() => {
    //     if (Loading === false) {
    //         // if (Cart_Remove) {
    //         //     if (Cart_Remove.message === "Product removed from cart.") {
    //         //         console.log('is removed from cart....')
    //         //         localStorage.setItem('NumofcartItems', Cart_Remove.NumofcartItems)
    //         //         setTimeout(() => {
    //         //             dispatch({ type: RELOAD_NAV })
    //         //         }, 1000);
    //         //     }
    //         // }
    //     }
    // }, [Loading])


    return [Loading ,setQntProductItem,setTotalPriceProItem,setidProduct]





}

export default CreateLigneOrderHook
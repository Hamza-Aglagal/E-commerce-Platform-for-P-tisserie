import React, { useEffect } from 'react'
import { getAllProduct } from '../../Redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'



const GetProductHomeHook = () => {

    const dispatch = useDispatch()

    const DataProductHome = useSelector(state => state.ProductsRed.Products)
    // const Loading = useSelector(state => state.ProductsRed.Loading)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    return [DataProductHome]

}

export default GetProductHomeHook
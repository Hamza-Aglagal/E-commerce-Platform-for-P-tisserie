import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../Redux/Actions/ProductAction'



const GetAllProductAdminHook = () => {

    const dispatch = useDispatch()

    const DataProduct = useSelector(state => state.ProductsRed.Products)
    const Loading = useSelector(state => state.ProductsRed.Loading)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])




    return [DataProduct, Loading]


}

export default GetAllProductAdminHook
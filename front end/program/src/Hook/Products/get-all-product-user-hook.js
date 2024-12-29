import React, { useEffect } from 'react'
import { getAllProductUser } from '../../Redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

const GetAllProductClientHook = () => {

    const dispatch = useDispatch()

    const DataProductClient = useSelector(state => state.ProductsRed.AllProClient)
    const ProductOfCategory = useSelector(state => state.ProductsRed.AllProductOfCat)

    // console.log('ProductOfCategory :', ProductOfCategory)


    const Loading = useSelector(state => state.ProductsRed.Loading)

    useEffect(() => {
        dispatch(getAllProductUser())
    }, [])




    return [DataProductClient,ProductOfCategory, Loading]

}

export default GetAllProductClientHook
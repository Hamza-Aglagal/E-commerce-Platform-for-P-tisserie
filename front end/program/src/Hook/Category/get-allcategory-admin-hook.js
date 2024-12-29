import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../Redux/Actions/categoryAction'


const GetAllCategoryAdminHook = () => {

    const dispatch = useDispatch()

    const DataCategoryAdmin = useSelector(state => state.Categories.Category)
    console.log('-----',DataCategoryAdmin)
    const Loading = useSelector(state => state.Categories.Loading)

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    return [DataCategoryAdmin, Loading]


}

export default GetAllCategoryAdminHook
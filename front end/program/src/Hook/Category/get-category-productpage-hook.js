import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../Redux/Actions/categoryAction'



const GetCategoryProductPageHook = () => {


  const dispatch = useDispatch()

  const Data = useSelector(state => state.Categories.Category)
  const Loading = useSelector(state => state.Categories.Loading)

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  return [Data,Loading]

}

export default GetCategoryProductPageHook
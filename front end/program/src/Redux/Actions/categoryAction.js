import { ADD_Category, DELETE_CATEGORY, GET_ERROR, Get_All_Category } from "../types";
import {useGetdata} from "../../hooks/useGetdata";
import {useInsertDataWithImg} from '../../hooks/useInsertData'
import axios from "axios";
import { useDeleteData } from "../../hooks/useDeleteData";



// get All category 
export const getAllCategory = () => async (dispatch) => {
    try {
        const res = await useGetdata('/api/allCategory')
        dispatch({ type: Get_All_Category, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error.response.data.message })
    }
}


// add category 
export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg('/api/addCategory',formData)
        console.log('t----------t',res.data)
        dispatch({ type: ADD_Category, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error })
    }
}

// delete Category 
export const deleteCategory = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/deleteCategory/${id}`)
        // console.log('----------',res)
        dispatch({ type: DELETE_CATEGORY, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error })
    }
}

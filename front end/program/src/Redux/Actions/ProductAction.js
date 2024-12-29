import { useGetdata } from "../../hooks/useGetdata"
import { useInsertDataWithImg } from "../../hooks/useInsertData"
import { useDeleteData } from "../../hooks/useDeleteData"
import { useUpdateDataWithImg } from "../../hooks/useUpdateData"
import { ADD_Product, DELETE_PRODUCT, GET_ALL_PRODUCT_CLIENT, GET_ERROR, GET_ONE_Product, Get_All_Product, PRO_OF_CATEGORY, SEARCH8PRODUCT, UPDATE_Product } from "../types"




// get All Product Admin
export const getAllProduct = () => async (dispatch) => {
    try {
        const res = await useGetdata('api/allProduct')
        // console.log(res.data)
        dispatch({ type: Get_All_Product, payload: res.data.data })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error.response.data.message })
    }
}

// get All Product user
export const getAllProductUser = () => async (dispatch) => {
    try {
        const res = await useGetdata('api/allProduct')
        // console.log(res.data)
        dispatch({ type: GET_ALL_PRODUCT_CLIENT, payload: res.data.data })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error.response.data.message })
    }
}

// get All Product usof Category
export const ProductOfCategory = (Category) => async (dispatch) => {
    // console.log('category :',Category)
    dispatch({ type: PRO_OF_CATEGORY, payload: Category })
}

// Search Product
export const SearchProduct = (word) => async (dispatch) => {
    // console.log('category :',Category)
    dispatch({ type: SEARCH8PRODUCT, payload: word })
}

// get One Product
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetdata(`/api/editProduct/${id}`)
        // console.log('------',res.data)
        dispatch({ type: GET_ONE_Product, payload: res.data.data })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error.response.data.message })
    }
}



// create Product 
export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg('/api/addProduct', formData)
        console.log('----------', res)
        dispatch({ type: ADD_Product, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error })
    }
}


// delete Product 
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/deleteProduct/${id}`)
        console.log('----------', res)
        dispatch({ type: DELETE_PRODUCT, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error })
    }
}

// update Product 
export const updateProduct = (formData, id) => async (dispatch) => {
    try {
        const res = await useUpdateDataWithImg(`/api/updateProduct/${id}`, formData)
        console.log('----------', res)
        dispatch({ type: UPDATE_Product, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: GET_ERROR, payload: "Error :" + error })
    }
}

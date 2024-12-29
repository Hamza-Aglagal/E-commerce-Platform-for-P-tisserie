import { UseInsertData } from "../../hooks/useInsertData"
import { ADD_QNT_TO_CART, ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART } from "../types"




// Add To Cart 
export const AddToCart = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/api/addToCart', formData)
        // console.log('t----------t', res.data)
        dispatch({ type: ADD_TO_CART, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: ADD_TO_CART, payload: "Error :" + error })
    }
}

// Add Qnt To Cart 
export const UpdateQnt = (id,formData) => async (dispatch) => {
    try {
        const res = await UseInsertData(`/api/updateQntCart/${id}`, formData)
        console.log('t----------t', res.data)
        // dispatch({ type: ADD_QNT_TO_CART, payload: res.data, Loading: true })
    } catch (error) {
        // dispatch({ type: ADD_QNT_TO_CART, payload: "Error :" + error })
    }
}

// Show Cart 
export const ShowCart = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/api/showCart', formData)
        // console.log('t----------t', res.data)
        dispatch({ type: SHOW_CART, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: SHOW_CART, payload: "Error :" + error })
    }
}


// Remove Cart 
export const RemoveFromCart = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/api/removeFromCart', formData)
        // console.log('t----------t', res.data)
        dispatch({ type: REMOVE_FROM_CART, payload: res.data, Loading: true })
    } catch (error) {
        dispatch({ type: REMOVE_FROM_CART, payload: "Error :" + error })
    }
}

import { UseGetdata, useGetdata } from "../../hooks/useGetdata"
import { UseInsertData } from "../../hooks/useInsertData"
import { ALL_ORDER, NEW_ORDER } from "../types"





// Create  Order 
export const NewOrder = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/api/newOrder', formData)
        // console.log('t----------t', res.data)
        dispatch({ type: NEW_ORDER, payload: res.data })
    } catch (error) {
        dispatch({ type: NEW_ORDER, payload: "Error :" + error })
    }
}


// Get All Order 
export const ALlOrder = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/api/allOrder/${id}`)
        // console.log('t----------t', res.data)
        dispatch({ type: ALL_ORDER, payload: res.data.data })
    } catch (error) {
        dispatch({ type: ALL_ORDER, payload: "Error :" + error })
    }
}
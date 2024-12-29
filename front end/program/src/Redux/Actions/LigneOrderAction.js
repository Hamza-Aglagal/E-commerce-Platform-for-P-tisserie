import { UseGetdata } from "../../hooks/useGetdata"
import { UseInsertData } from "../../hooks/useInsertData"
import { All_ORDERS_LINE, NEW_LIGNE_ORDER } from "../types"





// Create Ligne Order 
export const NewLigneOrder = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/api/createLigneCmd', formData)
        // console.log('t----------t', res.data)
        dispatch({ type: NEW_LIGNE_ORDER, payload: res.data })
    } catch (error) {
        dispatch({ type: NEW_LIGNE_ORDER, payload: "Error :" + error })
    }
}


// All  Orders Line 
export const ALlOrdersLine = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/api/allOrderLine/${id}`)
        // console.log('t----------t', res.data)
        dispatch({ type: All_ORDERS_LINE, payload: res.data.data })
    } catch (error) {
        dispatch({ type: All_ORDERS_LINE, payload: "Error :" + error })
    }
}
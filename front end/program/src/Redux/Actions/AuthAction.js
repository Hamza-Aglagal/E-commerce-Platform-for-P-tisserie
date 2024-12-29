import { UseInsertData, useInsertDataWithImg } from "../../hooks/useInsertData"
import { FORGET_PASSWORD, LOGIN_USER, NEW_CLIENT, RESET_PASSWORD, UPDATE_CLIENT, VERIFY_CODE } from "../types"




// new User 
export const createNewUser = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('/api/register',formData)
        // console.log('t----------t',res.data)
        dispatch({ type: NEW_CLIENT, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: NEW_CLIENT, payload: error.response })
    }
}

// update User 
export const updateUser = (formData , id) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImg(`/api/updateClient/${id}`,formData)
        // console.log('t----------t',res.data)
        dispatch({ type: UPDATE_CLIENT, payload: response, Loading: true })
    } catch (error) {
        dispatch({ type: UPDATE_CLIENT, payload: error.response })
    }
}


// Login User 
export const LoginUser = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('/api/login',formData)
        // console.log('t----------t',response.data)
        dispatch({ type: LOGIN_USER, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: LOGIN_USER, payload: error.response })
    }
}




// Forget password
export const ForgetPassword = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('/api/forgetPassword',formData)
        // console.log('t----------t',response.data)
        dispatch({ type: FORGET_PASSWORD, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: FORGET_PASSWORD, payload: error.response })
    }
}


// Verify Code
export const VerifyCode = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('/api/verifyCode',formData)
        // console.log('t----------t',response.data)
        dispatch({ type: VERIFY_CODE, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: VERIFY_CODE, payload: error.response })
    }
}

// Reset Password
export const ResetPassword = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('/api/resetPassword',formData)
        // console.log('t----------t',response.data)
        dispatch({ type: RESET_PASSWORD, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: RESET_PASSWORD, payload: error.response })
    }
}
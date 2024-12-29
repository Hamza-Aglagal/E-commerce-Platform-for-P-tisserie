import { FORGET_PASSWORD, LOGIN_USER, NEW_CLIENT, RESET_PASSWORD, UPDATE_CLIENT, VERIFY_CODE } from "../types"

const initialState = {
    NewUser: null,
    UpdateClient: null,
    LoginUser: null,
    ForgetPassword: null,
    VerifyCode: null,
    Access: false,
    ResetPassword: null,
    Loading: true,
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case NEW_CLIENT:
            return { ...state, NewUser: payload, Loading: false }

        case UPDATE_CLIENT:
            return { ...state, UpdateClient: payload, Loading: false }

        case LOGIN_USER:
            return { ...state, LoginUser: payload, Loading: false }

        case FORGET_PASSWORD:
            return { ...state, ForgetPassword: payload, Loading: false }

        case VERIFY_CODE:
            return { ...state, VerifyCode: payload, Access: true, Loading: false }

        case RESET_PASSWORD:
            if (payload.message === "Success") {
                return { ...state, ResetPassword: payload, Access: false, Loading: false }
            } else {
                return { ...state, ResetPassword: payload, Loading: false }
            }

        default:
            return state
    }
}


export default AuthReducer
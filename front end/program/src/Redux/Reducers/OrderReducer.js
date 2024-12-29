import { ALL_ORDER, NEW_ORDER, SUBMIT } from "../types"

const initialState = {
    NewOrder: [],
    AllOrderClient: [],
    onSubmit: false
}

const NewOrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case NEW_ORDER:
            return { ...state, NewOrder: payload }

        case ALL_ORDER:
            return { ...state, AllOrderClient: payload }

        case SUBMIT:
            return { ...state, onSubmit: true }

        default:
            return state
    }
}

export default NewOrderReducer

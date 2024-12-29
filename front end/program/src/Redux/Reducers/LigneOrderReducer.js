import { All_ORDERS_LINE, NEW_LIGNE_ORDER, SUBMIT } from "../types"

const initialState = {
    NewLigneOrder: [],
    AllOrdersLine: [],
    onSubmit: false
}

const LignOrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case NEW_LIGNE_ORDER:
            return { ...state, NewLigneOrder: payload }

        case All_ORDERS_LINE:
            return { ...state, AllOrdersLine: payload }

        case SUBMIT:
            return { ...state, onSubmit: true }

        default:
            return state
    }
}

export default LignOrderReducer

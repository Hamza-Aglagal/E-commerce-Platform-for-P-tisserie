import { ADD_QNT_TO_CART, ADD_TO_CART, RELOAD_NAV, REMOVE_FROM_CART, SHOW_CART } from "../types"

const initialState = {
  AddToCart: null,
  ShowCart: null,
  RemoveFromCart: null,
  Loading: true,
  Reload: false
}

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_TO_CART:
      return { ...state, AddToCart: payload, Loading: false }

    case SHOW_CART:
      return { ...state, ShowCart: payload, Loading: false }

    case REMOVE_FROM_CART:
      return { ...state, RemoveFromCart: payload, Loading: false }

    case RELOAD_NAV:
      return { ...state, Reload: !state.Reload }

    default:
      return state
  }
}


export default CartReducer
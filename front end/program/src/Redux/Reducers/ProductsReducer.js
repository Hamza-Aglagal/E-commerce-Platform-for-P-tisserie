import { ADD_Product, DELETE_PRODUCT, GET_ALL_PRODUCT_CLIENT, GET_ONE_Product, Get_All_Product, PRO_OF_CATEGORY, SEARCH8PRODUCT, UPDATE_Product } from "../types"


const initialState = {
  Products: [],
  AllProClient: [],
  OneProduct: [],
  AllProductOfCat: [],
  AddProduct: [],
  ProductDeleted: [],
  ProductUpdate: [],
  Loading: true,
}


const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case Get_All_Product:
      return { ...state, Products: payload, Loading: false }

    case GET_ALL_PRODUCT_CLIENT:
      return { ...state, AllProClient: payload, Loading: false }

    case PRO_OF_CATEGORY:
      const data = state.AllProClient.filter(item => item.category === payload)
      return { ...state, AllProductOfCat: data, Loading: false }

    case 'All':
      return { ...state, AllProductOfCat: [], Loading: false }

    case GET_ONE_Product:
      return { ...state, OneProduct: payload, Loading: false }

    case ADD_Product:
      return { ...state, AddProduct: payload, Loading: false }

    case DELETE_PRODUCT:
      return { ...state, ProductDeleted: payload, Loading: false }

    case UPDATE_Product:
      return { ...state, ProductUpdate: payload, Loading: false }

    case SEARCH8PRODUCT:
      const dataSearch = state.AllProClient.filter(item => item.category === payload)
      return { ...state, AllProductOfCat: dataSearch, Loading: false }

    default:
      return state
  }
}


export default ProductReducer
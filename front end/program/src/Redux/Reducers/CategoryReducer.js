import { ADD_Category, DELETE_CATEGORY, GET_ERROR, Get_All_Category } from "../types"


const initialState = {
    Category: [],
    AddCategory: [],
    DeleteCategory: [],
    Loading: true,
}


const CategoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case Get_All_Category:
            return { ...state, Category: payload, Loading: false }

        case ADD_Category:
            return { ...state, AddCategory: payload, Loading: false }

        case DELETE_CATEGORY:
            return { ...state, DeleteCategory: payload, Loading: false }

        default:
            return state
    }
}


export default CategoryReducer
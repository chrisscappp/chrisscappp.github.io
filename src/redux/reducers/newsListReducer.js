import { GET_NEWSLIST, ADD_NEWS, SET_IS_ERROR } from "../constants/types";

const defaultState = {
    newsList: [],
    addNews: {},
    isError: false
}

export const newsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_NEWSLIST :
            return {
                ...state,
                newsList: action.payload
            }
        case ADD_NEWS :
            return {
                ...state,
                newsList: [...state.newsList, action.payload],
            }
        case SET_IS_ERROR :
            return {
                ...state,
                isError: !state.isError
            }
        default :
            return state
    }
}
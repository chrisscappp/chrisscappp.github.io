import { GET_COURSES, SET_IS_ERROR } from "../constants/types";

const defaultState = {
    courses: [],
    isError: false
}

export const coursesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_COURSES :
            return {
                ...state,
                courses: action.payload
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
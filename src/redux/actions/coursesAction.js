import { GET_COURSES, SET_IS_ERROR } from "../constants/types"
import { getData } from '../../api/get/getData'
import { ENV, courses } from '../../api/urls'

const setCourses = (payload) => {
    return {
        type: GET_COURSES,
        payload
    }
}

const setIsError = () => {
    return {
        type: SET_IS_ERROR
    }
}

export const getCourses = () => {
    return (dispatch) => {
        getData(`${ENV}${courses}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setCourses(response.data))
                }
            })
            .catch((err) => {
                dispatch(setIsError())
                console.error('PIECE DA', err)
            })
    }
}
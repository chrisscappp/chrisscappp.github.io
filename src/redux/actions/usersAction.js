import { GET_USERS, ADD_USER, SET_IS_ERROR, LOGIN_USER } from "../constants/types";
import { getData } from '../../api/get/getData'
import { ENV, users } from '../../api/urls'

const setUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const addUserAction = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const loginUserAction = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

const setIsError = () => {
    return {
        type: SET_IS_ERROR
    }
}

export const getUsers = () => {
    return (dispatch) => {
        getData(`${ENV}${users}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setUsers(response.data))
                }
            })
            .catch((err) => {
                dispatch(setIsError())
                console.error('PIECE DA', err)
            })
    }
}
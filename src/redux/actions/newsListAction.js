import { GET_NEWSLIST, ADD_NEWS, SET_IS_ERROR } from "../constants/types";
import { getData } from '../../api/get/getData'
import { ENV, newsList } from '../../api/urls'

const setNewsList = (payload) => {
    return {
        type: GET_NEWSLIST,
        payload
    }
}

export const addNews = (payload) => {
    return {
        type: ADD_NEWS,
        payload
    }
}

const setIsError = () => {
    return {
        type: SET_IS_ERROR
    }
}

export const getNewsList = () => {
    return (dispatch) => {
        getData(`${ENV}${newsList}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setNewsList(response.data))
                }
            })
            .catch((err) => {
                dispatch(setIsError())
                console.error('PIECE DA', err)
            })
    }
}
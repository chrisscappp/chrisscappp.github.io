import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getNewsList } from '../redux/actions/newsListAction'

export function useNewsList() {
    
    const dispatch = useDispatch()
    const {newsList, isError} = useSelector((({newsListReducer}) => newsListReducer))
    const [newsArr, setNewsArr] = React.useState([])

    React.useEffect(() => {
        dispatch(getNewsList())
    }, [])

    React.useEffect(() => {
        if (isError) {
            console.log("EEORR", isError)
        } else {
            setNewsArr(newsList)
        }
    }, [newsList])

    return { newsArr, isError }
}
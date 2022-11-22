import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUserAction } from '../redux/actions/usersAction'

export function useLogUser() {

    const dispatch = useDispatch()
    const {logUser, isError} = useSelector((({usersReducer}) => usersReducer))
    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        dispatch(loginUserAction(JSON.parse(localStorage.getItem('user'))))
    }, [])

    React.useEffect(() => {
        if (isError) {
            console.log("EEORR", isError)
        } else {
            setUser(logUser)
        }
    }, [user])

    return { user, isError }

}
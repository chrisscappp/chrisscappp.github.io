import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../redux/actions/usersAction'

export function useUsers() {

    const dispatch = useDispatch()
    const {users, isError} = useSelector((({usersReducer}) => usersReducer))
    const [usersArr, setUsersArr] = React.useState([])

    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    React.useEffect(() => {
        if (isError) {
            console.log("EEORR", isError)
        } else {
            setUsersArr(users)
        }
    }, [users])

    return { usersArr, isError }

}
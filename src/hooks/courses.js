import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCourses } from '../redux/actions/coursesAction'

export function useCourses() {

    const dispatch = useDispatch()
    const {courses, isError} = useSelector((({coursesReducer}) => coursesReducer))
    const [coursesArr, setCoursesArr] = React.useState([])

    React.useEffect(() => {
        dispatch(getCourses())
    }, [])

    React.useEffect(() => {
        if (isError) {
            console.log("EEORR", isError)
        } else {
            setCoursesArr(courses)
        }
    }, [courses])

    return { coursesArr, isError }

}
import React from 'react'
import Course from '../../components/Course/Course'
import { Link } from 'react-router-dom'
import { useCourses } from '../../hooks/courses'
import './style.css'

const RegPage = () => {

    const { coursesArr, isError } = useCourses()

    return (
        <>
            <div className = "courses__wrapper">
                <div className = "courses__wrapper-container">
                    {
                        coursesArr?.map((item) => {
                            return (
                                <Link 
                                    key = {item.id} 
                                    to = {`/profile/${item.id}`} 
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Course
                                        item = {item}
                                        onClick = {window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default React.memo(RegPage)
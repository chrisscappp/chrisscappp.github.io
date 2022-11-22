import React from 'react'
import { course_wrapper_container_items_number } from './styles'
import { numbers } from '../../utils/numbers'
import './style.css'

const Course = ({item}) => {

    return (
        <>
            <div className = "course__wrapper-container__items">
                <div style = {course_wrapper_container_items_number}>
                    <p className = "course__wrapper-container__items-number__text">
                        {numbers[item.id - 1]}
                    </p>
                </div>
                <p className = "course__wrapper-container__items-title">
                    {item.title}
                </p>
            </div>
        </>
    )
}

export default React.memo(Course)
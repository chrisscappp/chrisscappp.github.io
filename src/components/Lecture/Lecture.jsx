import React from 'react'
import './style.css'

const Lecture = ({item}) => {


    return (
        <>
            <p className = "lectures__container-title">
                {item.id}. {item.title}
            </p>
            <div className = "lectures__container-status"></div>
        </>
    )
}

export default React.memo(Lecture)
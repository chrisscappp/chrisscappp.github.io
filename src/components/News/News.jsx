import React from 'react'

import './style.css'

const News = ({item}) => {
    return (
        <>
                <div className = "news__container">
                    <div className = "news__container-text-container">
                        <div className = "news__container-text-container__title">
                            <p>{item.title}</p>
                        </div>
                        <div className = "news__container-text-container__description">
                            <p>{item.description}</p>
                        </div>
                        <div className = "news__container-text-container__more">
                            <a href = {item.urlPath}>
                                Подробнее...
                            </a>
                        </div>
                    </div>
                    <div className = "news__container-photo-container">
                            
                    </div>
                </div>
        </>
    )
}

export default React.memo(News)
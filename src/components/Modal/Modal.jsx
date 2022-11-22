import React from 'react'
import './style.css'

const Modal = ({children}) => {
    return (
        <>
            <div className = "auth-form__wrapper">
                <form className = "auth-form__container">
                    {children}
                </form>
            </div>
        </>
    )
}

export default React.memo(Modal)
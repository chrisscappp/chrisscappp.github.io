import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            Страницы с таким именем не существует... 
            The page with this name is not found...
            <NavLink to="/">
                <button>
                    На главную
                </button>
            </NavLink>
        </>
    )
}

export default React.memo(ErrorPage)
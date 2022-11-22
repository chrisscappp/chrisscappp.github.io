import React from 'react'
import Typography from '@mui/material/Typography';
import RegModal from '../RegModal/RegModal'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './style.css'

const Modal = ({props}) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [showPasswordFlag, setShowPasswordFlag] = React.useState(true)

    const setRegUser = (event) => {
        event.preventDefault()
        setOpen(true)
    }

    const setAuthUser = () => {
        let findUser = {}
        findUser = props.usersArr.find(item => {
            return (item.login === props.login && item.password === props.password)
        })
        if (findUser) {
            localStorage.setItem('user', JSON.stringify(findUser))
            window.location.reload();
            props.setAuthDirty(false)
        } else {
            props.setAuthDirty(true)
        }
    }

    const showPass = () => {
        let input = document.getElementById('inputPassword')
        setShowPasswordFlag(!showPasswordFlag)
        if (showPasswordFlag) {
            input.type = "text"
        } else {
            input.type = "password"
        }
    }

    return (
        <>
                    <div className = "input-container">
                        {<div className = "input-error__text">{props.authError}</div>}
                        <div className="form-group">
                            {(props.loginDirty && props.loginError) && <div className = "input-error__text">{props.loginError}</div>}
                            <input 
                                onChange = {(event) => props.handleChangeLogin(event.target.value)}
                                onBlur = {event => props.blurHandler(event)}
                                placeholder = "Логин..." 
                                name = "login"
                                type = "login" 
                                className="form-control input-enter-form" 
                                id="inputLogin"
                            ></input>
                        </div>
                        <div className="form-group">
                            {(props.passwordDirty && props.passwordError) && <div className = "input-error__text">{props.passwordError}</div>}
                            <label className = "label password__label">
                                <input 
                                    onChange = {(event) => props.handleChangePassword(event.target.value)}
                                    onBlur = {event => props.blurHandler(event)}
                                    placeholder = "Пароль..." 
                                    name = "password"
                                    type = "password" 
                                    className="form-control input-enter-form input-password" 
                                    id = "inputPassword"
                                ></input>
                                <div className = "password__btn" onClick = {showPass}>
                                   
                                   {
                                        showPasswordFlag
                                    ?
                                        <VisibilityIcon/>
                                        
                                    :
                                        <VisibilityOffIcon/> 
                                   }
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className = "enter-modal-footer">
                            <Typography
                                disabled = {!props.formValid}
                                variant="h6"
                                noWrap
                                component="div"
                                className = "enter__text"
                                onClick = {setAuthUser}
                            >
                                Войти
                            </Typography>
                        <button className = "reg-btn" onClick={(event) => setRegUser(event)}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                className = "reg_text"
                                type = "submit"
                            >
                                Регистрация
                            </Typography>
                        </button>
                    </div>
                    <RegModal 
                        open = {open}
                        handleClose = {handleClose}
                        props = {props}
                    />
        </>
    )
}

export default React.memo(Modal)
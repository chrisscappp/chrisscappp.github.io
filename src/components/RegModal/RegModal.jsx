import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { styleForModal } from './style'
import { addUserAction } from '../../redux/actions/usersAction'
import { sendData } from '../../api/send/sendData'
import './style.css'

const RegModal = ({open, handleClose, props}) => {

    const [nameDirty, setNameDirty] = React.useState(false)
    const [loginDirty, setLoginDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [repeatPasswordDirty, setRepeatPasswordDirty] = React.useState(false)

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "regFullName" :
                setNameDirty(true)
                break
            case "regLogin" :
                setLoginDirty(true)
                break
            case "regPassword" :
                setPasswordDirty(true)
                break
            case "repeatPassword" :
                setRepeatPasswordDirty(true)
        }
    }

    const setRegUser = () => {
        let data = {
            name: props.name,
            login: props.login,
            password: props.password,
            completedLecture: [],
        }
        let findUser = {}
        findUser = props.usersArr.find(item => {
            return (item.login === props.login)
        })
        if (findUser) {
            alert(`Пользователь с логином ${props.login} уже существует`)
        } else {
            if (props.password === props.repeatPassword) {
                addUserAction(data)
                sendData(data)
                props.usersArr.push(data)
                alert('Пользователь успешно зарегестрирован!')
                //window.location.reload();
                handleClose()
            } else {
                alert('Пароли не совпадают')
            }
        }
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={styleForModal}>
                        <Typography 
                            id="transition-modal-title" 
                            variant="h5" 
                            component="h2"
                            style={{display: 'flex', justifyContent: 'center'}}
                        >
                            Регистрация
                        </Typography>
                        <div className = "input-container-reg-from">
                        <div className="form-group">
                            {(nameDirty && props.nameError) && <div className = "reg-input-error__text">{props.nameError}</div>}
                            <input 
                                onBlur = {event => blurHandler(event)}
                                onChange = {(event) => props.handleChangeName(event.target.value)}
                                placeholder = "ФИО... (Иванов Иван Иванович)" 
                                name = "regFullName"
                                type = "regFullName" 
                                className="form-control input-reg-form" 
                                id="inputName"></input>
                        </div>
                        <div className="form-group">
                            {(loginDirty && props.loginError) && <div className = "reg-input-error__text">{props.loginError}</div>}
                            <input 
                                onBlur = {event => blurHandler(event)}
                                onChange = {(event) => props.handleChangeLogin(event.target.value)}
                                placeholder = "Логин..." 
                                name = "regLogin"
                                type = "regLogin" 
                                className="form-control input-reg-form" 
                                id = "inputLogin"></input>
                        </div>
                        <div className="form-group">
                            {(passwordDirty && props.passwordError) && <div className = "reg-input-error__text">{props.passwordError}</div>}
                            <input 
                                onBlur = {event => blurHandler(event)}
                                onChange = {(event) => props.handleChangePassword(event.target.value)}
                                placeholder = "Пароль..." 
                                name = "regPassword"
                                type = "regPassword" 
                                className="form-control input-reg-form input-password" 
                                id = "inputPassword"></input>
                        </div>
                        <div className="form-group">
                            {(repeatPasswordDirty && props.repeatPasswordError) && <div className = "reg-input-error__text">{props.repeatPasswordError}</div>}
                            <input 
                                onBlur = {event => blurHandler(event)}
                                onChange = {(event) => props.handleChangeRepeatPassword(event.target.value)}
                                placeholder = "Повторите пароль..." 
                                name = "repeatPassword"
                                type = "repeatPassword" 
                                className="form-control input-reg-form input-password" 
                                id = "inputRepeatPassword"></input>
                        </div>
                    </div>
                    <div className = "reg-form__reg-button-container">
                        <button disabled = {!props.formValid} className = "btn btn-primary reg-form__reg-button" onClick = {setRegUser}>
                            Зарегестрироваться
                        </button>
                    </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default React.memo(RegModal)
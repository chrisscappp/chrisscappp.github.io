import React from 'react'
import AppBarMenu from '../../components/AppBarMenu/AppBarMenu'
import Modal from '../../components/Modal/Modal'
import AuthForm from '../../components/AuthForm/AuthForm'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import HomeMenu from '../../components/HomeMenu/HomeMenu'
import { useUsers } from '../../hooks/users'
import { useLogUser } from '../../hooks/logUser'

const SiteHeader = () => {

    const [name, setName] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [repeatPassword, setRepeatPassword] = React.useState("")

    const [nameError, setNameError] = React.useState("Имя не может быть пустым")
    const [loginError, setLoginError] = React.useState("Логин не может быть пустым")
    const [passwordError, setPasswordError] = React.useState("Пароль не может быть пустым")
    const [repeatPasswordError, setRepeatPasswordError] = React.useState("Повторите введённый пароль")

    const [nameDirty, setNameDirty] = React.useState(false)
    const [loginDirty, setLoginDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [repeatPasswordDirty, setRepeatPasswordDirty] = React.useState(false)
    const [authDirty, setAuthDirty] = React.useState(false)

    const [formValid, setFormValid] = React.useState(false)

    const { usersArr, isError } = useUsers()
    const { user } = useLogUser()

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "fullName" :
                setNameDirty(true)
                break
            case "login" :
                setLoginDirty(true)
                break
            case "password" :
                setPasswordDirty(true)
                break
            case "fullName" :
                setRepeatPasswordDirty(true)
        }
    }

    React.useEffect(() => {
        if (loginError || passwordError || repeatPasswordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError, repeatPasswordError, nameError])

    const handleChangeName = (title) => {
        setName(title)
        let re = /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/
        if (!re.test(String(title))) {
            setNameError("Некорректное ФИО")
        } else {
            setNameError("")
        }
    }

    const handleChangeLogin = (title) => {
        setLogin(title)
        if (title) {
            setLoginError("")
        } else {
            setLoginError("Логин не может быть пустым")
        }
    }

    const handleChangePassword = (title) => {
        setPassword(title)
        if (title) {
            setPasswordError("")
        } else {
            setPasswordError("Пароль не может быть пустым")
        }
    }

    const handleChangeRepeatPassword = (title) => {
        setRepeatPassword(title)
        if (title) {
            setRepeatPasswordError("")
        } else {
            setRepeatPasswordError("Повторите введённый пароль")
        }
    }

    const props = {
        handleChangeName: handleChangeName,
        handleChangeLogin: handleChangeLogin,
        handleChangePassword: handleChangePassword,
        handleChangeRepeatPassword: handleChangeRepeatPassword,
        loginDirty: loginDirty,
        loginError: loginError,
        passwordDirty: passwordDirty,
        passwordError: passwordError,
        nameDirty: nameDirty,
        nameError: nameError,
        blurHandler: blurHandler,
        repeatPasswordError: repeatPasswordError,
        name: name,
        login: login,
        password: password,
        repeatPassword: repeatPassword,
        repeatPasswordDirty: repeatPasswordDirty,
        setAuthDirty: setAuthDirty,
        authError: authDirty ? "Неверный логин или пароль" : "",
        formValid: formValid,
        usersArr: usersArr,
    }

    return (
        <>
            {
                isError 
            ?
                <h3>Технические шоколадки :(</h3>
            :
                <>
                    <AppBarMenu>
                        <HomeMenu/>
                    </AppBarMenu>
                    <Modal>
                        {
                            user
                        ?
                            <ProfileForm
                                fillingButton = {"Профиль"}
                                pagePath = {"/profile"}
                            />
                        :
                            <AuthForm 
                                props = {props}
                            /> 
                        }
                    </Modal>
                </>
            }
        </>
    )
}

export default React.memo(SiteHeader)
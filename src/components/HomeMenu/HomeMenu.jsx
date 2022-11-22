import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom'
import {
    loginAndSignUpBoxStyle,
    loginAndSignUpBoxStyle__Text,
    logoDailyBoxStyle,
    logoDailyBoxStyle__Text
} from './styles'
import './styles.css'
import '@fontsource/roboto/400.css';

const HomeMenu = () => {
    return (
        <>
                <Box style = {loginAndSignUpBoxStyle}>
                        <NavLink
                            style = {loginAndSignUpBoxStyle__Text}
                            to = "/"
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                className = "loginAndSignUpBoxStyle__TextLogin"
                            >
                                Главная
                            </Typography>
                        </NavLink>
                        <NavLink 
                            to = "/contacts"
                        >
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    style = {loginAndSignUpBoxStyle__Text}
                                    className = "loginAndSignUpBoxStyle__btn_TextSignUp"
                                >
                                    Контакты
                                </Typography>
                        </NavLink>
                        <NavLink 
                            to = "/about"
                        >
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    style = {loginAndSignUpBoxStyle__Text}
                                    className = "loginAndSignUpBoxStyle__btn_TextSignUp"
                                >
                                    О нас
                                </Typography>
                        </NavLink>
                    </Box>
                    <Box style = {logoDailyBoxStyle}>
                        <img src = "../../assets/logo.png"></img>
                    </Box>
        </>
    )
}

export default React.memo(HomeMenu)
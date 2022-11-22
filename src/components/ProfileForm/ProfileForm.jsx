import React from 'react'
import Typography from '@mui/material/Typography';
import Spinner from '../Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ProfileForm = ({fillingButton, pagePath}) => {

    const navigate = useNavigate()

    let surname;
    let name;
    let patronymic;
    const [govno, setGovno] = React.useState(JSON.parse(localStorage.getItem('user')))

    if (govno !== null) {
        surname = govno.name.split(' ')[0]
        name = govno.name.split(' ')[1]
        patronymic = govno.name.split(' ')[2]
    }

    const logOut = () => {
        localStorage.removeItem('user')
        navigate("/")
        window.location.reload();
    }
    
    return (
        <>
            {
                govno !== null
            ?
                <>
                    <div className = "profile-name__wrapper">
                        <div className = "profile-name__container">
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                className = "profile-name_container-text"
                            >
                                {surname}
                            </Typography>
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                className = "profile-name_container-text"
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                className = "profile-name_container-text"
                            >
                                {patronymic}
                            </Typography>
                        </div>
                    </div>
                    <div className = "profile-modal-footer">
                        <button className = "profile-modal-btn" onClick = {() => navigate(pagePath)}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                className = "reg_text"
                            >
                                {fillingButton}
                            </Typography>
                        </button>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            className = "enter__text"
                            onClick = {logOut}
                        >
                            Выйти
                        </Typography>
                    </div>
                </>
            :
                <div style = {{opacity: '70%', display: 'flex', justifyContent: 'center'}}>
                    <Spinner/>
                </div>
            }
        </>
    )
}

export default React.memo(ProfileForm)
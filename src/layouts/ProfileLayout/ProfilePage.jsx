import React from 'react'
import AppBarMenu from '../../components/AppBarMenu/AppBarMenu'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import Modal from '../../components/Modal/Modal'
import CoursesPage from '../CoursesLayout/CoursesPage'
import { useLogUser } from '../../hooks/logUser'

const ProfilePage = () => {

    const { user } = useLogUser()

    return (
        <>
            <AppBarMenu>
                <ProfileMenu/>
            </AppBarMenu>
            <Modal>
                <ProfileForm 
                    fillingButton = {"Главная"}
                    pagePath = {"/"}
                />
            </Modal>
            <CoursesPage/>
        </>
    )
}

export default React.memo(ProfilePage)
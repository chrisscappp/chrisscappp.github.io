import React from 'react'
import AppBarMenu from '../../components/AppBarMenu/AppBarMenu'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import Modal from '../../components/Modal/Modal'

const SchedulePage = () => {
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
            На этой странице будет расписание лекций
        </>
    )
}

export default React.memo(SchedulePage)
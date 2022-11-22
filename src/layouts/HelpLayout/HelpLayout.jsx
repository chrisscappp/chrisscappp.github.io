import React from 'react'
import AppBarMenu from '../../components/AppBarMenu/AppBarMenu'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import Modal from '../../components/Modal/Modal'

const HelpPage = () => {
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
            Страница будет отправлять нас в чат тех поддрежки в вк (ссылка)
        </>
    )
}

export default React.memo(HelpPage)
import React from 'react'
import SiteHeader from '../../components/SiteHeader/SiteHeader'
import './style.css'

const ContactsPage = () => {
    return (
        <>
            <SiteHeader/>
            <h3>На этой странице будут ссылки на группу вк, телеграмм и номер телефона</h3>
        </>
    )
}

export default React.memo(ContactsPage)
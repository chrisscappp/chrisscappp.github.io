import React from 'react'
import SiteHeader from '../../components/SiteHeader/SiteHeader'

const AboutPage = () => {
    return (
        <>
            <SiteHeader/>
            <h3>На этой странице будет информация об "ЭШЕЛОНЕ". С фотографиями и текстом</h3>
        </>
    )
}

export default React.memo(AboutPage)
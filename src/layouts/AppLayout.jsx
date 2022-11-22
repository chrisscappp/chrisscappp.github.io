import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './HomeLayout/HomePage'
import ProfilePage from './ProfileLayout/ProfilePage'
import RegPage from './CoursesLayout/CoursesPage'
import ContactsPage from './ContactsLayout/ContactsPage'
import AboutPage from './AboutLayout/AboutPage'
import SchedulePage from './ScheduleLayout/SchedulePage'
import TestsPage from './TestsLayout/TestsPage'
import HelpPage from './HelpLayout/HelpLayout'
import ErrorPage from './ErrorPage/ErrorPage'
import Lectures from '../components/Lectures/Lectures'
import { useLogUser } from '../hooks/logUser'

const AppLayout = () => {

    const { user } = useLogUser()

    return (
        <>
            <Routes>
                <Route exact path = "/" element = { <HomePage/> }/>
                <Route path = "/contacts" element = { <ContactsPage/> }/>
                <Route path = "/about" element = { <AboutPage/> }/>
                
                {
                    user !== null
                ?
                    <>
                        <Route path = "/profile" element = { <ProfilePage/> }/>
                        <Route path = "/profile/:id" element = { <Lectures/> }/>
                        <Route path = "/schedule" element = { <SchedulePage/> }/>
                        <Route path = "/tests" element = { <TestsPage/> }/>
                        <Route path = "/support" element = { <HelpPage/> }/>
                    </>
                :
                    null
                }
                <Route path = "/registration" element = { <RegPage/> }/>
                <Route path = "*" element = { <ErrorPage/> }/>
            </Routes>
        </>
    )
}

export default React.memo(AppLayout)
import React from 'react'
import AppBarMenu from '../AppBarMenu/AppBarMenu'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import ProfileForm from '../ProfileForm/ProfileForm'
import Modal from '../Modal/Modal'
import Course from '../Course/Course'
import Lecture from '../Lecture/Lecture'
import { useParams } from 'react-router-dom'
import { useCourses } from '../../hooks/courses'
import './style.css'

const Lectures = () => {

    const { id } = useParams()

    const { coursesArr, isError } = useCourses()

    const [course, setCourse] = React.useState({})
    const [govno, setGovno] = React.useState([])

    React.useEffect(() => {
        setCourse(coursesArr.find(item => item.id == id))
    }, [coursesArr])

    setTimeout(() => setGovno(course.lectures), 100);

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
            <div className = "lectures__wrapper">
                <div className = "lectures__wrapper-container">
                    {
                        course
                    ?
                        <>
                            <Course
                                item = {course}
                            />
                            <div className = "lectures__container">
                                {govno?.map((item) => {
                                    return (
                                        <Lecture
                                            item = {item}
                                            key = {item.id}
                                        />
                                    )
                                })}
                            </div>
                            <div className = "lecture__footer">
                                <p className = "lecture__footer-title">Пройденных занятий: 2 / 3</p>
                            </div>
                        </>
                    :
                        null
                    }
                </div>
            </div>
        </>
    )
}

export default React.memo(Lectures)
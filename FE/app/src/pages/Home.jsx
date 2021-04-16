import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import Blink from 'react-blink-text';


export default function Home(props) {
    const history = useHistory()
    setTimeout(() => {
        history.push('/login')
    }, 4000)

    return (

        <>
            <div className="home_container">
                <div className="home_header">
                    <div >
                    <Blink color='silver' text='Attendance Management System'>Attendance Management System</Blink> 
                    </div>
                </div>

            </div>
        </>
    )
}

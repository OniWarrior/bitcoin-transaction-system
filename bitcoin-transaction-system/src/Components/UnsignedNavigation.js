import React from "react"
import { useNavigate } from "react-router"
import '../Styles/Nav.css'

const UnsignedNavigation = () => {
    const navigate = useNavigate()
    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const goLogin = (e) => {
        e.prevetDefault()
        navigate('/Login')
    }

    const goSignup = (e) => {
        e.preventDefault()
        navigate('/Signup')
    }

    return (
        <div className="nav-container">
            <div className="row-nav">
                <button className="button-home" onClick={goHome}></button>
                <button className="button-login" onClick={goLogin}></button>
                <button className="button-signup" onClick={goSignup}></button>
            </div>

        </div>
    )


}

export default UnsignedNavigation;
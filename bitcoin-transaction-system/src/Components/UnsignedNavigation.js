import React from "react"
import { useHistory } from "react-router"

const UnsignedNavigation = () => {
    const { push } = useHistory()
    const goHome = (e) => {
        e.preventDefault()
        push('/')
    }

    const goLogin = (e) => {
        e.prevetDefault()
        push('/Login')
    }

    const goSignup = (e) => {
        e.preventDefault()
        push('/Signup')
    }

    return (
        <div className="nav-container">
            <div className="row-nav">

            </div>

        </div>
    )


}
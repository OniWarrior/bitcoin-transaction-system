import React from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'
import UnsignedNavigation from './UnsignedNavigation'
import LoginFormSchema from '../FormSchemas/LoginFormSchema'
import { useValidation } from '../Hooks/useValidation.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'






const Login = (props) => {
    const navigate = useNavigate()
    const [login, errors, setLogin] = useValidation(LoginFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (event) => {
        setLogin(event, LoginFormSchema)
    }

    const handleDisabled = (e) => {
        e.preventDefault()
        if (login.email.length >= 30 && login.password.length >= 5) {
            setDisabled(() => ({
                disabled: !disabled

            }))
        }
        else {
            setDisabled(() => ({
                disabled: disabled
            }))
        }


    }




}
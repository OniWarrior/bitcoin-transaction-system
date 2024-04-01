import React from 'react'
import '../Styles/Login.css'
import { Form } from 'react-router-dom'
import LoginFormSchema from '../FormSchemas/LoginFormSchema'
import { useValidation } from '../Hooks/useValidation.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'
//TODO postLogin





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

    // TODO : const onForm Submit

    return (
        <div>
            <div className='login-container'>
                <Form className='form-container'>
                    <h2>Login</h2>

                    <label>
                        Email:
                        <input
                            id='email'
                            type='text'
                            name='email'
                            placeholder='email'
                            required
                            onChange={change}
                        />
                    </label>
                    <div className='errors'>
                        <p>{errors.email}</p>
                    </div>

                    <label>
                        Password:
                        <input
                            id='password'
                            type='password'
                            name='password'
                            placeholder='password'
                            required
                            onChange={change}
                        />
                    </label>
                    <div className='errors'>
                        <p>{errors.password}</p>
                    </div>

                    <button
                        type='submit'
                        className='log-submit'
                        disabled={handleDisabled}
                    >
                        Login
                    </button>



                </Form>
            </div>

        </div>
    )




}


export default Login

//TODO map to state
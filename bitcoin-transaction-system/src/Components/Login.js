import React from 'react'
import '../Styles/Login.css'
import { Form } from 'react-bootstrap'
import LoginFormSchema from '../FormSchemas/LoginFormSchema'
import { useLoginValidation } from '../Hooks/useLoginValidation.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'
import UnsignedNavigation from './UnsignedNavigation.js'
import { postLogin } from '../State/Actions/LoginActions.js'






const Login = (props) => {
    const navigate = useNavigate()
    const [login, errors, setLogin] = useLoginValidation(LoginFormSchema)
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

    const onFormSubmit = () => {
        props.postLogin(login, navigate)
    }

    return (
        <div>
            <UnsignedNavigation />
            <div className='login-box'>
                <div className='login-container'>
                    <Form className='form-container' onSubmitCapture={onFormSubmit}>
                        <h2>Login</h2>

                        <div className='input-group'>

                            <label className='label-login'>
                                Email:
                                <input className='email-box'
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

                            <label className='label-login'>
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

        </div>
    )




}


const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}

const mapDispatchToProps = { postLogin }



export default connect(mapStateToProps, mapDispatchToProps)(Login)


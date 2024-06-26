import React from 'react'
import '../Styles/Signup.css'
import { Form } from 'react-bootstrap'
import SignupFormSchema from '../FormSchemas/SignupFormSchema.js'
import { useSignupValidation } from '../Hooks/useSignupValidation.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'
import UnsignedNavigation from './UnsignedNavigation.js'
import { register } from '../State/Actions/SignupActions.js'





const Signup = (props) => {
    // local variables
    const navigate = useNavigate()
    const [signup, error, setSignup] = useSignupValidation(SignupFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    // handler for change in signup form
    const change = (event) => {
        setSignup(event, SignupFormSchema)
    }

    // handler for handling submit button
    const handleDisabled = (e) => {
        e.preventDefault()
        if (signup.first_name.length > 0 && signup.first_name.length <= 50 &&
            signup.last_name.length > 0 && signup.last_name.length <= 50 &&
            signup.phone_num.length >= 10 && signup.cell_num.length >= 10 &&
            signup.street_addr.length <= 20 && signup.city.length <= 20 &&
            signup.state.length <= 15 && signup.user_type &&
            signup.email.length <= 30 && signup.zip_code === 5 && signup.password.length >= 5
            && signup.password.length <= 12) {
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

    // send the values of signup and navigate to api call to
    // post signup to back end
    // In other words, register new account
    const onFormSubmit = () => {
        props.register(signup, navigate)
    }

    return (
        <div>
            <UnsignedNavigation />
            <div className='signup-box'>
                <div className='singup-container'>
                    <Form className='form-container' onSubmit={onFormSubmit}>
                        <h2>Signup</h2>

                        <div className='input-group'>
                            <label className='label-input-group' htmlFor='first_name'>
                                First Name:
                                <input className='first-name-box'
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder='first name'
                                    required
                                    onChange={change}

                                />
                            </label>

                            <div className='errors'>
                                <p>{error.first_name}</p>
                            </div>

                            <label className='label-input-group' htmlFor='last_name'>
                                Last Name:
                                <input className='last-name-box'
                                    id='last_name'
                                    type='text'
                                    name='last_name'
                                    placeholder='last name'
                                    onChange={change}
                                />

                            </label>

                            <div className='errors'>
                                <p>{error.last_name}</p>
                            </div>

                            <label className='label-input-group' htmlFor='phone_num'>
                                Phone Number:
                                <input className='phone-num-box'
                                    id='phone_num'
                                    type='text'
                                    name='phone_num'
                                    placeholder='phone number'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.phone_num}</p>
                            </div>

                            <label className='label-input-group' htmlFor='cell_num'>
                                Cell Number:
                                <input className='cell-num-box'
                                    id='cell_num'
                                    type='text'
                                    name='cell_num'
                                    placeholder='cell number'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.cell_num}</p>
                            </div>

                            <label className='label-input-group' htmlFor='email'>
                                Email:
                                <input className='email-box'
                                    id='email'
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    onChange={change}
                                />

                            </label>

                            <div className='errors'>
                                <p>{error.email}</p>
                            </div>

                            <label className='label-input-group' htmlFor='city'>
                                City:
                                <input className='city-box'
                                    id='city'
                                    type='text'
                                    name='city'
                                    placeholder='city'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.city}</p>
                            </div>

                            <label className='label-input-group' htmlFor='state'>
                                State:
                                <input className='state-box'
                                    id='state'
                                    type='text'
                                    name='state'
                                    placeholder='state'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.state}</p>
                            </div>

                            <label className='label-input-group' htmlFor='street_addr'>
                                Street Addr:
                                <input className='street-addr-box'
                                    id='street_addr'
                                    type='text'
                                    name='street_addr'
                                    placeholder='Street Address'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.street_addr}</p>
                            </div>

                            <label className='label-input-group' htmlFor='zip_code'>
                                Zip Code:
                                <input className='zip-code-box'
                                    id='zip_code'
                                    type='text'
                                    name='zip_code'
                                    placeholder='zip code'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.zip_code}</p>
                            </div>

                            <label className='label-input-group' htmlFor='user_type'>
                                Client
                                <input className='form-check-input'
                                    id='Client'
                                    type='radio'
                                    name='user_type'
                                    value='Client'
                                    onChange={change}
                                />
                            </label>

                            <label className='label-input-group' htmlFor='user_type'>
                                Trader
                                <input className='form-check-input'
                                    id='Trader'
                                    type='radio'
                                    name='user_type'
                                    value='Trader'
                                    onChange={change}
                                />
                            </label>

                            <div className='errors'>
                                <p>{error.user_type}</p>
                            </div>

                            <button
                                type='submit'
                                className='log-submit'
                                disabled={handleDisabled}

                            >
                                Register
                            </button>

                        </div>

                    </Form>

                </div>

            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        login: state.signupReducer.login,
        loading: state.signupReducer.loading,
        error: state.signupReducer.error
    }
}

const mapDispatchToProps = { register }



export default connect(mapStateToProps, mapDispatchToProps)(Signup)


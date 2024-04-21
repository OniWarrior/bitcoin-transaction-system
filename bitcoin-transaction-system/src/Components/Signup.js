import React, { useState } from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom'
import { useValidation } from '../Hooks/useValidation.js'
import SignupFormSchema from '../FormSchemas/SignupFormSchema.js'



const Signup = () => {
    // local variables
    const navigate = useNavigate()
    const [signup, error, setSignup] = useValidation(SignupFormSchema)
    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    // handler for change in signup form
    const change = (event) => {
        setSignup(event, SignupFormSchema)
    }

    // handler for handling submit button
    const handleDisabled = (e) => {
        e.preventDefault()
        if(signup.firstName.length > 0 && signup.firstName.length <= 20 &&
            signup.lastName.length > 0 && signup.lastName.length <= 20 && 
            signup.phoneNumber.length >= 10 && signup.cellNum.length >= 10 && 
            signup.streetAddress.length <= 20 && signup.city.length <= 20 && 
            signup.state.length <= 15 && signup.userType && 
            signup.email.length <= 30 && signup.password.length >= 5)
        {
            setDisabled(() => ({
                disabled: !disabled
            }))
        }
        else{
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

    return(
        <div>
            <UnsignedNavigation />
            <div className='signup-box'>
                <div className='singup-container'>
                <Form className='form-container' onSubmitCapture={onFormSubmit}>
                    <h2>Signup</h2>
                </Form>

                </div>

            </div>
        </div>
    )
}

export default Signup;
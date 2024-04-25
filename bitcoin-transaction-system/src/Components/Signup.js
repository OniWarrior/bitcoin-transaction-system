import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignupValidation } from '../Hooks/useSignupValidation.js'
import SignupFormSchema from '../FormSchemas/SignupFormSchema.js'



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
        if (signup.firstName.length > 0 && signup.firstName.length <= 20 &&
            signup.lastName.length > 0 && signup.lastName.length <= 20 &&
            signup.phoneNumber.length >= 10 && signup.cellNum.length >= 10 &&
            signup.streetAddress.length <= 20 && signup.city.length <= 20 &&
            signup.state.length <= 15 && signup.userType &&
            signup.email.length <= 30 && signup.password.length >= 5) {
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
}

export default Signup;
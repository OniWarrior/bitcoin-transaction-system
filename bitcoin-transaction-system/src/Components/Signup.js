import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        if(signup.firstName && signup.lastName && 
            signup.phoneNumber && signup.cellNum && 
            signup.streetAddress && signup.city && 
            signup.state && signup.userType && 
            signup.email && signup.password)
        {

        }
    }
}

export default Signup;
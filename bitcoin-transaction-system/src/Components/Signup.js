import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useValidation } from '../Hooks/useValidation.js'
import SignupFormSchema from '../FormSchemas/SignupFormSchema.js'



const Signup = () => {
    const navigate = useNavigate()
    const [signup, error, setSignup] = useValidation(SignupFormSchema)

    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)
}

export default Signup;
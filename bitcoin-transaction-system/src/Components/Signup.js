import React from 'react'
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const navigate = useNavigate();
    const [signup, error, setSignup] = useValidation(SignupFormSchema);
}

export default Signup;
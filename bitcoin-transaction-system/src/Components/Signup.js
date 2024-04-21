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

                    <div className='input-group'>
                        <label className='label-first-name' htmlFor='first_name'>
                           First Name:
                           <input className='first-name-box'
                              id="first_name"
                              type = "text"
                              name ="first_name"
                              placeholder='first name'
                              required
                              onChange={change}

                           /> 
                        </label>

                        <div className='errors'>
                            <p>{error.first_name}</p>
                        </div>

                        <label className='label_last_name' htmlFor='last_name'>
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

                        <label className='label-phone-num' htmlFor='phone_num'>
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
                        
                        <label className='label-cell-num' htmlFor='cell_num'>
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

                        <label className='label-email-box' htmlFor='email'>
                            Email:
                            <input className='email-box'
                               id='email'
                               type='text'
                               name='email'
                               placeholder='email'
                               onChange={change}
                               />
                               
                        </label>

                     </div>

                  </Form>

                </div>

             </div>
         </div>
    )
}

export default Signup;
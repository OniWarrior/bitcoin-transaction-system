import { useState } from 'react'
import * as yup from 'yup'

const initialValues = {
    Bitcoin_balance: '',
    Bitcoin_price: '',
    comm_type: '',
    email: '',
    password: ''
}

const initialErrors = {
    Bitcoin_balance: '',
    Bitcoin_price: '',
    comm_type: '',
    email: '',
    password: ''
}

export const useSellBitcoinValidation = (schema) =>{
    const[data, setData] = useState(initialValues)
    const[errors,setErrors] = useState(initialErrors)

    const onInputChange = (event) =>{
        const{name,value} = event.target
        yup.reach(schema, name)
        .validate(value)
        .then(()=>{
            setErrors({...errors, [name]: ""})
        })
        .catch(err=>{
            setErrors({...errors, [name]:err.errors[0]})
        })

        setData({
            ...data,
            [name]: value
        })
    };

    return [data, errors, onInputChange]
}
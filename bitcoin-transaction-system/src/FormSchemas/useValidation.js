import { useState } from 'react'
import * as yup from 'yup'


const initialValues = {
    email: '',
    password: ''
}

const initialErrors = {
    email: '',
    password: ''
}

export const useValidation = (schema) => {
    const [data, setData] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)


    const onInputchange = (event) => {
        const { name, value } = event.target

    }

}

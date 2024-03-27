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

}

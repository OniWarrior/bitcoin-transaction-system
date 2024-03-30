import * as yup from 'yup'

const SignupFormSchema = yup.object().shape({
    email: yup.string()
        .trim()
        .required("Email is required. Please fill out field")
        .email("not a valid email"),
    password: yup.string()
        .trim()
        .required("password is required. Please fill out field")
        .min(5, "A minimum of 5 characters is required for password")
})

export default SignupFormSchema;